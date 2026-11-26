import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers/tanstack-provider';
import { AuthProvider } from './providers/session-provider';
import { TranslationProvider } from './providers/translation-provider';
import { HydrationProvider } from '@/components/hydration/hydration-provider';
import { siteConfig } from '@/configs/site';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteConfig.description} />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen w-full`}>
        <HydrationProvider>
          <Providers>
            <AuthProvider>
              <TranslationProvider>
                {children}
                <Toaster />
              </TranslationProvider>
            </AuthProvider>
          </Providers>
        </HydrationProvider>
      </body>
    </html>
  );
}
