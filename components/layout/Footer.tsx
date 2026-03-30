import Image from "next/image";
import Link from "next/link";
import navigation from "@/data/navigation.json";
import { DynamicIcon, type IconName } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-green pt-14 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Image
              src="/assets/ffca435a838cc4af7fce51fc18543ad40b406740.png"
              alt="Lome Health"
              width={180}
              height={64}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm leading-7 text-white/70">
              Pioneering next-gen health insurance in Ethiopia. We blend
              cutting-edge technology with human-centric care to ensure you live
              uninterrupted.
            </p>
          </div>

          {navigation.footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-lime">
                {column.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link} className="flex items-center gap-2 text-sm text-white/75">
                    <span className="size-1.5 rounded-full bg-brand-lime" />
                    <Link href="#" className="transition-colors hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-lime">
              Connect
            </h3>
            <div className="mt-6 space-y-4">
              {navigation.topContact.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <span className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-brand-lime">
                    <DynamicIcon name={item.icon as IconName} className="size-4" />
                  </span>
                  <span className="text-sm text-white">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-[11px] font-black uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lome Health. Live Uninterrupted.</p>
          <div className="flex items-center gap-4">
            {navigation.legalLinks.map((item) => (
              <Link key={item} href="#" className="transition-colors hover:text-white/70">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
