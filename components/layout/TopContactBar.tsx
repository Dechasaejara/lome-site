import Link from "next/link";
import navigation from "@/data/navigation.json";
import { DynamicIcon, type IconName } from "@/components/ui/Icons";

export function TopContactBar() {
  return (
    <div className="hidden border-b border-white/10 bg-brand-green md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
        <div className="flex items-center gap-6">
          {navigation.topContact.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 transition-colors hover:text-brand-lime"
            >
              <DynamicIcon name={item.icon as IconName} className="size-3.5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {navigation.socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="rounded-full p-1.5 transition-colors hover:bg-white/10 hover:text-brand-lime"
            >
              <DynamicIcon name={social.icon as IconName} className="size-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
