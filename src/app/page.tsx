import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { NutritionCalculator } from "@/components/NutritionCalculator";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cane's Nutrition Calculator, Calories & Macros 2026",
  description:
    "Use Cane's Nutrition Calculator to check calories, macros, and nutrition facts for chicken fingers, fries, Texas toast, Cane's Sauce, drinks, and combos.",
};

const calculatorBenefits = [
  "Calculate total calories for your Cane's meal",
  "Check protein, carbs, and fat",
  "Compare different meal combinations",
  "Understand which items add the most calories",
  "Plan your order before visiting Raising Cane's",
  "Use it as a simple Canes calorie calculator or Canes macro calculator",
];

const popularItems = [
  "Chicken Fingers",
  "Crinkle-Cut Fries",
  "Texas Toast",
  "Cane's Sauce",
  "Coleslaw",
  "Sandwiches",
  "Combo Meals",
  "Fountain Drinks",
  "Sweet Tea",
  "Lemonade",
];

const smarterTips = [
  "Choose water or a zero-calorie drink to reduce sugar and calories",
  "Use less sauce if you want to lower fat and calories",
  "Compare combo meals before ordering",
  "Check sodium if you are watching salt intake",
  "Use the calculator before ordering a large meal",
  "Balance your Cane's meal with lighter meals during the day",
];

const faqItems = [
  {
    question: "What is the Raising Cane's nutrition calculator?",
    answer:
      "The Raising Cane's nutrition calculator is a tool that helps you calculate estimated calories, protein, carbs, fat, and other nutrition values for your selected Cane's meal.",
  },
  {
    question: "How does the Cane's nutrition calculator work?",
    answer:
      "You select the Raising Cane's menu items you want, such as chicken fingers, fries, toast, sauce, and drinks. The calculator then adds the estimated nutrition values together and shows your meal total.",
  },
  {
    question: "Can I use this as a Canes calorie calculator?",
    answer:
      "Yes. This tool works as a Canes calorie calculator because it helps you calculate the estimated calories in your Raising Cane's order.",
  },
  {
    question: "What is the difference between a calorie calculator and a macro calculator?",
    answer:
      "A calorie calculator focuses mainly on total calories. A Canes macro calculator also helps you check protein, carbs, and fat in your meal.",
  },
  {
    question: "Where can I find Cane's nutrition facts?",
    answer:
      "You can find Cane's nutrition facts in the nutrition table on this page. It includes common Raising Cane's menu items and their estimated nutrition values.",
  },
  {
    question: "Does Raising Cane's provide nutrition information?",
    answer:
      "Yes, Raising Cane's provides nutrition information for its menu items. This page makes Raising Cane's nutrition information easier to read and compare.",
  },
  {
    question: "What item has the most calories at Raising Cane's?",
    answer:
      "Larger combo meals with multiple chicken fingers, fries, Texas toast, sauce, and sugary drinks are usually higher in calories. Use the Raising Cane's calorie calculator to compare your full meal.",
  },
  {
    question: "Is Cane's Sauce high in calories?",
    answer:
      "Cane's Sauce can add extra calories and fat to your meal, especially if you order extra sauce. Checking it in the calculator can help you understand how much it adds.",
  },
  {
    question: "Can I make a lower-calorie meal at Raising Cane's?",
    answer:
      "Yes. You can reduce calories by choosing fewer sides, limiting extra sauce, selecting water or a zero-calorie drink, and comparing items in the Canes calorie counter.",
  },
  {
    question: "Is Raising Cane's good for protein?",
    answer:
      "Raising Cane's chicken fingers provide protein, but they are also breaded and fried. If protein is your main goal, use the Canes macro calculator to check protein along with calories, carbs, and fat.",
  },
];

