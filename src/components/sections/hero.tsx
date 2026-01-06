import Header from "@/components/common/header";
import DownLeftArrow from "@/assets/icons/down-left-arrow.svg";
import { typography } from "@/app/typography";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col py-8 lg:py-10">
      {/* Top */}
      <Header />

      {/* Middle (H1 centered vertically) */}
      <div className="flex-1 flex items-center justify-center text-center md:text-right">
        <h1 className={`${typography.heroTitle} w-full flex flex-col`}>
          <span className="text-left">Shuvo</span>
          <span className="text-right">Sarkar</span>
        </h1>
      </div>

      {/* Bottom (tagline at screen bottom) */}
      <div className="text-right text-xl sm:text-3xl md:text-4xl">
        <DownLeftArrow className="inline-block w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
        <span className="block">Autodidact</span>
        <span className="block">Yet another developer</span>
      </div>
    </section>
  );
}
