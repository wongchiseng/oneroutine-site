import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Routine Generator",
  description:
    "Learn what an AI routine planner is, how AI helps build habits, and how OneRoutine turns goals into routines, tasks, and date-based plans.",
  keywords: [
    "AI routine planner",
    "AI habit planner",
    "AI productivity tool",
    "AI routine generator",
    "habit planning app",
  ],
  alternates: {
    canonical: "https://oneroutine.one/ai-routine-generator",
  },
  openGraph: {
    title: "AI Routine Generator | OneRoutine",
    description:
      "What is an AI routine planner? See how AI helps build habits and how OneRoutine supports routines, tasks, and long-term planning.",
    url: "https://oneroutine.one/ai-routine-generator",
    type: "article",
    images: ["/og-image.png"],
  },
};

const sections = [
  {
    title: "What is an AI routine planner?",
    body: "An AI routine planner helps turn a rough intention into a usable plan. Instead of asking you to manually design every step, it takes a goal like sleeping earlier, exercising more, or studying consistently and suggests a smaller structure you can actually follow.",
  },
  {
    title: "How AI helps build habits",
    body: "The hardest part of habit building is usually not motivation. It is translation. People know what they want, but not how to break it into something realistic. AI can reduce that friction by offering a starting sequence, a lighter version of the task, and a practical next action for today.",
  },
  {
    title: "How OneRoutine works",
    body: "OneRoutine is designed to connect AI routine suggestions with daily life. It is not only a habit app. It combines routines, one-time tasks, date-based planning, and longer-term ideas like a bucket list so people can organize more of life in one place.",
  },
];

const keywords = ["AI routine planner", "AI habit planner", "AI productivity tool"];

export default function AiRoutineGeneratorPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-stone-300/35 blur-3xl" />
        <div className="absolute right-0 top-56 h-72 w-72 rounded-full bg-amber-100/65 blur-3xl" />
      </div>

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/80 bg-white/75 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 font-semibold text-zinc-900">
            <Image src="/logo.png" alt="OneRoutine Logo" width={28} height={28} className="rounded-lg" />
            <div>
              <div>OneRoutine</div>
              <div className="text-xs font-medium text-zinc-500">One Routine. One Day. One Life.</div>
            </div>
          </Link>
          <div className="hidden items-center gap-5 text-sm text-zinc-600 md:flex">
            <Link href="/about" className="transition-colors hover:text-zinc-900">
              About
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-zinc-900">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-zinc-900">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-6xl pt-12">
        <section className="grid items-center gap-10 pb-18 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">AI routine planner guide</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl">
              AI routine planning that turns intention into a usable day.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              If people are searching for an AI routine planner, what they usually want is not more complexity. They want help turning vague goals into routines, tasks, and realistic next steps. That is exactly the problem OneRoutine is trying to solve.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#waitlist"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Join the waitlist
              </Link>
              <Link
                href="/#generator"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Try the generator
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-[0_20px_80px_rgba(24,24,27,0.10)]">
            <Image
              src="/hero-mock.png"
              alt="OneRoutine AI planning interface"
              width={1200}
              height={900}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </section>

        <section className="grid gap-6 border-t border-zinc-200/80 py-20 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight text-zinc-900">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 border-t border-zinc-200/80 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Why this matters for SEO</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-zinc-900">Content pages rank when they answer intent clearly.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              For AI products, Google often understands pages better when they explain a concept directly. A focused page like this can support keywords around AI planning while still pointing readers back to the product itself.
            </p>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900">What this page should do</h3>
            <ul className="mt-6 space-y-4 text-zinc-600">
              <li>Capture searches for AI routine planner, AI habit planner, and related intent.</li>
              <li>Explain the product problem in plain language instead of only marketing language.</li>
              <li>Internally link visitors back to the homepage, waitlist, and live demo section.</li>
              <li>Give Google one more high-context page to crawl beyond the homepage and legal pages.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="relative mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-zinc-200 py-10 text-sm text-zinc-500 sm:flex-row">
        <div>© 2026 OneRoutine</div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/ai-routine-generator" className="transition-colors hover:text-zinc-900">
            AI Routine Guide
          </Link>
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