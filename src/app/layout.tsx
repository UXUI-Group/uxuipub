import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.scss';

export const metadata: Metadata = {
  title: '대한항공',
  description: '대한항공 UXUI Publishing Project',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || savedTheme === 'light') {
                    return savedTheme;
                  }
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return 'dark';
                  }
                  return 'light';
                }
                const theme = getInitialTheme();
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
