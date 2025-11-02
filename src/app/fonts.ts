import localFont from "next/font/local";

export const supreme = localFont({
  src: [
    {
      path: "../../public/fonts/Supreme-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },

    // ----- Legacy fallback (WOFF) -----
    {
      path: "../../public/fonts/Supreme-Variable.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Supreme-VariableItalic.woff",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-supreme",
  display: "swap",
  preload: true,
});