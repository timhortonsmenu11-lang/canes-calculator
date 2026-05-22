import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Raising Cane’s Gluten Free Menu Guide May 2026",
  description:
    "Explore Raising Cane’s gluten free menu options, including Cane’s Sauce, coleslaw, fries, naked chicken, drinks, and cross-contact safety tips.",
  alternates: {
    canonical: "/gluten-free-menu",
  },
};

const menuItems = [
  {
    name: "Chicken Fingers",
    status: "Not gluten-free",
    note: "Breaded chicken contains wheat.",
  },
  {
    name: "Texas Toast",
    status: "Not gluten-free",
    note: "Contains wheat/gluten.",
  },
  {
    name: "Chicken Sandwich",
    status: "Not gluten-free",
    note: "Breaded chicken and bun contain gluten.",
  },
  {
    name: "Cane's Sauce",
    status: "Usually listed as gluten-free",
    note: "Still ask about ingredients and cross-contact.",
  },
  {
    name: "Coleslaw",
    status: "Usually listed as gluten-free",
    note: "Check current allergen info.",
  },
  {
    name: "Fries",
    status: "Depends on location",
    note: "Risk depends on fryer and cross-contact.",
  },
  {
    name: "Naked Chicken Tenders",
    status: "Depends on location",
    note: "No breading, but fryer risk can be high.",
  },
  {
    name: "Lemonade",
    status: "Usually gluten-free",
    note: "Check if you have other allergies.",
  },
  {
    name: "Sweet Tea",
    status: "Usually gluten-free",
    note: "Drink only, low gluten concern.",
  },
  {
    name: "Unsweet Tea",
    status: "Usually gluten-free",
    note: "Drink only, low gluten concern.",
  },
  {
    name: "Fountain Drinks",
    status: "Usually gluten-free",
    note: "Check flavor ingredients if sensitive.",
  },
];

const faqItems = [
  {
    question: "Does Raising Cane’s have a gluten free menu?",
    answer: "Raising Cane’s does not appear to have a full dedicated gluten-free menu. Some items may be gluten-free by ingredients, such as Cane’s Sauce, coleslaw, and drinks, but cross-contact is possible."
  },
  {
    question: "Are Raising Cane’s fries gluten free?",
    answer: "Raising Cane’s fries may be gluten-free by ingredients, but they are only safer if cooked in a dedicated fryer. Some locations may use shared fryers, so always ask before ordering."
  },
  {
    question: "Is Cane’s Sauce gluten free?",
    answer: "Cane’s Sauce is generally listed as gluten-free in the allergen information you provided. However, customers with celiac disease or severe gluten sensitivity should confirm with the latest allergen guide before ordering."
  },
  {
    question: "Are Raising Cane’s chicken fingers gluten free?",
    answer: "No. Regular Raising Cane’s chicken fingers are breaded and contain wheat, so they are not gluten-free."
  },
  {
    question: "What is naked chicken at Raising Cane’s?",
    answer: "Naked chicken means chicken tenders made without breading. Some locations may offer it, but it may still be cooked in shared oil, so it is not always safe for celiac disease."
  },
  {
    question: "Is Raising Cane’s safe for celiac disease?",
    answer: "Raising Cane’s is high risk for celiac customers because of breaded chicken, Texas toast, shared fryers, and cross-contact concerns. Some locations may be more careful than others, but safety is not guaranteed."
  }
];

function GuideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
      <h2 className="text-3xl font-black">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-black/70">{children}</div>
    </section>
  );
}

