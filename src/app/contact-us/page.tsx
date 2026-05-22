import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact Us | Cane's Nutrition Calculator",
  description:
    "Contact Cane's Nutrition Calculator for corrections, questions, privacy requests, or feedback about the fan-made nutrition calculator.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <LegalPage
      eyebrow="Contact"
      title="Contact Us"
      intro="Use this page to contact Cane's Nutrition Calculator about corrections, feedback, privacy questions, or legal concerns related to this independent fan-made nutrition website."
    >
      <h2>Contact Information</h2>
      <p>
        Cane&apos;s Nutrition Calculator is an independent fan-made website for nutrition
        fans. If you need to reach us, use the contact email below. Before
        publishing the site publicly, replace this placeholder with your active
        business or website email address.
      </p>
      <p>
        Email:{" "}
        <a href="mailto:clicksoftuser35@gmail.com">clicksoftuser35@gmail.com</a>
      </p>

      <h2>What You Can Contact Us About</h2>
      <ul>
        <li>Corrections to nutrition values, serving sizes, or allergen codes.</li>
        <li>Questions about how the nutrition calculator works.</li>
        <li>Requests to update or remove inaccurate content.</li>
        <li>Privacy questions or data-related requests.</li>
        <li>Trademark, copyright, or brand presentation concerns.</li>
        <li>General feedback about usability, mobile layout, or accessibility.</li>
      </ul>

      <h2>Important Notice About Raising Cane&apos;s</h2>
      <p>
        This website is not the official Raising Cane&apos;s website. We cannot
        answer questions about restaurant operations, orders, employment,
        refunds, gift cards, store hours, menu availability, promotions, or
        official company policies. For official restaurant support, please
        contact Raising Cane&apos;s directly through its official channels.
      </p>

      <h2>Nutrition and Allergen Corrections</h2>
      <p>
        If you believe a nutrition value or allergen code is incorrect, please
        include the menu item name, the value you believe is incorrect, the
        correct value if available, and the source where you found the updated
        information. We review correction requests carefully, but we may need to
        verify information before changing the website.
      </p>
      <p>
        Restaurant nutrition data can change over time. Menu items may also vary
        by location, supplier, serving size, preparation method, or limited-time
        availability. For health-sensitive decisions, always verify with the
        restaurant and a qualified professional.
      </p>

      <h2>Medical, Allergy, and Emergency Questions</h2>
      <p>
        Do not use this contact page for urgent medical questions or allergy
        emergencies. This site does not provide medical advice. If you are
        having a medical emergency, contact emergency services immediately. If
        you have a serious allergy or medical condition, speak with a qualified
        healthcare professional and verify ingredients directly with the
        restaurant before ordering.
      </p>

      <h2>Response Time</h2>
      <p>
        We try to review reasonable messages as soon as possible, but we do not
        guarantee a specific response time. Messages that are abusive, spammy,
        unrelated, automated, or promotional may not receive a response.
      </p>

      <h2>Contact Form Placeholder</h2>
      <div className="mt-4 grid gap-3 border border-black/10 bg-[#f8f6ef] p-4">
        <label className="grid gap-1 text-sm font-black">
          Name
          <input
            className="border border-black/15 bg-white px-3 py-2 font-normal outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-1 text-sm font-black">
          Email
          <input
            className="border border-black/15 bg-white px-3 py-2 font-normal outline-none"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="grid gap-1 text-sm font-black">
          Message
          <textarea
            className="min-h-32 border border-black/15 bg-white px-3 py-2 font-normal outline-none"
            placeholder="Write your message..."
          />
        </label>
        <p className="text-sm font-semibold text-black/55">
          This visual form is a placeholder. Connect it to your email or form
          service before launch, or replace it with a working contact method.
        </p>
        <p className="text-sm font-semibold text-black/55">
          To reach us directly, use{' '}
          <a href="mailto:clicksoftuser35@gmail.com" className="text-[#d71920] underline">
            clicksoftuser35@gmail.com
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
