import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer | Cane's Nutrition Calculator",
  description:
    "Read the disclaimer for Cane's Nutrition Calculator, including fan-made status, no affiliation, nutrition data limitations, allergen warnings, and no medical advice.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="This disclaimer explains the limits of Cane's Nutrition Calculator, including our independent fan-made status, nutrition data limitations, allergen warnings, and no medical advice notice."
    >
      <h2>1. Fan-Made Website Notice</h2>
      <p>
        Cane&apos;s Nutrition Calculator is an independent, fan-made website created for
        nutrition fans and informational use. This website is not affiliated
        with, endorsed by, sponsored by, approved by, or officially connected to
        Raising Cane&apos;s Restaurants, LLC or any related company.
      </p>
      <p>
        All Raising Cane&apos;s names, menu item names, trademarks, service marks,
        logos, and brand references are the property of their respective owners.
        Any references to Raising Cane&apos;s are used for identification,
        comparison, and informational purposes only.
      </p>

      <h2>2. Data Source Notice</h2>
      <p>
        The nutrition and allergen information displayed on this website is
        based on Raising Cane&apos;s nutrition and allergen data provided for this
        project. We do not create the official restaurant nutrition values and
        we do not claim to be the official source for Raising Cane&apos;s menu data.
      </p>
      <p>
        We make reasonable efforts to organize and display the data accurately,
        but errors, omissions, outdated values, formatting mistakes, or
        calculation issues may occur. Users should verify nutrition and allergen
        information directly with Raising Cane&apos;s before relying on it.
      </p>

      <h2>3. No Medical Advice</h2>
      <p>
        The content on this website is not medical advice, diet advice, allergy
        advice, health advice, weight-loss advice, or professional nutrition
        counseling. The nutrition calculator is a general informational tool
        only.
      </p>
      <p>
        If you have a medical condition, food allergy, dietary restriction,
        diabetes, high blood pressure, kidney disease, heart disease, celiac
        disease, pregnancy-related dietary concerns, or any health-related
        question, speak with a qualified healthcare professional before making
        food decisions.
      </p>

      <h2>4. Allergen and Cross-Contact Warning</h2>
      <p>
        Food allergen information can be complex. Restaurant kitchens may use
        shared cooking surfaces, shared fryers, shared utensils, shared storage,
        shared preparation areas, or ingredients from suppliers that change over
        time. Cross-contact may occur even when an allergen is not listed for a
        menu item.
      </p>
      <p>
        If you have a serious allergy, do not rely only on this website. Verify
        directly with the restaurant location before ordering. If you are at
        risk of a severe allergic reaction, consult a medical professional and
        follow your personal allergy safety plan.
      </p>

      <h2>5. Nutrition Calculator Limitations</h2>
      <p>
        The calculator estimates totals by multiplying listed nutrition values
        by selected quantities. Actual restaurant meals may vary from displayed
        values because of serving-size differences, preparation differences,
        regional differences, ingredient substitutions, supplier updates,
        limited-time products, rounding rules, or human error during food
        preparation.
      </p>
      <p>
        The calculator should be treated as an estimate, not an exact laboratory
        measurement of the food served to you.
      </p>

      <h2>6. Advertising and Monetization Disclaimer</h2>
      <p>
        This website may display ads or affiliate-style monetization in the
        future. Advertisements do not change our independent fan-made status.
        Ads are not endorsements of any advertiser, product, service, diet, or
        health claim. We do not guarantee that any advertising network will
        approve this website.
      </p>

      <h2>7. No Warranty</h2>
      <p>
        This website is provided on an &quot;as is&quot; and &quot;as available&quot;
        basis. We make no warranties regarding accuracy, completeness,
        availability, reliability, suitability, or uninterrupted operation.
        Visitors use the website at their own risk.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Cane&apos;s Nutrition Calculator and its
        operators are not responsible for losses, damages, health outcomes,
        allergic reactions, dietary decisions, business losses, data losses, or
        other consequences arising from use of this website or reliance on its
        content.
      </p>

      <h2>9. Contact for Corrections</h2>
      <p>
        If you believe information is inaccurate, outdated, or misleading,
        please contact us at{' '}
        <a href="mailto:clicksoftuser35@gmail.com">clicksoftuser35@gmail.com</a>
        {' '}with the item name, the issue, and the source of the correction. We
        may review and update content where appropriate.
      </p>
    </LegalPage>
  );
}
