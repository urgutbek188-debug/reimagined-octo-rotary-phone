"use client";

import Image from "next/image";
import { WARREN } from "@/lib/images";
import { EmailForm, Section } from "./ui";

/* ------------------------------- 2 · The Trap ------------------------------- */

const TRAPS = [
  {
    icon: "🏠",
    head: "A house, a car, a loan",
    body: "That's not success. That's a cage.",
  },
  {
    icon: "💸",
    head: "Your salary disappears in 5 days",
    body: "Because the system is designed that way.",
  },
  {
    icon: "📉",
    head: "Saving money makes you poorer",
    body: "Inflation eats 3% every year you wait.",
  },
];

export function Trap() {
  return (
    <Section eyebrow="The Trap">
      <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-xl md:max-w-none">
          <Image src={WARREN.serious} alt="Warren Mitchell, thinking" fill sizes="(max-width:768px) 80vw, 38vw" className="object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
            The Middle Class Dream Is a Cage
          </h2>
          <div className="mt-10 space-y-8">
            {TRAPS.map((t) => (
              <div key={t.head} className="flex gap-5">
                <span className="text-2xl" aria-hidden>
                  {t.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#F5F5F5]">{t.head}</h3>
                  <p className="mt-1 text-[#9B9B94]">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------- 3 · The Story ------------------------------ */

const TIMELINE = [
  { age: "27", text: "Hid my car from the bank. $180K in debt." },
  { age: "35", text: "Made $300K a year. Still cried in my Porsche." },
  { age: "50", text: "Finally understood: rich people buy hours, not Rolexes." },
  { age: "Today", text: "I teach the blueprint I wish I had at 25." },
];

export function Story() {
  return (
    <Section eyebrow="The Story">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-xl md:max-w-none">
          <Image src={WARREN.story} alt="Warren Mitchell" fill sizes="(max-width:768px) 80vw, 42vw" className="object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
            I Learned This the Hard Way
          </h2>
          <ol className="mt-10 space-y-0">
            {TIMELINE.map((t, i) => (
              <li key={t.age} className="relative flex gap-6 pb-8 last:pb-0">
                {i < TIMELINE.length - 1 && (
                  <span className="absolute left-[2.1rem] top-9 h-full w-px bg-[#D4AF37]/20" aria-hidden />
                )}
                <span className="z-10 flex h-[4.2rem] w-[4.2rem] shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A] font-serif text-sm text-[#D4AF37]">
                  {t.age}
                </span>
                <p className="pt-5 text-[#F5F5F5]">{t.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 border-l-2 border-[#D4AF37] pl-5 text-lg italic text-[#9B9B94]">
            If I can escape, so can you. But only if you stop following broke advice.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- 4 · Free Starter Kit ------------------------- */

export function LeadMagnet() {
  return (
    <Section id="free-kit" eyebrow="Start Here">
      <div className="grid items-center gap-12 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#161410] to-[#0A0A0A] p-7 sm:p-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
            The Quiet Wealth Starter Kit
          </h2>
          <p className="mt-5 max-w-md text-[#9B9B94]">
            7-Day Money Reset + Budget Template + Debt Escape Map. Free. No catch.
          </p>
          <div className="mt-8 max-w-lg">
            <EmailForm />
          </div>
          <p className="mt-4 text-xs text-[#9B9B94]">
            Join 4,127 Americans who started this week. Unsubscribe anytime.
          </p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-xl">
          <Image src={WARREN.hopeful} alt="Warren Mitchell" fill sizes="(max-width:768px) 80vw, 32vw" className="object-cover" loading="lazy" />
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ 5 · What's Inside --------------------------- */

const BULLETS = [
  "Why paying debt first keeps you broke",
  "The 50/30/20 rule that actually works in 2026",
  "Avalanche vs Snowball: pick once, win forever",
  "Where to put your first $1,000 (hint: not savings)",
  "The 1-page budget that stops money fights",
  "Warren's 12 Rules for Quiet Wealth",
];

export function Inside() {
  return (
    <Section eyebrow="Inside the Kit">
      <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
        What You&apos;ll Learn in 7 Days
      </h2>
      <ul className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <svg className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29 6.3-6.3a1 1 0 0 1 1.4 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[#F5F5F5]">{b}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
