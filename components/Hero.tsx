"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WARREN } from "@/lib/images";
import { GoldButton } from "./ui";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-6%"]);

  return (
    <div id="top" ref={ref} className="grain relative overflow-hidden">
      <div className="mx-auto grid min-h-[92svh] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-20 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        {/* Copy */}
        <motion.div style={{ y: textY }} className="order-2 md:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Quiet Wealth · Austin, TX
          </p>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight text-[#F5F5F5] sm:text-6xl md:text-[4.2rem]">
            Never Pay Your
            <br />
            Debt <em className="text-[#D4AF37] not-italic">First.</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#9B9B94] sm:text-lg">
            I&apos;m Warren Mitchell. I was $180,000 in debt at 27. Now I teach 50,000+ Americans
            how to build quiet wealth without the Wall Street BS.
          </p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <GoldButton href="#free-kit">Get My Free Starter Kit</GoldButton>
            <p className="text-xs text-[#9B9B94]">
              As seen by <span className="text-[#F5F5F5]">2.3M+ people</span> on YouTube &amp; Instagram
            </p>
          </div>
        </motion.div>

        {/* Portrait with parallax */}
        <motion.div style={{ y: imgY }} className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_30px_80px_-20px_rgba(212,175,55,0.18)] md:max-w-none">
            <Image
              src={WARREN.hero}
              alt="Warren Mitchell"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/55 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
      <div className="ledger-rule mx-auto max-w-6xl" />
    </div>
  );
}
