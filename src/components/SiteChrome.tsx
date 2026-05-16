import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { href: "/", label: "Calculator" },
  { href: "/#table", label: "Nutrition table" },
  { href: "/allergen-menu", label: "Allergen menu" },
  { href: "/gluten-free-menu", label: "Gluten Free" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

const legalLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 shadow-sm shadow-black/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex w-fit items-center gap-3">
          <Image
            src="/site-logo.png"
            alt="Cane's Nutrition Calculator logo"
            width={52}
            height={52}
            className="h-12 w-12 rounded-2xl border border-black/10 object-cover shadow-sm"
            priority
          />
          <span>
            <span className="block text-base font-black leading-tight tracking-normal">
              Cane&apos;s Nutrition Calculator
            </span>
            <span className="block text-xs font-bold uppercase text-black/45">
              Calories, macros & allergens
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm font-bold text-black/60">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              className="border border-black/10 bg-white px-3 py-2 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:text-[#d71920]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#151515] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/60 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/site-logo.png"
              alt="Cane's Nutrition Calculator logo"
              width={46}
              height={46}
              className="h-11 w-11 rounded-2xl border border-white/10 object-cover"
            />
            <p className="text-lg font-black text-white">
              Cane&apos;s Nutrition Calculator
            </p>
          </div>
          <p className="font-semibold text-white/75">
            Cane&apos;s Nutrition Calculator is an independent, fan-made nutrition tool
            for nutrition fans and informational use.
          </p>
          <p className="mt-2 max-w-3xl leading-6">
            This site is not affiliated with, endorsed by, sponsored by, or
            officially connected to Raising Cane&apos;s Restaurants, LLC. All
            names, logos, trademarks, and menu references belong to their
            respective owners. Nutrition and allergen information is based on
            Raising Cane&apos;s nutritional data provided for this project.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:justify-end">
          <div>
            <p className="font-black uppercase text-white/90">Site</p>
            <nav className="mt-3 grid gap-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  className="font-bold text-white/65 transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-black uppercase text-white/90">Legal</p>
            <nav className="mt-3 grid gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  className="font-bold text-white/65 transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
