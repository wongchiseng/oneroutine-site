import { ArrowRight, BrainCircuit, CalendarRange, ListChecks } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "AI Routine Generator",
  description:
    "Learn what an AI routine planner is, how AI supports habit formation, and how OneRoutine connects routines, tasks, and date-based planning.",
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

const topics = [
  {
    icon: BrainCircuit,
    title: "What an AI routine planner actually does",
    body: "It converts a broad intention like sleeping earlier or studying consistently into a smaller structure that can survive a real day.",
  },
  {
    icon: ListChecks,
    title: "Why this matters for habit building",
    body: "Most people do not fail because they lack desire. They fail because they never get a realistic translation from desire to action.",
  },
  {
    icon: CalendarRange,
    title: "Where OneRoutine is going",
    body: "The goal is not only habit generation. The product is being shaped to connect routines, one-time tasks, dates, and longer direction in one planning language.",
  },
];

const principles = [
  "A good plan should reduce friction, not add ceremony.",
  "AI should propose a starting shape, not pretend to know your life perfectly.",
  "The interface should keep routines connected to the day they live inside.",
  "Planning becomes more useful when recurring habits and date-based commitments share the same system.",
];

export default function AiRoutineGeneratorPage() {
  return (
    <div className="page-shell pb-10">
      <SiteHeader ctaHref="/#generator" ctaLabel="Try Generator" />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <section className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="eyebrow">AI routine planner guide</p>
            <h1 className="mt-5 max-w-4xl font-[var(--font-fraunces)] text-5xl leading-[0.96] text-[var(--brand-ink)] sm:text-6xl">
              AI routine planning should turn intention into a day you can actually use.
            </h1>
            <p className="text-body mt-7 max-w-2xl text-lg leading-8">
              When people search for an AI routine generator, they usually are not asking for more complexity. They are asking for help converting vague goals into something realistic, smaller, and easier to start.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI routine planner", "AI habit planner", "AI productivity tool"].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-input)] px-4 py-2 text-sm font-medium text-body"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#waitlist"
                className="rounded-full bg-[var(--brand-ink)] px-6 py-3 text-sm font-semibold text-[color:var(--brand-ink-text)] hover:-translate-y-0.5 hover:opacity-90"
              >
                Join the waitlist
              </Link>
              <Link
                href="/#generator"
                className="rounded-full border border-[var(--line)] bg-[var(--surface-input)] px-6 py-3 text-sm font-semibold text-[var(--brand-ink)] hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
              >
                Try the generator
              </Link>
            </div>
          </div>

          <div className="section-card overflow-hidden rounded-[2.2rem] p-3">
            <div className="rounded-[1.7rem] bg-[#1a332b] p-3">
              <Image
                src="/hero-mock.png"
                alt="OneRoutine AI planning interface"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1.35rem]"
              />
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <article key={topic.title} className="section-card rounded-[1.9rem] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-ink)] text-[color:var(--brand-ink-text)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-[var(--brand-ink)]">{topic.title}</h2>
                <p className="text-body mt-4 text-base leading-8">{topic.body}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-card flex flex-col justify-center rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Why this page exists</p>
            <h2 className="mt-4 font-[var(--font-fraunces)] text-4xl leading-tight text-[var(--brand-ink)] sm:text-5xl">
              Clear content helps both readers and search intent.
            </h2>
            <p className="text-body mt-6 text-lg leading-8">
              A focused page like this gives Google a more precise signal about what OneRoutine is adjacent to: AI-assisted planning, routine generation, and practical habit support. It also gives humans a clearer explanation than homepage marketing alone.
            </p>
          </div>

          <div className="section-card rounded-[2rem] p-8">
            <h3 className="text-2xl font-bold text-[var(--brand-ink)]">Principles behind a useful AI planner</h3>
            <ul className="text-body mt-6 space-y-4">
              {principles.map((principle) => (
                <li key={principle} className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--surface-input)] px-6 py-5 leading-7">
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2.2rem] border border-[var(--line)] bg-[var(--brand-ink)] p-8 text-[color:var(--brand-ink-text)] lg:mt-24 sm:p-10 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,121,70,0.25),transparent_40%)]" />
          <div className="relative z-10">
            <p className="eyebrow text-[color:var(--brand-warm)] mix-blend-plus-lighter">Connect it back to the product</p>
            <h2 className="mt-4 max-w-3xl font-[var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">
              OneRoutine is trying to connect AI suggestions with actual daily planning.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 opacity-90">
              The point is not just to generate a nice-looking routine once. The point is to place that routine beside tasks, dates, and longer commitments so the suggestion becomes part of a real system instead of a disposable prompt output.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--background)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:opacity-90"
              >
                Back to homepage
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-transparent px-6 py-3 text-sm font-semibold hover:opacity-90"
              >
                Meet the creator
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
