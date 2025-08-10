#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 파일 경로 설정
const tokensPath = path.join(__dirname, '../tokens.json');
const outputPath = path.join(__dirname, '../src/styles/_tokens.scss');

/**
 * 토큰 이름에서 제어 문자를 제거하고 정리
 * 예: "\bDark-alpha" -> "Dark-alpha"
 * 예: "\tBase" -> "Base"
 */
function cleanTokenName(name) {
  return name
    .replace(/[\x00-\x1F\x7F]/g, '') // 모든 제어 문자 제거 (백스페이스, 탭, 개행 등)
    .replace(/^\s+|\s+$/g, '') // 앞뒤 공백 제거
    .trim();
}

/**
 * 토큰 이름을 CSS 변수명으로 변환
 * 예: "Primary-darkblue" -> "primary-darkblue"
 * 예: "Primary_fixed" -> "primary-fixed"
 */
function formatTokenName(name) {
  return cleanTokenName(name) // 먼저 제어 문자 정리
    .replace(/_/g, '-') // 언더스코어를 하이픈으로 변환
    .replace(/([a-z])([A-Z])/g, '$1-$2') // 카멜케이스를 케밥케이스로 변환
    .toLowerCase()
    .replace(/--+/g, '-') // 연속 하이픈을 하나로
    .replace(/^-+/, '') // 시작 하이픈 제거
    .replace(/-+$/, ''); // 끝 하이픈 제거
}

/**
 * 색상 카테고리명을 CSS 변수 접두사로 변환
 */
function formatCategoryName(category) {
  return cleanTokenName(category) // 제어 문자 정리
    .toLowerCase()
    .replace(/\s+/g, '-');
}

/**
 * SCSS 파일 헤더 생성
 */
function generateHeader() {
  return `// ===================================================================
// 디자인 토큰 (Design Tokens)
// tokens.json에서 자동 생성됨
// 생성 시각: ${new Date().toLocaleString('ko-KR')}
// ===================================================================

`;
}

/**
 * 라이트 모드 토큰 생성
 */
function generateLightModeTokens(lightTokens) {
  let scss = ':root {\n';
  scss += '  // ===================================================================\n';
  scss += '  // Light Mode Tokens (기본값)\n';
  scss += '  // ===================================================================\n\n';

  // Color 토큰 처리
  if (lightTokens.Color) {
    const colorCategories = lightTokens.Color;

    Object.entries(colorCategories).forEach(([category, tokens]) => {
      scss += `  // ${category.charAt(0).toUpperCase() + category.slice(1)} Colors\n`;

      Object.entries(tokens).forEach(([tokenName, tokenData]) => {
        const cssVarName = `--color-${formatCategoryName(category)}-${formatTokenName(tokenName)}`;
        scss += `  ${cssVarName}: ${tokenData.value};\n`;
      });

      scss += '\n';
    });
  }

  // Spacing 토큰 처리
  if (lightTokens.Spacing) {
    scss += '  // Spacing Tokens\n';
    Object.entries(lightTokens.Spacing).forEach(([tokenName, tokenData]) => {
      const cssVarName = `--spacing-${tokenName}`;
      scss += `  ${cssVarName}: ${tokenData.value};\n`;
    });
    scss += '\n';
  }

  // Radius 토큰 처리
  if (lightTokens.Radius) {
    scss += '  // Radius Tokens\n';
    Object.entries(lightTokens.Radius).forEach(([tokenName, tokenData]) => {
      const cssVarName = tokenName === '999999' ? '--radius-round' : `--radius-${tokenName}`;
      scss += `  ${cssVarName}: ${tokenData.value};\n`;
    });
    scss += '\n';
  }

  // Switch 토큰 처리
  if (lightTokens.Switch) {
    scss += '  // Switch Tokens\n';
    Object.entries(lightTokens.Switch).forEach(([tokenName, tokenData]) => {
      const cssVarName = `--switch-${formatTokenName(tokenName)}`;
      scss += `  ${cssVarName}: ${tokenData.value};\n`;
    });
    scss += '\n';
  }

  scss += '}\n\n';
  return scss;
}

/**
 * 다크 모드 토큰 생성
 */
