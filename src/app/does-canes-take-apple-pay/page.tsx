import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  CheckCircle2,
  CreditCard,
  Gift,
  MapPin,
  MessageCircleQuestion,
  Phone,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const pageUrl = "https://canesnutritioncalculator.us/does-canes-take-apple-pay";
const heroImage = "/canes-apple-pay-payment-guide-hero.png";
const supportImage = "/canes-payment-methods-guide.png";

export const metadata: Metadata = {
  title: "Does Cane's Take Apple Pay? Raising Cane's Payment Guide",
  description:
    "Find out if Raising Cane's takes Apple Pay in-store, drive-thru, and app orders, plus official payment methods, backup tips, and safe checkout advice.",
  alternates: {
    canonical: "/does-canes-take-apple-pay",
  },
  openGraph: {
    title: "Does Cane's Take Apple Pay? Raising Cane's Payment Guide",
    description:
      "A practical guide to Apple Pay, drive-thru payments, app checkout, gift cards, cash, and card options at Raising Cane's.",
    url: "/does-canes-take-apple-pay",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1672,
        height: 941,
        alt: "Contactless payment at a fast-food counter for a Raising Cane's Apple Pay guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Cane's Take Apple Pay? Raising Cane's Payment Guide",
    description:
      "Check whether Apple Pay may work at Cane's, plus official payment methods and backup tips.",
    images: [heroImage],
  },
};

const acceptedPayments = [
  { label: "Raising Cane's gift cards", icon: Gift },
  { label: "Cash", icon: BadgeDollarSign },
  { label: "MasterCard", icon: CreditCard },
  { label: "Visa", icon: CreditCard },
  { label: "Discover", icon: CreditCard },
  { label: "American Express", icon: CreditCard },
];

const paymentScenarios = [
  {
    title: "Inside the restaurant",
    icon: WalletCards,
    answer: "Apple Pay may work if the location has contactless payment enabled.",
    detail:
      "Use your iPhone or Apple Watch near the reader. If the terminal does not accept tap-to-pay, switch to card, cash, or a gift card.",
  },
  {
    title: "Drive-thru",
    icon: MessageCircleQuestion,
    answer: "Some locations may accept Apple Pay at the window.",
    detail:
      "Ask before paying so the crew can confirm whether the drive-thru terminal supports contactless payment.",
  },
  {
    title: "Raising Cane's app",
    icon: Smartphone,
    answer: "The app supports pay-ahead ordering, but Apple Pay depends on checkout.",
    detail:
      "Start an order and check the payment screen. If Apple Pay is not shown, add an accepted debit or credit card.",
  },
];

const whyApplePayMayFail = [
  "The location does not have contactless payment enabled.",
  "The drive-thru terminal may not support tap-to-pay.",
  "Apple Pay may not appear in the app checkout flow.",
  "The payment reader may be temporarily down.",
  "The card in Apple Wallet may need bank verification.",
  "Accepted payment methods can vary by restaurant location.",
];

const tips = [
  {
    title: "Ask first at the drive-thru",
    text: "A quick question at the speaker or window can save time before you reach the payment step.",
  },
  {
    title: "Keep a backup card",
    text: "Carry a debit card, credit card, cash, or gift card in case Apple Pay is unavailable.",
  },
  {
    title: "Check app checkout",
    text: "Apple Pay must appear as a payment option in the app before you can use it for that order.",
  },
  {
    title: "Try another Wallet card",
    text: "If one card fails in Apple Wallet, another card may still process normally.",
  },
];

