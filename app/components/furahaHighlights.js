"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  BedDouble,
  CookingPot,
  Wifi,
  Car,
  ShieldCheck,
  Wind,
} from "lucide-react";

const highlights = [
  {
    icon: BedDouble,
    title: "3 Private Apartments",
    description: "Private spaces designed for a comfortable and peaceful stay.",
  },
  {
    icon: BedDouble,
    title: "2 Master Bedrooms",
    description: "Comfortable bedrooms offering privacy and a restful environment.",
  },
  {
    icon: CookingPot,
    title: "Private Kitchen",
    description: "A well-equipped kitchen for convenient everyday living.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected with complimentary Wi-Fi throughout your stay.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Enjoy a cool and comfortable indoor environment.",
  },
  {
    icon: Car,
    title: "Secure Parking",
    description: "Convenient parking within the property.",
  },
];

export default function FurahaHighlights() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
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
              Furaha Highlights
            </p>
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
            Everything you need.
            <span className="block font-serif italic text-[#C9A227]">
              Comfort in every detail.
            </span>
          </h2>
        </motion.div>

        {/* Highlights */}
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="group border-t border-[#0B1F3A]/10 pt-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-start gap-5">

                  {/* Icon */}
                  <motion.div
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A227]/50 text-[#C9A227]"
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-medium text-[#0B1F3A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#0B1F3A]/60">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}