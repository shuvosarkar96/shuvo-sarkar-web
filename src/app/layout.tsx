import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/footer";
import { supreme } from "./fonts";

export const metadata: Metadata = {
  title: "Shuvo Sarkar",
  description: "Yet another below average developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={supreme.variable}>
      <body className="font-sans antialiased">
        <main className="page-wrapper leading-relaxed">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
