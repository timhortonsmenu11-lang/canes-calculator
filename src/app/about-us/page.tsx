import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "About Us | Cane's Nutrition Calculator",
  description:
    "Learn about Cane's Nutrition Calculator, an independent fan-made nutrition calculator for Raising Cane's nutrition fans.",
};

export default function AboutUsPage() {
  return (
    <LegalPage
      eyebrow="About"
      title="About Us"
      intro="Cane's Nutrition Calculator is an independent, fan-made nutrition calculator built for people who want an easier way to review Raising Cane's nutrition facts, calories, macros, and allergens."
    >
      <h2>Who We Are</h2>
      <p>
        Cane&apos;s Nutrition Calculator is a fan-made informational website created by 
        independent fast food nutrition researchers. Our content is compiled 
        and reviewed by individuals who understand fast food menus, macros, and allergen risks, 
        with the goal of helping you compare Raising Cane&apos;s menu items in a cleaner, 
        easier-to-use format. The site is designed around an interactive nutrition calculator, menu nutrition
        table, allergen menu, and educational content about calories, protein,
        carbohydrates, fat, sodium, sugar, fiber, and allergen codes.
      </p>
      <p>
        We are not Raising Cane&apos;s, we do not represent Raising Cane&apos;s, and we
        are not affiliated with, endorsed by, sponsored by, or officially
        connected to Raising Cane&apos;s Restaurants, LLC. Raising Cane&apos;s names,
        menu item names, trademarks, and related brand references belong to
        their respective owners. This website exists only as an independent
        reference tool.
      </p>

      <h2>Our Purpose</h2>
      <p>
        Our goal is to make nutrition information easier to read and compare.
        Restaurant nutrition PDFs and tables can be difficult to scan on mobile
        devices, especially when a visitor wants to build a full meal and
        compare totals. This site reorganizes nutrition and allergen data into
        a calculator-style experience so users can review items, add products to
        a meal, and see estimated totals in one place.
      </p>
      <p>
        The content is intended for general informational and educational use.
        It is especially helpful for users searching for phrases like
        Raising Cane&apos;s nutrition calculator, Raising Cane&apos;s calories,
        Cane&apos;s nutrition facts, Cane&apos;s allergen menu, Cane&apos;s protein, Cane&apos;s
        carbs, and Cane&apos;s sodium.
      </p>

      <h2>Data Source and Accuracy</h2>
      <p>
        The nutrition and allergen values displayed on this website are based on
        Raising Cane&apos;s nutrition and allergen information provided for this
        project. We do not create the underlying restaurant nutrition values.
        We organize the data into a searchable and interactive tool.
      </p>
      <p>
        Nutrition values may change over time due to recipe updates, supplier
        changes, regional menu differences, serving-size differences,
        preparation methods, limited-time items, or updates made by the
        restaurant. Before making a decision based on nutrition or allergen
        information, users should verify details directly with Raising Cane&apos;s or
        the restaurant location where they plan to order.
      </p>

      <h2>Not Medical or Dietary Advice</h2>
      <p>
        Cane&apos;s Nutrition Calculator does not provide medical, dietetic, allergy,
        health, weight-loss, or professional nutrition advice. The calculator is
        a general information tool. If you have diabetes, high blood pressure,
        food allergies, celiac disease, kidney disease, heart disease, dietary
        restrictions, or any medical condition, consult a qualified healthcare
        professional before relying on restaurant nutrition data.
      </p>

      <h2>Editorial Approach</h2>
      <p>
        We aim to present clear, original, useful content rather than thin or
        misleading pages. The site includes explanatory sections, menu
        comparisons, nutrition context, allergen guidance, and legal pages so
        visitors can understand what the tool does, what it does not do, and how
        they should use the information responsibly.
      </p>

      <h2>Contact</h2>
      <p>
        For corrections, questions, or business inquiries, please visit our
        contact page or email us at{' '}
        <a href="mailto:clicksoftuser35@gmail.com">clicksoftuser35@gmail.com</a>.
        If you are the owner or representative of a trademarked brand
        referenced on this website and have a concern about how your brand or
        data is presented, please contact us so we can review it promptly.
      </p>
    </LegalPage>
  );
}
