import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthStoreProvider } from "@/providers/auth-store-provider";
import "./globals.css";

export const metadata = {
  title: "DevFeed",
  description: "A simple developer blog dashboard",
};

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
