import Image from "next/image";
import { Star } from "@/components/ui/Icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

type TestimonialCardProps = {
  item: Testimonial;
};

export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-brand-green/10 bg-brand-beige p-8">
      <div className="flex items-center gap-1 text-brand-green">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>

      <p className="mt-6 text-base italic leading-7 text-brand-green">{item.quote}</p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={52}
          height={52}
          className="size-13 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-black text-brand-green">{item.name}</p>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-green/55">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}
