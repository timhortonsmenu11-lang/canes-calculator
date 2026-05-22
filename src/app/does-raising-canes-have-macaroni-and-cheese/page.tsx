import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  ExternalLink,
  Info,
  Search,
  Utensils,
  XCircle,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const pageUrl =
  "https://canesnutritioncalculator.us/does-raising-canes-have-macaroni-and-cheese";
const heroImage = "/raising-canes-mac-and-cheese-hero.png";
const sidesImage = "/raising-canes-sides-no-mac-and-cheese.png";

export const metadata: Metadata = {
  title: "Does Raising Cane's Have Macaroni and Cheese?",
  description:
    "Find out if Raising Cane's has macaroni and cheese, what sides are on the official menu, secret menu rumors, substitutions, and best alternatives.",
  alternates: {
    canonical: "/does-raising-canes-have-macaroni-and-cheese",
  },
  openGraph: {
    title: "Does Raising Cane's Have Macaroni and Cheese?",
    description:
      "A clear guide to Raising Cane's mac and cheese rumors, official sides, substitutions, and what to order instead.",
    url: "/does-raising-canes-have-macaroni-and-cheese",
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1672,
        height: 941,
        alt: "Raising Cane's style chicken fingers, fries, toast, sauce, and coleslaw without mac and cheese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Raising Cane's Have Macaroni and Cheese?",
    description:
      "See whether mac and cheese is on the official Raising Cane's menu and what sides to order instead.",
    images: [heroImage],
  },
};

const quickFacts = [
  {
    title: "Official answer",
    value: "No",
    detail: "Mac and cheese is not listed on the regular Raising Cane's menu.",
    icon: XCircle,
  },
  {
    title: "Menu focus",
    value: "Chicken fingers",
    detail: "Cane's keeps its menu centered on fingers, fries, toast, sauce, slaw, and drinks.",
    icon: Utensils,
  },
  {
    title: "Best check",
    value: "Official menu",
    detail: "Use the current menu or app before trusting third-party listings.",
    icon: Search,
  },
];

const officialSides = [
  {
    title: "Crinkle-Cut Fries",
    detail:
      "The main hot side at Cane's and the easiest replacement if you wanted a filling side.",
  },
  {
    title: "Texas Toast",
    detail:
      "A warm, buttery side that works well with chicken fingers and Cane's Sauce.",
  },
  {
    title: "Coleslaw",
    detail:
      "A cooler side that comes with several combos and can often be swapped.",
  },
  {
    title: "Cane's Sauce",
    detail:
      "The signature dipping sauce, commonly added as an extra for fries, toast, and fingers.",
  },
];

const rumorReasons = [
  "Social posts sometimes repeat unverified menu claims.",
  "Third-party menu pages can be outdated or inaccurate.",
  "Customers may confuse Cane's with another chicken chain that sells mac and cheese.",
  "A local custom-order story can spread even when it is not a chainwide item.",
  "Secret menu names like Caniac Mac are not shown on the official menu.",
];

const substitutionTips = [
  {
    title: "Swap coleslaw carefully",
    text: "Some locations may let you trade coleslaw for extra fries, extra toast, or extra sauce, but rules can vary.",
  },
  {
    title: "Do not plan around mac",
    text: "Since mac and cheese is not a regular side, it usually cannot be used as a substitution.",
  },
  {
    title: "Check allergens before ordering",
    text: "If dairy, wheat, egg, soy, or fish matters for you, review allergen details before choosing swaps.",
  },
];

const relatedGuides = [
  {
    href: "/raising-canes-menu",
    title: "Raising Cane's Menu Guide",
    text: "See the regular menu items, combos, extras, and useful ordering notes.",
    icon: BookOpenCheck,
  },
  {
    href: "/",
    title: "Cane's Nutrition Calculator",
    text: "Build a meal and estimate calories before you order.",
    icon: Calculator,
  },
  {
    href: "/calories-in-raising-canes-chicken-fingers",
    title: "Chicken Fingers Calories",
    text: "Compare single fingers, Box Combo calories, and Caniac Combo calories.",
    icon: ClipboardList,
  },
];

