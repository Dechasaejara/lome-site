"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import { Menu, X } from "@/components/ui/Icons";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-green/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#home" className="shrink-0">
          <Image
            src="/assets/ffca435a838cc4af7fce51fc18543ad40b406740.png"
            alt="Lome Health"
            width={150}
            height={54}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.headerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-brand-dim transition-colors hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-dim transition-colors hover:text-brand-green"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-2xl bg-brand-green px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-brand-green/25 transition-colors hover:bg-brand-green/90"
          >
            Join Lome
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          className="rounded-xl border border-brand-green/15 p-2 text-brand-green md:hidden"
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-brand-green/10 bg-white transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navigation.headerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-black uppercase tracking-[0.16em] text-brand-green transition-colors hover:bg-brand-beige"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-full border border-brand-green/20 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-green"
            >
              Login
            </button>
            <button
              type="button"
              className="flex-1 rounded-full bg-brand-green px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white"
            >
              Join Lome
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
