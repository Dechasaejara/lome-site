import content from "@/data/content.json";
import { DynamicIcon, type IconName } from "@/components/ui/Icons";

export function StatsSection() {
  return (
    <section className="relative z-10 -mt-12 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2.5rem] border-4 border-brand-beige bg-brand-green px-5 py-8 shadow-2xl shadow-brand-green/25 sm:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {content.stats.map((item) => (
              <div key={item.label} className="text-center">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand-lime">
                  <DynamicIcon name={item.icon as IconName} className="size-6" />
                </span>
                <p className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
