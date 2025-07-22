import type { Meta, StoryObj } from '@storybook/react';
import Quicklink from './Quicklink';

const meta: Meta<typeof Quicklink> = {
  title: 'Elements/Quicklink',
  component: Quicklink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: '링크 URL',
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
      description: '링크 타겟',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: '기본 링크',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: '외부 링크',
  },
};

export const Primary: Story = {
  args: {
    href: '#',
    children: '주요 링크',
    className: '-primary',
  },
};

export const Secondary: Story = {
  args: {
    href: '#',
    children: '보조 링크',
    className: '-secondary',
  },
};

export const Small: Story = {
  args: {
    href: '#',
    children: '작은 링크',
    className: '-small',
  },
};

export const Large: Story = {
  args: {
    href: '#',
    children: '큰 링크',
    className: '-large',
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    children: '비활성화된 링크',
    className: '-disabled',
  },
};

export const WithClickHandler: Story = {
  args: {
    href: '#',
    children: '클릭 이벤트가 있는 링크',
    onClick: e => {
      e.preventDefault();
      alert('링크가 클릭되었습니다!');
    },
  },
};
