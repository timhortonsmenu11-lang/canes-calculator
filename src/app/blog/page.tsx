import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Blog — Cane's Nutrition Calculator",
  description:
    "Nutrition guides, calorie breakdowns, and meal planning tips for Raising Cane's. Real data, no fluff.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    href: "/calories-in-raising-canes-chicken-fingers",
    title:
      "Raising Cane's Chicken Fingers Calories & Nutrition (2026 Data)",
    excerpt:
      "How many calories in a single tender? What about the full Box Combo or Caniac? We break down every number — chicken only, full combos, protein, fat, and practical tips to cut calories without skipping Cane's.",
    tag: "Nutrition Guide",
    date: "May 19, 2026",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      <SiteHeader />

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <header className="rounded-2xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5 sm:p-10">
          <p className="text-sm font-black uppercase tracking-wide text-[#d71920]">
            Guides &amp; articles
          </p>
          <h1 className="mt-3 text-4xl font-black leading-[1.1] sm:text-6xl">
            Blog
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/60">
            Deep dives into Raising Cane&apos;s nutrition — calorie counts,
            macro breakdowns, allergen notes, and smarter ordering tips backed
            by real data.
          </p>
        </header>

        <div className="grid gap-5">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block rounded-2xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5 transition hover:-translate-y-1 hover:border-[#d71920]/30 hover:bg-[#fff8ef] hover:shadow-2xl sm:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase text-black/40">
                <span className="rounded bg-[#d71920]/10 px-3 py-1.5 font-bold tracking-wider text-[#d71920]">
                  {post.tag}
                </span>
                <span>{post.date}</span>
              </div>
              <h2 className="mt-3 text-2xl font-black leading-tight text-[#151515] group-hover:text-[#d71920] transition-colors sm:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 leading-7 text-black/60">{post.excerpt}</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#d71920]">
                Read guide 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </p>
            </Link>
          ))}
        </div>

        <section className="rounded-3xl border border-black/10 bg-[#151515] p-10 text-center text-white shadow-2xl sm:p-16">
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">More Guides Coming Soon</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            We&apos;re working on more in-depth nutrition breakdowns for
            Cane&apos;s sauces, drinks, combo comparisons, and meal-prep
            strategies. Bookmark this page and check back.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#d71920] px-10 py-5 text-base font-black uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#b9151b] hover:shadow-xl active:scale-95"
          >
            Try the Calculator
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
