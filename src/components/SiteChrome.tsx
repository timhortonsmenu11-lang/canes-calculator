import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Calculator,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Info,
  Mail,
  Menu,
  Newspaper,
  ReceiptText,
  ShieldAlert,
  WheatOff,
} from "lucide-react";

const primaryLinks = [
  {
    href: "/",
    label: "Calculator",
    description: "Build a meal and total calories, macros, and nutrition.",
    icon: Calculator,
  },
  {
    href: "/raising-canes-menu",
    label: "Menu & Prices",
    description: "See Cane's combos, sides, drinks, prices, and calories.",
    icon: ReceiptText,
  },
  {
    href: "/#table",
    label: "Nutrition Table",
    description: "Scan item-by-item nutrition facts from the dataset.",
    icon: FileText,
  },
  {
    href: "/allergen-menu",
    label: "Allergen Menu",
    description: "Check wheat, milk, egg, soy, fish, sesame, and more.",
    icon: ShieldAlert,
  },
  {
    href: "/gluten-free-menu",
    label: "Gluten Free",
    description: "Review gluten-sensitive options and cross-contact notes.",
    icon: WheatOff,
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Nutrition guides, payment answers, and ordering tips.",
    icon: Newspaper,
  },
  {
    href: "/about-us",
    label: "About",
    description: "Learn about this independent nutrition guide.",
    icon: Info,
  },
  {
    href: "/contact-us",
    label: "Contact",
    description: "Send corrections, questions, or feedback.",
    icon: Mail,
  },
];

const megaLinks = primaryLinks.slice(1, 6);
const utilityLinks = primaryLinks.slice(6);

const legalLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

function MegaLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group/item flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:shadow-md"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#151515] text-white transition group-hover/item:bg-[#d71920]">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="text-sm font-black text-[#151515]">{label}</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl">
      {/* top utility bar */}
      <div className="hidden border-b border-white/10 bg-[#151515] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs font-bold uppercase text-white/65">
          <p>Independent Cane&apos;s nutrition guide</p>
          <nav className="flex items-center gap-5">
            <Link className="transition hover:text-white" href="/raising-canes-menu">
              Menu &amp; Prices
            </Link>
            <Link className="transition hover:text-white" href="/allergen-menu">
              Allergen Guide
            </Link>
            <Link className="transition hover:text-white" href="/gluten-free-menu">
              Gluten Free
            </Link>
            <Link className="transition hover:text-[#ffd166]" href="/blog">
              Blog
            </Link>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/site-logo.png"
              alt="Cane's Nutrition Calculator logo"
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 rounded-2xl border border-black/10 object-cover shadow-sm sm:h-14 sm:w-14"
              priority
            />
            <span className="min-w-0">
              <span className="block truncate text-base font-black leading-tight tracking-normal sm:text-lg">
                Cane&apos;s Nutrition Calculator
              </span>
              <span className="block truncate text-xs font-bold uppercase text-black/45">
                Calories, macros &amp; allergens
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            <Link
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-black text-black/70 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:text-[#d71920]"
              href="/"
            >
              <Calculator aria-hidden="true" className="h-4 w-4" />
              Calculator
            </Link>

            <div className="group relative">
              <button
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-black text-black/70 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:text-[#d71920]"
                type="button"
              >
                Explore
                <ChevronDown
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute right-0 top-full w-[720px] translate-y-3 rounded-xl border border-black/10 bg-white p-5 opacity-0 shadow-2xl shadow-black/15 transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                <div className="grid gap-5 lg:grid-cols-[0.78fr_1fr]">
                  <div className="rounded-xl bg-[#151515] p-5 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd166]">
                      Menu hub
                    </p>
                    <p className="mt-3 text-2xl font-black leading-tight">
                      Compare menu prices, nutrition, allergens, and gluten
                      notes.
                    </p>
                    <Link
                      href="/raising-canes-menu"
                      className="mt-5 inline-flex rounded-lg bg-[#d71920] px-4 py-3 text-xs font-black uppercase text-white transition hover:bg-[#b9151b]"
                    >
                      View menu
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {megaLinks.map((link) => (
                      <MegaLink key={link.href} {...link} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm font-black text-black/70 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:text-[#d71920]"
                href={link.href}
              >
                <link.icon aria-hidden="true" className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-black/10 bg-[#151515] px-3 py-3 text-sm font-black uppercase text-white transition hover:bg-[#d71920]">
              <Menu aria-hidden="true" className="h-5 w-5" />
              Menu
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 max-h-[calc(100vh-7rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-black/10 bg-white p-3 shadow-2xl shadow-black/20">
              <div className="rounded-xl border border-black/10 bg-[#151515] p-4 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd166]">
                  Quick access
                </p>
                <p className="mt-2 text-lg font-black leading-tight">
                  Menu, nutrition, allergens, and gluten guides.
                </p>
              </div>
              <nav className="mt-3 grid gap-2">
                {primaryLinks.map((link) => (
                  <MegaLink key={link.href} {...link} />
                ))}
              </nav>
            </div>
          </details>
        </div>

        <nav className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5 lg:hidden">
          {primaryLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-black/10 bg-white px-2 py-2 text-center text-xs font-black uppercase text-black/60 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:text-[#d71920]"
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

function AuthorBio() {
  return (
    <section className="mx-auto mb-10 max-w-7xl border border-white/10 bg-white/[0.04] p-5 text-white shadow-2xl shadow-black/20 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-[#ffd166]">
            About the author
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Image
              src="/site-logo.png"
              alt="Cane's Nutrition Calculator editorial team"
              width={58}
              height={58}
              className="h-14 w-14 rounded-2xl border border-white/10 object-cover"
            />
            <div>
              <h2 className="text-2xl font-black leading-tight">
                Cane&apos;s Nutrition Calculator Editorial Team
              </h2>
              <p className="mt-1 text-sm font-bold uppercase text-white/45">
                Fast-food nutrition, menu research, and allergen guides
              </p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-white/70">
            Our independent editorial team organizes Raising Cane&apos;s
            nutrition data, menu details, payment questions, allergen notes, and
            ordering tips into practical guides for everyday customers. We write
            for people who want quick answers before they order, then connect
            those answers to useful tools like the meal calculator and nutrition
            table.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border border-white/10 bg-black/20 p-4">
            <Calculator
              aria-hidden="true"
              className="h-5 w-5 text-[#ffd166]"
            />
            <p className="mt-3 font-black text-white">Nutrition data review</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              We organize calories, macros, sodium, protein, and serving-size
              details into clearer page sections.
            </p>
          </div>
          <div className="border border-white/10 bg-black/20 p-4">
            <BookOpenCheck
              aria-hidden="true"
              className="h-5 w-5 text-[#ffd166]"
            />
            <p className="mt-3 font-black text-white">Menu research</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              We compare combos, sides, drinks, menu notes, and ordering
              questions from a customer-first angle.
            </p>
          </div>
          <div className="border border-white/10 bg-black/20 p-4">
            <ShieldAlert
              aria-hidden="true"
              className="h-5 w-5 text-[#ffd166]"
            />
            <p className="mt-3 font-black text-white">Allergen context</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              We flag common allergens, gluten concerns, and cross-contact
              reminders without treating them as medical advice.
            </p>
          </div>
          <div className="border border-white/10 bg-black/20 p-4">
            <ClipboardCheck
              aria-hidden="true"
              className="h-5 w-5 text-[#ffd166]"
            />
            <p className="mt-3 font-black text-white">Practical checks</p>
            <p className="mt-1 text-sm leading-6 text-white/55">
              We keep guidance practical, source-aware, and focused on what
              helps before ordering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#151515] px-4 py-10 text-white sm:px-6 lg:px-8">
      <AuthorBio />
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
