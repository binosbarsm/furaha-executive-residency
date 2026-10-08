"use client";

import Image from "next/image";
import { motion } from "motion/react";

const spaces = [
  {
    title: "Living Spaces",
    description:
      "Thoughtfully arranged spaces designed for comfort, relaxation and everyday living.",
    image: "/images/furaha/livingroom.png",
  },
  {
    title: "Bedrooms",
    description:
      "Comfortable private spaces created to give you a peaceful place to unwind.",
    image: "/images/furaha/bedroom.png",
  },
  {
    title: "Dining & Kitchen",
    description:
      "Beautifully presented spaces for preparing meals, dining and spending time together.",
    image: "/images/furaha/kitchen.png",
  },
];

export default function PropertyShowcase() {
  return (
    <section
      id="inside-furaha"
      className="bg-[#F8F7F3] px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center gap-3">
            <motion.span
              className="h-px bg-[#C9A227]"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#164A8A]">
              Inside Furaha
            </p>
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
            Spaces made for
            <span className="block font-serif italic text-[#C9A227]">
              comfortable living.
            </span>
          </h2>
        </motion.div>

        {/* Spaces */}
        <div className="space-y-24 lg:space-y-32">

          {spaces.map((space, index) => (
            <motion.div
              key={space.title}
              className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >

              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="group relative overflow-hidden">

                  <motion.div
                    initial={{ scale: 1.04 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src={space.image}
                      alt={space.title}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </motion.div>

                </div>
              </div>

              {/* Text */}
              <motion.div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
                initial={{
                  opacity: 0,
                  x: index % 2 !== 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#C9A227]">
                  0{index + 1}
                </p>

                <h3 className="text-3xl font-light tracking-tight text-[#0B1F3A] sm:text-4xl">
                  {space.title}
                </h3>

                <p className="mt-6 max-w-md text-base leading-8 text-[#0B1F3A]/65">
                  {space.description}
                </p>
              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}