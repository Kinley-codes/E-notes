

import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from "@/components/theme-provider";
//import { FavoritesProvider } from '@/lib/FavoritesContext';//
import { ClerkProvider } from '@clerk/nextjs';
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
    <html lang="en" className="light" style={{ colorScheme: "light" }} spellCheck="false" data-ms-editor="true">
      <body className="light">
        <ClerkProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false} // Disables automatic system theme switching
              disableTransitionOnChange
            >
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
