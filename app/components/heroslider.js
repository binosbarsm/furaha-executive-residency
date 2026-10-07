"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/furaha/hero-1.jpeg",
    alt: "Furaha Executive Residency living space",
  },
  {
    src: "/images/furaha/hero-2.jpeg",
    alt: "Furaha Executive Residency bedroom",
  },
  {
    src: "/images/furaha/hero-3.jpeg",
    alt: "Furaha Executive Residency interior",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className={`object-cover transition-transform duration-[7000ms] ${
              index === current ? "scale-105" : "scale-100"
            }`}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}