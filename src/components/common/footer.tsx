import { typography } from "@/app/typography";
import HoverText from "./hoverText";

export default function Footer() {
  return (
    <footer id="contact" className="mb-10">

      <hr className="border-2 border-gray-200 mt-16 mb-24" />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
        <h2 className={`${typography.footerDisplay}`}>Let&apos;s Team Up</h2>
        <HoverText
          href="mailto:shuvo.sarkar.official@gmail.com"
          label="shuvo.sarkar.official@gmail.com"
          className="hidden md:block w-fit text-xl md:text-3xl xl:text-5xl font-medium mt-6"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mt-20 md:mt-24 lg:mt-28 xl:mt-32 mb-2 md:mb-12">

        {/* Social — FIRST on mobile, SECOND on md */}
        <div className="order-1 md:order-2 w-full md:w-fit flex justify-between md:justify-start md:gap-8">
          <HoverText 
            href="https://github.com/shuvosarkar96" 
            label="GitHub 🡭" 
            className="hidden md:block"
            openInNewTab
          />

          <HoverText 
            href="https://www.linkedin.com/in/shuvosarkarofficial" 
            label="LinkedIn 🡭" 
            className="hidden md:block"
            openInNewTab
          />

          <HoverText 
            href="https://www.instagram.com/mr.shuvo.sarkar?igsh=MTF1MXBidTE1amh6Mg==" 
            label="Instagram 🡭" 
            className="hidden md:block"
            openInNewTab
          />
        </div>

        {/* Copyright — SECOND on mobile, FIRST on md */}
        <span className="order-2 md:order-1 mt-8 md:mt-0 uppercase">
          © Shuvo Sarkar {new Date().getFullYear()}
        </span>
      </div>

    </footer>
  );
}