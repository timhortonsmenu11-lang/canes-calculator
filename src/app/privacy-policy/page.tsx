import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Cane's Nutrition Calculator",
  description:
    "Read the privacy policy for Cane's Nutrition Calculator, including cookies, analytics, advertising, contact information, and third-party services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how Cane's Nutrition Calculator may collect, use, protect, and disclose information when visitors use this independent fan-made nutrition calculator website."
    >
      <h2>1. Overview</h2>
      <p>
        Cane&apos;s Nutrition Calculator is an independent, fan-made website created for
        informational and educational purposes. We provide nutrition calculator
        tools, nutrition facts, allergen menu information, and related content
        for visitors who want to review menu data in a user-friendly format.
      </p>
      <p>
        This Privacy Policy describes the types of information that may be
        collected when you visit the website, how that information may be used,
        and what choices you may have. By using this website, you agree to the
        practices described in this Privacy Policy.
      </p>

      <h2>2. Information We May Collect</h2>
      <h3>Information You Provide Voluntarily</h3>
      <p>
        If you contact us, submit feedback, request a correction, or use a
        future contact form, we may collect information you choose to provide,
        such as your name, email address, message content, and any details
        included in your request.
      </p>
      <h3>Automatically Collected Information</h3>
      <p>
        Like many websites, we may collect limited technical information when
        you visit, such as your IP address, browser type, device type, operating
        system, referring URLs, pages viewed, time spent on pages, general
        location information, and interactions with website features. This
        information helps us understand site performance, improve usability, and
        detect abuse or technical problems.
      </p>

      <h2>3. Cookies and Similar Technologies</h2>
      <p>
        This website may use cookies, local storage, pixels, and similar
        technologies to operate the site, remember preferences, measure traffic,
        improve performance, and support advertising or analytics features.
        Cookies are small files stored on your device by your browser.
      </p>
      <p>
        You can control cookies through your browser settings. If you block or
        delete cookies, some website features may not work as intended.
      </p>

      <h2>4. Advertising and Google Services</h2>
      <p>
        This website may display advertisements, including ads served by Google
        AdSense or other advertising partners. Advertising partners may use
        cookies or similar technologies to serve ads, measure ad performance,
        prevent fraud, and personalize or limit advertisements according to
        their policies and your settings.
      </p>
      <p>
        Google and its partners may use cookies to serve ads based on your prior
        visits to this website or other websites. You can learn more about how
        Google uses data from sites and apps that use its services by visiting
        Google&apos;s privacy and advertising resources. You can also manage ad
        personalization through Google&apos;s ad settings where available.
      </p>
      <p>
        We aim to follow publisher-friendly practices by providing original
        content, clear navigation, privacy information, contact information, and
        transparent disclosures. However, we do not guarantee approval by any
        advertising network.
      </p>

      <h2>5. Analytics</h2>
      <p>
        We may use analytics tools to understand how visitors use the website.
        Analytics data may include page views, device information, approximate
        location, referral sources, search terms, and engagement patterns. This
        information is generally used in aggregated form to improve the site and
        identify content that visitors find useful.
      </p>

      <h2>6. How We Use Information</h2>
      <ul>
        <li>To operate, maintain, and improve the website.</li>
        <li>To respond to messages, corrections, and support requests.</li>
        <li>To analyze traffic, usability, and site performance.</li>
        <li>To detect spam, abuse, fraud, security issues, or technical errors.</li>
        <li>To display, measure, and improve advertisements where applicable.</li>
        <li>To comply with legal obligations and enforce site terms.</li>
      </ul>

      <h2>7. How We Share Information</h2>
      <p>
        We do not sell personal information directly to visitors. We may share
        information with service providers that help operate the website, such
        as hosting providers, analytics tools, advertising partners, security
        tools, or email/form services. These providers may process information
        according to their own policies and applicable law.
      </p>
      <p>
        We may also disclose information if required by law, legal process,
        valid government request, or to protect the rights, safety, and security
        of the website, users, or others.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        This website may link to third-party websites, including official
        restaurant pages, Google resources, or other informational sources. We
        are not responsible for the privacy practices, content, or policies of
        third-party websites. Review their policies before submitting
        information to them.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        This website is intended for a general audience and is not directed to
        children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided personal
        information, contact us so we can review and remove it where required.
      </p>

      <h2>10. Data Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures
        to protect information. However, no website, server, transmission method,
        or storage system can be guaranteed to be completely secure.
      </p>

      <h2>11. Your Choices</h2>
      <ul>
        <li>You can disable cookies in your browser settings.</li>
        <li>You can avoid submitting personal information through contact forms.</li>
        <li>You can request correction or deletion of information you provided.</li>
        <li>You can use available Google tools to manage ad personalization.</li>
      </ul>

      <h2>12. International Visitors</h2>
      <p>
        If you access this website from outside the country where the website is
        operated, your information may be processed in a different jurisdiction.
        By using the website, you understand that privacy laws may differ from
        those in your location.
      </p>

      <h2>13. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Updates will be
        posted on this page with a revised date. Continued use of the website
        after changes are posted means you accept the updated policy.
      </p>

      <h2>14. Contact</h2>
      <p>
        For privacy questions or requests, contact us at{" "}
        <a href="mailto:clicksoftuser35@gmail.com">clicksoftuser35@gmail.com</a>.
        Replace this placeholder email with your real active contact email
        before publishing.
      </p>
    </LegalPage>
  );
}
