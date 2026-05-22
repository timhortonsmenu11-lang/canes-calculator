import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin,
  Moon,
  Search,
  Smartphone,
  Store,
  Utensils,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const pageUrl =
  "https://canesnutritioncalculator.us/is-raising-canes-open-on-sundays";
const heroImage = "/raising-canes-sunday-hours-hero.png";
const checkerImage = "/raising-canes-sunday-hours-checker.png";

export const metadata: Metadata = {
  title: "Is Raising Cane's Open on Sundays? Cane's Sunday Guide 2026",
  description:
    "Find out if Raising Cane's is open on Sundays, what time Cane's opens and closes, drive-thru hours, holiday changes, and how to check local hours.",
  alternates: {
    canonical: "/is-raising-canes-open-on-sundays",
  },
  openGraph: {
    title: "Is Raising Cane's Open on Sundays? Cane's Sunday Guide 2026",
    description:
      "Check Raising Cane's Sunday hours, drive-thru timing, lobby hours, late-night visits, holiday changes, and how to verify your local store.",
    url: "/is-raising-canes-open-on-sundays",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1672,
        height: 941,
        alt: "Fast-food restaurant exterior on a Sunday for a Raising Cane's hours guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Raising Cane's Open on Sundays? Cane's Sunday Guide 2026",
    description:
      "See how Sunday hours work at Raising Cane's and how to check your local restaurant before visiting.",
    images: [heroImage],
  },
};

const quickFacts = [
  {
    title: "Usually open",
    value: "Yes",
    detail: "Most active locations treat Sunday as a normal business day.",
    icon: CheckCircle2,
  },
  {
    title: "Typical opening",
    value: "Late morning",
    detail: "Many locations show 10:00 a.m. or 10:30 a.m., but not all.",
    icon: Clock,
  },
  {
    title: "Best check",
    value: "Local hours",
    detail: "Use the official location finder before you drive over.",
    icon: MapPin,
  },
];

const hourFactors = [
  "Restaurant location",
  "City or local rules",
  "Drive-thru demand",
  "Mall or shopping center schedule",
  "Holiday hours",
  "Local restaurant management",
  "New store opening schedules",
];

const checkMethods = [
  "Official Raising Cane's location finder",
  "Google Maps",
  "Apple Maps",
  "Raising Cane's app or website",
  "The restaurant's direct phone number",
  "Food delivery apps, if you are ordering delivery",
];

const tips = [
  {
    title: "Check your local store hours first",
    text: "Do not rely on one national schedule. Cane's hours are location-based.",
  },
  {
    title: "Check holiday Sundays separately",
    text: "If Sunday falls on Easter or another major holiday, hours may change.",
  },
  {
    title: "Use the app or website before leaving",
    text: "If online ordering is available for your selected time, that is a good sign the location is open.",
  },
  {
    title: "Call before a late-night visit",
    text: "This is the safest move if you are going close to closing time.",
  },
  {
    title: "Check lobby and drive-thru hours",
    text: "Some locations show different hours for dine-in and drive-thru service.",
  },
];

const faqItems = [
  {
    question: "Is Raising Cane's open on Sundays?",
    answer:
      "Yes, Raising Cane's is usually open on Sundays, but exact hours vary by location. Check the official location finder before visiting.",
  },
  {
    question: "What time does Raising Cane's open on Sunday?",
    answer:
      "Many locations open around 10:00 a.m. or 10:30 a.m., but your local restaurant may have different Sunday hours.",
  },
  {
    question: "What time does Raising Cane's close on Sunday?",
    answer:
      "Some locations close around 10 p.m., midnight, or later, depending on the restaurant and city.",
  },
  {
    question: "Is Cane's drive-thru open on Sunday?",
    answer:
      "Many Cane's drive-thrus are open on Sundays, but drive-thru hours can vary by location and may differ from lobby hours.",
  },
  {
    question: "Is Raising Cane's open late on Sunday?",
    answer:
      "Some locations are open late on Sundays, especially in busy areas, but not every location stays open late.",
  },
  {
    question: "Is Raising Cane's open on Easter Sunday?",
    answer:
      "Holiday Sundays can affect hours or closures. If Sunday falls on Easter or another major holiday, check your local restaurant before visiting.",
  },
];

function GuideSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
      {eyebrow ? (
        <p className="text-sm font-black uppercase text-[#d71920]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-black leading-tight text-[#151515]">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-black/65">
        {children}
      </div>
    </section>
  );
}

export default function SundayHoursPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Is Raising Cane's Open on Sundays? Cane's Sunday Guide 2026",
      description:
        "A practical guide to Raising Cane's Sunday hours, opening and closing times, drive-thru hours, holiday changes, and how to check local hours.",
      image: `${pageUrl.replace("/is-raising-canes-open-on-sundays", "")}${heroImage}`,
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      author: {
        "@type": "Organization",
        name: "Cane's Nutrition Calculator Editorial Team",
      },
      publisher: {
        "@type": "Organization",
        name: "Cane's Nutrition Calculator",
        logo: {
          "@type": "ImageObject",
          url: "https://canesnutritioncalculator.us/site-logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://canesnutritioncalculator.us/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://canesnutritioncalculator.us/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Is Raising Cane's Open on Sundays?",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      {jsonLd.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <SiteHeader />

      <nav className="mx-auto max-w-5xl px-4 pt-6 text-xs font-bold text-black/45 sm:px-6">
        <Link href="/" className="hover:text-[#d71920]">
          Home
        </Link>
        <span className="mx-1">/</span>
        <Link href="/blog" className="hover:text-[#d71920]">
          Blog
        </Link>
        <span className="mx-1">/</span>
        <span className="text-black/65">Sunday Hours Guide</span>
      </nav>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <header className="grid gap-6 border border-black/10 bg-white p-5 shadow-xl shadow-black/5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-8">
          <div>
            <p className="text-sm font-black uppercase text-[#d71920]">
              Hours Guide - Updated May 2026
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Is Raising Cane&apos;s Open on Sundays?
            </h1>
            <p className="mt-4 text-lg leading-8 text-black/60">
              Yes, Raising Cane&apos;s is usually open on Sundays, but exact
              opening and closing hours can vary by location. Before you make a
              trip for chicken fingers, fries, Texas toast, or Cane&apos;s
              Sauce, check your local store hours and compare the{" "}
              <Link
                href="/raising-canes-menu"
                className="font-black text-[#d71920] underline underline-offset-4 hover:text-[#b9151b]"
              >
                Raising Cane&apos;s menu with prices
              </Link>{" "}
              so you know what you want before you arrive.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-black uppercase">
              <span className="bg-[#d71920] px-3 py-2 text-white">
                Quick answer
              </span>
              <span className="border border-black/10 bg-[#f8f6ef] px-3 py-2 text-black/55">
                Usually open Sunday
              </span>
              <span className="border border-black/10 bg-[#f8f6ef] px-3 py-2 text-black/55">
                Hours vary locally
              </span>
            </div>
          </div>
          <div className="overflow-hidden border border-black/10 bg-[#f8f6ef]">
            <Image
              src={heroImage}
              alt="Fast-food restaurant exterior on a Sunday for a Raising Cane's hours guide"
              width={1672}
              height={941}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </header>

        <section className="grid gap-3 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <article
              key={fact.title}
              className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5"
            >
              <fact.icon className="h-6 w-6 text-[#d71920]" aria-hidden="true" />
              <p className="mt-4 text-xs font-black uppercase text-black/40">
                {fact.title}
              </p>
              <h2 className="mt-1 text-2xl font-black leading-tight">
                {fact.value}
              </h2>
              <p className="mt-2 text-sm font-bold leading-6 text-black/55">
                {fact.detail}
              </p>
            </article>
          ))}
        </section>

        <GuideSection title="Is Raising Cane's Open on Sunday?">
          <p>
            Yes, Raising Cane&apos;s is generally open on Sunday. For most
            active restaurants, Sunday is a normal business day for ordering
            chicken fingers, crinkle-cut fries, Texas toast, Cane&apos;s Sauce,
            or a full Box Combo.
          </p>
          <p>
            The important detail is that Sunday hours are not identical at every
            location. One restaurant may close around midnight, another may stay
            open later, and some special locations or temporarily closed stores
            can show different hours. That is why the official location finder
            is the safest place to confirm hours before you go.
          </p>
          <p>
            If you are planning your meal as well as your trip, use the{" "}
            <Link
              href="/"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
            >
              Cane&apos;s Nutrition Calculator
            </Link>{" "}
            to check calories, macros, sodium, and protein before ordering.
          </p>
        </GuideSection>

        <section className="overflow-hidden border border-black/10 bg-white shadow-xl shadow-black/5">
          <Image
            src={checkerImage}
            alt="Phone, calendar, and clock showing how to check Raising Cane's Sunday hours"
            width={1672}
            height={941}
            className="h-auto w-full object-cover"
          />
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <GuideSection title="What Time Does Raising Cane's Open on Sunday?">
            <p>
              Raising Cane&apos;s Sunday opening time can vary, but many
              locations open around 10:00 a.m. or 10:30 a.m. Some stores may
              open earlier or later depending on the area.
            </p>
            <p>
              Official location pages show the exact hours for each restaurant,
              so use your nearest location page instead of relying on one
              national schedule.
            </p>
          </GuideSection>

          <GuideSection title="What Time Does Raising Cane's Close on Sunday?">
            <p>
              Sunday closing time also depends on location. Some restaurants
              close around 10 p.m. or midnight, while late-night locations may
              stay open much later.
            </p>
            <p>
              Official location examples show Sunday hours like 10:00 a.m. to
              midnight at some restaurants, while other busy areas can run
              later. If you want a late Sunday order, check before driving over.
            </p>
          </GuideSection>
        </div>

        <GuideSection title="Are Raising Cane's Sunday Hours the Same Everywhere?">
          <p>
            No. Raising Cane&apos;s Sunday hours are location-based. That is
            normal for a fast-food chain with standalone stores, drive-thru
            restaurants, mall-area locations, and late-night city restaurants.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hourFactors.map((item) => (
              <p
                key={item}
                className="flex gap-3 border border-black/10 bg-[#f8f6ef] p-3 font-bold leading-7 text-black/65"
              >
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-[#d71920]"
                  aria-hidden="true"
                />
                {item}
              </p>
            ))}
          </div>
        </GuideSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <GuideSection title="Is Raising Cane's Drive-Thru Open on Sundays?">
            <p>
              Many Raising Cane&apos;s drive-thru lanes are open on Sundays, but
              drive-thru hours can vary by location. Some restaurants keep
              drive-thru and dine-in hours the same, while others show separate
              hours.
            </p>
            <p>
              If you are going close to closing time, check the location page or
              call the restaurant before driving there.
            </p>
          </GuideSection>

          <GuideSection title="Is Raising Cane's Lobby Open on Sundays?">
            <p>
              Usually, yes. Most active Raising Cane&apos;s lobbies are open on
              Sundays during normal business hours. However, dining room hours
              may be shorter than drive-thru hours at some locations.
            </p>
            <p>
              If you need dine-in seating, do not assume the lobby follows the
              same schedule as the drive-thru.
            </p>
          </GuideSection>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <GuideSection title="Is Raising Cane's Open Late on Sunday?">
            <p>
              Some Raising Cane&apos;s locations are open late on Sunday, but
              not all. Sunday is often closer to a weekday schedule, while
              Friday and Saturday can run later.
            </p>
            <p>
              If you are building a late-night order, the{" "}
              <Link
                href="/calories-in-raising-canes-chicken-fingers"
                className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              >
                chicken fingers calorie guide
              </Link>{" "}
              can help you estimate the main calories before you add fries,
              toast, sauce, and drinks.
            </p>
          </GuideSection>

          <section className="border border-black/10 bg-[#151515] p-5 text-white shadow-xl shadow-black/10 sm:p-8">
            <Moon className="h-8 w-8 text-[#ffd166]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Late-night Sunday rule
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              If you are going after dinner rush, verify the specific location.
              A city store, college-area store, and shopping-center store may
              not close at the same time.
            </p>
          </section>
        </section>

        <GuideSection title="How to Check Raising Cane's Sunday Hours Near You">
          <p>
            The easiest way to check Sunday hours is to use the official Raising
            Cane&apos;s location finder. Search your city, ZIP code, or nearby
            area, then open the restaurant page to view store details.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {checkMethods.map((item) => (
              <p
                key={item}
                className="flex gap-3 border border-black/10 bg-[#fff8ef] p-3 font-bold leading-7 text-black/65"
              >
                <Search
                  className="mt-1 h-4 w-4 shrink-0 text-[#d71920]"
                  aria-hidden="true"
                />
                {item}
              </p>
            ))}
          </div>
        </GuideSection>

        <GuideSection title="Is Raising Cane's Open on Sunday Holidays?">
          <p>
            Raising Cane&apos;s may be open on many Sundays, but holiday Sundays
            can be different. Major holidays can affect hours, online ordering,
            lobby access, or full restaurant availability.
          </p>
          <p>
            If Sunday falls on Easter, Christmas Eve, New Year&apos;s Eve, or a
            local holiday weekend, check your nearest location before visiting.
            Holiday hours can change by restaurant and year.
          </p>
        </GuideSection>

        <GuideSection title="Best Time to Visit Raising Cane's on Sunday">
          <p>
            The best time to visit Cane&apos;s on Sunday is usually before the
            lunch rush or between busy meal periods.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-black/10 bg-[#f8f6ef] p-4">
              <Utensils className="h-5 w-5 text-[#d71920]" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-black">Good times to try</h3>
              <ul className="mt-3 grid gap-2 text-sm font-bold leading-6 text-black/60">
                <li>Late morning after opening</li>
                <li>Mid-afternoon</li>
                <li>Early evening before dinner rush</li>
              </ul>
            </div>
            <div className="border border-black/10 bg-[#fff8ef] p-4">
              <AlertTriangle
                className="h-5 w-5 text-[#d71920]"
                aria-hidden="true"
              />
              <h3 className="mt-3 text-xl font-black">Busier times</h3>
              <ul className="mt-3 grid gap-2 text-sm font-bold leading-6 text-black/60">
                <li>12 p.m. to 2 p.m.</li>
                <li>5 p.m. to 8 p.m.</li>
                <li>Late night near college areas</li>
              </ul>
            </div>
          </div>
        </GuideSection>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1fr]">
          <GuideSection title="Can You Order Raising Cane's Online on Sunday?">
            <p>
              Yes, Raising Cane&apos;s lets customers start an online order
              through its official website, but availability depends on your
              selected location and current store hours.
            </p>
            <p>
              If your local Cane&apos;s is closed or not accepting online orders,
              the website or app may not let you place an order for that time.
              If you are checking out from your phone, our{" "}
              <Link
                href="/does-canes-take-apple-pay"
                className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              >
                Cane&apos;s Apple Pay guide
              </Link>{" "}
              explains what to expect from payment options.
            </p>
          </GuideSection>

          <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
            <Smartphone className="h-8 w-8 text-[#d71920]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Before you order
            </h2>
            <p className="mt-4 leading-8 text-black/60">
              If you have allergies or avoid gluten, check the{" "}
              <Link
                href="/allergen-menu"
                className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              >
                Raising Cane&apos;s allergen menu
              </Link>{" "}
              and the{" "}
              <Link
                href="/gluten-free-menu"
                className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              >
                gluten free menu guide
              </Link>{" "}
              before choosing your Sunday meal.
            </p>
          </section>
        </section>

        <GuideSection title="Simple Sunday Ordering Tips">
          <div className="grid gap-3 sm:grid-cols-2">
            {tips.map((tip) => (
              <article
                key={tip.title}
                className="border border-black/10 bg-[#f8f6ef] p-4"
              >
                <CheckCircle2
                  className="h-5 w-5 text-[#d71920]"
                  aria-hidden="true"
                />
                <p className="mt-3 font-black text-[#151515]">{tip.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/55">{tip.text}</p>
              </article>
            ))}
          </div>
        </GuideSection>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Helpful guides before you go
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            Plan Your Sunday Cane&apos;s Visit
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/raising-canes-menu",
                title: "Check menu prices",
                text: "Compare combos, sides, sauces, drinks, and current menu notes.",
              },
              {
                href: "/",
                title: "Calculate your meal",
                text: "Build your Cane's order and check calories, macros, protein, and sodium.",
              },
              {
                href: "/does-canes-take-apple-pay",
                title: "Review payment options",
                text: "See whether Apple Pay may work and what backup payment to keep ready.",
              },
              {
                href: "/allergen-menu",
                title: "Check allergens",
                text: "Review allergen and cross-contact notes before choosing your meal.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-black/10 bg-[#f8f6ef] p-4 transition hover:border-[#d71920]/30 hover:bg-[#fff8ef]"
              >
                <p className="font-black text-[#151515] group-hover:text-[#d71920]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <GuideSection title="Final Answer">
          <p>
            Raising Cane&apos;s is usually open on Sundays, but exact hours
            depend on the location. Many locations open around late morning and
            close at night, while some may stay open late.
          </p>
          <p>
            The safest way to confirm Sunday hours is to check the official
            Raising Cane&apos;s location finder or call your local restaurant
            before visiting. If Sunday falls on a holiday, verify again before
            making the trip.
          </p>
        </GuideSection>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Sunday hours FAQs
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            FAQs About Raising Cane&apos;s Sunday Hours
          </h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group border border-black/10 bg-[#f8f6ef] open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-black leading-tight">
                    {item.question}
                  </h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#151515] text-white transition group-open:rotate-45 group-open:bg-[#d71920]">
                    +
                  </span>
                </summary>
                <p className="border-t border-black/10 px-4 pb-4 pt-3 leading-7 text-black/60">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="border border-black/10 bg-white p-5 text-sm leading-7 text-black/55 shadow-xl shadow-black/5 sm:p-8">
          <p className="font-black uppercase text-black/35">Sources checked</p>
          <p className="mt-3">
            Sunday-hours guidance is based on the{" "}
            <a
              href="https://locations.raisingcanes.com/"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              rel="noopener noreferrer"
              target="_blank"
            >
              official Raising Cane&apos;s location finder
            </a>{" "}
            and current official location pages such as{" "}
            <a
              href="https://locations.raisingcanes.com/va/glen-allen/10093-brook-road"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Glen Allen, VA
            </a>
            ,{" "}
            <a
              href="https://locations.raisingcanes.com/tx/plano/6010-k-avenue"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plano, TX
            </a>
            , and{" "}
            <a
              href="https://locations.raisingcanes.com/ca/burbank/1750-w-olive-ave"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Burbank, CA
            </a>
            .
          </p>
          <p className="mt-3">
            This independent guide is for planning only. Hours can change by
            restaurant, date, holiday, weather, staffing, and local operations.
          </p>
        </section>

        <section className="border border-black/10 bg-[#151515] p-8 text-center text-white shadow-xl shadow-black/10 sm:p-12">
          <Store className="mx-auto h-8 w-8 text-[#ffd166]" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-black leading-tight">
            Check the Meal Before You Go
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
            Once your Sunday hours are confirmed, build your order and check the
            meal totals before you leave.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex bg-[#d71920] px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-[#b9151b]"
          >
            Open Nutrition Calculator
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
