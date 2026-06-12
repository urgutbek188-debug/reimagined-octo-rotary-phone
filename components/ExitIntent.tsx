"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WARREN } from "@/lib/images";
import { EmailForm } from "./ui";

const STORAGE_KEY = "qw_exit_shown";

export function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const show = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    // Desktop: cursor leaves toward browser chrome
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) show();
    };

    // Mobile fallback: fast scroll back to top after engaging
    let maxScroll = 0;
    const onScroll = () => {
      maxScroll = Math.max(maxScroll, window.scrollY);
      if (maxScroll > 1200 && window.scrollY < 200) show();
    };

    // Don't trigger in the first 8 seconds — let them read
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Before you leave"
        >
          <motion.div
            initial={{ scale: 0.94, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-2xl overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#111110] sm:grid-cols-[0.85fr_1.15fr]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-3 z-10 text-2xl leading-none text-[#9B9B94] transition-colors hover:text-[#F5F5F5]"
            >
              ×
            </button>

            <div className="relative hidden min-h-[320px] sm:block">
              <Image src={WARREN.popup} alt="Warren Mitchell" fill sizes="35vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111110]" />
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                One second
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-[#F5F5F5]">
                Leaving? Grab the kit first.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9B9B94]">
                I won&apos;t email you junk. Just the 7-Day Money Reset, the budget template, and
                the Debt Escape Map. Free.
              </p>
              <div className="mt-6">
                <EmailForm compact buttonLabel="Send Me The Kit" />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 text-xs text-[#9B9B94] underline-offset-4 hover:underline"
              >
                No thanks, I&apos;ll keep renting my life
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
