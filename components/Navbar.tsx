"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { GoldButton } from "./ui";

export function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 480));

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -72, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-50 border-b border-[#D4AF37]/15 bg-[#0A0A0A]/85 backdrop-blur-md"
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="#top" className="font-serif text-lg tracking-wide text-[#F5F5F5]">
              Warren Mitchell
              <span className="ml-2 hidden text-xs font-sans uppercase tracking-[0.25em] text-[#D4AF37] sm:inline">
                Quiet Wealth
              </span>
            </a>
            <GoldButton href="#free-kit" className="!px-5 !py-2.5 !text-xs">
              Get Free Kit
            </GoldButton>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
