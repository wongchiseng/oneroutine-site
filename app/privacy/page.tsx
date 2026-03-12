import { LegalLayout } from "../components/site-chrome";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy Policy for OneRoutine"
      meta={["Effective Date: March 5, 2026", "Developed by ZenKuma Studio"]}
    >
      <p>
        This Privacy Policy explains how <strong>OneRoutine</strong> (&quot;Application&quot; or &quot;Service&quot;) handles user
        information.
      </p>
      <p>
        OneRoutine is a productivity application designed to help users plan daily routines with minimal friction and
        minimal unnecessary data collection.
      </p>

      <hr />

      <h2>1. Information We Collect</h2>
      <p>The OneRoutine application is designed to operate with limited data collection wherever possible.</p>
      <p>In many cases, routine data and settings are stored locally on your device.</p>
      <p>Depending on how the service is used, the following information may be collected:</p>

      <h3>Information You Provide</h3>
      <ul>
        <li>Email address for waitlist registration or product updates</li>
        <li>Feedback or messages sent to us</li>
        <li>Optional routine or habit descriptions entered by the user</li>
      </ul>
      <p>This information is used only to provide product updates, improve the service, and respond to inquiries.</p>
      <p>
        ZenKuma Studio does <strong>not</strong> sell personal information.
      </p>

      <hr />

      <h2>2. Local Data Storage</h2>
      <p>Routine information, preferences, and progress may be stored locally on the user&apos;s device.</p>
      <p>
        This data remains under the user&apos;s control and is not transmitted to ZenKuma Studio unless a feature
        explicitly requires it in the future.
      </p>

      <hr />

      <h2>3. Third-Party Services</h2>
      <p>The application or website may integrate third-party services that are necessary for operation.</p>
      <p>These providers may process limited technical data under their own privacy policies.</p>
      <p>Examples may include:</p>
      <ul>
        <li>Google Play Services</li>
        <li>Google Play Billing for in-app purchases</li>
        <li>Google AdMob if advertisements are used</li>
        <li>AI service providers used to generate routine suggestions</li>
      </ul>
      <p>These services may collect technical information such as device type, operating system version, or anonymous usage statistics.</p>
      <p>
        Google Privacy Policy:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--brand-ink)] underline decoration-[var(--brand-rose)] underline-offset-4"
        >
          https://policies.google.com/privacy
        </a>
      </p>

      <hr />

      <h2>4. Children&apos;s Privacy</h2>
      <p>OneRoutine is not specifically directed at children under the age of 13.</p>
      <p>The application does not intentionally collect personal information from children.</p>
      <p>If a parent or guardian believes that a child has provided personal information, they may contact us to request removal.</p>

      <hr />

      <h2>5. Data Retention</h2>
      <p>We retain personal information only as long as necessary to provide requested services, communicate updates, and comply with legal obligations.</p>
      <p>Users may request deletion of their information at any time.</p>

      <hr />

      <h2>6. Security</h2>
      <p>ZenKuma Studio takes reasonable measures to protect user information.</p>
      <p>No method of transmission over the internet or electronic storage is completely secure.</p>

      <hr />

      <h2>7. Changes to This Privacy Policy</h2>
      <p>This Privacy Policy may be updated from time to time.</p>
      <p>When updates occur, the effective date at the top of this page will be revised.</p>

      <hr />

      <h2>8. Contact</h2>
      <p>If you have questions about this Privacy Policy, please contact:</p>
      <p>
        <a className="font-semibold text-[var(--brand-ink)] underline decoration-[var(--brand-rose)] underline-offset-4" href="mailto:hello@oneroutine.one">
          hello@oneroutine.one
        </a>
      </p>
      <p>ZenKuma Studio</p>
    </LegalLayout>
  );
}
