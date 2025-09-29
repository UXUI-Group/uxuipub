import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'UXUI Pub',
  description: 'UXUI Publishing Project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