const faqItems = [
  {
    question: "Does Cane's take Apple Pay?",
    answer:
      "Many Raising Cane's locations may accept Apple Pay, but it can vary by restaurant. The official FAQ does not clearly list Apple Pay as a guaranteed payment method, so confirm with your local location.",
  },
  {
    question: "Does Raising Cane's take Apple Pay in the drive-thru?",
    answer:
      "Some locations may accept Apple Pay in the drive-thru, but not all. Ask the crew before paying so you know whether contactless payment is available at that window.",
  },
  {
    question: "Can I use Apple Pay on the Raising Cane's app?",
    answer:
      "The Raising Cane's app supports ordering ahead and paying ahead, but Apple Pay availability depends on the checkout options shown in the app.",
  },
  {
    question: "What payments does Raising Cane's accept?",
    answer:
      "Raising Cane's official FAQ says they accept gift cards, cash, MasterCard, Visa, Discover, and American Express. Accepted credit cards may vary by location.",
  },
  {
    question: "What should I do if Apple Pay does not work at Cane's?",
    answer:
      "Use a backup payment method like cash, debit card, credit card, or a Raising Cane's gift card.",
  },
  {
    question: "Does Cane's accept tap-to-pay?",
    answer:
      "Some locations may support tap-to-pay if their card readers allow contactless payments. Since payment options can vary, ask your local restaurant.",
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

export default function ApplePayGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Does Cane's Take Apple Pay? Raising Cane's Payment Guide",
      description:
        "A practical guide to Apple Pay, drive-thru payments, app checkout, gift cards, cash, and card options at Raising Cane's.",
      image: `${pageUrl.replace("/does-canes-take-apple-pay", "")}${heroImage}`,
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
          name: "Does Cane's Take Apple Pay?",
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
        <span className="text-black/65">Apple Pay Guide</span>
      </nav>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <header className="grid gap-6 border border-black/10 bg-white p-5 shadow-xl shadow-black/5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-8">
          <div>
            <p className="text-sm font-black uppercase text-[#d71920]">
              Payment Guide - Updated May 2026
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Does Cane&apos;s Take Apple Pay?
            </h1>
            <p className="mt-4 text-lg leading-8 text-black/60">
              Many Raising Cane&apos;s locations may accept Apple Pay,
              especially for in-store contactless payments, but availability can
              vary by restaurant. Use this guide to check what usually works,
              what the official FAQ lists, and what backup payment to keep
              ready. If you are planning your order too, compare the{" "}
              <Link
                href="/raising-canes-menu"
                className="font-black text-[#d71920] underline underline-offset-4 hover:text-[#b9151b]"
              >
                Raising Cane&apos;s menu with prices
              </Link>{" "}
              before you pay.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-black uppercase">
              <span className="bg-[#d71920] px-3 py-2 text-white">
                Quick answer
              </span>
              <span className="border border-black/10 bg-[#f8f6ef] px-3 py-2 text-black/55">
                Apple Pay may work
              </span>
              <span className="border border-black/10 bg-[#f8f6ef] px-3 py-2 text-black/55">
                Location can vary
              </span>
            </div>
          </div>
          <div className="overflow-hidden border border-black/10 bg-[#f8f6ef]">
            <Image
              src={heroImage}
              alt="Contactless payment at a fast-food counter for a Cane's Apple Pay guide"
              width={1672}
              height={941}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[0.75fr_1fr]">
          <div className="border border-[#d71920]/25 bg-[#d71920] p-5 text-white shadow-xl shadow-black/10 sm:p-6">
            <p className="text-sm font-black uppercase text-white/75">
              Short answer
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight">
              Yes, Apple Pay may work at many Cane&apos;s locations.
            </h2>
            <p className="mt-4 leading-7 text-white/85">
              It is still smart to keep a card or cash with you because payment
              terminals, drive-thru setups, and app checkout options can vary.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {paymentScenarios.map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-white p-4 shadow-xl shadow-black/5"
              >
                <item.icon className="h-6 w-6 text-[#d71920]" aria-hidden="true" />
                <h2 className="mt-3 text-lg font-black leading-tight">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm font-bold leading-6 text-black/55">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <GuideSection title="Does Cane's Take Apple Pay?">
          <p>
            Raising Cane&apos;s may accept Apple Pay at many restaurants, but it
            is not clearly listed as a guaranteed payment method on the official
            Raising Cane&apos;s FAQ. The official FAQ lists Raising Cane&apos;s
            gift cards, cash, MasterCard, Visa, Discover, and American Express,
            and notes that accepted credit cards may vary by location.
          </p>
          <p>
            So, if you are asking whether Cane&apos;s takes Apple Pay, the
            practical answer is: it may work at many locations, but confirm at
            your local restaurant before depending on it. Once you know how you
            will pay, you can use the{" "}
            <Link
              href="/"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
            >
              Cane&apos;s Nutrition Calculator
            </Link>{" "}
            to check your meal calories and macros before ordering.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {acceptedPayments.map((payment) => (
              <div
                key={payment.label}
                className="flex items-center gap-3 border border-black/10 bg-[#f8f6ef] p-3"
              >
                <payment.icon
                  className="h-5 w-5 shrink-0 text-[#d71920]"
                  aria-hidden="true"
                />
                <p className="font-black text-black/70">{payment.label}</p>
              </div>
            ))}
          </div>
        </GuideSection>

        <section className="overflow-hidden border border-black/10 bg-white shadow-xl shadow-black/5">
          <Image
            src={supportImage}
            alt="Fast-food payment methods including phone, card, cash, gift card, and app checkout"
            width={1672}
            height={941}
            className="h-auto w-full object-cover"
          />
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {paymentScenarios.map((item) => (
            <GuideSection key={item.title} title={item.title}>
              <p className="font-bold text-[#151515]">{item.answer}</p>
              <p>{item.detail}</p>
            </GuideSection>
          ))}
        </div>

        <GuideSection title="How to Use Apple Pay Inside Raising Cane's">
          <p>
            If the restaurant has contactless payment enabled, you can usually
            pay with your iPhone or Apple Watch the same way you would use a
            tap-to-pay card. If you are choosing a combo while you wait, the{" "}
            <Link
              href="/calories-in-raising-canes-chicken-fingers"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
            >
              chicken fingers calorie guide
            </Link>{" "}
            can help you quickly estimate the main part of your meal.
          </p>
          <ol className="grid gap-3">
            {[
              "Open Apple Wallet or double-click the side button.",
              "Choose your card.",
              "Use Face ID, Touch ID, or your passcode.",
              "Hold your iPhone or Apple Watch near the card reader.",
              "Wait for the payment confirmation.",
            ].map((step, index) => (
              <li
                key={step}
                className="flex gap-3 border border-black/10 bg-[#f8f6ef] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#151515] text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="font-bold leading-7 text-black/65">{step}</p>
              </li>
            ))}
          </ol>
        </GuideSection>

        <GuideSection title="Why Apple Pay May Not Work at Some Cane's Locations">
          <p>
            Apple Pay is convenient, but fast-food payment setups are not always
            identical from one restaurant to another.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyApplePayMayFail.map((item) => (
              <p
                key={item}
                className="flex gap-3 border border-black/10 bg-[#fff8ef] p-3 font-bold leading-7 text-black/65"
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

        <GuideSection title="Tips Before Using Apple Pay at Cane's">
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

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <GuideSection title="Is Apple Pay Safe to Use at Raising Cane's?">
            <p>
              Yes, Apple Pay is generally a safe payment option when it is
              accepted. It does not share your actual card number with the
              merchant. Instead, Apple Pay uses device-based payment security,
              which can be safer than handing over a physical card.
            </p>
          <p>
            For quick fast-food orders, it is also convenient because you do
            not need to carry cash or pull out your card. If food sensitivity is
            part of your ordering decision, check the{" "}
            <Link
              href="/allergen-menu"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
            >
              Raising Cane&apos;s allergen menu
            </Link>{" "}
            before you finalize the order.
          </p>
          </GuideSection>

          <section className="border border-black/10 bg-[#151515] p-5 text-white shadow-xl shadow-black/10 sm:p-8">
            <ShieldCheck className="h-8 w-8 text-[#ffd166]" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Best backup plan
            </h2>
            <p className="mt-4 leading-8 text-white/70">
              Try Apple Pay, but keep one accepted payment method ready: cash, a
              major card, or a Raising Cane&apos;s gift card.
            </p>
            <Link
              href="/raising-canes-menu"
              className="mt-6 inline-flex bg-[#d71920] px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-[#b9151b]"
            >
              View menu prices
            </Link>
          </section>
        </section>

        <GuideSection title="Final Answer">
          <p>
            Raising Cane&apos;s may accept Apple Pay at many locations,
            especially where contactless payments are supported, but it is not
            clearly listed as a guaranteed payment method on the official FAQ.
          </p>
          <p>
            For the safest experience, try Apple Pay at the counter or ask first
            at the drive-thru. If you are ordering in the app, check whether
            Apple Pay appears at checkout. Always keep a backup payment method
            in case Apple Pay is not available. For gluten-sensitive orders,
            review the{" "}
            <Link
              href="/gluten-free-menu"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
            >
              Raising Cane&apos;s gluten free menu guide
            </Link>{" "}
            before relying on any item.
          </p>
        </GuideSection>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Helpful guides before you order
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            Plan the Payment and the Meal Together
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/",
                title: "Build your meal total",
                text: "Use the calculator for calories, macros, protein, sodium, and meal totals.",
              },
              {
                href: "/raising-canes-menu",
                title: "Check menu prices",
                text: "Compare combos, sides, sauces, drinks, and prices before checkout.",
              },
              {
                href: "/allergen-menu",
                title: "Review allergens",
                text: "Check wheat, milk, egg, soy, fish, sesame, and cross-contact notes.",
              },
              {
                href: "/calories-in-raising-canes-chicken-fingers",
                title: "Estimate chicken calories",
                text: "See calories and protein for tenders, combos, and popular meal sizes.",
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

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Payment FAQs
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            FAQs About Cane&apos;s and Apple Pay
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
            Payment method wording is based on the{" "}
            <a
              href="https://www.raisingcanes.com/faq/"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              rel="noopener noreferrer"
              target="_blank"
            >
              official Raising Cane&apos;s FAQ
            </a>{" "}
            and app pay-ahead wording from the{" "}
            <a
              href="https://apps.apple.com/us/app/raising-canes-chicken-fingers/id1530642656"
              className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              rel="noopener noreferrer"
              target="_blank"
            >
              official App Store listing
            </a>
            .
          </p>
          <p className="mt-3">
            This independent guide is for general payment planning only. Actual
            payment availability can vary by location, terminal, and checkout
            flow.
          </p>
        </section>

        <section className="border border-black/10 bg-[#151515] p-8 text-center text-white shadow-xl shadow-black/10 sm:p-12">
          <Phone className="mx-auto h-8 w-8 text-[#ffd166]" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-black leading-tight">
            Ordering food too?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
            Before you pay, use the nutrition calculator to check your meal
            totals for calories, protein, sodium, and allergens. It pairs well
            with the menu guide when you are deciding between a smaller combo
            and a larger order.
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
