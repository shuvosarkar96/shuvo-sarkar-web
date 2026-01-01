"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageFrameProps {
  images: string[];
}

export default function ImageFrame({ images }: ImageFrameProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      {/* Black frame */}
      <div className="bg-black p-8 md:p-16">
        <div className="relative w-full aspect-16/10 bg-white overflow-hidden">
          <Image
            src={images[index]}
            alt="Project image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Controls BELOW black frame */}
      {hasMultiple && (
        <div className="mt-2 lg:mt-4 px-4 lg:px-0 flex items-center justify-between">
          <span>
            {index + 1} / {images.length}
          </span>

          <div className="flex gap-6 text-xl">
            <button onClick={prev}>🡨</button>
            <button onClick={next}>🡪</button>
          </div>
        </div>
      )}
    </div>
  );
}
