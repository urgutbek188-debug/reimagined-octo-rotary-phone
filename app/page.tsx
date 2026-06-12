"use client";

import { motion, useScroll } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Inside, LeadMagnet, Story, Trap } from "@/components/Sections";
import { Testimonials } from "@/components/Testimonials";
import { Blueprint, Faq, Footer } from "@/components/Closing";
import { ExitIntent } from "@/components/ExitIntent";

export default function Page() {
  const { scrollYProgress } = useScroll();

  return (
    <main>
      {/* Gold scroll progress — the ledger filling up */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-[#D4AF37]"
        aria-hidden
      />

      <Navbar />
      <Hero />
      <Trap />
      <div className="ledger-rule mx-auto max-w-6xl" />
      <Story />
      <LeadMagnet />
      <Inside />
      <div className="ledger-rule mx-auto max-w-6xl" />
      <Testimonials />
      <Blueprint />
      <Faq />
      <Footer />
      <ExitIntent />
    </main>
  );
}
