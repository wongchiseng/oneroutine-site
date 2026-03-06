import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-stone-300/35 blur-3xl" />
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
            <Link href="/privacy" className="transition-colors hover:text-zinc-900">
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-3xl pt-12">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Legal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900">Terms of Service for OneRoutine</h1>
          <p className="mt-4 text-zinc-500">
            Effective Date: 2026-03-05
            <br />
            Developed by ZenKuma Studio
          </p>

          <div className="prose prose-zinc mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-p:leading-7 prose-li:leading-7">
            <p>
              Welcome to <strong>OneRoutine</strong>. These Terms of Service ("Terms") govern your use of the
              OneRoutine website, application, and related services (collectively, the "Service").
            </p>
            <p>By accessing or using OneRoutine, you agree to these Terms.</p>
            <p>If you do not agree with these Terms, please do not use the Service.</p>

            <h2>1. About OneRoutine</h2>
            <p>OneRoutine is a productivity application designed to help users plan and organize daily routines.</p>
            <p>The Service may include:</p>
            <ul>
              <li>a mobile application</li>
              <li>a website</li>
              <li>AI-assisted routine suggestions</li>
              <li>waitlist or email notifications</li>
              <li>future premium features</li>
            </ul>
            <p>ZenKuma Studio may update or modify the Service at any time.</p>

            <h2>2. Eligibility</h2>
            <p>You must be at least 13 years old to use the Service.</p>
            <p>By using OneRoutine, you represent that:</p>
            <ul>
              <li>you are legally able to agree to these Terms</li>
              <li>your use complies with applicable laws</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <p>You agree to use OneRoutine only for lawful purposes.</p>
            <p>You must not:</p>
            <ul>
              <li>misuse or attempt to disrupt the Service</li>
              <li>reverse engineer or attempt to extract source code</li>
              <li>use the Service to distribute malicious software</li>
              <li>abuse AI features or attempt to generate harmful content</li>
            </ul>
            <p>ZenKuma Studio reserves the right to restrict access if misuse is detected.</p>

            <h2>4. AI-Generated Content</h2>
            <p>Some features of OneRoutine may generate suggestions using artificial intelligence.</p>
            <p>These outputs are provided for informational purposes only and may not always be accurate.</p>
            <p>Users remain responsible for how they interpret and use any AI-generated suggestions.</p>
            <p>ZenKuma Studio does not guarantee that AI outputs will be:</p>
            <ul>
              <li>accurate</li>
              <li>complete</li>
              <li>suitable for specific situations</li>
            </ul>

            <h2>5. Accounts and Waitlist</h2>
            <p>Some features may allow users to:</p>
            <ul>
              <li>join a waitlist</li>
              <li>subscribe to updates</li>
              <li>access early versions of the application</li>
            </ul>
            <p>Users are responsible for providing accurate information when registering.</p>
            <p>ZenKuma Studio may send service-related communications such as:</p>
            <ul>
              <li>product updates</li>
              <li>launch announcements</li>
              <li>feature availability</li>
            </ul>
            <p>Users may unsubscribe at any time.</p>

            <h2>6. Intellectual Property</h2>
            <p>All content related to OneRoutine is owned by ZenKuma Studio, including:</p>
            <ul>
              <li>application design</li>
              <li>logos</li>
              <li>branding</li>
              <li>software code</li>
              <li>website content</li>
            </ul>
            <p>You may not copy, reproduce, or distribute any part of the Service without permission.</p>

            <h2>7. Third-Party Services</h2>
            <p>The Service may integrate third-party providers such as:</p>
            <ul>
              <li>Google Play Services</li>
              <li>Google Play Billing</li>
              <li>advertising networks</li>
              <li>AI infrastructure providers</li>
            </ul>
            <p>These services operate under their own terms and privacy policies.</p>
            <p>ZenKuma Studio is not responsible for third-party services.</p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>OneRoutine is provided "as is" and "as available."</p>
            <p>ZenKuma Studio makes no warranties regarding:</p>
            <ul>
              <li>availability of the Service</li>
              <li>accuracy of AI-generated suggestions</li>
              <li>uninterrupted operation</li>
            </ul>
            <p>Use of the Service is at your own risk.</p>

            <h2>9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, ZenKuma Studio shall not be liable for:</p>
            <ul>
              <li>indirect damages</li>
              <li>loss of data</li>
              <li>loss of productivity</li>
              <li>damages resulting from use of AI-generated suggestions</li>
            </ul>

            <h2>10. Changes to the Service</h2>
            <p>ZenKuma Studio may modify or discontinue features of the Service at any time.</p>
            <p>We may also update these Terms periodically.</p>
            <p>The Effective Date will be updated when changes occur.</p>

            <h2>11. Termination</h2>
            <p>ZenKuma Studio reserves the right to suspend or terminate access to the Service if users violate these Terms.</p>
            <p>Users may stop using the Service at any time.</p>

            <h2>12. Governing Law</h2>
            <p>These Terms shall be governed by applicable international laws and regulations.</p>
            <p>Specific jurisdiction may vary depending on the user's location.</p>

            <h2>13. Contact</h2>
            <p>If you have questions about these Terms, please contact:</p>
            <p>
              <a href="mailto:hello@oneroutine.one">hello@oneroutine.one</a>
            </p>
            <p>ZenKuma Studio</p>
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
