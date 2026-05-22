import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cane's Nutrition Calculator",
  description:
    "Read the Terms and Conditions for using Cane's Nutrition Calculator, an independent fan-made Raising Cane's nutrition calculator.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of Cane's Nutrition Calculator, including the nutrition calculator, allergen menu, nutrition facts tables, and related informational content."
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Cane&apos;s Nutrition Calculator, you agree to these Terms
        &amp; Conditions and all applicable laws. If you do not agree with these
        terms, do not use the website.
      </p>

      <h2>2. Independent Fan-Made Website</h2>
      <p>
        Cane&apos;s Nutrition Calculator is an independent, fan-made website for nutrition
        fans. The site is not affiliated with, endorsed by, sponsored by,
        approved by, or officially connected to Raising Cane&apos;s Restaurants, LLC.
        All restaurant names, menu item names, trademarks, and related brand
        references belong to their respective owners.
      </p>

      <h2>3. Informational Use Only</h2>
      <p>
        The website provides general informational content, nutrition calculator
        tools, nutrition facts, calorie estimates, allergen code tables, and
        menu comparisons. The content is not intended to replace official
        restaurant information, professional nutrition advice, medical advice,
        allergy advice, or dietary counseling.
      </p>

      <h2>4. User Responsibilities</h2>
      <ul>
        <li>Use the website only for lawful purposes.</li>
        <li>Do not misuse, scrape, attack, overload, or disrupt the website.</li>
        <li>Do not rely on the website as your only source for allergy safety.</li>
        <li>Verify important nutrition or allergen details with official sources.</li>
        <li>Do not submit false, harmful, illegal, or abusive messages.</li>
      </ul>

      <h2>5. Nutrition and Allergen Data</h2>
      <p>
        Nutrition and allergen data is based on Raising Cane&apos;s information
        provided for this project. Values may change over time and may vary by
        location, supplier, preparation method, serving size, recipe update, or
        limited-time menu availability. We do not guarantee that every value is
        complete, current, or error-free.
      </p>

      <h2>6. No Medical Advice</h2>
      <p>
        The website does not provide medical advice. If you have a food allergy,
        medical condition, dietary restriction, or health concern, speak with a
        qualified healthcare professional and verify ingredients directly with
        the restaurant before ordering.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        The original layout, page structure, calculator interface, written
        content, and site design are owned by or licensed to the website
        operator unless otherwise stated. Restaurant names, menu item names, and
        trademarks referenced on the site belong to their respective owners.
      </p>
      <p>
        You may use the website for personal, non-commercial informational
        purposes. You may not copy, republish, sell, or misuse the website
        content in a way that violates applicable law or third-party rights.
      </p>

      <h2>8. Third-Party Links and Services</h2>
      <p>
        The website may include links to third-party websites or use third-party
        services for hosting, analytics, advertising, security, or contact
        features. We are not responsible for third-party content, policies,
        accuracy, availability, or practices.
      </p>

      <h2>9. Advertising</h2>
      <p>
        This website may display advertisements. Ads are provided by third-party
        networks or advertisers and do not represent endorsement of the
        advertiser, product, service, diet, health claim, or website. We aim to
        maintain clear content, navigation, policies, and disclosures, but we do
        not guarantee approval or continued participation in any ad program.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        The website is provided on an &quot;as is&quot; and &quot;as available&quot;
        basis. We disclaim all warranties to the fullest extent permitted by law,
        including warranties of accuracy, reliability, completeness, fitness for
        a particular purpose, non-infringement, availability, or security.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Cane&apos;s Nutrition Calculator and its
        operators are not liable for any direct, indirect, incidental,
        consequential, special, punitive, or other damages arising from use of
        the website, inability to use the website, reliance on content, allergy
        outcomes, dietary choices, or third-party services.
      </p>

      <h2>12. Changes to the Website</h2>
      <p>
        We may update, remove, redesign, restrict, or discontinue any part of
        the website at any time without notice. We may also update these Terms
        &amp; Conditions by posting a revised version on this page.
      </p>

      <h2>13. Termination</h2>
      <p>
        We may restrict or block access to the website if we believe a user has
        violated these terms, abused the website, attempted to harm the service,
        or engaged in illegal or harmful activity.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These terms will be interpreted according to applicable laws in the
        jurisdiction of the website operator, without regard to conflict-of-law
        principles. Some rights may vary depending on your location.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms &amp; Conditions may be sent to{" "}
        <a href="mailto:clicksoftuser35@gmail.com">clicksoftuser35@gmail.com</a>.
        Replace this placeholder with your real contact email before publishing.
      </p>
    </LegalPage>
  );
}