function generateDarkModeTokens(darkTokens) {
  let scss = '// ===================================================================\n';
  scss += '// Dark Mode Tokens\n';
  scss += '// ===================================================================\n';
  scss += '[data-theme="dark"] {\n';

  // Color 토큰 처리
  if (darkTokens.Color) {
    const colorCategories = darkTokens.Color;

    Object.entries(colorCategories).forEach(([category, tokens]) => {
      scss += `  // ${category.charAt(0).toUpperCase() + category.slice(1)} Colors - Dark Mode\n`;

      Object.entries(tokens).forEach(([tokenName, tokenData]) => {
        const cssVarName = `--color-${formatCategoryName(category)}-${formatTokenName(tokenName)}`;
        scss += `  ${cssVarName}: ${tokenData.value};\n`;
      });

      scss += '\n';
    });
  }

  // Switch 토큰 처리
  if (darkTokens.Switch) {
    scss += '  // Switch Tokens - Dark Mode\n';
    Object.entries(darkTokens.Switch).forEach(([tokenName, tokenData]) => {
      const cssVarName = `--switch-${formatTokenName(tokenName)}`;
      scss += `  ${cssVarName}: ${tokenData.value};\n`;
    });
    scss += '\n';
  }

  scss += '}\n\n';
  return scss;
}

/**
 * 사용 예시 생성
 */
function generateUsageExamples() {
  return `// ===================================================================
// 사용 예시 (Usage Examples)
// ===================================================================

/*
// CSS에서 사용법:
.button {
  background-color: var(--color-background-primary-darkblue);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-border-primary-darkblue);
  border-radius: var(--radius-12);
  padding: var(--spacing-12) var(--spacing-24);
}

// SCSS에서 사용법:
.card {
  background: var(--color-background-inverse);
  border: 1px solid var(--color-border-base);
  border-radius: var(--radius-20);
  padding: var(--spacing-16);
  
  &:hover {
    background: var(--color-background-base);
  }
}

// 다크 모드 활성화:
// HTML 요소에 data-theme="dark" 속성 추가
// <html data-theme="dark"> 또는 <body data-theme="dark">
*/
`;
}

/**
 * 메인 함수
 */
function buildTokens() {
  try {
    console.log('🎨 디자인 토큰 변환 시작...');

    // tokens.json 파일 읽기
    if (!fs.existsSync(tokensPath)) {
      throw new Error(`tokens.json 파일을 찾을 수 없습니다: ${tokensPath}`);
    }

    const tokensData = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

    // 라이트/다크 모드 토큰 추출
    const lightTokens = tokensData['KE_DarkMode/Light'];
    const darkTokens = tokensData['KE_DarkMode/Dark'];

    if (!lightTokens) {
      throw new Error('라이트 모드 토큰을 찾을 수 없습니다.');
    }

    if (!darkTokens) {
      throw new Error('다크 모드 토큰을 찾을 수 없습니다.');
    }

    // SCSS 내용 생성
    let scssContent = '';
    scssContent += generateHeader();
    scssContent += generateLightModeTokens(lightTokens);
    scssContent += generateDarkModeTokens(darkTokens);
    scssContent += generateUsageExamples();

    // 출력 디렉토리 생성
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // _tokens.scss 파일 쓰기
    fs.writeFileSync(outputPath, scssContent, 'utf8');

    console.log('✅ 디자인 토큰 변환 완료!');
    console.log(`📁 출력 파일: ${outputPath}`);
    console.log(`📊 처리된 토큰:`);
    console.log(`   - 라이트 모드: ${countTokens(lightTokens)}개`);
    console.log(`   - 다크 모드: ${countTokens(darkTokens)}개`);
  } catch (error) {
    console.error('❌ 디자인 토큰 변환 실패:', error.message);
    process.exit(1);
  }
}

/**
 * 토큰 개수 계산
 */
function countTokens(tokens) {
  let count = 0;

  function countRecursive(obj) {
    for (const key in obj) {
      if (obj[key] && typeof obj[key] === 'object') {
        if (obj[key].value !== undefined) {
          count++;
        } else {
          countRecursive(obj[key]);
        }
      }
    }
  }

  countRecursive(tokens);
  return count;
}

// 스크립트 실행
if (require.main === module) {
  buildTokens();
}

module.exports = { buildTokens };
