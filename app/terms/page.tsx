import { LegalLayout } from "../components/site-chrome";

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service for OneRoutine"
      meta={["Effective Date: March 5, 2026", "Developed by ZenKuma Studio"]}
    >
      <p>
        Welcome to <strong>OneRoutine</strong>. These Terms of Service (&quot;Terms&quot;) govern your use of the OneRoutine
        website, application, and related services (collectively, the &quot;Service&quot;).
      </p>
      <p>By accessing or using OneRoutine, you agree to these Terms.</p>
      <p>If you do not agree with these Terms, please do not use the Service.</p>

      <hr />

      <h2>1. About OneRoutine</h2>
      <p>OneRoutine is a productivity application designed to help users plan and organize daily routines.</p>
      <p>The Service may include a mobile application, a website, AI-assisted routine suggestions, waitlist registration, and future premium features.</p>
      <p>ZenKuma Studio may update or modify the Service at any time.</p>

      <hr />

      <h2>2. Eligibility</h2>
      <p>You must be at least 13 years old to use the Service.</p>
      <p>By using OneRoutine, you represent that you are legally able to agree to these Terms and that your use complies with applicable laws.</p>

      <hr />

      <h2>3. User Responsibilities</h2>
      <p>You agree to use OneRoutine only for lawful purposes.</p>
      <p>You must not misuse or attempt to disrupt the Service, reverse engineer the product, distribute malicious software, or abuse AI features to generate harmful content.</p>
      <p>ZenKuma Studio reserves the right to restrict access if misuse is detected.</p>

      <hr />

      <h2>4. AI-Generated Content</h2>
      <p>Some features of OneRoutine may generate suggestions using artificial intelligence.</p>
      <p>These outputs are provided for informational purposes only and may not always be accurate, complete, or suitable for a specific situation.</p>
      <p>Users remain responsible for how they interpret and use AI-generated suggestions.</p>

      <hr />

      <h2>5. Accounts and Waitlist</h2>
      <p>Some features may allow users to join a waitlist, subscribe to updates, or access early versions of the application.</p>
      <p>Users are responsible for providing accurate information when registering.</p>
      <p>ZenKuma Studio may send service-related communications such as product updates, launch announcements, and feature availability.</p>
      <p>Users may unsubscribe from non-essential communications at any time.</p>

      <hr />

      <h2>6. Intellectual Property</h2>
      <p>All content related to OneRoutine is owned by ZenKuma Studio, including application design, logos, branding, software code, and website content.</p>
      <p>You may not copy, reproduce, or distribute any part of the Service without permission.</p>

      <hr />

      <h2>7. Third-Party Services</h2>
      <p>The Service may integrate third-party providers such as Google Play Services, Google Play Billing, advertising networks, or AI infrastructure providers.</p>
      <p>These services operate under their own terms and privacy policies, and ZenKuma Studio is not responsible for them.</p>

      <hr />

      <h2>8. Disclaimer of Warranties</h2>
      <p>OneRoutine is provided &quot;as is&quot; and &quot;as available.&quot;</p>
      <p>ZenKuma Studio makes no warranties regarding service availability, uninterrupted operation, or the accuracy of AI-generated suggestions.</p>
      <p>Use of the Service is at your own risk.</p>

      <hr />

      <h2>9. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, ZenKuma Studio shall not be liable for indirect damages, loss of data, loss of productivity, or damages resulting from use of AI-generated suggestions.</p>

      <hr />

      <h2>10. Changes to the Service or Terms</h2>
      <p>ZenKuma Studio may modify or discontinue features of the Service at any time.</p>
      <p>We may also update these Terms periodically. The effective date will be updated when changes occur.</p>

      <hr />

      <h2>11. Termination</h2>
      <p>ZenKuma Studio reserves the right to suspend or terminate access to the Service if users violate these Terms.</p>
      <p>Users may stop using the Service at any time.</p>

      <hr />

      <h2>12. Governing Law</h2>
      <p>These Terms shall be governed by applicable laws and regulations. Specific jurisdiction may vary depending on the user&apos;s location.</p>

      <hr />

      <h2>13. Contact</h2>
      <p>If you have questions about these Terms, please contact:</p>
      <p>
        <a className="font-semibold text-[var(--brand-ink)] underline decoration-[var(--brand-rose)] underline-offset-4" href="mailto:hello@oneroutine.one">
          hello@oneroutine.one
        </a>
      </p>
      <p>ZenKuma Studio</p>
    </LegalLayout>
  );
}
