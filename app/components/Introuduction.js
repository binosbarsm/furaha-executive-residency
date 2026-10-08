"use client";

import { motion } from "motion/react";

export default function Introduction() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">

          {/* Small label */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="h-px bg-[#C9A227]"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#164A8A]">
                Furaha Apartments
              </p>
            </div>
          </motion.div>

          {/* Main text */}
          <div className="lg:col-span-9">

            <motion.h2
              className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Comfortable apartments.
              <span className="block font-serif italic text-[#C9A227]">
                Designed for living.
              </span>
            </motion.h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">

              <motion.p
                className="text-base leading-8 text-[#0B1F3A]/65"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
              >
                Furaha Executive Residency offers comfortable and well-equipped
                apartments in Ihumwa, Dodoma, designed to give you a private,
                peaceful and welcoming place to stay.
              </motion.p>

              <motion.p
                className="text-base leading-8 text-[#0B1F3A]/65"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                Each apartment features spacious living areas, master bedrooms,
                a private kitchen, air conditioning and free Wi-Fi, with secure
                parking and security for a comfortable stay.
              </motion.p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}