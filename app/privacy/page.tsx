import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl" />
      </div>

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/80 bg-white/75 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 font-semibold text-zinc-900">
            <Image src="/logo.png" alt="OneRoutine Logo" width={28} height={28} className="rounded-lg" />
            <div>
              <div>OneRoutine</div>
              <div className="text-xs font-medium text-zinc-500">One Routine. One Day. One Life.</div>
            </div>
          </Link>
          <div className="flex items-center gap-5 text-sm text-zinc-600">
            <Link href="/about" className="transition-colors hover:text-zinc-900">
              About
            </Link>
            <Link href="/terms" className="transition-colors hover:text-zinc-900">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-3xl pt-12">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy for OneRoutine</h1>
          <p className="mb-8 text-zinc-500 font-medium">
            Effective Date: 2026-03-05 <br />
            Developed by ZenKuma Studio
          </p>

          <div className="prose prose-zinc max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-p:text-zinc-600 prose-p:leading-relaxed prose-li:text-zinc-600">
            <p>
              This Privacy Policy explains how <strong>OneRoutine</strong> (“Application”, “Service”) handles user
              information.
            </p>
            <p>
              OneRoutine is a productivity application designed to help users plan and manage daily routines with
              minimal friction.
            </p>

            <hr className="my-8 border-zinc-200" />

            <h2>1. Information We Collect</h2>
            <p>
              The OneRoutine mobile application itself is designed to operate with <strong>minimal data collection</strong>.
            </p>
            <p>
              In most cases, routine data and settings are stored <strong>locally on your device</strong>.
            </p>
            <p>Depending on how the service is used, the following limited information may be collected.</p>

            <h3>Information You Provide</h3>
            <p>This may include:</p>
            <ul>
              <li>Email address (for waitlist registration or product updates)</li>
              <li>Feedback or messages sent to us</li>
              <li>Optional routine or habit descriptions entered by the user</li>
            </ul>

            <p>This information is used only to:</p>
            <ul>
              <li>provide product updates</li>
              <li>improve the service</li>
              <li>respond to user inquiries</li>
            </ul>
            <p>
              ZenKuma Studio does <strong>not sell or share personal information with third parties.</strong>
            </p>

            <hr className="my-8 border-zinc-200" />

            <h2>2. Local Data Storage</h2>
            <p>
              Routine information, preferences, and progress may be stored <strong>locally on the user’s device</strong>.
            </p>
            <p>
              This data remains under the user’s control and is not transmitted to ZenKuma Studio servers unless a
              feature explicitly requires it in the future.
            </p>

            <hr className="my-8 border-zinc-200" />

            <h2>3. Third-Party Services</h2>
            <p>The application or website may integrate certain third-party services necessary for operation.</p>
            <p>These services may process limited technical data according to their own privacy policies.</p>
            <p>Examples may include:</p>
            <ul>
              <li><strong>Google Play Services</strong></li>
              <li><strong>Google Play Billing (for in-app purchases)</strong></li>
              <li><strong>Google AdMob (if advertisements are used)</strong></li>
              <li><strong>AI service providers used to generate routine suggestions</strong></li>
            </ul>
            <p>These providers may collect technical information such as:</p>
            <ul>
              <li>device type</li>
              <li>operating system version</li>
              <li>anonymous usage statistics</li>
            </ul>
            <p>
              Such data is handled directly by those providers and governed by their respective privacy policies.
            </p>
            <p>
              Google Privacy Policy: <br />
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:underline font-medium">
                https://policies.google.com/privacy
              </a>
            </p>

            <hr className="my-8 border-zinc-200" />

            <h2>4. Children’s Privacy</h2>
            <p>OneRoutine is not specifically directed at children under the age of 13.</p>
            <p>The application does not intentionally collect personal information from children.</p>
            <p>
              If a parent or guardian believes that a child has provided personal information, they may contact us to
              request removal.
            </p>

            <hr className="my-8 border-zinc-200" />

            <h2>5. Data Retention</h2>
            <p>We retain personal information only as long as necessary to:</p>
            <ul>
              <li>provide requested services</li>
              <li>communicate product updates</li>
              <li>comply with legal obligations</li>
            </ul>
            <p>Users may request deletion of their information at any time.</p>

            <hr className="my-8 border-zinc-200" />

            <h2>6. Security</h2>
            <p>ZenKuma Studio takes reasonable measures to protect user information.</p>
            <p>However, no method of transmission over the Internet or electronic storage is completely secure.</p>

            <hr className="my-8 border-zinc-200" />

            <h2>7. Changes to This Privacy Policy</h2>
            <p>This Privacy Policy may be updated from time to time.</p>
            <p>
              When updates occur, the <strong>Effective Date</strong> at the top of this policy will be revised.
            </p>
            <p>Users are encouraged to review this page periodically.</p>

            <hr className="my-8 border-zinc-200" />

            <h2>8. Contact</h2>
            <p>If you have questions about this Privacy Policy, please contact:</p>
            <p>
              📧 <a href="mailto:hello@oneroutine.one" className="text-zinc-900 hover:underline font-medium">hello@oneroutine.one</a>
            </p>
            <p className="mt-8 font-medium">ZenKuma Studio</p>
          </div>
        </div>
      </main>

      <footer className="relative mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-zinc-200 py-10 text-sm text-zinc-500 sm:flex-row">
        <div>© 2026 OneRoutine</div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-zinc-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-zinc-900">
            Terms of Service
          </Link>
          <Link href="/about" className="transition-colors hover:text-zinc-900">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
