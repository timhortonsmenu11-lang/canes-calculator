import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  CupSoda,
  Flame,
  Package2,
  ReceiptText,
  Sandwich,
  Tags,
  Users,
  Utensils,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Raising Cane's Menu With Prices 2026 | Cane's Menu & Prices",
  description:
    "Explore the full Raising Cane's menu with prices. From signature chicken finger combos to the famous Cane's sauce, discover everything on Cane's menu and find your perfect meal.",
  alternates: {
    canonical: "/raising-canes-menu",
  },
  openGraph: {
    title: "Raising Cane's Menu With Prices 2026",
    description:
      "Explore the full Raising Cane's menu with prices, combos, sides, drinks, sauce, calories, and group options.",
    url: "/raising-canes-menu",
    type: "website",
    images: [
      {
        url: "/raising-canes-menu-prices.webp",
        width: 1536,
        height: 1024,
        alt: "Raising Cane’s Menu prices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raising Cane's Menu With Prices 2026",
    description:
      "Explore the full Raising Cane's menu with prices, combos, sides, drinks, sauce, calories, and group options.",
    images: [
      {
        url: "/raising-canes-menu-prices.webp",
        alt: "Raising Cane’s Menu prices",
      },
    ],
  },
};

const categoryLinks = [
  { href: "#combos", label: "Combos", icon: Utensils },
  { href: "#sauce", label: "Sauce", icon: Tags },
  { href: "#tailgates", label: "Tailgates", icon: Users },
  { href: "#extras", label: "Sides", icon: Sandwich },
  { href: "#drinks", label: "Drinks", icon: CupSoda },
];

const comboItems = [
  {
    name: "Caniac Combo",
    price: "$16.59",
    calories: "1,840-2,470 Cal",
    includes: [
      "6 Chicken Fingers",
      "Crinkle-Cut Fries",
      "2 Cane's Sauce cups",
      "Texas Toast",
      "Coleslaw",
      "Large Drink (32 oz)",
    ],
  },
  {
    name: "The Box Combo",
    price: "$11.49",
    calories: "1,290-1,720 Cal",
    includes: [
      "4 Chicken Fingers",
      "Crinkle-Cut Fries",
      "1 Cane's Sauce",
      "Texas Toast",
      "Coleslaw",
      "Regular Drink (22 oz)",
    ],
  },
  {
    name: "The 3 Finger Combo",
    price: "$9.59",
    calories: "1,050-1,480 Cal",
    includes: [
      "3 Chicken Fingers",
      "Crinkle-Cut Fries",
      "1 Cane's Sauce",
      "Texas Toast",
      "Regular Drink (22 oz)",
    ],
  },
  {
    name: "The Sandwich Combo",
    price: "$10.29",
    calories: "1,140-1,570 Cal",
    includes: [
      "3 Chicken Fingers",
      "Toasted bun with Cane's Sauce",
      "Crinkle-Cut Fries",
      "Regular Drink (22 oz)",
    ],
  },
  {
    name: "Kids Meal Combo",
    price: "$6.69",
    calories: "650-880 Cal",
    includes: [
      "2 Chicken Fingers",
      "Crinkle-Cut Fries",
      "Cane's Sauce",
      "Kids Drink (12 oz)",
    ],
  },
];

const tailgateItems = [
  {
    name: "25-Finger Tailgate",
    price: "$41.99",
    serves: "Feeds 6-8",
    calories: "130 Cal / Chicken Finger",
  },
  {
    name: "50-Finger Tailgate",
    price: "$79.99",
    serves: "Feeds 13-15",
    calories: "130 Cal / Chicken Finger",
  },
  {
    name: "75-Finger Tailgate",
    price: "$118.99",
    serves: "Feeds 20-22",
    calories: "130 Cal / Chicken Finger",
  },
  {
    name: "100-Finger Tailgate",
    price: "$142.99",
    serves: "Feeds 27-29",
    calories: "130 Cal / Chicken Finger",
  },
];

const extraItems = [
  { name: "Sandwich", price: "$7.69", calories: "780 Cal" },
  { name: "Texas Toast", price: "$1.38", calories: "150 Cal" },
  { name: "Cane's Sauce", price: "$0.39", calories: "190 Cal" },
  { name: "Crinkle-Cut Fries", price: "$2.49", calories: "400 Cal" },
  { name: "Chicken Finger", price: "$1.99", calories: "130 Cal per finger" },
  { name: "Coleslaw", price: "$1.38", calories: "100 Cal per serving" },
];

const drinkItems = [
  {
    name: "Fountain Drink",
    options: [
      { size: "Kids (12 fl oz)", price: "$1.49", calories: "140-170 Cal" },
      { size: "Regular (22 fl oz)", price: "$2.49", calories: "260-310 Cal" },
      { size: "Large (32 fl oz)", price: "$2.99", calories: "380-450 Cal" },
    ],
  },
  {
    name: "Half Tea / Half Lemonade",
    options: [
      { size: "Kids (12 fl oz)", price: "$1.49", calories: "150 Cal" },
      { size: "Regular (22 fl oz)", price: "$2.49", calories: "260 Cal" },
      { size: "Large (32 fl oz)", price: "$2.99", calories: "370 Cal" },
    ],
  },
  {
    name: "Unsweet Tea",
    options: [
      { size: "Kids (12 fl oz)", price: "$1.49", calories: "0 Cal" },
      { size: "Regular (22 fl oz)", price: "$2.49", calories: "0 Cal" },
      { size: "Large (32 fl oz)", price: "$2.99", calories: "0 Cal" },
    ],
  },
  {
    name: "Sweet Tea",
    options: [
      { size: "Kids (12 fl oz)", price: "$1.49", calories: "130 Cal" },
      { size: "Regular (22 fl oz)", price: "$2.49", calories: "230 Cal" },
      { size: "Large (32 fl oz)", price: "$2.99", calories: "340 Cal" },
    ],
  },
  {
    name: "Lemonade",
    options: [
      { size: "Kids (12 fl oz)", price: "$1.49", calories: "160 Cal" },
      { size: "Regular (22 fl oz)", price: "$2.49", calories: "290 Cal" },
      { size: "Large (32 fl oz)", price: "$2.99", calories: "420 Cal" },
    ],
  },
  {
    name: "Jug Drinks",
    options: [
      { size: "Jug Unsweet Tea (1 Gallon)", price: "$5.99", calories: "0 Cal" },
      { size: "Jug Sweet Tea (1 Gallon)", price: "$5.99", calories: "1,380 Cal" },
      { size: "Jug Lemonade (1 Gallon)", price: "$7.99", calories: "1,750 Cal" },
    ],
  },
];

const whyChooseItems = [
  {
    title: "Fresh, Never Frozen",
    text: "Every chicken finger on the Cane's menu is made from fresh, never-frozen chicken tenderloins. That commitment to freshness is tasted in every bite.",
  },
  {
    title: "Consistent Quality at Every Location",
    text: "Whether you are visiting nearby or across the country, Cane's menu with prices stays familiar, and the quality stays steady.",
  },
  {
    title: "The One Item They Do Not Serve",
    text: "Raising Cane's does not serve fish, beef, or pork. The menu is a chicken-only experience, letting the kitchen focus on what it does best.",
  },
  {
    title: "Value You Can Taste",
    text: "When comparing Cane's prices to similar fast-casual restaurants, customers often see strong value from premium ingredients served quickly.",
  },
];

const faqItems = [
  {
    question: "What's on the Raising Cane's menu?",
    answer:
      "The Cane's menu features chicken finger combos, crinkle-cut fries, coleslaw, Texas toast, Cane's sauce, and fountain drinks. It is intentionally simple and focused on chicken fingers.",
  },
  {
    question: "Does the Raising Cane's menu have prices listed?",
    answer:
      "Yes. The Raising Cane's menu with prices is displayed in restaurant and available through official ordering channels. Prices may vary slightly by location.",
  },
  {
    question: "What are Cane's prices for a basic combo?",
    answer:
      "Cane's prices start with the 3 Finger Combo, one of the most affordable combo options. Larger combos like the Caniac Combo cost more but include more chicken fingers and sides.",
  },
  {
    question: "Is there anything vegetarian on the Cane's menu?",
    answer:
      "Raising Cane's is a chicken-focused restaurant. Sides like fries, coleslaw, and Texas toast may fit some vegetarian preferences, but there are no dedicated vegetarian protein options on the Cane's menu.",
  },
  {
    question: "Can I customize my order at Raising Cane's?",
    answer:
      "Yes. The Cane's menu is simple by design, but you can customize a combo by adding extra chicken fingers, ordering extra Cane's sauce, or adjusting sides.",
  },
  {
    question: "Does Raising Cane's offer family meals?",
    answer:
      "Yes. The larger bundle options on the Cane's menu with prices are built for bigger orders and work well for families or groups.",
  },
  {
    question: "What makes the Cane's sauce so special?",
    answer:
      "The Cane's sauce recipe is proprietary and closely guarded. It is a creamy, tangy dipping sauce with a hint of spice, and many fans consider it a key part of the menu.",
  },
];

function SectionHeading({
  id,
  icon: Icon,
  kicker,
  title,
  meta,
}: {
  id: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  meta: string;
}) {
  return (
    <div id={id} className="scroll-mt-32">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b-4 border-[#151515] pb-4">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center border border-black/10 bg-[#d71920] text-white shadow-lg shadow-black/10">
            <Icon aria-hidden="true" className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d71920]">
              {kicker}
            </p>
            <h2 className="mt-1 text-3xl font-black leading-tight text-[#151515] sm:text-4xl">
              {title}
            </h2>
          </div>
        </div>
        <p className="border border-black/10 bg-white px-3 py-2 text-sm font-black text-black/55 shadow-sm">
          {meta}
        </p>
      </div>
    </div>
  );
}

function EditorialSection({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8"
    >
      {kicker ? (
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d71920]">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-black leading-tight text-[#151515]">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base font-semibold leading-8 text-black/65">
        {children}
      </div>
    </section>
  );
}

function CategoryIntro({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-black/10 bg-[#fff8ef] p-5 shadow-lg shadow-black/5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center bg-[#151515] text-white">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black leading-tight">{title}</h3>
      </div>
      <div className="mt-4 space-y-3 text-sm font-semibold leading-7 text-black/62">
        {children}
      </div>
    </div>
  );
}

function PriceCalorieStrip({
  price,
  calories,
}: {
  price: string;
  calories: string;
}) {
  return (
    <div className="grid grid-cols-2 border-y border-black/10 bg-[#151515] text-white">
      <div className="border-r border-white/15 px-4 py-3">
        <p className="text-[11px] font-black uppercase text-white/45">Price</p>
        <p className="mt-1 text-2xl font-black">{price}</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-[11px] font-black uppercase text-white/45">
          Calories
        </p>
        <p className="mt-1 text-sm font-black text-[#ffd166] sm:text-base">
          {calories}
        </p>
      </div>
    </div>
  );
}

function ComboCard({
  item,
  index,
}: {
  item: (typeof comboItems)[number];
  index: number;
}) {
  return (
    <article className="flex min-h-full flex-col border border-black/10 bg-white shadow-xl shadow-black/5">
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-black/35">
            Combo {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight">{item.name}</h3>
        </div>
        <Flame aria-hidden="true" className="h-7 w-7 text-[#d71920]" />
      </div>
      <PriceCalorieStrip price={item.price} calories={item.calories} />
      <ul className="grid gap-2 p-5 text-sm font-bold text-black/62">
        {item.includes.map((include) => (
          <li
            key={include}
            className="border border-black/10 bg-[#f8f6ef] px-3 py-2"
          >
            {include}
          </li>
        ))}
      </ul>
    </article>
  );
}

function TailgateCard({ item }: { item: (typeof tailgateItems)[number] }) {
  return (
    <article className="border border-black/10 bg-[#151515] p-5 text-white shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd166]">
            Tailgate
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight">{item.name}</h3>
        </div>
        <Package2 aria-hidden="true" className="h-7 w-7 text-white/55" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <p className="border border-white/10 bg-white px-3 py-3 text-center text-xl font-black text-[#151515]">
          {item.price}
        </p>
        <p className="border border-white/10 bg-white/5 px-3 py-3 text-center text-sm font-black text-white/75">
          {item.serves}
        </p>
        <p className="border border-white/10 bg-white/5 px-3 py-3 text-center text-sm font-black text-white/75">
          {item.calories}
        </p>
      </div>
    </article>
  );
}

function ExtraCard({ item }: { item: (typeof extraItems)[number] }) {
  return (
    <article className="border border-black/10 bg-white p-5 shadow-lg shadow-black/5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-black leading-tight">{item.name}</h3>
        <Tags aria-hidden="true" className="h-6 w-6 text-[#d71920]" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <p className="bg-[#d71920] px-3 py-2 text-xl font-black text-white">
          {item.price}
        </p>
        <p className="border border-black/10 bg-[#fff8ef] px-3 py-2 text-sm font-black text-black/62">
          {item.calories}
        </p>
      </div>
    </article>
  );
}

export default function RaisingCanesMenuWithPricesCaloriesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
      <SiteHeader />

      <section className="border-b border-black/10 bg-[#151515] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#d71920] px-3 py-2 text-xs font-black uppercase tracking-[0.2em]">
                  Updated 2026
                </span>
                <span className="border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/65">
                  Cane&apos;s Menu &amp; Prices
                </span>
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
                Raising Cane&apos;s Menu With Prices 2026
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-black leading-8 text-white sm:text-2xl">
                Everything on Cane&apos;s menu is built around one thing: the
                freshest, crispiest chicken fingers you&apos;ll ever taste.
              </p>
              <div className="mt-5 max-w-4xl space-y-4 text-base font-semibold leading-8 text-white/68">
                <p>
                  Raising Cane&apos;s has built a cult following by doing less,
                  but doing it better than anyone else. The Cane&apos;s menu is
                  intentionally simple: chicken fingers, crinkle-cut fries,
                  coleslaw, Texas toast, and the legendary Cane&apos;s sauce.
                  That&apos;s it. No distractions, no shortcuts. Just quality
                  ingredients cooked fresh to order, every single time.
                </p>
                <p>
                  Whether you&apos;re stopping in for a quick lunch or feeding
                  the whole family, the Raising Cane&apos;s menu with prices is
                  designed to give you maximum satisfaction without the headache
                  of an overwhelming list of choices. If you want to plan your
                  full meal before ordering, use the{" "}
                  <Link
                    href="/"
                    className="font-black text-white underline decoration-[#ffd166] underline-offset-4 transition hover:text-[#ffd166]"
                  >
                    Cane&apos;s Nutrition Calculator
                  </Link>{" "}
                  alongside this menu.
                </p>
              </div>
            </div>

            <nav
              aria-label="Menu categories"
              className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
            >
              {categoryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-3 border border-white/15 bg-white/5 px-4 py-3 text-sm font-black uppercase text-white/78 transition hover:border-[#ffd166] hover:bg-white hover:text-[#151515]"
                >
                  <span>{link.label}</span>
                  <link.icon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#ffd166] group-hover:text-[#d71920]"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div className="border border-white/15 bg-white p-5 text-[#151515] shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/site-logo.png"
                  alt="Cane's Nutrition Calculator logo"
                  width={58}
                  height={58}
                  className="h-14 w-14 border border-black/10 object-cover"
                  priority
                />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d71920]">
                    Menu Board
                  </p>
                  <p className="text-lg font-black">Quick scan</p>
                </div>
              </div>
              <ReceiptText aria-hidden="true" className="h-8 w-8 text-black/35" />
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["Combos", "5 meals"],
                ["Tailgates", "4 bundles"],
                ["Extras", "6 add-ons"],
                ["Drinks", "18 options"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 border border-black/10 bg-[#f8f6ef] px-4 py-3"
                >
                  <p className="font-black">{label}</p>
                  <p className="text-sm font-black text-[#d71920]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <EditorialSection
          kicker="About the menu"
          title="What Makes the Cane's Menu Different?"
        >
          <p>
            Most fast-food chains try to do everything. Raising Cane&apos;s does
            the opposite. The entire Cane&apos;s menu revolves around one protein:
            chicken fingers. Every item is crafted to complement it perfectly.
          </p>
          <p>
            When you look at Cane&apos;s menu with prices, every combo is
            straightforward and generously portioned. You&apos;re paying for
            consistent, craveable chicken every visit, every location. For
            ingredient and allergy details, check the{" "}
            <Link
              href="/allergen-menu"
              className="font-black text-[#d71920] underline underline-offset-4 hover:text-[#b9151b]"
            >
              Raising Cane&apos;s Allergen Menu
            </Link>{" "}
            before ordering.
          </p>
        </EditorialSection>

        <section className="space-y-5">
          <CategoryIntro icon={Utensils} title="Chicken Finger Combos">
            <p>
              The heart of the Raising Cane&apos;s menu. Each combo comes with
              fresh-never-frozen chicken fingers paired with classic sides.
              Cane&apos;s prices for combos are competitive for the quality and
              portion size you receive.
            </p>
            <p>
              Good to know: You can add extra chicken fingers or Cane&apos;s sauce
              to any combo at a small additional cost.
            </p>
          </CategoryIntro>
          <SectionHeading
            id="combos"
            icon={Utensils}
            kicker="Cane's Combos Prices"
            title="Combos"
            meta={`${comboItems.length} combo meals`}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comboItems.map((item, index) => (
              <ComboCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="sauce" className="scroll-mt-32 space-y-5">
          <CategoryIntro icon={Tags} title="The Cane's Sauce">
            <p>
              No conversation about the Cane&apos;s menu is complete without the
              sauce. Cane&apos;s sauce is a proprietary, slightly tangy, slightly
              spicy dipping sauce that has developed an almost fanatical
              following.
            </p>
            <p>
              It comes included with every combo, and you can order additional
              cups for a small charge.
            </p>
          </CategoryIntro>
        </section>

        <section className="space-y-5">
          <CategoryIntro
            icon={Users}
            title="Box Combos for Groups & Bigger Appetites"
          >
            <p>
              Looking to feed more than one? The Raising Cane&apos;s menu features
              larger orders designed for bigger appetites or group sharing.
              These are among the most useful items on the Cane&apos;s menu with
              prices for families and groups.
            </p>
          </CategoryIntro>
          <SectionHeading
            id="tailgates"
            icon={Users}
            kicker="Raising Cane's Tailgates Menu"
            title="Tailgates"
            meta={`${tailgateItems.length} shareable sizes`}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {tailgateItems.map((item) => (
              <TailgateCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <CategoryIntro icon={Sandwich} title="Sides">
            <p>
              Cane&apos;s keeps its sides just as focused as the rest of its
              menu. You&apos;ll find crinkle-cut fries, creamy coleslaw, and
              buttery Texas toast. Simple sides, done right.
            </p>
            <p>
              Cane&apos;s prices on individual sides are reasonable, making it easy
              to round out your meal exactly the way you want.
            </p>
            <p>
              Avoiding wheat or gluten? Review the{" "}
              <Link
                href="/gluten-free-menu"
                className="font-black text-[#d71920] underline underline-offset-4 hover:text-[#b9151b]"
              >
                Raising Cane&apos;s Gluten Free Menu Guide
              </Link>{" "}
              before choosing chicken, toast, fries, or sides.
            </p>
          </CategoryIntro>
          <SectionHeading
            id="extras"
            icon={Sandwich}
            kicker="Cane's Extras"
            title="Sides & Add-Ons"
            meta={`${extraItems.length} extras`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {extraItems.map((item) => (
              <ExtraCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <CategoryIntro icon={CupSoda} title="Drinks">
              <p>
                Raising Cane&apos;s serves fountain drinks, lemonade, and sweet
                tea to wash down your meal. Cane&apos;s prices on drinks are in
                line with industry standards, and free refills are typically
                available in restaurant.
              </p>
            </CategoryIntro>
            <CategoryIntro icon={CupSoda} title="Lemonade & Specialty Drinks">
              <p>
                A refreshing glass of lemonade pairs perfectly with Cane&apos;s
                chicken. Lemonade, tea blends, and gallon jugs are available
                for single meals or group orders.
              </p>
            </CategoryIntro>
          </div>
          <SectionHeading
            id="drinks"
            icon={CupSoda}
            kicker="Cane's Drinks Menu"
            title="Drinks"
            meta={`${drinkItems.reduce((sum, group) => sum + group.options.length, 0)} drink rows`}
          />

          <div className="overflow-hidden border border-black/10 bg-white shadow-xl shadow-black/5">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-[#d71920] text-white">
                  <tr>
                    <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">
                      Drink
                    </th>
                    <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">
                      Size
                    </th>
                    <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">
                      Price
                    </th>
                    <th className="px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">
                      Calories
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {drinkItems.flatMap((group) =>
                    group.options.map((option, optionIndex) => (
                      <tr
                        key={`${group.name}-${option.size}`}
                        className="border-b border-black/10 hover:bg-[#fff8ef]"
                      >
                        <td className="px-5 py-4 font-black">
                          {optionIndex === 0 ? group.name : ""}
                        </td>
                        <td className="px-5 py-4 text-sm font-bold text-black/60">
                          {option.size}
                        </td>
                        <td className="px-5 py-4 text-lg font-black text-[#d71920]">
                          {option.price}
                        </td>
                        <td className="px-5 py-4 text-sm font-black text-black/62">
                          {option.calories}
                        </td>
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>

            <div className="grid gap-3 p-3 md:hidden">
              {drinkItems.map((group) => (
                <article key={group.name} className="border border-black/10">
                  <h3 className="bg-[#151515] px-4 py-3 text-lg font-black text-white">
                    {group.name}
                  </h3>
                  <div className="divide-y divide-black/10">
                    {group.options.map((option) => (
                      <div
                        key={option.size}
                        className="grid grid-cols-[1fr_auto] gap-3 px-4 py-3"
                      >
                        <div>
                          <p className="font-black">{option.size}</p>
                          <p className="mt-1 text-sm font-bold text-black/55">
                            {option.calories}
                          </p>
                        </div>
                        <p className="text-lg font-black text-[#d71920]">
                          {option.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-black/10 bg-white p-3 shadow-xl shadow-black/5 sm:p-5">
          <Image
            src="/raising-canes-menu-with-prices-and-pictures.webp"
            alt="Raising Cane’s Menu With Prices and pictures"
            width={941}
            height={1672}
            sizes="(max-width: 768px) 100vw, 941px"
            className="mx-auto h-auto w-full max-w-[941px] object-contain"
          />
        </section>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d71920]">
                Menu PDF
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight">
                Download Raising Cane&apos;s Menu PDF
              </h2>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-black/65">
                Prefer a quick copy after reviewing the menu? Download the
                Raising Cane&apos;s menu PDF and keep the combo prices, sides,
                drinks, and calories handy while you plan your order.
              </p>
            </div>
            <a
              href="/raising-canes-menu-pdf.pdf"
              download="raising-canes-menu-pdf.pdf"
              className="inline-flex justify-center bg-[#d71920] px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-[#b9151b]"
            >
              Download Menu PDF
            </a>
          </div>
        </section>

        <EditorialSection
          id="why-canes"
          kicker="Why choose Cane's"
          title="Why Fans Love the Raising Cane's Menu"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseItems.map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-[#f8f6ef] p-4"
              >
                <h3 className="text-lg font-black leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-black/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </EditorialSection>

        <section
          id="faq"
          className="scroll-mt-32 border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d71920]">
            Menu FAQ
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            Frequently Asked Questions About Raising Cane&apos;s Menu
          </h2>
          <div className="mt-6 divide-y divide-black/10 border border-black/10">
            {faqItems.map((item) => (
              <details key={item.question} className="group bg-white">
                <summary className="cursor-pointer list-none p-4 text-lg font-black transition hover:bg-[#fff8ef]">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-2xl leading-none text-[#d71920] group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="px-4 pb-4 leading-7 text-black/62">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="border border-black/10 bg-[#151515] p-5 text-white shadow-xl shadow-black/10 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffd166]">
            Ready to order?
          </p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Ready to Order from the Raising Cane&apos;s Menu?
              </h2>
              <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-white/68">
                Now that you&apos;ve explored everything the Cane&apos;s menu has
                to offer, it&apos;s time to dig in. Whether you&apos;re craving a
                quick 3-finger combo or going all-out with the Caniac, every
                item on the Raising Cane&apos;s menu with prices is made fresh and
                served fast.
              </p>
              <p className="mt-3 max-w-4xl text-base font-semibold leading-8 text-white/68">
                Find your nearest Raising Cane&apos;s location and place your
                order today, because some cravings just can&apos;t wait.
              </p>
            </div>
            <a
              href="https://www.raisingcanes.com/locations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center bg-[#d71920] px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-[#b9151b]"
            >
              Find a Location Near You
            </a>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
