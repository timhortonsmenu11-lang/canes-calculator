import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Raising Cane's Chicken Fingers Calories & Nutrition (2026 Data)",
  description: "Each Cane's chicken finger is 130 cal with 13g protein. See exact calories for the 3 Finger, Box & Caniac Combos — plus easy ways to cut 500+ cal from your order.",
  alternates: { canonical: "/calories-in-raising-canes-chicken-fingers" },
  openGraph: {
    title: "How Many Calories in Raising Cane's Chicken Fingers?",
    description: "130 cal per tender, 1,840 for a Caniac Combo. Full calorie & protein breakdown for every Cane's order — with tips to eat smarter.",
    images: [{ url: "/chicken_fingers_hero_1779134792230.png", width: 1200, height: 630, alt: "Raising Cane's chicken fingers calories and nutrition facts" }],
    type: "article",
  },
};

function StatCard({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-[#f8f6ef] p-4 text-center">
      <p className="text-3xl font-black text-[#d71920]">{value}</p>
      <p className="text-xs font-bold uppercase text-black/40">{unit}</p>
      <p className="mt-1 text-sm font-bold text-black/65">{label}</p>
    </div>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
      {eyebrow && <p className="text-sm font-black uppercase text-[#d71920]">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-black leading-tight text-[#151515]">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-black/65">{children}</div>
    </section>
  );
}

const faqItems = [
  { q: "How many calories in a single Raising Cane's chicken finger?", a: "One chicken finger has 130 calories, 13g protein, 5g carbs, and 6g fat. That's the baseline — multiply by however many tenders you order." },
  { q: "How many calories are in 4 Raising Cane's chicken fingers?", a: "Four tenders alone come to 520 calories and 52g protein. That's what you get in a Box Combo before adding fries, toast, slaw, and sauce." },
  { q: "What are the calories in the 3 Finger Combo?", a: "The full 3 Finger Combo totals about 1,050 calories. That's 3 tenders (390 cal) + fries (400 cal) + Texas toast (150 cal) + one Cane's Sauce (190 cal). Drinks are extra." },
  { q: "How many calories in the Box Combo?", a: "Roughly 1,290 calories for the entire Box Combo. It includes 4 fingers, fries, toast, coleslaw, and one sauce. That's a big meal — plenty for most people." },
  { q: "What about the Caniac Combo calories?", a: "The Caniac is the biggest option at around 1,840 calories. Six fingers, large fries, toast, coleslaw, and two sauces. If you're calorie-conscious, consider splitting it." },
  { q: "How much protein is in Raising Cane's chicken fingers?", a: "Each tender packs 13g protein. So 3 fingers = 39g, 4 fingers = 52g, and the full Caniac (6 fingers) = 78g protein from the chicken alone." },
  { q: "Are Raising Cane's chicken fingers high in fat?", a: "Each finger has 6g of fat — not terrible for fried food. The bigger fat bomb is the Cane's Sauce at 19g fat per cup. If you're watching fat, dip sparingly." },
  { q: "What's the lowest calorie meal at Raising Cane's?", a: "The Kid's Combo at 650 calories is the lightest full meal — 2 tenders, fries, and one sauce. You can also order tenders à la carte with no sides." },
  { q: "Does Raising Cane's have nutrition information available?", a: "Yes, Cane's publishes nutrition data for all menu items. We've compiled everything into our nutrition calculator so you can build a custom meal and see totals instantly." },
  { q: "Can I eat Cane's on a high-protein diet?", a: "Absolutely. A 4-finger order gives you 52g of protein for 520 calories — solid ratio. Skip the sauce and toast for an even tighter calorie-to-protein ratio." },
];

export default function ChickenFingerCaloriesPage() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: "How Many Calories in Raising Cane's Chicken Fingers? Every Combo Covered", author: { "@type": "Organization", name: "Cane's Nutrition Calculator" }, publisher: { "@type": "Organization", name: "Cane's Nutrition Calculator", logo: { "@type": "ImageObject", url: "https://canesnutritioncalculator.us/site-logo.png" } }, mainEntityOfPage: { "@type": "WebPage", "@id": "https://canesnutritioncalculator.us/calories-in-raising-canes-chicken-fingers" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      {jsonLd.map((block, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}
      <SiteHeader />

      <nav className="mx-auto max-w-4xl px-4 pt-6 text-xs font-bold text-black/40 sm:px-6">
        <Link href="/" className="hover:text-[#d71920]">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/blog" className="hover:text-[#d71920]">Blog</Link>
        <span className="mx-1">/</span>
        <span className="text-black/60">Chicken Fingers Calories</span>
      </nav>

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
        <header className="rounded-xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">Nutrition Guide · Updated May 2026</p>
          <h1 className="mt-2 text-3xl font-black leading-tight sm:text-5xl">
            Calories in Raising Cane&apos;s Chicken Fingers — Every Combo Covered
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-black/60">
            Let&apos;s be honest — nobody goes to Cane&apos;s planning to count calories. But if you&apos;re tracking macros, watching what you eat, or just curious before you order, here&apos;s every number you need. No filler. Just the data.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-black/10 shadow-sm">
          <div className="relative h-[280px] sm:h-[400px]">
            <Image src="/chicken_fingers_hero_1779134792230.png" alt="Raising Cane's chicken fingers calories — crispy golden tenders with 130 calories and 13g protein each" fill className="object-cover" priority />
          </div>
        </div>

        <SectionCard eyebrow="Short answer" title="One Chicken Finger = 130 Calories">
          <p>That&apos;s it. 130 calories per tender. Each individual chicken finger is the same: <strong>130 calories, 13g protein, 5g carbs, 6g fat</strong>.</p>
          <p>Two tenders? 260. Three? 390. The Caniac&apos;s six tenders? 780 calories from the chicken alone — before you even touch the fries or the sauce.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard label="per tender" value="130" unit="calories" />
            <StatCard label="per tender" value="13g" unit="protein" />
            <StatCard label="per tender" value="5g" unit="carbs" />
            <StatCard label="per tender" value="6g" unit="fat" />
          </div>
        </SectionCard>

        <SectionCard title="Calories by Number of Tenders (Chicken Only)">
          <p>Here&apos;s the breakdown if you&apos;re eating just the chicken — no fries, no toast, no sauce.</p>
          <div className="overflow-x-auto rounded-lg border border-black/10 bg-[#f8f6ef]">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-black/10 bg-[#151515] text-white">
                <tr>
                  <th className="px-4 py-3 font-black uppercase">Tenders</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Calories</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Protein</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Carbs</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Fat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 font-bold text-black/65">
                {[
                  { n: "2 Piece", c: 260, p: 26, cb: 10, f: 12 },
                  { n: "3 Piece", c: 390, p: 39, cb: 15, f: 18 },
                  { n: "4 Piece", c: 520, p: 52, cb: 20, f: 24 },
                  { n: "5 Piece", c: 650, p: 65, cb: 25, f: 30 },
                  { n: "6 Piece (Caniac)", c: 780, p: 78, cb: 30, f: 36 },
                ].map((r) => (
                  <tr key={r.n} className="hover:bg-black/[0.02]">
                    <td className="px-4 py-3 font-black text-[#151515]">{r.n}</td>
                    <td className="px-4 py-3 text-center">{r.c}</td>
                    <td className="px-4 py-3 text-center text-[#d71920]">{r.p}g</td>
                    <td className="px-4 py-3 text-center">{r.cb}g</td>
                    <td className="px-4 py-3 text-center">{r.f}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-black/50">
            Want to play with the numbers yourself?{" "}
            <Link href="/" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Open the Nutrition Calculator</Link>
          </p>
        </SectionCard>

        <div className="overflow-hidden rounded-xl border border-black/10 shadow-sm">
          <div className="relative h-[250px] sm:h-[380px]">
            <Image src="/combo_meal_calories_1779134964990.png" alt="Raising Cane's Box Combo meal nutrition — chicken fingers with crinkle-cut fries, Texas toast, Cane's Sauce, and coleslaw calories breakdown" fill className="object-cover" />
          </div>
        </div>

        <SectionCard eyebrow="Full meals" title="Every Combo Meal — Calories, Protein &amp; More">
          <p>Nobody orders just naked tenders. Here&apos;s every standard combo with all the sides included. Drinks aren&apos;t counted since they vary.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { name: "3 Finger Combo", desc: "3 tenders · fries · toast · 1 sauce", cal: "1,050", pro: "48g", note: "The starter combo. Solid meal for most people." },
              { name: "Box Combo", desc: "4 tenders · fries · toast · slaw · 1 sauce", cal: "1,290", pro: "62g", note: "Adds slaw + an extra tender. The most popular order." },
              { name: "Caniac Combo", desc: "6 tenders · lg fries · toast · slaw · 2 sauces", cal: "1,840", pro: "90g", note: "The big boy. 90g protein, but nearly a full day's calories." },
              { name: "Kid's Combo", desc: "2 tenders · fries · 1 sauce", cal: "650", pro: "29g", note: "Lightest full combo. No toast, no slaw." },
            ].map((combo) => (
              <article key={combo.name} className="rounded-xl border border-black/10 bg-[#f8f6ef] p-5">
                <h3 className="text-xl font-black text-[#151515]">{combo.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase text-black/40">{combo.desc}</p>
                <div className="mt-4 flex items-end justify-between border-t border-black/10 pt-4">
                  <div>
                    <p className="text-2xl font-black text-[#d71920]">{combo.cal}</p>
                    <p className="text-xs font-bold text-black/40">calories</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-[#151515]">{combo.pro}</p>
                    <p className="text-xs font-bold text-black/40">protein</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-black/50 italic">{combo.note}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-black/50">
            Looking for prices too? Check the full{" "}
            <Link href="/raising-canes-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Raising Cane&apos;s menu with prices</Link>.
          </p>
        </SectionCard>

        <SectionCard title="Where the Calories Actually Come From">
          <p>People blame the chicken, but the tenders are the <em>least</em> calorie-dense part of the meal:</p>
          <div className="overflow-x-auto rounded-lg border border-black/10 bg-[#f8f6ef]">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-black/10 bg-[#151515] text-white">
                <tr>
                  <th className="px-4 py-3 font-black uppercase">Side Item</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Cal</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Fat</th>
                  <th className="px-4 py-3 text-center font-black uppercase">Carbs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 font-bold text-black/65">
                <tr><td className="px-4 py-3 font-black text-[#151515]">Crinkle-Cut Fries</td><td className="px-4 py-3 text-center">400</td><td className="px-4 py-3 text-center">18g</td><td className="px-4 py-3 text-center">55g</td></tr>
                <tr><td className="px-4 py-3 font-black text-[#151515]">Cane&apos;s Sauce</td><td className="px-4 py-3 text-center">190</td><td className="px-4 py-3 text-center">19g</td><td className="px-4 py-3 text-center">7g</td></tr>
                <tr><td className="px-4 py-3 font-black text-[#151515]">Texas Toast</td><td className="px-4 py-3 text-center">150</td><td className="px-4 py-3 text-center">5g</td><td className="px-4 py-3 text-center">21g</td></tr>
                <tr><td className="px-4 py-3 font-black text-[#151515]">Coleslaw</td><td className="px-4 py-3 text-center">100</td><td className="px-4 py-3 text-center">6g</td><td className="px-4 py-3 text-center">11g</td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Fries + one sauce = 590 calories</strong> — more than four entire tenders. If you&apos;re cutting calories at Cane&apos;s, look at the sides first.</p>
        </SectionCard>

        <div className="rounded-xl border-l-4 border-[#d71920] bg-white p-6 shadow-xl shadow-black/5">
          <h3 className="text-lg font-black text-[#151515]">Have Allergies? Don&apos;t Skip This</h3>
          <p className="mt-2 text-base leading-7 text-black/60">
            Cane&apos;s chicken fingers are breaded — wheat and dairy are involved. Check the{" "}
            <Link href="/allergen-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">full Allergen Menu</Link> or our{" "}
            <Link href="/gluten-free-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Gluten Free Guide</Link> before ordering.
          </p>
        </div>

        <SectionCard title="How to Cut Calories Without Ruining Your Meal">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { tip: "Dip, don't dunk", detail: "Half a sauce cup instead of two full ones saves ~190 cal and 19g fat." },
              { tip: "Skip the toast", detail: "Texas Toast is 150 cal. Tasty, but the easiest cut to make." },
              { tip: "Swap fries for extra slaw", detail: "Slaw is 100 cal vs. 400 for fries. That's a 300-calorie swing." },
              { tip: "Drink water or unsweet tea", detail: "A large sweet tea adds 340 calories. Unsweet tea? Zero." },
            ].map((t) => (
              <article key={t.tip} className="rounded-xl border border-black/10 bg-[#fff8ef] p-4">
                <h3 className="font-black text-[#151515]">{t.tip}</h3>
                <p className="mt-1 text-sm leading-6 text-black/55">{t.detail}</p>
              </article>
            ))}
          </div>
          <p>With all four changes, a 1,290-cal Box Combo drops to around 700-800 calories. <em>Huge</em> swing.</p>
        </SectionCard>

        {/* ── ACCORDION FAQs ──────────────────────────────────── */}
        <section className="rounded-xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          <p className="text-sm font-black uppercase text-[#d71920]">Common Questions</p>
          <h2 className="mt-2 text-3xl font-black leading-tight">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-black/10 bg-[#f8f6ef] transition-all hover:border-[#d71920]/20 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-black leading-snug text-[#151515] sm:text-lg">{f.q}</h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#151515] text-white transition-transform group-open:rotate-45 group-open:bg-[#d71920]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                </summary>
                <div className="border-t border-black/10 px-5 pb-5 pt-4">
                  <p className="leading-7 text-black/60">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/10 bg-[#151515] p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">Build Your Own Meal &amp; See the Totals</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">Pick your tenders, choose your sides, add a drink — the calculator does the rest.</p>
          <Link href="/" className="mt-6 inline-flex rounded-lg bg-[#d71920] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#b9151b]">
            Open Nutrition Calculator
          </Link>
        </section>

        <div className="rounded-xl border border-black/10 bg-white p-5 text-xs leading-6 text-black/45 shadow-xl shadow-black/5 sm:p-8">
          <p className="font-black uppercase text-black/30">Editorial note</p>
          <p className="mt-2">
            All calorie and nutrition figures come from Raising Cane&apos;s published nutritional data as of May 2026. Values can vary by location and preparation. Maintained by the{" "}
            <Link href="/about-us" className="underline hover:text-[#d71920]">Cane&apos;s Nutrition Calculator</Link> team — not affiliated with Raising Cane&apos;s Restaurants, LLC.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
