import Image from "next/image";
import content from "@/data/content.json";
import { Activity, ArrowRight, Calculator, ShieldCheck, Star } from "@/components/ui/Icons";

export function HeroSection() {
  const { hero } = content;

  return (
    <section id="home" className="relative overflow-hidden bg-brand-beige pb-20 pt-10 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-green/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green">
            <span className="mr-2 size-2 rounded-full bg-brand-lime" />
            {hero.badge}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-brand-green sm:text-6xl lg:text-7xl">
            {hero.titleLead}{" "}
            <span className="bg-gradient-to-r from-brand-green to-emerald-700 bg-clip-text text-transparent">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-green/70">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-brand-lime px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-brand-green shadow-lg shadow-brand-green/10"
            >
              {hero.primaryCta}
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-brand-green"
            >
              <Calculator className="size-4" />
              {hero.secondaryCta}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-green/10 pt-6">
            <div className="flex -space-x-3">
              {content.testimonials.map((item) => (
                <Image
                  key={item.name}
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full border-2 border-brand-beige object-cover"
                />
              ))}
              <span className="inline-flex size-12 items-center justify-center rounded-full border-2 border-brand-beige bg-brand-green text-xs font-bold text-white">
                +50k
              </span>
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-brand-lime">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-brand-green/55">
                {hero.trustLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-green/20">
            <Image
              src={hero.heroImage}
              alt="Family protected by Lome Health"
              width={1080}
              height={720}
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/35 via-transparent to-transparent" />
          </div>

          <div className="absolute left-3 top-3 w-[215px] rounded-3xl border border-brand-green/5 bg-white/95 p-5 shadow-xl md:-left-8 md:top-8">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-brand-lime text-brand-green">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="text-sm font-black text-brand-green">{hero.coverCardTitle}</h3>
            <p className="mt-2 text-xs leading-5 text-brand-muted">{hero.coverCardText}</p>
          </div>

          <div className="absolute bottom-3 right-3 flex items-center gap-3 rounded-3xl border-4 border-brand-beige bg-brand-green p-5 shadow-2xl md:-bottom-6 md:-right-6">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-lime text-brand-green">
              <Activity className="size-5" />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/55">
                {hero.supportLabel}
              </p>
              <p className="text-lg font-black text-white">{hero.supportValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