const faqItems = [
  {
    question: "Does Raising Cane's sell mac and cheese?",
    answer:
      "No, Raising Cane's does not list macaroni and cheese on its regular official menu.",
  },
  {
    question: "Does Cane's have a secret menu mac and cheese?",
    answer:
      "There is no confirmed official secret menu mac and cheese at Raising Cane's. Online claims should be treated carefully unless your local restaurant confirms them directly.",
  },
  {
    question: "What sides does Raising Cane's have?",
    answer:
      "Raising Cane's regular sides include crinkle-cut fries, Texas toast, coleslaw, Cane's Sauce, drinks, and tea.",
  },
  {
    question: "Can I replace coleslaw with mac and cheese at Cane's?",
    answer:
      "No, because mac and cheese is not a regular side at Raising Cane's. Some locations may allow swaps for extra fries, extra toast, or extra sauce instead.",
  },
  {
    question: "Why doesn't Raising Cane's have mac and cheese?",
    answer:
      "Raising Cane's keeps its menu simple and focused on chicken fingers, fries, toast, Cane's Sauce, coleslaw, and drinks. Mac and cheese is not part of that regular lineup.",
  },
  {
    question: "Is mac and cheese coming to Raising Cane's?",
    answer:
      "There is no official confirmation that Raising Cane's is adding mac and cheese to the regular menu. Check the official menu, app, or announcement pages for any future changes.",
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

export default function MacAndCheeseGuidePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Does Raising Cane's Have Macaroni and Cheese?",
      description:
        "A practical guide to whether Raising Cane's has mac and cheese, what the official menu includes, and what sides to order instead.",
      image: `${pageUrl.replace(
        "/does-raising-canes-have-macaroni-and-cheese",
        "",
      )}${heroImage}`,
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
          name: "Does Raising Cane's Have Macaroni and Cheese?",
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
        <span className="text-black/65">Mac and Cheese Guide</span>
      </nav>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <article className="overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10">
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-wide text-[#d71920]">
                Menu guide
              </p>
              <h1 className="mt-4 text-4xl font-black leading-[1.04] text-[#151515] sm:text-6xl">
                Does Raising Cane&apos;s Have Macaroni and Cheese?
              </h1>
              <p className="mt-6 text-lg leading-8 text-black/65">
                No. Raising Cane&apos;s does not have macaroni and cheese on
                its regular official menu. The current menu is built around
                chicken fingers, crinkle-cut fries, Texas Toast, Cane&apos;s
                Sauce, coleslaw, drinks, and combo meals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-wider">
                <span className="bg-[#d71920] px-4 py-2 text-white">
                  Updated May 22, 2026
                </span>
                <span className="border border-black/10 bg-[#fff8ef] px-4 py-2 text-black/60">
                  Official menu check
                </span>
              </div>
            </div>
            <div className="relative min-h-[320px] bg-[#151515] sm:min-h-[440px] lg:min-h-full">
              <Image
                src={heroImage}
                alt="Raising Cane's style chicken fingers, fries, toast, sauce, and coleslaw without mac and cheese"
                fill
                priority
                sizes="(min-width: 1024px) 470px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </article>

        <section className="grid gap-4 sm:grid-cols-3">
          {quickFacts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.title}
                className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5"
              >
                <Icon className="h-7 w-7 text-[#d71920]" />
                <p className="mt-4 text-xs font-black uppercase tracking-wide text-black/40">
                  {fact.title}
                </p>
                <p className="mt-1 text-2xl font-black text-[#151515]">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {fact.detail}
                </p>
              </div>
            );
          })}
        </section>

        <GuideSection eyebrow="Quick answer" title="Does Cane's Have Mac and Cheese?">
          <p>
            Raising Cane&apos;s does not currently offer mac and cheese as a
            regular side. If you open the official{" "}
            <Link
              href="/raising-canes-menu"
              className="font-bold text-[#d71920] underline-offset-4 hover:underline"
            >
              Raising Cane&apos;s menu guide
            </Link>
            , you will see the core Cane&apos;s items: chicken fingers,
            crinkle-cut fries, Texas Toast, Cane&apos;s Sauce, coleslaw,
            sandwiches, drinks, combos, and tailgate orders.
          </p>
          <p>
            So if you are asking, &quot;does Raising Cane&apos;s have macaroni
            and cheese?&quot; the clear answer is no, not on the regular
            official menu. This question comes up because many chicken
            restaurants sell mac and cheese, but Cane&apos;s keeps its menu
            unusually focused.
          </p>
        </GuideSection>

        <GuideSection
          eyebrow="Menu rumors"
          title="Why Do People Think Cane's Has Mac and Cheese?"
        >
          <p>
            Searches for &quot;Cane&apos;s mac and cheese&quot; often come from
            social media posts, fake menu pages, or secret menu claims. Some
            users mention names like &quot;Caniac Mac,&quot; but that item is
            not shown on the official Raising Cane&apos;s menu.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {rumorReasons.map((reason) => (
              <div
                key={reason}
                className="flex gap-3 border border-black/10 bg-[#fff8ef] p-4"
              >
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-[#d71920]" />
                <p className="text-sm leading-6 text-black/65">{reason}</p>
              </div>
            ))}
          </div>
          <p>
            The safest move is simple: trust the official menu first. If a
            local crew member says a location is testing something different,
            treat that as local information, not a nationwide Cane&apos;s menu
            item.
          </p>
        </GuideSection>

        <section className="grid overflow-hidden border border-black/10 bg-white shadow-xl shadow-black/5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[300px] bg-[#151515]">
            <Image
              src={sidesImage}
              alt="Crinkle-cut fries, Texas toast, coleslaw, sauce, and drink as Raising Cane's sides instead of mac and cheese"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-sm font-black uppercase text-[#d71920]">
              What to order instead
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-[#151515]">
              Cane&apos;s Sides That Are Actually on the Menu
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {officialSides.map((side) => (
                <div key={side.title} className="border border-black/10 p-4">
                  <CheckCircle2 className="h-6 w-6 text-[#d71920]" />
                  <h3 className="mt-3 text-lg font-black text-[#151515]">
                    {side.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    {side.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GuideSection
          eyebrow="Substitutions"
          title="Can You Substitute Mac and Cheese at Raising Cane's?"
        >
          <p>
            No, you normally cannot substitute mac and cheese at Cane&apos;s
            because it is not a regular side. Some locations may allow swaps
            among existing items, such as replacing coleslaw with extra fries,
            extra toast, or extra Cane&apos;s Sauce.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {substitutionTips.map((tip) => (
              <div key={tip.title} className="border border-black/10 p-4">
                <Info className="h-6 w-6 text-[#d71920]" />
                <h3 className="mt-3 text-base font-black text-[#151515]">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
          <p>
            If food sensitivities are part of your decision, check our{" "}
            <Link
              href="/allergen-menu"
              className="font-bold text-[#d71920] underline-offset-4 hover:underline"
            >
              Raising Cane&apos;s allergen guide
            </Link>{" "}
            and{" "}
            <Link
              href="/gluten-free-menu"
              className="font-bold text-[#d71920] underline-offset-4 hover:underline"
            >
              gluten-free menu guide
            </Link>{" "}
            before ordering.
          </p>
        </GuideSection>

        <GuideSection
          eyebrow="Best order"
          title="Best Cane's Order Without Mac and Cheese"
        >
          <p>
            If you wanted mac and cheese because you wanted a warm, filling
            comfort-food side, the Box Combo is the most natural replacement:
            4 chicken fingers, crinkle-cut fries, Cane&apos;s Sauce, Texas
            Toast, coleslaw, and a drink.
          </p>
          <div className="border border-black/10 bg-[#151515] p-5 text-white sm:p-7">
            <p className="text-xs font-black uppercase tracking-widest text-white/50">
              Suggested order
            </p>
            <h3 className="mt-2 text-2xl font-black">The Box Combo</h3>
            <p className="mt-3 leading-7 text-white/70">
              Chicken fingers, fries, Cane&apos;s Sauce, Texas Toast, coleslaw,
              and a drink. Use the{" "}
              <Link
                href="/"
                className="font-bold text-white underline-offset-4 hover:underline"
              >
                Cane&apos;s nutrition calculator
              </Link>{" "}
              to estimate your meal calories, or compare numbers in our{" "}
              <Link
                href="/calories-in-raising-canes-chicken-fingers"
                className="font-bold text-white underline-offset-4 hover:underline"
              >
                chicken fingers calories guide
              </Link>
              .
            </p>
          </div>
        </GuideSection>

        <GuideSection
          eyebrow="Future menu changes"
          title="Is Mac and Cheese Coming to Raising Cane's?"
        >
          <p>
            There is no official confirmation that Raising Cane&apos;s is
            adding mac and cheese to its regular menu. Cane&apos;s has built
            its brand around a short menu, so major side additions are not
            something to assume from online chatter.
          </p>
          <p>
            If Cane&apos;s ever launches mac and cheese, the most reliable
            places to check will be the official menu, the Cane&apos;s app, or
            restaurant announcement pages. For a normal visit, plan around the
            sides already listed on the official menu.
          </p>
        </GuideSection>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Related guides
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-[#151515]">
            Keep Planning Your Cane&apos;s Order
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((guide) => {
              const Icon = guide.icon;

              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group border border-black/10 p-5 transition hover:border-[#d71920]/40 hover:bg-[#fff8ef]"
                >
                  <Icon className="h-7 w-7 text-[#d71920]" />
                  <h3 className="mt-4 text-lg font-black leading-snug text-[#151515] group-hover:text-[#d71920]">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    {guide.text}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#d71920]">
                    Read guide <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <GuideSection eyebrow="Final answer" title="So, Does Cane's Have Mac and Cheese?">
          <p>
            Raising Cane&apos;s does not have mac and cheese on its regular
            official menu. The standard sides are crinkle-cut fries, Texas
            Toast, coleslaw, and Cane&apos;s Sauce. If you see &quot;Cane&apos;s
            mac and cheese&quot; online, it is likely a rumor, secret menu
            claim, or inaccurate third-party menu listing unless your local
            restaurant confirms it directly.
          </p>
          <p>
            For now, the best alternatives are crinkle-cut fries, Texas Toast,
            coleslaw, or extra Cane&apos;s Sauce.
          </p>
        </GuideSection>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <div className="flex items-start gap-3">
            <CircleHelp className="mt-1 h-7 w-7 shrink-0 text-[#d71920]" />
            <div>
              <p className="text-sm font-black uppercase text-[#d71920]">
                FAQs
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-[#151515]">
                Raising Cane&apos;s Mac and Cheese Questions
              </h2>
            </div>
          </div>
          <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-[#151515]">
                  {item.question}
                  <span className="text-2xl leading-none text-[#d71920] group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-black/65">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border border-black/10 bg-[#fff8ef] p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Sources checked
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#151515]">
            Official Menu References
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href="https://raisingcanes.com/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border border-black/10 bg-white p-4 text-sm font-bold text-[#151515] hover:text-[#d71920]"
            >
              Raising Cane&apos;s official menu
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
            <a
              href="https://www.raisingcanes.com/allergens/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border border-black/10 bg-white p-4 text-sm font-bold text-[#151515] hover:text-[#d71920]"
            >
              Raising Cane&apos;s allergen and nutrition page
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