function ContentSection({
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

export default function Home() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Cane's Nutrition Calculator",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Updated 2026 nutrition tool
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-[#151515] sm:text-5xl">
            Cane&apos;s Nutrition Calculator
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-black/60">
            Build a Cane&apos;s meal, compare calories and macros, review
            nutrition facts, and check menu items before ordering.
          </p>
        </div>

        <div className="hidden mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5">
          <Image
            src="/raising%20cane%27s%20nutrition%20facts%20calculator.webp"
            alt="raising cane's nutrition facts calculator"
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <div id="calculator">
        <Suspense fallback={<div className="p-10 text-center font-bold">Loading calculator...</div>}>
          <NutritionCalculator />
        </Suspense>
        <p className="mx-auto max-w-7xl px-4 pt-4 text-xs font-semibold text-black/50 text-center">
          Disclaimer: This tool is for informational purposes only and is not medical advice. Data compiled from official Raising Cane's nutritional publications as of May 2026.
        </p>
      </div>

      <section className="mx-auto max-w-7xl space-y-6 px-4 pb-16 sm:px-6 lg:px-8">
        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#d71920]">
                Nutrition facts PDF
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight">
                Download Raising Cane&apos;s Nutrition Facts PDF
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-black/65">
                Prefer a PDF copy? Download the Raising Cane&apos;s Nutrition
                Facts PDF for quick reference alongside the calculator and
                nutrition table on this page.
              </p>
            </div>
            <a
              href="/Raising%20Cane%27s%20Nutrition%20Facts.pdf"
              download="Raising Cane's Nutrition Facts.pdf"
              className="inline-flex justify-center bg-[#d71920] px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-[#b9151b]"
            >
              Download PDF
            </a>
          </div>
        </section>

        <ContentSection
          eyebrow="Nutrition facts guide"
          title="Raising Cane's Nutrition Facts & Menu Macros"
        >
          <p>
            Welcome to your simple guide for Raising Cane&apos;s nutrition. If you
            enjoy their chicken fingers, crinkle-cut fries, Texas toast,
            Cane&apos;s Sauce, coleslaw, or drinks, this page helps you understand
            the calories, macros, and nutrition details before you order.
          </p>
          <p>
            Our nutrition calculator is designed to make meal
            planning easier. You can select your favorite menu items, build your
            meal, and quickly check estimated calories, protein, carbs, fat, and
            other nutrition values. Whether you are tracking calories, managing
            macros, or just want to make a smarter food choice, this tool gives
            you an easy way to compare different meals.
          </p>
        </ContentSection>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <ContentSection title="How to Use the Calculator">
            <p>
              Use our tool to build your custom meal
              and see the estimated nutrition totals. Instead of checking every
              item one by one, it helps you combine chicken fingers,
              sides, sauces, drinks, and extras in one place.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {calculatorBenefits.map((item) => (
                <p
                  key={item}
                  className="border border-black/10 bg-[#f8f6ef] p-3 text-sm font-bold leading-6 text-black/65"
                >
                  {item}
                </p>
              ))}
            </div>
            <p>
              Whether you order a Box Combo, Caniac Combo, 3 Finger Combo, or
              your own custom meal, you can
              see the nutrition breakdown more clearly.
            </p>
          </ContentSection>

          <ContentSection title="Why Calculate Your Calories?">
            <p>
              Raising Cane&apos;s menu is simple, but calories can add up quickly
              when you include fries, Texas toast, Cane&apos;s Sauce, and sweet tea.
              A calorie counter helps you understand your full meal
              instead of looking at only one item.
            </p>
            <p>
              For example, chicken fingers may be a good source of protein, but
              adding extra sauce, fries, and a large drink can increase
              calories, carbs, sugar, and fat. Adjust your meal and see how small changes
              affect your total nutrition.
            </p>
          </ContentSection>
        </div>

        <ContentSection title="Raising Cane's Nutrition Facts">
          <p>
            Below, you can find a complete Cane&apos;s nutrition facts table for
            popular Raising Cane&apos;s menu items. The nutrition table may include
            calories, protein, total fat, carbs, sodium, sugar, and other
            important values depending on the item.
          </p>
          <p>
            The goal of this page is to make Raising Cane&apos;s nutrition
            information easier to read. Instead of searching through different
            pages, you can view common nutrition details in one clean place.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {popularItems.map((item) => (
              <p
                key={item}
                className="border border-black/10 bg-[#151515] px-3 py-2 text-sm font-black text-white"
              >
                {item}
              </p>
            ))}
          </div>
          <p>
            If you want to understand the full Raising Cane&apos;s nutrition
            menu, the table below can help you compare items and choose the meal
            that fits your needs.
          </p>
        </ContentSection>

        <ContentSection title="Understanding Raising Cane's Nutrition Menu">
          <p>
            The Raising Cane&apos;s nutrition menu is mostly focused on chicken
            finger meals, sides, sauces, and drinks. Since the menu is not very
            large, it is easier to compare items, but it is still important to
            understand what each item adds to your total meal.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Chicken Fingers",
                text: <>Chicken fingers are the main item at Raising Cane's. They usually provide protein, but they also contain calories, fat, carbs, and sodium because they are breaded and fried. If you are sensitive to wheat, you should consult our <Link href="/gluten-free-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Raising Cane&apos;s Gluten Free Menu Guide</Link>. If your goal is more protein, chicken fingers are usually the main source in your meal.</>,
              },
              {
                title: "Crinkle-Cut Fries",
                text: "Fries add extra calories, carbs, and fat. They are a popular side, but if you are using a Canes calorie calculator, you may notice that fries can increase the total meal calories quickly.",
              },
              {
                title: "Texas Toast",
                text: "Texas toast is one of Cane's most loved sides. It adds carbs and calories to the meal. If you are watching carbs or calories, you may want to compare your meal with and without Texas toast.",
              },
              {
                title: "Cane's Sauce",
                text: "Cane's Sauce is a favorite part of the meal, but sauces can add extra calories and fat. If you add more than one sauce cup, your total calories may increase. This is why a Cane's nutrition calculator is helpful.",
              },
              {
                title: "Drinks",
                text: "Sweet tea, lemonade, and soft drinks can add sugar and calories. If you want a lower-calorie meal, choosing water or a zero-calorie drink can make a big difference.",
              },
            ].map((item) => (
              <article key={item.title} className="border border-black/10 p-4">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-black/60">{item.text}</p>
              </article>
            ))}
          </div>
        </ContentSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ContentSection title="How to Use the Canes Macro Calculator">
            <p>
              Our Canes macro calculator helps you check the main macros in your
              meal: protein, carbs, fat, and calories. Protein is important for
              muscle, fullness, and fitness goals. Carbs usually come from
              fries, toast, breading, drinks, and sides. Fat can come from fried
              chicken, fries, sauce, and other items. Calories show the total
              energy from your complete meal.
            </p>
            <p>
              To use the calculator, simply choose the items you want to order.
              The calculator will show your estimated nutrition total. You can
              then remove or add items to compare different meal options.
            </p>
            <ul className="grid gap-2 text-sm font-bold text-black/65">
              <li>Chicken fingers with fries and toast</li>
              <li>Chicken fingers without sauce</li>
              <li>Box Combo with different drinks</li>
              <li>Extra sauce vs no extra sauce</li>
              <li>Regular drink vs water</li>
              <li>Combo meal vs custom meal</li>
            </ul>
          </ContentSection>

          <ContentSection title="Raising Cane's Nutrition Information for Smarter Choices">
            <p>
              Fast food can fit into many lifestyles when you understand the
              nutrition. This page does not tell you what you “should” or
              “should not” eat. Instead, it gives you clear Raising Cane&apos;s
              nutritional information so you can make your own choice.
            </p>
          <p>
            Some people may want a high-protein meal. Some may want fewer
            calories. Others may only want to know what is inside their
            favorite Cane&apos;s combo. That is why having both a Raising Cane&apos;s
            nutrition calculator and a full nutrition facts table on one page
            is useful.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {smarterTips.map((item) => (
              <p
                key={item}
                className="border border-black/10 bg-[#f8f6ef] p-3 text-sm font-bold leading-6 text-black/65"
              >
                {item}
              </p>
            ))}
          </div>
        </ContentSection>
        </div>

        <ContentSection title="Raising Cane's Calories: What Adds Up Most?">
          <p>
            When using a Raising Cane&apos;s calorie calculator, you may notice
            that the biggest calorie sources often come from fried items,
            sauces, sides, and sugary drinks.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Multiple chicken fingers",
              "Large fries",
              "Texas toast",
              "Extra Cane's Sauce",
              "Sweet tea or regular soda",
              "Larger combo meals",
            ].map((item) => (
              <p
                key={item}
                className="border border-black/10 bg-[#fff8ef] p-3 text-sm font-black text-black/65"
              >
                {item}
              </p>
            ))}
          </div>
          <p>
            This does not mean you need to avoid these items. It simply means
            you should know how they affect your full meal. If you are using a
            Canes calorie counter, you can adjust your order based on your
            personal goal.
          </p>
        </ContentSection>

        <ContentSection title="Cane's Nutrition Facts Table">
          <p>
            Use the nutrition facts table above to compare menu items. You can
            check calories, macros, and other nutrition details for each item.
            This makes it easier to understand the full Cane&apos;s nutrition facts
            before building your meal in the calculator.
          </p>
          <p>
            The table is useful for users searching for Raising Cane&apos;s
            nutrition, Cane&apos;s nutrition facts, Raising Cane&apos;s nutrition menu,
            Raising Cane&apos;s nutrition information, Raising Cane&apos;s nutritional
            information, Canes calorie counter, and Raising Cane&apos;s calorie
            calculator. You can use the table and calculator together for better
            meal planning.
          </p>
        </ContentSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ContentSection title="Who Can Use This Raising Cane's Nutrition Calculator?">
            <div className="grid gap-3">
              {[
                [
                  "For Calorie Tracking",
                  "If you track calories daily, the Canes calorie calculator helps you estimate your meal total before eating.",
                ],
                [
                  "For Fitness and Macros",
                  "If you follow protein, carb, or fat goals, the Canes macro calculator helps you see how your meal fits your plan.",
                ],
                [
                  "For Families",
                  "Families can compare items and plan meals before visiting Raising Cane's.",
                ],
                [
                  "For Students and Busy People",
                  "If you eat fast food often, checking nutrition can help you make better choices without spending too much time.",
                ],
                [
                  "For General Menu Research",
                  "If you simply want to know the Raising Cane's nutrition menu, this page gives you a simple overview.",
                ],
              ].map(([title, text]) => (
                <article key={title} className="border border-black/10 p-4">
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-black/60">{text}</p>
                </article>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Is Raising Cane's Healthy?">
            <p>
              Raising Cane&apos;s can be part of your diet depending on your
              overall eating habits, portion size, and nutrition goals. The menu
              is mainly built around fried chicken, fries, toast, sauce, and
              drinks, so some meals can be high in calories, fat, carbs, and
              sodium.
            </p>
            <p>
              But you can still make smarter choices by checking the nutrition
              first. The best approach is to use the Raising Cane&apos;s nutrition
              calculator, compare your options, and choose the meal that fits
              your daily needs.
            </p>
            <p>
              A food is not only “good” or “bad.” What matters is your total
              diet, activity level, health goals, and portion size.
            </p>
          </ContentSection>
        </div>

        <ContentSection title="Why Our Raising Cane's Nutrition Page Is Helpful">
          <p>
            This page is made to give users simple, clear, and easy-to-read
            nutrition details. Instead of confusing charts or difficult terms,
            we explain Raising Cane&apos;s nutrition facts in a way that anyone can
            understand.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Check nutrition before ordering",
              "Compare menu items easily",
              "Build a custom meal",
              "Understand calories and macros",
              "Make better food choices",
              "Save time while researching Cane's nutrition",
            ].map((item) => (
              <p
                key={item}
                className="border border-black/10 bg-[#f8f6ef] p-3 text-sm font-black text-black/65"
              >
                {item}
              </p>
            ))}
          </div>
          <p>
            The calculator and nutrition facts table work together to give a
            complete view of your meal.
          </p>
        </ContentSection>

        <ContentSection title="Important Nutrition Note">
          <p>
            Nutrition values can vary by location, serving size, recipe updates,
            and preparation method. The values shown on this page are for
            general informational purposes only. For the most accurate and
            official details, always check Raising Cane&apos;s official nutrition
            resources or contact your local restaurant.
          </p>
          <p>
            If you have allergies, medical conditions, or strict dietary needs,
            please check the
            <Link href="/allergen-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">
              {' '}Raising Cane&apos;s Allergen Menu
            </Link>
            {' '}and speak with a qualified health professional before making food decisions.
          </p>
        </ContentSection>

        <section className="border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">
            Nutrition FAQ
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            FAQs About Raising Cane&apos;s Nutrition
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="border border-black/10 bg-[#f8f6ef] p-4"
              >
                <h3 className="text-lg font-black leading-tight">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-black/60">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <ContentSection title="Final Thoughts">
          <p>
            Raising Cane&apos;s is popular for its simple chicken finger menu,
            but knowing the nutrition can help you order with more confidence.
            With our Raising Cane&apos;s nutrition calculator, Canes calorie
            calculator, and complete Cane&apos;s nutrition facts table, you can
            quickly understand your meal before ordering.
          </p>
          <p>
            Whether you are checking calories, tracking macros, comparing
            combos, or looking for clear Raising Cane&apos;s nutritional
            information, this page gives you everything in one simple place.
          </p>
        </ContentSection>
      </section>

      <SiteFooter />
    </main>
  );
}
