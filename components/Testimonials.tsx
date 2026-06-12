"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./ui";

// Illustrative comments styled as IG/YT screenshots — labeled in fine print.
const COMMENTS = [
  { handle: "@mike.texas", platform: "IG", likes: "1.2K", text: "Comment TRAP changed how I see my car loan", time: "2d" },
  { handle: "@dave_44", platform: "YT", likes: "847", text: "I hid this from my wife. We paid $8k debt in 90 days", time: "1w" },
  { handle: "@sarah.saves", platform: "IG", likes: "2.4K", text: "Why don't they teach this in school?", time: "3d" },
  { handle: "@j.ramirez88", platform: "YT", likes: "612", text: "Cancelled 3 subscriptions before the video even ended", time: "5d" },
  { handle: "@ohio_dad_of3", platform: "IG", likes: "934", text: "First financial guy that doesn't make me feel stupid", time: "1d" },
  { handle: "@kc_hustle", platform: "YT", likes: "1.8K", text: "My grandpa never taught me this. Warren did.", time: "4d" },
];

function CommentCard({ c }: { c: (typeof COMMENTS)[number] }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-xl border border-white/10 bg-[#141413] p-5 sm:w-[340px]">
      <figcaption className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xs font-bold text-[#D4AF37]">
          {c.handle.slice(1, 3).toUpperCase()}
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#F5F5F5]">{c.handle}</p>
          <p className="text-[11px] text-[#9B9B94]">
            {c.platform === "IG" ? "Instagram" : "YouTube"} · {c.time}
          </p>
        </div>
      </figcaption>
      <blockquote className="mt-3 text-sm leading-relaxed text-[#F5F5F5]">{c.text}</blockquote>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-[#9B9B94]">
        <svg className="h-3.5 w-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2.4 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.6 0 5.6 3.6 4 6.7C19.5 16.1 12 21 12 21z" />
        </svg>
        {c.likes} · Reply
      </p>
    </figure>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();
  const loop = [...COMMENTS, ...COMMENTS];

  return (
    <Section eyebrow="From the Comments" className="!max-w-none !px-0">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-serif text-4xl leading-tight text-[#F5F5F5] sm:text-5xl">
          50,000 People Are Already Walking Out
        </h2>
      </div>

      {/* Marquee carousel — drag to scrub, pauses on hover */}
      <div className="group relative mt-12 overflow-hidden" aria-label="Audience comments carousel">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent" />
        <motion.div
          className="flex w-max cursor-grab gap-5 px-5 [animation:none] group-hover:[animation-play-state:paused] active:cursor-grabbing"
          drag={reduce ? false : "x"}
          dragConstraints={{ left: -1600, right: 0 }}
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={reduce ? undefined : { duration: 48, ease: "linear", repeat: Infinity }}
        >
          {loop.map((c, i) => (
            <CommentCard key={`${c.handle}-${i}`} c={c} />
          ))}
        </motion.div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-[#9B9B94] sm:px-8">
        Comments are illustrative of audience responses across Warren&apos;s channels.
      </p>
    </Section>
  );
}
