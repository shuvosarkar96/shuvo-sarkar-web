import Header from "@/components/common/header";
import DownLeftArrow from "@/assets/icons/down-left-arrow.svg";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col">
      {/* Top */}
      <Header />

      {/* Middle (H1 centered vertically) */}
      <div className="flex-1 flex items-center justify-center text-center md:text-right container mx-auto">
        <h1 className="flex flex-col md:flex-row text-gray-800 leading-none uppercase font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="md:mr-8">Shuvo</span>
          <span>Sarkar</span>
        </h1>
      </div>

      {/* Bottom (tagline at screen bottom) */}
      <div className="pb-8 text-right container mx-auto px-4 text-xl sm:text-3xl md:text-4xl">
        <DownLeftArrow className="inline-block w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
        <span className="block">Autodidact</span>
        <span className="block">Yet another developer</span>
      </div>
    </section>
  );
}
