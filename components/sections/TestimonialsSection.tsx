import content from "@/data/content.json";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-brand-beige py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-green">
            {content.testimonialsIntro.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-brand-green sm:text-5xl">
            {content.testimonialsIntro.title}
          </h2>
          <p className="mt-5 text-lg text-brand-green/65">
            {content.testimonialsIntro.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