export default function GlutenFreeMenuPage() {
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

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
          <p className="inline-block rounded-full bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white">
            Gluten Free Guide
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#151515] sm:text-5xl">
            Raising Cane’s Gluten Free Menu Guide
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/70">
            If you are searching for the Raising Cane’s gluten free menu, this guide will help you understand what may be safe, what to avoid, and what questions to ask before ordering. Raising Cane’s is famous for chicken fingers, fries, Texas toast, Cane’s Sauce, coleslaw, lemonade, and sweet tea. But for gluten-free customers, especially people with celiac disease, Cane’s can be tricky.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-black/70">
            Raising Cane’s does not appear to have a fully dedicated gluten-free menu in the way some restaurants do. Some items may not contain gluten ingredients, but the biggest concern is cross-contact because Cane’s kitchens handle breaded chicken, Texas toast, shared fryers, and wheat-based products.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-black/70">
            This page is written to help you understand Raising Cane’s gluten free options, including fries, Cane’s Sauce, coleslaw, drinks, and “naked” chicken tenders.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <figure className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
          <Image
            src="/Raising%20Cane%E2%80%99s%20Gluten%20Free%20Menu%20guide.webp"
            alt="Raising Cane’s Gluten Free Menu guide"
            width={1200}
            height={720}
            className="h-auto w-full object-cover"
            priority
          />
          <figcaption className="px-6 py-4 text-sm text-black/60">
            Featured image for Raising Cane’s Gluten Free Menu guide
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8 mt-10">
        <div className="space-y-10">
          
          <GuideSection title="Is Raising Cane’s Gluten Free?">
            <p>
              Raising Cane’s is not a fully gluten-free restaurant. The main menu includes breaded chicken fingers and Texas toast, both of which contain wheat. Because Cane’s is built around fried chicken and breaded items, people with celiac disease or strong gluten sensitivity should be very careful.
            </p>
            <p>
              Some customers report that certain locations offer “naked chicken” or “naked tenders,” which means chicken without breading. Some customers also report that fries may be cooked in a separate fryer at certain locations. However, reviews are mixed, and other customers report shared fryers, cross-contact, and gluten reactions.
            </p>
            <p className="font-semibold text-[#151515]">
              So the honest answer is: Raising Cane’s may have gluten-friendly options at some locations, but it is not always safe for people with celiac disease or anyone who must avoid cross-contact.
            </p>
          </GuideSection>

          <GuideSection title="Does Raising Cane’s Have a Gluten Free Menu?">
            <p>
              Many people search for Raising Cane’s gluten free menu, but Raising Cane’s does not seem to offer a large official gluten-free menu with many choices. Instead, customers usually check the <Link href="/allergen-menu" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Raising Cane’s Allergen Menu</Link> and ask the restaurant about preparation.
            </p>
            <p>
              Based on the allergen/nutrition information you provided, Cane’s Sauce, coleslaw, and beverages are listed as gluten-free, while products containing gluten are still prepared in the kitchens. The same information also warns that cross-contact can happen.
            </p>
            <p>
              This means some items may be gluten-free by ingredients, but not guaranteed safe from gluten exposure.
            </p>
          </GuideSection>

          <GuideSection title="Raising Cane’s Gluten Free Options">
            <p>
              The most commonly mentioned Raising Cane’s gluten free options include:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Cane’s Sauce</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Coleslaw</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Lemonade</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Sweet tea & Unsweet tea</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Some fountain drinks</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Fries at some locations, depending on fryer use</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">“Naked” chicken tenders at some locations, depending on preparation</li>
            </ul>
            <p className="mt-4">
              But this does not mean every Cane’s location is safe. Several customer reviews report confusion from staff, shared fryers, or inconsistent answers about whether fries and naked tenders are cooked separately.
            </p>
          </GuideSection>

          <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
            <h2 className="text-3xl font-black">Raising Cane’s Gluten Free Menu Items</h2>
            <p className="mt-4 text-base leading-7 text-black/70">
              Here is a simple breakdown of common Cane’s menu items and their gluten-free concerns.
            </p>
            <div className="mt-6 grid gap-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-black/10 bg-[#fffdf9] p-6 shadow-sm shadow-black/5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-xl font-black text-[#151515]">{item.name}</h3>
                    <span className="rounded-full bg-[#f8f0e9] px-4 py-2 text-sm font-bold text-[#b94a2f]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-7 text-black/65">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <GuideSection title="Are Raising Cane’s Chicken Fingers Gluten Free?">
            <p>
              No, regular Raising Cane’s chicken fingers are not gluten free. They are breaded and fried, which means they contain wheat.
            </p>
            <p>
              If you are gluten-free, you should avoid regular chicken fingers, chicken sandwich items, and anything with breading. These items are not suitable for people avoiding gluten.
            </p>
          </GuideSection>

          <GuideSection title="What Are Raising Cane’s Naked Chicken Tenders?">
            <p>
              Some Raising Cane’s locations may offer “naked chicken tenders” or “naked bird” style chicken. This usually means chicken tenders cooked without breading.
            </p>
            <p>
              Many gluten-sensitive customers mention ordering naked tenders, but the issue is the fryer. If the naked chicken is cooked in the same oil as breaded chicken, it can still be unsafe for people with celiac disease.
            </p>
            <p>
              So the key question is not only: <em>“Can you make the chicken without breading?”</em>
            </p>
            <p>
              The better question is: <strong>“Is the naked chicken cooked in a separate fryer away from breaded chicken?”</strong>
            </p>
            <p>
              If the answer is no, then it is not a safe gluten-free option for severe gluten sensitivity or celiac disease.
            </p>
          </GuideSection>

          <GuideSection title="Are Raising Cane’s Fries Gluten Free?">
            <p>
              Raising Cane’s fries may not contain gluten ingredients, but the fryer situation matters most.
            </p>
            <p>
              Some customers report that fries are cooked in a separate fryer at their location. Others report that fries are not safe because the fryer may be shared or used for chicken during busy times. The forum content you shared includes many mixed reviews, with some customers saying fries were safe and others saying they got sick or were told there was no dedicated fryer.
            </p>
            <p className="font-semibold text-black/80">Because of this, you should ask:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>Are the fries cooked in a dedicated fryer?</li>
              <li>Is that fryer ever used for breaded chicken?</li>
              <li>During rush hours, do you ever use the fry fryer for chicken?</li>
              <li>Can staff change gloves before preparing my order?</li>
            </ul>
            <p className="mt-4">
              For celiac customers, fries should only be considered if the location clearly confirms a separate fryer and careful handling.
            </p>
          </GuideSection>

          <GuideSection title="Is Cane’s Sauce Gluten Free?">
            <p>
              Cane’s Sauce is commonly listed as gluten-free in the allergen/nutrition information you provided. The same note says Cane’s Sauce, coleslaw, and beverages are gluten-free.
            </p>
            <p>
              However, some community reviews disagree or express confusion about Cane’s Sauce. Because ingredients and supplier details can change, the safest approach is to check the latest allergen information and ask the restaurant before ordering.
            </p>
            <div className="border-l-4 border-[#d71920] bg-[#f8f6ef] p-4 mt-4">
              <p className="font-black leading-7">
                For SEO wording, the best safe answer is: Cane’s Sauce is generally listed as gluten-free, but customers with celiac disease or severe gluten sensitivity should confirm with the latest Raising Cane’s allergen guide before ordering.
              </p>
            </div>
          </GuideSection>

          <GuideSection title="Is Raising Cane’s Coleslaw Gluten Free?">
            <p>
              Raising Cane’s coleslaw is generally listed as gluten-free in the allergen/nutrition information you provided. It is one of the safer gluten-free-style items compared with fried or breaded foods.
            </p>
            <p>
              Still, cross-contact can happen in a restaurant kitchen. If your gluten sensitivity is severe, ask staff to use clean gloves and avoid contact with toast, breaded chicken, or shared surfaces.
            </p>
          </GuideSection>

          <GuideSection title="Are Raising Cane’s Drinks Gluten Free?">
            <p>Most drinks at Raising Cane’s are generally gluten-free, including:</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Lemonade</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Sweet tea</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Unsweet tea</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Fountain drinks</li>
              <li className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5 text-sm font-semibold text-black/75">Bottled or boxed drinks</li>
            </ul>
            <p className="mt-4">
              Drinks are usually lower risk than fried foods, but if you have multiple allergies or very strict dietary needs, always check the ingredient and allergen details.
            </p>
          </GuideSection>

          <GuideSection title="Items to Avoid on a Gluten Free Diet at Raising Cane’s">
            <p>If you are avoiding gluten, you should avoid these items:</p>
            <ul className="ml-4 list-disc space-y-2 mt-2">
              <li>Regular Chicken Fingers</li>
              <li>Texas Toast</li>
              <li>Chicken Sandwich</li>
              <li>Sandwich bun</li>
              <li>Any breaded chicken item</li>
              <li>Combo meals with toast or breaded chicken</li>
              <li>Fries if cooked in a shared fryer</li>
              <li>Naked chicken if cooked in shared fryer</li>
              <li>Any item handled near bread crumbs or toast without precautions</li>
            </ul>
            <p className="mt-4 font-bold text-[#d71920]">The main problem is not only ingredients. The real issue is cross-contact.</p>
          </GuideSection>

          <GuideSection title="Cross-Contact Risk at Raising Cane’s">
            <p>
              Cross-contact happens when gluten touches food that is supposed to be gluten-free. At Raising Cane’s, cross-contact may happen through:
            </p>
            <ul className="ml-4 list-disc space-y-2 mt-2">
              <li>Shared fryers</li>
              <li>Bread crumbs from chicken fingers</li>
              <li>Texas toast touching the meal</li>
              <li>Shared baskets</li>
              <li>Shared gloves</li>
              <li>Shared prep counters</li>
              <li>Staff handling breaded chicken and gluten-free-style items together</li>
            </ul>
            <p className="mt-4">
              This is why some people may eat fries or naked tenders without symptoms, while others may get sick. The safety can vary by location, staff knowledge, fryer setup, and how busy the restaurant is.
            </p>
            <p className="font-bold">For people with celiac disease, this is a serious concern.</p>
          </GuideSection>

          <GuideSection title="Is Raising Cane’s Safe for Celiac Disease?">
            <p>
              For most celiac customers, Raising Cane’s is high risk. The forum content you shared includes many customer reports saying there is no gluten-free menu, no dedicated fryer, or inconsistent staff knowledge. Some customers also reported gluten-related symptoms after eating fries or naked tenders.
            </p>
            <p className="mt-2 mb-4 text-sm text-black/50">
              (Source: <a href="https://www.findmeglutenfree.com/chains/5500885648015360/raising-canes" target="_blank" rel="noopener noreferrer" className="font-bold text-[#d71920] underline hover:text-[#b9151b]">Find Me Gluten Free</a>)
            </p>
            <p>
              A few customers had positive experiences at certain locations, especially when staff used separate fryers or made naked tenders carefully. But because the experience is not consistent, Raising Cane’s should not be treated as a celiac-safe restaurant.
            </p>
            <div className="border-l-4 border-[#d71920] bg-[#f8f6ef] p-4 mt-4">
              <p className="font-black leading-7">
                Best safe wording: Raising Cane’s may work for some gluten-sensitive customers, but it is not a reliable choice for people with celiac disease unless the specific location can clearly confirm safe preparation and no cross-contact.
              </p>
            </div>
          </GuideSection>

          <GuideSection title="How to Order Gluten Free at Raising Cane’s">
            <p>If you still want to try ordering gluten-free at Cane’s, use these steps:</p>
            <ul className="ml-4 list-decimal space-y-2 mt-2">
              <li>Tell staff you have a gluten allergy or celiac concern.</li>
              <li>Ask if they have a dedicated fryer for fries.</li>
              <li>Ask if naked chicken is available.</li>
              <li>Ask if naked chicken is fried separately from breaded chicken.</li>
              <li>Ask staff to change gloves.</li>
              <li>Ask them to leave out Texas toast.</li>
              <li>Ask for coleslaw or extra fries instead of toast only if the fries are safe.</li>
              <li>Check that no toast is placed in your basket.</li>
              <li>Avoid ordering during peak rush hours if you need careful handling.</li>
            </ul>
            <div className="mt-6 rounded-3xl bg-[#eef6ff] p-6 text-black/80">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f5ba8]">A possible order request:</p>
              <p className="mt-4 italic">
                “Can I get naked chicken with no breading, no Texas toast, and can you please confirm whether the fries and naked chicken are cooked in a separate fryer away from breaded chicken?”
              </p>
            </div>
          </GuideSection>

          <GuideSection title="Best Gluten Free Style Order at Raising Cane’s">
            <p>A lower-gluten-risk order may look like this:</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-black/75">
              <li>✔ Naked chicken tenders, only if cooked separately</li>
              <li>✔ No Texas toast</li>
              <li>✔ Coleslaw</li>
              <li>✔ Cane’s Sauce</li>
              <li>✔ Lemonade, tea, or fountain drink</li>
              <li>✔ Fries only if the location confirms a dedicated fryer</li>
            </ul>
            <p className="mt-4 font-bold text-[#d71920]">
              But for celiac customers, even this order may not be safe if the fryer or prep space is shared. Once you confirm the safe items, verify your total macros on our <Link href="/" className="font-black text-[#d71920] underline hover:text-[#b9151b]">Cane&apos;s Nutrition Calculator</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Raising Cane’s Gluten Free Fries Warning">
            <p>Fries are one of the most searched items for this topic. Many users search:</p>
            <ul className="ml-4 list-disc space-y-2 mt-2 text-sm text-black/60 italic">
              <li>Are Raising Cane’s fries gluten free?</li>
              <li>Are Cane’s fries gluten free?</li>
              <li>Does Raising Cane’s have a dedicated fryer?</li>
              <li>Are Cane’s fries safe for celiac?</li>
            </ul>
            <div className="border-l-4 border-[#d71920] bg-[#f8f6ef] p-4 mt-4">
              <p className="font-black leading-7">
                The best answer is: Raising Cane’s fries may not contain gluten ingredients, but they are only a safer gluten-free option if your location uses a dedicated fryer and avoids cross-contact. Always ask before ordering.
              </p>
            </div>
            <p className="mt-4">
              Do not publish your page saying “Cane’s fries are gluten-free everywhere.” That would be risky and may be inaccurate.
            </p>
          </GuideSection>

          <GuideSection title="Raising Cane’s Gluten Free Sauce and Sides">
            <p>The most commonly mentioned gluten-free-style sides and sauces are:</p>
            <ul className="mt-4 space-y-4">
              <li><strong>Cane’s Sauce:</strong> Usually listed as gluten-free, but confirm current ingredients.</li>
              <li><strong>Coleslaw:</strong> Usually listed as gluten-free and often mentioned as one of the safer choices.</li>
              <li><strong>Fries:</strong> May be gluten-free by ingredients, but fryer safety depends on location.</li>
              <li><strong>Drinks:</strong> Most drinks are generally gluten-free.</li>
              <li><strong>Honey Mustard:</strong> Check the latest allergen guide before using it as a gluten-free option.</li>
            </ul>
          </GuideSection>

          <GuideSection title="Raising Cane’s Gluten Free vs Gluten Friendly">
            <p>
              It is better to describe Cane’s as <em>gluten-friendly</em> at some locations, not fully gluten-free.
            </p>
            <p>
              “Gluten-free” sounds stronger and may suggest the food is safe for celiac disease. “Gluten-friendly” is more honest because some items may not contain gluten ingredients but can still be exposed to gluten in the kitchen.
            </p>
            <div className="border-l-4 border-[#d71920] bg-[#f8f6ef] p-4 mt-4">
              <p className="font-black leading-7">
                For your page, use this type of wording: Raising Cane’s may have gluten-friendly options, but it is not a dedicated gluten-free restaurant. Cross-contact is possible, especially with fryers and breaded chicken.
              </p>
            </div>
          </GuideSection>

          <GuideSection title="Important Questions to Ask Before Ordering">
            <p>Before ordering from Raising Cane’s, ask these questions:</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Do you have a gluten-free menu?",
                "Are the fries cooked in a dedicated fryer?",
                "Is the fry fryer ever used for chicken?",
                "Can you make naked chicken without breading?",
                "Is naked chicken cooked separately from breaded chicken?",
                "Can staff change gloves before preparing my order?",
                "Can you keep Texas toast away from my food?",
                "Is Cane’s Sauce gluten-free today?",
                "Are coleslaw and drinks still gluten-free according to your latest allergen guide?"
              ].map((question, i) => (
                <div key={i} className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d71920]">Ask</p>
                  <p className="mt-3 text-base leading-7 text-black/70">{question}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-bold text-[#d71920]">
              If staff seem unsure, it is safer not to order.
            </p>
          </GuideSection>

          <GuideSection title="Final Thoughts on Raising Cane’s Gluten Free Menu">
            <p>
              Raising Cane’s has limited gluten-free-style options, but it is not a fully gluten-free restaurant. Regular chicken fingers, Texas toast, and chicken sandwiches are not gluten-free because they contain wheat. Cane’s Sauce, coleslaw, and drinks are generally listed as gluten-free in the allergen information you provided, but cross-contact is still possible.
            </p>
            <p>
              The biggest uncertainty is fries and naked chicken tenders. Some locations may prepare them separately, while others may use shared fryers or have inconsistent procedures. The forum reviews you shared show both positive and negative experiences, so customers should ask questions at their specific location before ordering.
            </p>
            <p>
              If you have celiac disease or a severe gluten allergy, Raising Cane’s may not be the safest choice. If you are only avoiding gluten as a preference or have mild sensitivity, you may have more flexibility, but you should still ask about fryers, gloves, and cross-contact.
            </p>
          </GuideSection>

          <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
            <h2 className="text-3xl font-black">FAQs About Raising Cane’s Gluten Free Menu</h2>
            <div className="mt-8 grid gap-4">
              {faqItems.map((item, index) => (
                <article key={index} className="rounded-3xl border border-black/10 bg-[#f8f6ef] p-6">
                  <h3 className="text-lg font-black leading-tight text-[#151515]">{item.question}</h3>
                  <p className="mt-3 leading-7 text-black/70">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
