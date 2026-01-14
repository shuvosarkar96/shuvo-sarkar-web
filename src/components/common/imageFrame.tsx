"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ArrowLeft from "@/assets/icons/ArrowLeft";
import ArrowRight from "@/assets/icons/ArrowRight";

interface ImageFrameProps {
  images: string[];
}

export default function ImageFrame({ images }: ImageFrameProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const hasMultiple = images.length > 1;

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div>
      {/* Black frame */}
      <div className="bg-black p-8 md:p-16">
        <div
          className="relative w-full aspect-16/10 bg-white overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={(e) => e.preventDefault()}
        >
          <Image
            src={images[index]}
            alt="Project image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Controls */}
      {hasMultiple && (
        <div className="mt-2 lg:mt-4 px-4 lg:px-0 flex items-center justify-between">
          <span>
            {index + 1} / {images.length}
          </span>

          <div className="flex gap-6">
            <button
              onClick={prev}
              aria-label="Previous image"
              className="inline-flex items-center justify-center w-10 h-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <ArrowLeft className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="inline-flex items-center justify-center w-10 h-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <ArrowRight className="w-6 h-6 text-gray-900 dark:text-gray-100" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
