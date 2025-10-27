# Quicklink 컴포넌트

재사용 가능한 링크 컴포넌트입니다. 다양한 스타일과 크기 옵션을 제공합니다.

## 사용법

```tsx
import Quicklink, { QuicklinkGroup } from '@/components/elements/Quicklink';

// 기본 사용법
<Quicklink href="/about">회사 소개</Quicklink>

// 외부 링크
<Quicklink href="https://example.com" target="_blank">
  외부 사이트
</Quicklink>

// 스타일 변형
<Quicklink href="/contact" className="-primary">
  문의하기
</Quicklink>

// 크기 변형
<Quicklink href="/help" className="-small">
  도움말
</Quicklink>
```

## QuicklinkGroup 컴포넌트

여러 개의 링크를 그룹으로 관리할 수 있는 컴포넌트입니다.

### 사용법

```tsx
import { QuicklinkGroup } from '@/components/elements/Quicklink';

const links = [
  { id: '1', href: '/home', label: '홈' },
  { id: '2', href: '/about', label: '회사 소개' },
  { id: '3', href: '/products', label: '제품' },
  { id: '4', href: '/services', label: '서비스' },
  { id: '5', href: '/contact', label: '연락처' },
  { id: '6', href: '/blog', label: '블로그' },
  { id: '7', href: '/support', label: '고객지원' },
];

// 기본 사용법 (수평 레이아웃)
<QuicklinkGroup links={links} />

// 수직 레이아웃
<QuicklinkGroup links={links} layout="vertical" />

// 그리드 레이아웃
<QuicklinkGroup links={links} layout="grid" />

// 컴팩트 스타일
<QuicklinkGroup links={links} variant="compact" />

// 클릭 이벤트 처리
<QuicklinkGroup
  links={links}
  onLinkClick={(link, event) => {
    console.log('클릭된 링크:', link.label);
  }}
/>
```

### QuicklinkGroup Props

| Prop          | 타입                                                     | 기본값         | 설명                    |
| ------------- | -------------------------------------------------------- | -------------- | ----------------------- |
| `links`       | `QuicklinkItem[]`                                        | -              | 링크 배열 (필수)        |
| `className`   | `string`                                                 | `''`           | 추가 CSS 클래스         |
| `layout`      | `'horizontal' \| 'vertical' \| 'grid'`                   | `'horizontal'` | 레이아웃 타입           |
| `variant`     | `'default' \| 'compact' \| 'spacious'`                   | `'default'`    | 스타일 변형             |
| `onLinkClick` | `(link: QuicklinkItem, event: React.MouseEvent) => void` | -              | 링크 클릭 이벤트 핸들러 |

### QuicklinkItem 타입

```tsx
interface QuicklinkItem {
  id: string; // 고유 식별자
  href: string; // 링크 URL
  label: string; // 표시될 텍스트
  target?: string; // 링크 타겟
  rel?: string; // rel 속성
  className?: string; // 개별 링크 CSS 클래스
}
```

### 레이아웃 옵션

- **horizontal**: 링크들이 가로로 배치 (기본값)
- **vertical**: 링크들이 세로로 배치
- **grid**: 링크들이 그리드 형태로 배치

### 스타일 변형

- **default**: 기본 간격과 크기
- **compact**: 더 작은 간격과 크기
- **spacious**: 더 큰 간격과 크기

## Props

| Prop        | 타입                                                   | 기본값    | 설명               |
| ----------- | ------------------------------------------------------ | --------- | ------------------ |
| `href`      | `string`                                               | -         | 링크 URL (필수)    |
| `children`  | `React.ReactNode`                                      | -         | 링크 텍스트 (필수) |
| `className` | `string`                                               | `''`      | 추가 CSS 클래스    |
| `target`    | `'_blank' \| '_self' \| '_parent' \| '_top'`           | `'_self'` | 링크 타겟          |
| `rel`       | `string`                                               | -         | rel 속성           |
| `onClick`   | `(event: React.MouseEvent<HTMLAnchorElement>) => void` | -         | 클릭 이벤트 핸들러 |

## 스타일 클래스

### 크기 변형

- `-small`: 작은 크기
- `-large`: 큰 크기

### 스타일 변형

- `-primary`: 주요 링크 (파란색 배경)
- `-secondary`: 보조 링크 (테두리만 있는 스타일)
- `-disabled`: 비활성화 상태

## 특징

- **접근성**: 키보드 포커스와 스크린 리더 지원
- **반응형**: 모바일과 데스크톱에 최적화된 크기
- **외부 링크 표시**: `target="_blank"`인 경우 자동으로 화살표 아이콘 표시
- **호버 효과**: 부드러운 전환 애니메이션
- **클릭 피드백**: 클릭 시 미세한 움직임 효과
- **유연한 레이아웃**: 수평, 수직, 그리드 레이아웃 지원
- **반응형 디자인**: 모바일에서 자동으로 최적화된 레이아웃 적용

## 예시

```tsx
// 다양한 스타일 조합
<div>
  <Quicklink href="/home" className="-primary -large">
    홈으로 가기
  </Quicklink>

  <Quicklink href="/docs" className="-secondary">
    문서 보기
  </Quicklink>

  <Quicklink href="https://github.com" target="_blank" className="-small">
    GitHub
  </Quicklink>
</div>;

// QuicklinkGroup 예시
const navigationLinks = [
  { id: '1', href: '/dashboard', label: '대시보드', className: '-primary' },
  { id: '2', href: '/profile', label: '프로필' },
  { id: '3', href: '/settings', label: '설정' },
  { id: '4', href: '/help', label: '도움말' },
  { id: '5', href: '/logout', label: '로그아웃' },
  { id: '6', href: '/feedback', label: '피드백' },
  { id: '7', href: '/about', label: '정보' },
];

<QuicklinkGroup
  links={navigationLinks}
  layout="vertical"
  variant="compact"
  onLinkClick={link => console.log(`${link.label} 클릭됨`)}
/>;
```
