import type { Meta, StoryObj } from '@storybook/react';
import QuicklinkGroup, { QuicklinkItem } from './QuicklinkGroup';

const meta: Meta<typeof QuicklinkGroup> = {
  title: 'Elements/QuicklinkGroup',
  component: QuicklinkGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical', 'grid'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'spacious'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 간단한 아이콘 컴포넌트들
const HomeIcon = () => <span>🏠</span>;
const AboutIcon = () => <span>ℹ️</span>;
const ProductIcon = () => <span>📦</span>;
const ServiceIcon = () => <span>🔧</span>;
const ContactIcon = () => <span>📞</span>;
const BlogIcon = () => <span>📝</span>;
const SupportIcon = () => <span>💬</span>;
const HistoryIcon = () => <span>📅</span>;
const TeamIcon = () => <span>👥</span>;
const ValuesIcon = () => <span>💎</span>;
const SoftwareIcon = () => <span>💻</span>;
const HardwareIcon = () => <span>🔌</span>;
const ConsultingIcon = () => <span>💡</span>;
const DevelopmentIcon = () => <span>⚙️</span>;
const FAQIcon = () => <span>❓</span>;
const DownloadIcon = () => <span>⬇️</span>;

const sampleLinks: QuicklinkItem[] = [
  {
    id: '1',
    href: 'https://example.com',
    label: '홈페이지',
    target: '_blank',
  },
  {
    id: '2',
    href: '/about',
    label: '회사 소개',
  },
  {
    id: '3',
    href: '/products',
    label: '제품',
  },
  {
    id: '4',
    href: '/services',
    label: '서비스',
  },
  {
    id: '5',
    href: '/contact',
    label: '연락처',
  },
  {
    id: '6',
    href: '/blog',
    label: '블로그',
  },
  {
    id: '7',
    href: '/support',
    label: '고객지원',
  },
];

const linksWithIcons: QuicklinkItem[] = [
  {
    id: '1',
    href: 'https://example.com',
    label: '홈페이지',
    target: '_blank',
    icon: <HomeIcon />,
  },
  {
    id: '2',
    href: '/about',
    label: '회사 소개',
    icon: <AboutIcon />,
  },
  {
    id: '3',
    href: '/products',
    label: '제품',
    icon: <ProductIcon />,
  },
  {
    id: '4',
    href: '/services',
    label: '서비스',
    icon: <ServiceIcon />,
  },
  {
    id: '5',
    href: '/contact',
    label: '연락처',
    icon: <ContactIcon />,
  },
  {
    id: '6',
    href: '/blog',
    label: '블로그',
    icon: <BlogIcon />,
  },
  {
    id: '7',
    href: '/support',
    label: '고객지원',
    icon: <SupportIcon />,
  },
];

const linksWithSubLinks: QuicklinkItem[] = [
  {
    id: '1',
    href: 'https://example.com',
    label: '홈페이지',
    target: '_blank',
  },
  {
    id: '2',
    href: '/about',
    label: '회사 소개',
    sublinks: [
      { id: '2-1', href: '/about/history', label: '회사 연혁' },
      { id: '2-2', href: '/about/team', label: '팀 소개' },
      { id: '2-3', href: '/about/values', label: '핵심 가치' },
    ],
  },
  {
    id: '3',
    href: '/products',
    label: '제품',
    sublinks: [
      { id: '3-1', href: '/products/software', label: '소프트웨어' },
      { id: '3-2', href: '/products/hardware', label: '하드웨어' },
      { id: '3-3', href: '/products/services', label: '서비스' },
    ],
  },
  {
    id: '4',
    href: '/services',
    label: '서비스',
    sublinks: [
      { id: '4-1', href: '/services/consulting', label: '컨설팅' },
      { id: '4-2', href: '/services/development', label: '개발' },
      { id: '4-3', href: '/services/support', label: '지원' },
    ],
  },
  {
    id: '5',
    href: '/contact',
    label: '연락처',
  },
  {
    id: '6',
    href: '/blog',
    label: '블로그',
    sublinks: [
      { id: '6-1', href: '/blog/tech', label: '기술 블로그' },
      { id: '6-2', href: '/blog/news', label: '뉴스' },
      { id: '6-3', href: '/blog/case-studies', label: '사례 연구' },
    ],
  },
  {
    id: '7',
    href: '/support',
    label: '고객지원',
    sublinks: [
      { id: '7-1', href: '/support/faq', label: '자주 묻는 질문' },
      { id: '7-2', href: '/support/contact', label: '문의하기' },
      { id: '7-3', href: '/support/downloads', label: '다운로드' },
    ],
  },
];

const linksWithIconsAndSubLinks: QuicklinkItem[] = [
  {
    id: '1',
    href: 'https://example.com',
    label: '홈페이지',
    target: '_blank',
    icon: <HomeIcon />,
  },
  {
    id: '2',
    href: '/about',
    label: '회사 소개',
    icon: <AboutIcon />,
    sublinks: [
      { id: '2-1', href: '/about/history', label: '회사 연혁', icon: <HistoryIcon /> },
      { id: '2-2', href: '/about/team', label: '팀 소개', icon: <TeamIcon /> },
      { id: '2-3', href: '/about/values', label: '핵심 가치', icon: <ValuesIcon /> },
    ],
  },
  {
    id: '3',
    href: '/products',
    label: '제품',
    icon: <ProductIcon />,
    sublinks: [
      { id: '3-1', href: '/products/software', label: '소프트웨어', icon: <SoftwareIcon /> },
      { id: '3-2', href: '/products/hardware', label: '하드웨어', icon: <HardwareIcon /> },
      { id: '3-3', href: '/products/services', label: '서비스', icon: <ServiceIcon /> },
    ],
  },
  {
    id: '4',
    href: '/services',
    label: '서비스',
    icon: <ServiceIcon />,
    sublinks: [
      { id: '4-1', href: '/services/consulting', label: '컨설팅', icon: <ConsultingIcon /> },
      { id: '4-2', href: '/services/development', label: '개발', icon: <DevelopmentIcon /> },
      { id: '4-3', href: '/services/support', label: '지원', icon: <SupportIcon /> },
    ],
  },
  {
    id: '5',
    href: '/contact',
    label: '연락처',
    icon: <ContactIcon />,
  },
  {
    id: '6',
    href: '/blog',
    label: '블로그',
    icon: <BlogIcon />,
    sublinks: [
      { id: '6-1', href: '/blog/tech', label: '기술 블로그' },
      { id: '6-2', href: '/blog/news', label: '뉴스' },
      { id: '6-3', href: '/blog/case-studies', label: '사례 연구' },
    ],
  },
  {
    id: '7',
    href: '/support',
    label: '고객지원',
    icon: <SupportIcon />,
    sublinks: [
      { id: '7-1', href: '/support/faq', label: '자주 묻는 질문', icon: <FAQIcon /> },
      { id: '7-2', href: '/support/contact', label: '문의하기', icon: <ContactIcon /> },
      { id: '7-3', href: '/support/downloads', label: '다운로드', icon: <DownloadIcon /> },
    ],
  },
];

export const Default: Story = {
  args: {
    links: sampleLinks,
    layout: 'horizontal',
    variant: 'default',
  },
};

export const WithIcons: Story = {
  args: {
    links: linksWithIcons,
    layout: 'horizontal',
    variant: 'default',
  },
};

export const WithSubLinks: Story = {
  args: {
    links: linksWithSubLinks,
    layout: 'horizontal',
    variant: 'default',
  },
};

export const WithIconsAndSubLinks: Story = {
  args: {
    links: linksWithIconsAndSubLinks,
    layout: 'horizontal',
    variant: 'default',
  },
};

export const Vertical: Story = {
  args: {
    links: sampleLinks,
    layout: 'vertical',
    variant: 'default',
  },
};

export const VerticalWithIcons: Story = {
  args: {
    links: linksWithIcons,
    layout: 'vertical',
    variant: 'default',
  },
};

export const VerticalWithSubLinks: Story = {
  args: {
    links: linksWithSubLinks,
    layout: 'vertical',
    variant: 'default',
  },
};

export const VerticalWithIconsAndSubLinks: Story = {
  args: {
    links: linksWithIconsAndSubLinks,
    layout: 'vertical',
    variant: 'default',
  },
};

export const Grid: Story = {
  args: {
    links: sampleLinks,
    layout: 'grid',
    variant: 'default',
  },
};

export const GridWithIcons: Story = {
  args: {
    links: linksWithIcons,
    layout: 'grid',
    variant: 'default',
  },
};

export const GridWithSubLinks: Story = {
  args: {
    links: linksWithSubLinks,
    layout: 'grid',
    variant: 'default',
  },
};

export const GridWithIconsAndSubLinks: Story = {
  args: {
    links: linksWithIconsAndSubLinks,
    layout: 'grid',
    variant: 'default',
  },
};

export const Compact: Story = {
  args: {
    links: sampleLinks,
    layout: 'horizontal',
    variant: 'compact',
  },
};

export const CompactWithIcons: Story = {
  args: {
    links: linksWithIcons,
    layout: 'horizontal',
    variant: 'compact',
  },
};

export const CompactWithSubLinks: Story = {
  args: {
    links: linksWithSubLinks,
    layout: 'horizontal',
    variant: 'compact',
  },
};

export const CompactWithIconsAndSubLinks: Story = {
  args: {
    links: linksWithIconsAndSubLinks,
    layout: 'horizontal',
    variant: 'compact',
  },
};

export const Spacious: Story = {
  args: {
    links: sampleLinks,
    layout: 'horizontal',
    variant: 'spacious',
  },
};

export const SpaciousWithIcons: Story = {
  args: {
    links: linksWithIcons,
    layout: 'horizontal',
    variant: 'spacious',
  },
};

export const SpaciousWithSubLinks: Story = {
  args: {
    links: linksWithSubLinks,
    layout: 'horizontal',
    variant: 'spacious',
  },
};

export const SpaciousWithIconsAndSubLinks: Story = {
  args: {
    links: linksWithIconsAndSubLinks,
    layout: 'horizontal',
    variant: 'spacious',
  },
};

export const WithCustomStyles: Story = {
  args: {
    links: sampleLinks.map((link, index) => ({
      ...link,
      className: index % 2 === 0 ? '-primary' : '-secondary',
    })),
    layout: 'horizontal',
    variant: 'default',
  },
};

export const WithCustomStylesAndIcons: Story = {
  args: {
    links: linksWithIcons.map((link, index) => ({
      ...link,
      className: index % 2 === 0 ? '-primary' : '-secondary',
    })),
    layout: 'horizontal',
    variant: 'default',
  },
};

export const WithClickHandler: Story = {
  args: {
    links: sampleLinks,
    layout: 'horizontal',
    variant: 'default',
    onLinkClick: (link: QuicklinkItem, event: React.MouseEvent<HTMLAnchorElement>) => {
      console.log('링크 클릭됨:', link.label, link.href);
      // 기본 동작을 막고 싶다면: event.preventDefault();
    },
  },
};

export const WithSubLinkClickHandler: Story = {
  args: {
    links: linksWithSubLinks,
    layout: 'horizontal',
    variant: 'default',
    onLinkClick: (link: QuicklinkItem, event: React.MouseEvent<HTMLAnchorElement>) => {
      console.log('메인 링크 클릭됨:', link.label, link.href);
    },
    onSubLinkClick: (parentLink: QuicklinkItem, subLink: any, event: React.MouseEvent<HTMLAnchorElement>) => {
      console.log('서브 링크 클릭됨:', parentLink.label, '>', subLink.label, subLink.href);
    },
  },
};
