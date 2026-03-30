import { Check, DynamicIcon } from "@/components/ui/Icons";

export type Plan = {
  name: string;
  description: string;
  features: string[];
  buttonLabel: string;
  icon: "individual" | "family" | "group";
};

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article className="rounded-[2rem] border border-brand-green/10 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 inline-flex rounded-2xl bg-brand-beige p-4 text-brand-green">
        <DynamicIcon name={plan.icon} className="size-8" />
      </div>
      <h3 className="text-2xl font-black tracking-[-0.02em] text-brand-green">
        {plan.name}
      </h3>
      <p className="mt-4 text-sm leading-6 text-brand-muted">{plan.description}</p>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-bold text-stone-700">
            <span className="inline-flex size-5 items-center justify-center rounded-full border border-brand-green/15 bg-brand-beige/70 text-brand-green">
              <Check className="size-3.5" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-8 rounded-2xl bg-brand-green px-6 py-3 text-sm font-black tracking-[0.08em] text-white uppercase transition-colors hover:bg-brand-green/90"
      >
        {plan.buttonLabel}
      </button>
    </article>
  );
}
