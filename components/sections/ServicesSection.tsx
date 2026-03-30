import content from "@/data/content.json";
import { PlanCard, type Plan } from "@/components/cards/PlanCard";

export function ServicesSection() {
  return (
    <section id="services" className="pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-green">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-brand-green sm:text-5xl">
            Comprehensive Protection for Every Life
          </h2>
          <p className="mt-5 text-lg text-brand-green/60">
            Choose the plan that fits your vision. We offer flexibility for the
            modern world.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan as Plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
