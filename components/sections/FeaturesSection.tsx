import Image from "next/image";
import content from "@/data/content.json";
import { Check, ChevronRight } from "@/components/ui/Icons";

export function FeaturesSection() {
  const { featuresIntro } = content;

  return (
    <section id="about" className="bg-brand-beige py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-green">
            {featuresIntro.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-brand-green sm:text-5xl">
            {featuresIntro.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-green/70">
            {featuresIntro.description}
          </p>

          <div className="mt-8 space-y-4">
            {content.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-brand-green/10 bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-7 items-center justify-center rounded-full bg-brand-beige text-brand-green">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.07em] text-brand-green">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-brand-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
          >
            {featuresIntro.cta}
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand-green/20">
            <Image
              src={content.featuresImage}
              alt="Lome member"
              width={1080}
              height={1620}
              className="h-[600px] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4 rounded-3xl bg-brand-lime px-7 py-6 text-right shadow-xl md:-bottom-6 md:-right-6">
            <p className="text-4xl font-black leading-none tracking-[-0.05em] text-brand-green">
              LIVE
            </p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-brand-green/70">
              Uninterrupted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
