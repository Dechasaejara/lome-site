"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import content from "@/data/content.json";
import { Calculator, Check, LoaderCircle } from "@/components/ui/Icons";

type PlanType = "Individual" | "Family" | "Group";

type EstimateResult = {
  monthly: number;
  annual: number;
};

const baseRates: Record<PlanType, number> = {
  Individual: 2200,
  Family: 6200,
  Group: 4900,
};

export function CalculatorSection() {
  const [planType, setPlanType] = useState<PlanType>("Individual");
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("");
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimateResult, setEstimateResult] = useState<EstimateResult | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const calculateQuote = () => {
    const ageFactor = age < 26 ? 0.9 : age < 41 ? 1 : age < 56 ? 1.22 : 1.5;
    const genderFactor = gender === "Male" ? 1.05 : gender === "Female" ? 0.97 : 1;
    const monthly = Math.round(baseRates[planType] * ageFactor * genderFactor);

    return {
      monthly,
      annual: monthly * 12,
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEstimating(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setEstimateResult(calculateQuote());
      setIsEstimating(false);
    }, 900);
  };

  return (
    <section id="calculator" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-brand-green/10 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-green">
              {content.calculator.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-brand-green sm:text-5xl">
              {content.calculator.title}
            </h2>
            <p className="mt-4 text-lg text-brand-green/55">{content.calculator.description}</p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.16em] text-brand-green">
                  Plan Type
                </label>
                <div className="grid grid-cols-3 rounded-2xl border border-brand-green/15 bg-brand-beige p-1">
                  {content.calculator.plans.map((plan) => {
                    const isActive = planType === plan;

                    return (
                      <button
                        type="button"
                        key={plan}
                        onClick={() => setPlanType(plan as PlanType)}
                        className={`rounded-xl px-3 py-3 text-sm font-black transition-colors ${
                          isActive
                            ? "bg-white text-brand-green shadow"
                            : "text-brand-muted hover:text-brand-green"
                        }`}
                      >
                        {plan}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-brand-green"
                >
                  Your Age
                </label>
                <input
                  id="age"
                  type="number"
                  min={18}
                  max={95}
                  value={age}
                  onChange={(event) => setAge(Number(event.target.value) || 0)}
                  className="w-full rounded-2xl border border-brand-green/15 px-4 py-3 text-brand-green outline-none ring-brand-lime/40 transition focus:ring-4"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-brand-green"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  className="w-full rounded-2xl border border-brand-green/15 bg-white px-4 py-3 text-brand-green outline-none ring-brand-lime/40 transition focus:ring-4"
                  required
                >
                  <option value="">Select one</option>
                  {content.calculator.genderOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isEstimating}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-green/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isEstimating ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Estimating...
                  </>
                ) : (
                  <>
                    <Calculator className="size-4" />
                    Get Estimate
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] bg-brand-green p-7 text-white shadow-2xl shadow-brand-green/25 sm:p-9">
            <h3 className="text-3xl font-black tracking-[-0.03em]">Instant Quotes, Real Coverage</h3>

            <div className="mt-6 rounded-2xl bg-white/10 p-6 transition-all duration-300">
              {estimateResult ? (
                <div className="space-y-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-lime">
                    {planType} Plan
                  </p>
                  <p className="text-5xl font-black tracking-[-0.04em]">
                    ETB {estimateResult.monthly.toLocaleString()}
                    <span className="ml-1 text-lg font-bold text-white/70">/month</span>
                  </p>
                  <p className="text-sm text-white/70">
                    Approx. ETB {estimateResult.annual.toLocaleString()} per year
                  </p>
                </div>
              ) : (
                <p className="text-base leading-7 text-white/70">
                  Fill in the details on the left to see how Lome can protect
                  you and your loved ones with premium coverage at fair prices.
                </p>
              )}
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Outpatient and inpatient access",
                "Concierge support all week",
                "Fast digital claims processing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-lime/15 text-brand-lime">
                    <Check className="size-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
