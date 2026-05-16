import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated = "Updated 2026",
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#151515]">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="border border-black/10 bg-[#151515] p-5 text-white shadow-xl shadow-black/10 sm:p-8">
          <p className="w-fit bg-[#d71920] px-3 py-1 text-xs font-black uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            {intro}
          </p>
          <p className="mt-4 text-sm font-bold text-white/50">{updated}</p>
        </div>

        <article className="legal-content mt-6 border border-black/10 bg-white p-5 shadow-xl shadow-black/5 sm:p-8">
          {children}
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
