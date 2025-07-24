# Global Styles 사용법

## 개요

`globals.scss` 파일은 프로젝트의 전역 스타일을 정의하며, 각 컴포넌트에서 상속받아 사용할 수 있습니다.

## 파일 구조

```
src/styles/
├── globals.scss          # 전역 스타일 및 믹스인
├── variables.scss        # 전역 변수
├── reset.scss           # 리셋 스타일
└── _tokens.scss         # 디자인 토큰
```

## 사용법

### 1. 기본 Import

```scss
@import '../../../../styles/globals.scss';
```

### 2. 믹스인 사용

#### 전체 전역 스타일 포함

```scss
.my-component {
  @include include-globals;
}
```

#### 개별 믹스인 사용

```scss
.my-component {
  @include global-reset; // 리셋 스타일
  @include global-typography; // 타이포그래피
  @include global-layout; // 레이아웃
  @include global-links; // 링크 스타일
}
```

### 3. 변수 사용

```scss
.my-component {
  font-family: $font-family-base;
  max-width: $max-width;
}
```

## 예시

### Button 컴포넌트

```scss
@import '../../../../styles/globals.scss';

.button {
  @include global-typography;
  cursor: pointer;
  border: none;
  outline: none;

  &:has(a) {
    @include global-links;
  }
}
```

### Navigation 컴포넌트

```scss
@import '../../../../styles/globals.scss';

.navigation {
  @include global-typography;

  &__link {
    @include global-links;
    // 추가 스타일...
  }
}
```

## 주의사항

- 상대 경로를 사용하여 `globals.scss`를 import하세요
- 컴포넌트별로 필요한 믹스인만 선택적으로 사용하세요
- 전역 변수는 일관성을 위해 `globals.scss`에서 정의된 것만 사용하세요
