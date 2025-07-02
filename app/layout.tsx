import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthStoreProvider } from "@/providers/auth-store-provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'DevFeed',
  description: 'A developer-focused mini-blog dashboard',
  keywords: ['DevFeed', 'blog', 'developer', 'nextjs'],
  authors: [{ name: 'Shivam Ganguly', url: 'http://shivamryuzaki.vercel.app' }],
  openGraph: {
    title: 'DevFeed',
    description: 'Read and share developer blogs on DevFeed',
    url: 'https://your-devfeed-domain.com',
    siteName: 'DevFeed',
    images: [
      {
        url: '/og-devfeed.png',
        width: 1200,
        height: 630,
        alt: 'DevFeed Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevFeed',
    description: 'Read and share developer blogs on DevFeed',
    images: ['/og-devfeed.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AuthStoreProvider>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>
          {/* <Footer /> */}
        </AuthStoreProvider>
      </body>
    </html>
  );
}
