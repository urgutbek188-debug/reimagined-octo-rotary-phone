"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { LINKS } from "@/lib/images";

/* ---------------------------------- Button --------------------------------- */

export function GoldButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold tracking-wide text-black transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] " +
    className;
  if (href)
    return (
      <a href={href} className={base} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}

/* ------------------------------ Section wrapper ----------------------------- */

export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {eyebrow && (
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
          {eyebrow}
        </p>
      )}
      {children}
    </motion.section>
  );
}

/* -------------------------------- Email form -------------------------------- */

export function EmailForm({ buttonLabel = "Send Me The Kit", compact = false }: { buttonLabel?: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    try {
      // MailerLite JSONP-style endpoint accepts standard form POSTs.
      await fetch(LINKS.mailerliteAction, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done")
    return (
      <p className="rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-4 text-sm text-[#F5F5F5]">
        Done. Check your inbox — the kit is on its way. If you don&apos;t see it, look in Promotions.
      </p>
    );

  return (
    <form onSubmit={handleSubmit} className={`flex w-full flex-col gap-3 ${compact ? "" : "sm:flex-row"}`}>
      <input
        type="text"
        name="fields[name]"
        placeholder="First name"
        required
        className="h-12 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-[#F5F5F5] placeholder:text-[#9B9B94] focus:border-[#D4AF37]/60 focus:outline-none"
      />
      <input
        type="email"
        name="fields[email]"
        placeholder="Email address"
        required
        className="h-12 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-[#F5F5F5] placeholder:text-[#9B9B94] focus:border-[#D4AF37]/60 focus:outline-none"
      />
      <GoldButton type="submit" className="h-12 shrink-0">
        {status === "loading" ? "Sending…" : buttonLabel}
      </GoldButton>
      {status === "error" && (
        <p className="text-xs text-red-400">Something went wrong. Try again in a minute.</p>
      )}
    </form>
  );
}
