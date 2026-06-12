"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LINKS, WARREN } from "@/lib/images";
import { EmailForm, GoldButton, Section } from "./ui";

/* --------------------------- 7 · Blueprint teaser --------------------------- */

export function Blueprint() {
  return (
    <Section eyebrow="The Full System">
      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-xl md:max-w-none">
          <Image src={WARREN.confident} alt="Warren Mitchell" fill sizes="(max-width:768px) 80vw, 38vw" className="object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
            Ready for the Full System?
          </h2>
          <p className="mt-5 max-w-md text-[#9B9B94]">
            The Starter Kit is free. But if you want the complete 30-day reset, the 90-day debt
            plan, and my investment map — it&apos;s all in one place.
          </p>

          <div className="mt-8 rounded-2xl border border-[#D4AF37]/30 bg-[#141413] p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-2xl text-[#F5F5F5]">The Quiet Wealth Blueprint</h3>
              <span className="font-serif text-3xl text-[#D4AF37]">$27</span>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-[#F5F5F5]">
              {["30-Day Reset", "90-Day Debt Destroyer", "First Investment Map"].map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  {b}
                </li>
              ))}
            </ul>
            <GoldButton href={LINKS.gumroad} className="mt-7 w-full">
              See What&apos;s Inside
            </GoldButton>
          </div>

          <p className="mt-7 border-l-2 border-[#D4AF37] pl-5 text-lg italic text-[#9B9B94]">
            No pressure. The free kit is enough for 80% of people. The Blueprint is for those
            ready to run.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- FAQ accordion ----------------------------- */

const FAQS = [
  {
    q: "Is this financial advice?",
    a: "No. I'm not a financial advisor, and I don't know your situation. This is education — the principles I used and teach. For decisions about your money, talk to a licensed professional. What I give you is a clear map most people never get.",
  },
  {
    q: "Will this work if I'm $50k in debt?",
    a: "I was $180k in. The numbers change the timeline, not the method. The Debt Escape Map in the free kit shows you how to sequence it whether you owe $5k or $150k. Bigger debt just means the first 90 days matter more.",
  },
  {
    q: "Why is the kit free?",
    a: "Two honest reasons. First, the basics should never cost money — that's how people get trapped. Second, some of you will eventually want the full Blueprint, and I'd rather earn that trust first. The free kit is complete on its own.",
  },
  {
    q: "How is this different from every finance guru?",
    a: "No Lamborghinis. No 'passive income in 30 days.' I teach the slow, quiet version that actually works: kill expensive debt, build a cushion, then let money compound while you live your life.",
  },
  {
    q: "What happens after I sign up?",
    a: "You get the Starter Kit immediately, then one short email a day for 7 days — the Money Reset. After that, roughly one email a week. Unsubscribe anytime, no hard feelings.",
  },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
      >
        <span className="font-serif text-xl text-[#F5F5F5]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl leading-none text-[#D4AF37]"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 leading-relaxed text-[#9B9B94]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Straight Answers">
      <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
        Questions People Actually Ask
      </h2>
      <div className="mt-10 max-w-3xl">
        {FAQS.map((f, i) => (
          <FaqItem key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------- Footer --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/15">
      <Section>
        <div className="text-center">
          <h2 className="font-serif text-5xl leading-tight text-[#F5F5F5] sm:text-6xl">
            Stop Renting Your Life.
          </h2>
          <p className="mt-4 text-[#9B9B94]">Get the free kit and start today.</p>
          <div className="mx-auto mt-9 max-w-xl">
            <EmailForm buttonLabel="Get the Free Kit" />
          </div>
          <p className="mt-12 font-serif text-2xl italic text-[#D4AF37]">Warren Mitchell</p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#9B9B94]">Austin, TX</p>
        </div>

        <div className="ledger-rule mt-16" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[#9B9B94] sm:flex-row">
          <nav className="flex gap-6">
            <a href="/privacy" className="hover:text-[#F5F5F5]">Privacy</a>
            <a href="/terms" className="hover:text-[#F5F5F5]">Terms</a>
            <a href="/disclaimer" className="hover:text-[#F5F5F5]">Disclaimer</a>
          </nav>
          <p>© 2026 Quiet Wealth</p>
        </div>
        <p className="mt-6 text-center text-[11px] text-[#9B9B94]/70">
          I am not a financial advisor. This is education, not advice.
        </p>
      </Section>
    </footer>
  );
}
