"use client";

import Header from "@/components/common/header";
import { typography } from "@/app/typography";
import DownLeftArrow from "@/assets/icons/DownLeftArrow";

export default function Hero() {
  return (
    <section id="top" className="min-h-svh flex flex-col pt-8 pb-16 lg:pt-10 lg:pb-10">

      <Header />

      <div className="flex-1 flex items-center justify-center text-center md:text-right">
        <h1 className={`${typography.heroTitle} w-full flex flex-col`}>
          <span className="text-left">Shuvo</span>
          <span className="text-right">Sarkar</span>
        </h1>
      </div>

      <div className="text-right text-xl sm:text-3xl md:text-4xl">
        <DownLeftArrow className="inline-block w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
        <span className="block">Autodidact</span>
        <span className="block">Yet another developer</span>
      </div>
    </section>
  );
}
