# Changelog

모든 주요 변경사항은 이 파일에 기록됩니다.

## [0.1.0] - 2025-06-15

### 추가

- 초기 프로젝트 설정
- Next.js 정적 페이지 빌드 구현
- GitHub Pages 배포 설정

[0.1.0]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.0

## [0.1.1] - 2025-06-15

### 수정

- 배포된 정적 작업물에 이미지 노출 되도록 이미지 경로 수정

[0.1.1]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.1

## [0.1.2] - 2025-06-16

### 추가

- 기본 폴더 트리 구조 추가

[0.1.2]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.2

## [0.1.3] - 2025-06-16

### 수정

- 빌드 오류 수정
- header에서 사용하지 않는 onLogoClick 삭제

[0.1.3]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.3

## [0.1.4] - 2025-09-30

### 추가

- 라이트/다크 모드 테스트 ThemeToggle 컴포넌트 추가
- Next.js Image 태그 사용, background-image 사용 시 css 변수 사용

[0.1.4]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.4

## [0.1.5] - 2025-11-10

### 추가

- footer, notice-board, tabs, quicklink, cardSwiper, header
- home 페이지에 불필요한 코드 삭제

[0.1.5]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.5

## [0.1.6] - 2025-11-11

### 추가

- Korean Air 브랜드 파비콘 구현
  - 동그란 배경 디자인 적용
  - 다크모드 자동 감지 및 색상 반전 지원
  - 라이트 모드: 흰색 배경 + 브랜드 블루 (#0D3674)
  - 다크 모드: 어두운 배경 + 흰색 로고
- KoreanAirLogoIcon 컴포넌트 추가 (40x40 아이콘 버전)
- 다크모드 테마 전환 시스템 구현
  - localStorage 기반 사용자 테마 설정 저장
  - 시스템 테마 자동 감지
  - suppressHydrationWarning을 통한 SSR 깜빡임 방지
- Korean Air 브랜드 이미지 추가 (A_PC_NEW_CI_ko.png)

### 수정

- 사이트 타이틀을 '대한항공'으로 변경
- 메타데이터에 파비콘 설정 최적화 (SVG 우선)
- 기존 favicon.ico 제거하여 SVG 파비콘 우선 적용
- Header 레이아웃 및 스타일 개선
- NoticeBoard 컴포넌트 스타일 업데이트
- CardSwiper 컴포넌트 스타일 개선
- Tabs 컴포넌트 스타일 업데이트 (core, type_a)
- 글로벌 스타일 및 홈페이지 스타일 개선

[0.1.6]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.6

## [0.1.7] - 2025-11-12

### 추가

- 메인 페이지 모티프 이미지 적용
  - PC, 태블릿, 모바일 반응형 이미지 지원

### 수정

- 접근성 개선
  - 키보드 네비게이션 지원 강화
  - ARIA 속성 추가 및 최적화
- 공지사항 배경 디자인 제거
- 퀵링크 모바일 레이아웃 개선
- 컨테이너 사이즈 최적화
- 경고 문구 제거 및 코드 정리
- 전반적인 디자인 개선 및 최종 수정

[0.1.7]: https://github.com/UXUI-Group/uxuipub/releases/tag/v0.1.7
