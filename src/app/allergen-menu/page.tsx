import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { allergenKey, nutritionItems, nutritionVersion } from "@/data/menu";

export const metadata: Metadata = {
  title: "Raising Cane’s Allergen Menu & Allergy Guide 2026",
  description:
    "Check Raising Cane’s allergen menu for wheat, milk, egg, soy, fish, sesame, and peanut oil info. See Cane’s allergy guide before ordering.",
  alternates: {
    canonical: "/allergen-menu",
  },
  keywords: [
    "Raising Cane's allergen menu",
    "Cane's allergens",
    "Raising Cane's allergy menu",
    "Cane's gluten free",
    "Raising Cane's dairy free",
    "Raising Cane's nutrition facts",
  ],
};

const allergenColumns = [
  ["Milk", "M"],
  ["Eggs", "E"],
  ["Fish", "F"],
  ["Shellfish", "SH"],
  ["Wheat", "W"],
  ["Soy", "S"],
  ["Tree Nuts", "N"],
  ["Peanuts", "P"],
  ["Sesame", "SS"],
] as const;

function hasAllergen(allergen: string, code: string) {
  const normalized = allergen.replace(/\s+/g, "").toUpperCase();

  if (code === "SS") {
    return normalized.includes("SS");
  }

  if (code === "S") {
    return normalized.replaceAll("SS", "").includes("S");
  }

  return normalized.includes(code);
}

function allergenCount(code: string) {
  return nutritionItems.filter((item) => hasAllergen(item.allergen, code)).length;
}

const allergyChecklist = [
  "Which foods may contain wheat or gluten",
  "Which items may contain milk or dairy",
  "Which menu items may contain egg",
  "Whether Cane's Sauce has dairy or other allergens",
  "Whether Raising Cane's uses peanut oil",
  "Cross-contact risks inside the kitchen",
  "Which items may not be safe for severe allergies",
];

const saferOrderingSteps = [
  "Read the latest Raising Cane's allergen info.",
  "Check the allergen table or PDF before visiting.",
  "Ask the restaurant team about ingredients and preparation.",
  "Tell staff clearly if you have a food allergy.",
  "Avoid risky items if your allergy is severe.",
  "Do not rely only on old screenshots or third-party charts.",
];

const pdfItems = [
  "Chicken Fingers",
  "Crinkle-Cut Fries",
  "Texas Toast",
  "Cane's Sauce",
  "Coleslaw",
  "Chicken Sandwich",
  "Combo Meals",
  "Drinks",
];

const crossContactRisks = [
  "Shared fryers or oil",
  "Shared prep surfaces",
  "Shared gloves or utensils",
  "Bread crumbs from wheat-based items",
  "Sauce handling",
  "Food packaging areas",
];

const severeAllergyRisks = [
  "Breaded Chicken Fingers",
  "Texas Toast",
  "Chicken Sandwich",
  "Cane's Sauce",
  "Coleslaw",
  "Fries cooked near other fried items",
  "Combo meals with multiple allergen sources",
];

const orderingTips = [
  "Check the latest official Raising Cane's allergen info",
  "Order simple items when possible",
  "Avoid extra sauces if you are unsure",
  "Ask about fryer oil and shared fryer use",
  "Tell staff clearly about your allergy",
  "Ask for fresh gloves if needed",
  "Avoid peak hours if you need staff attention",
  "Do not guess ingredients based on appearance",
  "Keep your allergy medication with you if prescribed",
];

const faqItems = [
  {
    question: "Does Raising Cane's use peanut oil?",
    answer:
      "Raising Cane's is not commonly known as a peanut-oil restaurant, and older allergen references mention vegetable oil blends such as soybean and canola oil. However, customers with peanut allergies should confirm with the latest official allergen information and their local Cane's before ordering.",
  },
  {
    question: "Does Cane's Sauce have dairy?",
    answer:
      "The safest answer is to check the current Raising Cane's allergen menu before ordering. Sauce ingredients can include common allergens, and some allergen resources note unexpected allergen concerns with Cane's Sauce. If you avoid dairy for allergy reasons, ask staff before eating it.",
  },
  {
    question: "Is Raising Cane's safe for people with food allergies?",
    answer:
      "Raising Cane's may be safe for some people depending on the allergy, but it may not be safe for severe allergies because cross-contact can happen in fast food kitchens. Always check the latest allergen menu and speak with restaurant staff.",
  },
  {
    question: "Where can I find the Raising Cane's allergen menu PDF?",
    answer:
      "You can find the official allergen and nutrition information through Raising Cane's website. Their menu page includes a link to the PDF of Allergen And Nutritional Information.",
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
      <h2 className="mt-2 text-3xl font-black leading-tight">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-black/65">
        {children}
      </div>
    </section>
  );
}

function BulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <p
          key={item}
          className="border border-black/10 bg-[#f8f6ef] p-3 text-sm font-bold leading-6 text-black/65"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default function AllergenMenuPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="border border-black/10 bg-[#151515] p-5 text-white shadow-xl shadow-black/10 sm:p-8">
          <p className="w-fit bg-[#d71920] px-3 py-1 text-xs font-black uppercase">
            {nutritionVersion}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Raising Cane&apos;s Allergen Menu
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            Use this Raising Cane&apos;s allergen menu to review milk, eggs, fish,
            shellfish, wheat, soy, tree nuts, peanuts, and sesame before
            choosing a meal. The table below lists every item from the
            nutrition dataset with its allergen code and quick yes/no allergen
            indicators.
          </p>

        </div>

        <div className="hidden mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5">
          <Image
            src="/raising%20cane%27s%20Allergen%20Menu.webp"
            alt="raising cane's allergen menu"
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allergenColumns.map(([label, code]) => (
            <div
              key={code}
              className="border border-black/10 bg-white p-4 shadow-lg shadow-black/5"
            >
              <p className="text-xs font-black uppercase text-black/40">
                Allergen
              </p>
              <h2 className="mt-1 text-2xl font-black">{label}</h2>
              <p className="mt-2 text-sm font-semibold text-black/55">
                {allergenCount(code)} menu items contain this allergen code.
              </p>
            </div>
          ))}
          <div className="border border-black/10 bg-[#fff8ef] p-4 shadow-lg shadow-black/5">
            <p className="text-xs font-black uppercase text-[#d71920]">
              Allergen key
            </p>
            <p className="mt-2 text-sm font-bold leading-6 text-black/65">
              {allergenKey}
            </p>
          </div>
        </div>

        <section className="mt-6 border border-black/10 bg-white shadow-xl shadow-black/5">
          <div className="border-b border-black/10 p-4 sm:p-5">
            <p className="text-sm font-black uppercase text-[#d71920]">
              Complete Allergen Table
            </p>
            <h2 className="mt-1 text-2xl font-black">
              Item-by-item allergen menu
            </h2>
            <p className="mt-2 max-w-4xl text-sm font-semibold leading-6 text-black/55">
              A red mark means the item contains that allergen code in the
              provided nutrition data. A green check means the code is not
              listed for that item.
            </p>
          </div>

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-[#151515] text-white">
                <tr>
                  <th className="px-3 py-3 text-xs font-black uppercase text-white/70">
                    Menu item
                  </th>
                  <th className="px-3 py-3 text-xs font-black uppercase text-white/70">
                    Serving
                  </th>
                  <th className="px-3 py-3 text-xs font-black uppercase text-white/70">
                    Code
                  </th>
                  {allergenColumns.map(([label]) => (
                    <th
                      key={label}
                      className="px-3 py-3 text-center text-xs font-black uppercase text-white/70"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nutritionItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-black/10 hover:bg-[#fff8ef]"
                  >
                    <td className="px-3 py-3">
                      <p className="font-black">{item.name}</p>
                      <p className="mt-0.5 text-xs font-semibold text-black/40">
                        {item.category}
                      </p>
                    </td>
                    <td className="px-3 py-3 text-sm font-bold text-black/60">
                      {item.serving}
                    </td>
                    <td className="px-3 py-3 font-black text-[#d71920]">
                      {item.allergen}
                    </td>
                    {allergenColumns.map(([label, code]) => {
                      const active = hasAllergen(item.allergen, code);

                      return (
                        <td key={label} className="px-3 py-3 text-center">
                          <span
                            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-black text-white ${
                              active ? "bg-[#d71920]" : "bg-[#4b861d]"
                            }`}
                          >
                            {active ? "!" : "✓"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 p-3 lg:hidden">
            {nutritionItems.map((item) => (
              <article key={item.id} className="border border-black/10 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-black uppercase text-[#d71920]">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-base font-black">{item.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-black/45">
                      {item.serving}
                    </p>
                  </div>
                  <span className="border border-black/10 bg-[#f8f6ef] px-2 py-1 text-xs font-black text-[#d71920]">
                    {item.allergen}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
                  {allergenColumns.map(([label, code]) => {
                    const active = hasAllergen(item.allergen, code);

                    return (
                      <p
                        key={label}
                        className="flex items-center justify-between border border-black/10 px-2 py-1.5"
                      >
                        <span className="font-bold">{label}</span>
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white ${
                            active ? "bg-[#d71920]" : "bg-[#4b861d]"
                          }`}
                        >
                          {active ? "!" : "✓"}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "How to use the Cane's allergen menu",
              text: "Start by finding the item you want, then compare the allergen code against the columns for milk, eggs, fish, shellfish, wheat, soy, tree nuts, peanuts, and sesame. Items with a red marker include that allergen code.",
            },
            {
              title: "Raising Cane's gluten and wheat note",
              text: "The allergen key lists wheat as W. Products with W in the allergen code should be treated as containing wheat for this menu guide.",
            },
            {
              title: "Allergy safety reminder",
              text: "Restaurant kitchens can involve shared equipment and cross-contact. Anyone with a serious food allergy should verify directly with the restaurant before ordering.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-black/10 bg-white p-5 shadow-lg shadow-black/5"
            >
              <h2 className="text-xl font-black leading-tight">{item.title}</h2>
              <p className="mt-3 leading-7 text-black/60">{item.text}</p>
            </article>
          ))}
        </section>

        <div className="mt-8 space-y-6">
          <GuideSection
            eyebrow="Allergy guide"
            title="Raising Cane's Allergen Menu: Allergy Guide for Cane's Menu Items"
          >
            <p>
              If you have food allergies, checking the Raising Cane&apos;s
              allergen menu before ordering is very important. Raising Cane&apos;s
              is famous for chicken fingers, crinkle-cut fries, Texas toast,
              Cane&apos;s Sauce, coleslaw, and drinks, but some menu items may
              contain common allergens like wheat, egg, milk, soy, fish, or
              sesame.
            </p>
            <p>
              This guide explains Raising Cane&apos;s allergen info in simple
              wording so you can better understand what to check before eating.
              You can use this page as a helpful Cane&apos;s allergy menu guide, but
              always confirm the latest details from the official Raising
              Cane&apos;s allergen and nutrition information before ordering.
              If you are comparing combos, sides, and drinks first, review our{" "}
              <Link
                href="/raising-canes-menu"
                className="font-black text-[#d71920] underline hover:text-[#b9151b]"
              >
                Raising Cane&apos;s menu with prices
              </Link>{" "}
              alongside this allergen guide. Raising Cane&apos;s official menu page
              also links to its allergen and nutritional information PDF.
            </p>
          </GuideSection>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <GuideSection title="What Is the Raising Cane's Allergen Menu?">
              <p>
                The Raising Cane&apos;s allergen menu is a food allergy guide that
                helps customers understand which menu items may contain common
                allergens. It is useful for people who need to avoid ingredients
                like wheat, milk, egg, soy, peanuts, tree nuts, fish, shellfish,
                or sesame.
              </p>
              <p>
                Raising Cane&apos;s menu is simple, but that does not mean every
                item is allergy-safe. Fried foods, shared cooking areas, sauces,
                bread, and seasonings can create allergy concerns.
              </p>
            </GuideSection>

            <GuideSection title="A Good Cane's Allergy Menu Helps You Check">
              <BulletGrid items={allergyChecklist} />
              <p className="mt-4 leading-7 text-black/65">
                You can also pair this information with our <Link href="/" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Cane&apos;s Nutrition Calculator</Link> to check the exact calories and macros for your chosen allergy-safe meal.
              </p>
            </GuideSection>
          </div>

          <GuideSection title="How to Use This Raising Cane's Allergy Guide">
            <p>
              Use this Raising Cane&apos;s allergy guide as a starting point before
              ordering. First, find the allergen you want to avoid, such as
              dairy, wheat, egg, soy, peanuts, or sesame. Then check which
              Cane&apos;s items may contain that allergen or may have cross-contact
              risk.
            </p>
            <BulletGrid items={saferOrderingSteps} />
            <p>
              This page is written for general information only. If you have a
              serious allergy, the safest step is to contact Raising Cane&apos;s
              directly or speak with the manager at your local restaurant before
              ordering.
            </p>
          </GuideSection>

          <GuideSection title="Raising Cane's Allergen Menu PDF">
            <p>
              Many users search for the Raising Cane&apos;s allergen menu PDF
              because they want the full allergen chart in one place. Raising
              Cane&apos;s official menu page includes a link labeled “PDF of
              Allergen And Nutritional Information,” which is the best source to
              check for the most updated details.
            </p>
            <BulletGrid items={pdfItems} />
            <div className="border border-[#d71920]/25 bg-[#fff8ef] p-4">
              <p className="text-sm font-black uppercase text-[#d71920]">
                Download allergen PDF
              </p>
              <p className="mt-2 text-xl font-black">
                Raising Cane&apos;s Allergen Menu
              </p>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Download the allergen table as a PDF for quick reference. This
                fan-made PDF is based on the allergen table above and should be
                verified with the official Raising Cane&apos;s allergen information
                before ordering.
              </p>
              <a
                href="/Raising%20Cane%27s%20Allergen%20Menu.pdf"
                className="mt-4 inline-flex bg-[#d71920] px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-[#b9151b]"
                download="Raising Cane's Allergen Menu.pdf"
              >
                Download PDF
              </a>
            </div>
          </GuideSection>

          <div className="grid gap-6 lg:grid-cols-2">
            <GuideSection title="How Raising Cane's Handles Food Allergies">
              <p>
                Raising Cane&apos;s provides allergen and nutritional information
                for customers who want to check ingredients before ordering. The
                brand&apos;s website has an official allergen and nutrition section,
                and the menu page links to allergen and nutrition resources.
              </p>
              <p>
                However, fast food kitchens are not allergy-free environments.
                Items may be prepared near each other, cooked in shared areas,
                or handled with shared equipment. Even when an item does not
                list a specific allergen, there may still be some risk of
                cross-contact.
              </p>
              <p>
                If you have a serious allergy, do not depend only on online
                information. Ask the local restaurant team how your food is
                prepared that day.
              </p>
            </GuideSection>

            <GuideSection title="Cross-Contamination Risk at Raising Cane's">
              <p>
                Cross-contamination, also called cross-contact, happens when an
                allergen touches food that normally does not contain that
                allergen. At Raising Cane&apos;s, this can be important because many
                menu items are prepared in a busy kitchen with fried foods,
                breaded chicken, toast, sauce, and sides.
              </p>
              <BulletGrid items={crossContactRisks} />
              <p>
                This is especially important for guests with severe allergies to
                wheat, egg, milk, soy, sesame, or other allergens. Even if a
                food looks simple, it may not be safe for everyone. Always ask
                staff about current preparation methods.
              </p>
            </GuideSection>
          </div>

          <GuideSection title="Raising Cane's Peanut Allergy Guide">
            <p>
              Many people with peanut allergies search for does Raising
              Cane&apos;s use peanut oil before eating there. Based on publicly
              available allergen discussions and older allergen references,
              Cane&apos;s fried foods have commonly been associated with a vegetable
              oil blend rather than peanut oil, but you should still confirm
              with the official allergen information or your local restaurant
              because oil and supplier details can change. Some older allergen
              references mention a soybean/canola oil blend.
            </p>
            <BulletGrid
              items={[
                "Whether any menu item contains peanuts",
                "Whether peanut oil is used",
                "Whether the location uses shared equipment",
                "Whether supplier ingredients have changed",
                "Whether seasonal or regional items are different",
              ]}
            />
            <p>
              If your peanut allergy is severe, ask the manager directly before
              ordering.
            </p>
          </GuideSection>

          <GuideSection title="Does Raising Cane's Use Peanut Oil?">
            <p>
              The common answer is: Raising Cane&apos;s is not generally known for
              using peanut oil, but allergy-sensitive users should verify this
              with the latest official Raising Cane&apos;s allergen information and
              the local restaurant.
            </p>
            <p>
              The reason this question matters is that some fast food chains use
              peanut oil, while others use vegetable oil blends. Since oil
              sources and supplier formulas can change, your content should
              avoid saying “100% safe.”
            </p>
            <div className="border-l-4 border-[#d71920] bg-[#f8f6ef] p-4">
              <p className="font-black leading-7">
                Raising Cane&apos;s does not appear to be commonly listed as a
                peanut-oil restaurant, but customers with peanut allergies should
                always confirm with the official allergen menu and local staff
                before ordering.
              </p>
            </div>
          </GuideSection>

          <div className="grid gap-6 lg:grid-cols-2">
            <GuideSection title="Butter, Cheese, and Cream-Based Ingredients at Raising Cane's">
              <p>
                Dairy allergies are another major concern at Cane&apos;s. Many users
                search does Cane&apos;s Sauce have dairy, and this is an important
                question because sauces, toast, breading, and creamy sides can
                sometimes contain milk-based ingredients.
              </p>
              <BulletGrid
                items={[
                  "Texas Toast",
                  "Chicken Fingers",
                  "Cane's Sauce",
                  "Coleslaw",
                  "Sandwich buns",
                  "Any buttered or creamy item",
                ]}
              />
              <p>
                Does Cane&apos;s Sauce have dairy? The safest answer is to check the
                latest Raising Cane&apos;s allergen menu, because sauce ingredients
                and allergen listings can change. If you avoid dairy for allergy
                reasons, ask the restaurant team before ordering Cane&apos;s Sauce.
              </p>
            </GuideSection>

            <GuideSection title="Foods That Contain Wheat at Raising Cane's">
              <p>
                Wheat is one of the most important allergens to check at Raising
                Cane&apos;s. Chicken fingers are breaded, Texas toast is bread-based,
                and sandwich items may include buns or breading. This means many
                Cane&apos;s items may not be suitable for people avoiding wheat or
                gluten. If you want more details on eating without wheat, refer to our <Link href="/gluten-free-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Raising Cane&apos;s Gluten Free Menu Guide</Link>.
              </p>
              <BulletGrid
                items={[
                  "Chicken Fingers",
                  "Texas Toast",
                  "Chicken Sandwich",
                  "Sandwich Bun",
                  "Combo meals with breaded chicken or toast",
                  "Items prepared near wheat-based foods",
                ]}
              />
              <p>
                If you have celiac disease or a severe wheat allergy,
                cross-contact risk is also important. Even fries or sides may be
                exposed to wheat in a restaurant kitchen depending on
                preparation methods.
              </p>
            </GuideSection>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <GuideSection title="Raising Cane's Egg Allergy Guide">
              <p>
                Egg can appear in breading, sauces, creamy sides, or
                mayonnaise-based ingredients. People with egg allergies should
                be careful with fried chicken, Cane&apos;s Sauce, coleslaw, and
                sandwich items.
              </p>
              <BulletGrid
                items={[
                  "Chicken Fingers",
                  "Cane's Sauce",
                  "Coleslaw",
                  "Chicken Sandwich",
                  "Combo meals",
                  "Any creamy or breaded item",
                ]}
              />
            </GuideSection>

            <GuideSection title="Raising Cane's Soy Allergy Information">
              <p>
                Soy can appear in oils, sauces, breading, and processed
                ingredients. Some older allergen references mention that Raising
                Cane&apos;s fried foods use an all-vegetable blend including soybean
                and canola oil.
              </p>
              <BulletGrid
                items={[
                  "Frying oil",
                  "Chicken Fingers",
                  "Fries",
                  "Cane's Sauce",
                  "Coleslaw",
                  "Breaded items",
                  "Any item cooked in shared oil",
                ]}
              />
              <p>
                Some people with soy allergies react differently to highly
                refined soybean oil, but this depends on the person and the
                allergy. Do not assume it is safe without medical advice or
                confirmation from the restaurant.
              </p>
            </GuideSection>

            <GuideSection title="Raising Cane's Tree Nut Allergy Guide">
              <p>
                Tree nuts are different from peanuts. Peanuts are legumes, while
                tree nuts include almonds, walnuts, cashews, pecans, pistachios,
                and similar nuts.
              </p>
              <BulletGrid
                items={[
                  "Check the official Raising Cane's allergen menu",
                  "Ask if any ingredients contain tree nuts",
                  "Ask about shared preparation areas",
                  "Avoid ordering if staff cannot confirm safety",
                ]}
              />
            </GuideSection>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <GuideSection title="Raising Cane's Fish & Shellfish Allergy Information">
              <p>
                Fish and shellfish allergies should also be checked carefully.
                Even if a restaurant is mainly known for chicken, sauces can
                sometimes include fish-based ingredients, especially
                Worcestershire-style flavors or anchovy-related ingredients.
              </p>
              <p>
                Some third-party dairy-free/allergen notes warn that Cane&apos;s
                Sauce may include a fish-related concern, which is unexpected
                for many customers. Shellfish is usually less connected to
                Cane&apos;s core menu, but anyone with a serious shellfish allergy
                should still check the official allergen menu and ask the
                restaurant team.
              </p>
            </GuideSection>

            <GuideSection title="Raising Cane's Sesame Allergy Guide">
              <p>
                Sesame became one of the major allergens in the United States,
                so it is important to check buns, bread, seasonings, sauces, and
                supplier ingredients.
              </p>
              <BulletGrid
                items={[
                  "Sandwich buns",
                  "Texas Toast",
                  "Breaded items",
                  "Sauces",
                  "Seasoning blends",
                  "Supplier ingredient changes",
                ]}
              />
              <p>
                If you are highly sensitive to sesame, do not assume a
                plain-looking bread item is sesame-free. Always confirm with the
                current allergen guide.
              </p>
            </GuideSection>
          </div>

          <GuideSection title="What to Avoid If You Have Severe Food Allergies at Cane's">
            <p>
              If you have severe food allergies, Cane&apos;s may be difficult
              because the menu includes fried, breaded, sauced, and
              shared-kitchen items. The safest choice depends on your allergy,
              but high-risk items often include:
            </p>
            <BulletGrid items={severeAllergyRisks} />
            <p>
              For severe allergies, avoid ordering if staff cannot confirm
              ingredients, you cannot access the latest allergen PDF, you are
              unsure about shared fryer use, your allergy is triggered by trace
              amounts, or you need a certified allergen-free kitchen.
            </p>
            <p>
              This is not to scare users. It is just honest and safer wording
              for an allergy page.
            </p>
          </GuideSection>

          <GuideSection title="Allergy-Friendly Ordering Tips at Raising Cane's">
            <p>
              If you still want to order from Raising Cane&apos;s, these tips may
              help reduce risk:
            </p>
            <BulletGrid items={orderingTips} />
            <p>
              For mild dietary preferences, the allergen menu can help you
              choose better. For serious allergies, always treat the allergen
              menu as a guide, not a medical safety guarantee.
            </p>
          </GuideSection>

          <GuideSection title="How Accurate Is the Raising Cane's Allergen Menu?">
            <p>
              The Raising Cane&apos;s allergen menu is the best place to start, but
              no allergen menu can guarantee zero risk. Ingredients may change,
              suppliers may update formulas, and restaurant preparation can vary
              by location.
            </p>
            <p>
              Raising Cane&apos;s official menu page links to allergen and nutrition
              information, which helps users review current details before
              ordering. Still, customers with food allergies should confirm
              details at the restaurant because local preparation and
              cross-contact risks can matter.
            </p>
            <BulletGrid
              items={[
                "Allergen information may change",
                "Cross-contact is possible",
                "Official sources should be checked",
                "Severe allergy customers should speak with staff",
                "This content is informational, not medical advice",
              ]}
            />
          </GuideSection>

          <GuideSection title="Final Thoughts on Raising Cane's Allergy Information">
            <p>
              The Raising Cane&apos;s allergen menu is helpful for checking common
              allergens before you order. Whether you are searching for Raising
              Cane&apos;s allergen info, Cane&apos;s allergy menu, does Raising Cane&apos;s
              use peanut oil, or does Cane&apos;s Sauce have dairy, the most
              important thing is to use updated information and ask questions
              before eating.
            </p>
            <p>
              Raising Cane&apos;s menu is simple, but allergens can still appear in
              breaded chicken, sauces, toast, sides, oil, and shared preparation
              areas. If you have a mild food sensitivity, this guide can help
              you understand what to check. If you have a severe allergy, always
              confirm with the official allergen menu and local restaurant team
              before ordering.
            </p>
          </GuideSection>

          <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
            <p className="text-sm font-black uppercase text-[#d71920]">
              Allergen FAQ
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight">
              FAQs About Raising Cane&apos;s Allergen Menu
            </h2>
            <div className="mt-6 divide-y divide-black/10 border border-black/10">
              {faqItems.map((item) => (
                <details key={item.question} className="group bg-white">
                  <summary className="cursor-pointer list-none p-4 text-lg font-black transition hover:bg-[#fff8ef]">
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-[#d71920] group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="px-4 pb-4 leading-7 text-black/60">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
