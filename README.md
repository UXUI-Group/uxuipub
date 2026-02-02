# UXUI Pub

> 대한항공 UI/UX를 기반으로 한 모던 웹 퍼블리싱 프로젝트

[![Version](https://img.shields.io/badge/version-0.1.8-blue.svg)](https://github.com/UXUI-Group/uxuipub)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)](https://www.typescriptlang.org/)

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [디자인 토큰 시스템](#-디자인-토큰-시스템)
- [컴포넌트 목록](#-컴포넌트-목록)
- [배포](#-배포)
- [개발 가이드](#-개발-가이드)

## 🎯 프로젝트 소개

대한항공 웹사이트의 UI/UX를 재현한 모던 웹 퍼블리싱 프로젝트입니다. 재사용 가능한 컴포넌트 기반 아키텍처와 디자인 토큰 시스템을 활용하여 일관성 있고 접근성 높은 사용자 인터페이스를 구현합니다.

### 핵심 특징

- ✨ **모던 웹 기술**: Next.js 15 + React 19 + TypeScript
- 🎨 **디자인 시스템**: Design Tokens 기반의 테마 관리 (라이트/다크 모드)
- ♿ **접근성 우선**: ARIA 속성, 키보드 네비게이션, 스크린 리더 지원
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 대응
- 🧩 **컴포넌트 기반**: 재사용 가능한 모듈형 컴포넌트 아키텍처
- 🚀 **정적 사이트 생성**: GitHub Pages를 통한 빠른 배포

## 🛠 기술 스택

### Core
- **Next.js** 15.3.3 - React 프레임워크
- **React** 19.0.0 - UI 라이브러리
- **TypeScript** 5.x - 타입 안정성

### Styling
- **SCSS** - CSS 전처리기
- **CSS Variables** - 디자인 토큰 기반 테마 시스템
- **CSS Modules** - 컴포넌트별 스타일 격리

### Libraries
- **Swiper** 12.0.2 - 터치 기반 슬라이더

### Development
- **ESLint** - 코드 품질 관리
- **pnpm** - 패키지 매니저

## 📁 프로젝트 구조

```
uxuipub/
├── src/
│   ├── app/                      # Next.js 앱 디렉토리
│   │   ├── (pages)/             # 페이지 그룹
│   │   │   ├── mypage/          # 마이페이지
│   │   │   ├── subpage01/       # 서브페이지 1
│   │   │   └── subpage02/       # 서브페이지 2
│   │   ├── layout.tsx           # 루트 레이아웃
│   │   ├── page.tsx             # 홈 페이지
│   │   └── globals.scss         # 전역 스타일
│   │
│   ├── components/              # 컴포넌트 라이브러리
│   │   ├── elements/            # 기본 요소 컴포넌트
│   │   │   ├── Button/         # 버튼 컴포넌트
│   │   │   ├── Navigation/     # 네비게이션
│   │   │   ├── Quicklink/      # 퀵링크
│   │   │   └── Tabs/           # 탭 컴포넌트
│   │   │
│   │   ├── blocks/             # 블록 레벨 컴포넌트
│   │   │   ├── Card/           # 카드
│   │   │   ├── CardSwiper/     # 카드 스와이퍼
│   │   │   ├── NoticeBoard/    # 공지사항 게시판
│   │   │   └── ThemeToggle/    # 테마 전환 버튼
│   │   │
│   │   ├── layouts/            # 레이아웃 컴포넌트
│   │   │   ├── Header/         # 헤더
│   │   │   └── Footer/         # 푸터
│   │   │
│   │   └── svgs/               # SVG 아이콘 컴포넌트
│   │
│   ├── styles/                 # 스타일 시스템
│   │   ├── _tokens.scss       # 디자인 토큰 (자동 생성)
│   │   ├── reset.scss         # CSS 리셋
│   │   └── variables.scss     # SCSS 변수
│   │
│   ├── images/                # 이미지 에셋
│   ├── config.ts              # 설정 파일
│   └── ...
│
├── scripts/
│   └── build-tokens.js        # 디자인 토큰 빌드 스크립트
│
├── public/                    # 정적 파일
├── tokens.json               # 디자인 토큰 정의
├── package.json
└── README.md
```

### 컴포넌트 계층 구조

```
Elements (기본 요소)
  ↓
Blocks (조합된 블록)
  ↓
Layouts (페이지 레이아웃)
  ↓
Pages (실제 페이지)
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 20.x 이상
- pnpm 8.x 이상 (권장)

### 설치

```bash
# 저장소 클론
git clone https://github.com/UXUI-Group/uxuipub.git
cd uxuipub

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (http://localhost:3000)
pnpm dev
```

### 빌드

```bash
# 프로덕션 빌드
pnpm build

# 빌드 결과 실행
pnpm start
```

### 디자인 토큰 빌드

```bash
# tokens.json → _tokens.scss 변환
pnpm run tokens
```

## 🎨 디자인 토큰 시스템

디자인 토큰은 `tokens.json`에 정의되어 있으며, 빌드 스크립트를 통해 SCSS 변수로 자동 변환됩니다.

### 토큰 구조

```json
{
  "KE_DarkMode/Light": {
    "Color": {
      "text": {
        "Primary": { "value": "#051766", "type": "color" }
      },
      "background": {
        "Primary-darkblue": { "value": "#051766", "type": "color" }
      }
    },
    "Spacing": {
      "16": { "value": "1.6rem", "type": "dimension" }
    },
    "Radius": {
      "12": { "value": "1.2rem", "type": "dimension" }
    }
  },
  "KE_DarkMode/Dark": { /* 다크 모드 토큰 */ }
}
```

### 토큰 사용 예시

```scss
// 자동 생성된 CSS 변수 사용
.button {
  background-color: var(--color-background-primary-darkblue);
  color: var(--color-text-inverse);
  border-radius: var(--radius-12);
  padding: var(--spacing-12) var(--spacing-24);
}

// 다크 모드는 자동으로 적용됨
[data-theme="dark"] .button {
  // 다크 모드 토큰이 자동으로 오버라이드
}
```

### 테마 전환

```typescript
// 다크 모드 활성화
document.documentElement.setAttribute('data-theme', 'dark');

// 라이트 모드 활성화
document.documentElement.setAttribute('data-theme', 'light');
```

## 🧩 컴포넌트 목록

### Elements (기본 요소)
- **Button** - 버튼 컴포넌트
- **Navigation** - 네비게이션 메뉴
- **Quicklink** - 퀵링크 그룹
- **Tabs** - 탭 컴포넌트

### Blocks (블록)
- **Card** - 카드 컴포넌트
- **CardSwiper** - 카드 슬라이더
- **NoticeBoard** - 공지사항 게시판
- **ThemeToggle** - 테마 전환 버튼

### Layouts (레이아웃)
- **Header** - 헤더
- **Footer** - 푸터

### SVGs (아이콘)
- AppStoreDownIcon, ArrowLeftIcon, ArrowRightIcon, ClassIcon, DarkModeIcon, DateIcon, EventIcon, FacebookIcon, FaqIcon, GooglePlayDownIcon, InstagramIcon, KoreanAirLogo, KoreanAirLogoIcon, LightModeIcon, MenuIcon, MobileKoreanAirLogo, PassengerIcon, QuestionMark, SearchIcon, SignUpIcon, SkyTeamLogo, SwapIcon, TwitterIcon, YoutubeIcon

## 🌐 배포

### GitHub Pages

프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

**배포 URL**: `https://uxui-group.github.io/uxuipub/`

### 배포 프로세스

1. 코드를 `main` 브랜치에 푸시
2. GitHub Actions가 자동으로 빌드 실행
3. `out/` 디렉토리가 `gh-pages` 브랜치에 배포

### 로컬 빌드 테스트

```bash
# 정적 빌드 생성
pnpm build

# out 디렉토리 확인
ls -la out/
```

## 📝 개발 가이드

### 코딩 컨벤션

1. **TypeScript**: 모든 컴포넌트는 타입을 명시
2. **SCSS Modules**: 컴포넌트별 스타일 격리
3. **CSS Variables**: 디자인 토큰 우선 사용
4. **접근성**: ARIA 속성 및 시맨틱 HTML 사용

### 새 컴포넌트 추가

```bash
src/components/
└── elements/
    └── NewComponent/
        ├── NewComponent.tsx      # 컴포넌트 로직
        ├── NewComponent.types.ts # 타입 정의
        ├── NewComponent.scss     # 스타일
        └── index.ts              # 익스포트
```

### 접근성 체크리스트

- [ ] 키보드 네비게이션 지원
- [ ] ARIA 레이블 추가
- [ ] 색상 대비 비율 4.5:1 이상
- [ ] 포커스 인디케이터 표시
- [ ] 스크린 리더 테스트

### 린트 및 포맷

```bash
# ESLint 실행
pnpm lint

# 타입 체크
pnpm build
```

## 📄 라이선스

이 프로젝트는 학습 및 포트폴리오 목적으로 제작되었습니다.

## 🙏 제작

**제작**: UXUI Group  
**최종 업데이트**: 2025-11-15 (v0.1.8)
