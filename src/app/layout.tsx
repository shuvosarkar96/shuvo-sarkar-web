import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/footer";
import { supreme } from "./fonts";
import { ThemeProvider } from "next-themes";
import { typography } from "./typography";

export const metadata: Metadata = {
  metadataBase: new URL("https://shuvosarkar.vercel.app"),

  title: "Shuvo Sarkar | Yet another front-end developer",

  description: "Autodidact front-end developer building minimal, performance-driven web experiences with a strong focus on typography, motion, and interaction design.",

  applicationName: "Shuvo Sarkar",

  openGraph: {
    title: "Shuvo Sarkar | Yet another front-end developer",
    description:
      "Autodidact front-end developer building minimal, performance-driven web experiences with a strong focus on typography, motion, and interaction design.",
    siteName: "Shuvo Sarkar",
    url: "https://shuvosarkar.vercel.app",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shuvo Sarkar | Yet another front-end developer",
    description:
      "Autodidact front-end developer building minimal, performance-driven web experiences with a strong focus on typography, motion, and interaction design.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={supreme.variable} suppressHydrationWarning>
      <body className={`${typography.bodyText} page-wrapper leading-relaxed font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
