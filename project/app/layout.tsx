
import Auth from '@/app/auth/auth'; // Import Auth component
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Bhutan - Digital Marketplace',
  description: 'Buy and sell digital services and products in Bhutan',
  other: {
    'data-grammarly-disable': 'true',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="grammarly-disable" content="true" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Auth />  {/* Now using the client-only authentication component */}
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
