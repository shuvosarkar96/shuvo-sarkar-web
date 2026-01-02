import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/footer";
import { supreme } from "./fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Shuvo Sarkar",
  description: "Yet another below average developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={supreme.variable} suppressHydrationWarning>
      <body className="page-wrapper leading-relaxed font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
