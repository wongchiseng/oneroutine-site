"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  ListTodo,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

type RoutineStep = { time: string; title: string };

function normalize(input: string) {
  return input.trim().toLowerCase();
}

function pickTemplate(inputRaw: string): RoutineStep[] {
  const input = normalize(inputRaw);

  if (
    input.includes("sleep") ||
    input.includes("bed") ||
    input.includes("早睡") ||
    input.includes("睡") ||
    input.includes("失眠") ||
    input.includes("作息")
  ) {
    return [
      { time: "21:30", title: "Shower, dim the lights, and leave the phone outside the bed." },
      { time: "22:00", title: "Spend 10 minutes closing tomorrow's loops." },
      { time: "22:30", title: "Get into bed even if tonight is only a quiet reset." },
    ];
  }

  if (
    input.includes("exercise") ||
    input.includes("workout") ||
    input.includes("gym") ||
    input.includes("run") ||
    input.includes("運動") ||
    input.includes("跑") ||
    input.includes("健身")
  ) {
    return [
      { time: "18:20", title: "Change clothes and make the start frictionless." },
      { time: "18:30", title: "Do the 12 minute starter version first." },
      { time: "18:45", title: "Log the session before you negotiate with yourself." },
    ];
  }

  if (
    input.includes("learn") ||
    input.includes("study") ||
    input.includes("japanese") ||
    input.includes("english") ||
    input.includes("語") ||
    input.includes("日文") ||
    input.includes("英文") ||
    input.includes("學習")
  ) {
    return [
      { time: "20:15", title: "Open the lesson and do a 3 minute warm-up." },
      { time: "20:20", title: "Study with focus for one short, protected block." },
      { time: "20:45", title: "Write one review note so tomorrow starts easier." },
    ];
  }

  if (
    input.includes("work") ||
    input.includes("focus") ||
    input.includes("deep") ||
    input.includes("寫") ||
    input.includes("工作") ||
    input.includes("專注") ||
    input.includes("效率")
  ) {
    return [
      { time: "09:00", title: "Define one meaningful output before opening chat." },
      { time: "09:05", title: "Protect a 30 minute deep work block." },
      { time: "09:40", title: "Capture the next step before switching context." },
    ];
  }

  return [
    { time: "08:30", title: "Choose one action that makes the day feel real." },
    { time: "13:00", title: "Do the smallest useful version while energy is uneven." },
    { time: "21:15", title: "Review what held, then carry one thing forward." },
  ];
}

const signals = [
  { value: "One", label: "shared planning system", note: "Tasks, routines, and longer arcs live together." },
  { value: "Calm", label: "default experience", note: "More guidance, less dashboard fatigue." },
  { value: "AI", label: "used with restraint", note: "It helps you start, not overwhelm you." },
];

const pillars = [
  {
    icon: ListTodo,
    title: "Daily action with less fragmentation",
    body: "OneRoutine keeps one-time tasks and recurring routines in the same planning surface, so real life does not split into multiple systems.",
  },
  {
    icon: CalendarDays,
    title: "Dates that create direction",
    body: "Deadlines, next actions, and future intentions share a timeline. The week becomes legible without becoming noisy.",
  },
  {
    icon: Compass,
    title: "Long-term goals brought closer",
    body: "The product is being shaped for more than habit streaks. It aims to help people move bigger ambitions into real dates and smaller commitments.",
  },
];

const philosophy = [
  {
    title: "One Routine",
    body: "Change starts when a vague desire becomes a repeatable act. A routine is not control for its own sake. It is structure that protects what matters.",
  },
  {
    title: "One Day",
    body: "A good day should feel readable. You should know what deserves attention now, what can wait, and what is quietly building over time.",
  },
  {
    title: "One Life",
    body: "The point is not productivity theater. The point is becoming more intentional, with less noise and more follow-through.",
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "Refining the planning core",
    body: "Connecting recurring routines, flexible task capture, and AI-assisted breakdowns into one coherent flow.",
  },
  {
    phase: "Next",
    title: "Early user feedback loop",
    body: "Testing whether the experience actually feels lighter than conventional productivity apps, especially for people who dislike heavy setup.",
  },
  {
    phase: "Later",
    title: "Broader life planning",
    body: "Expanding the system toward date-based planning and bigger personal direction without losing the product's calm center.",
  },
];

const examples = [
  { label: "sleep earlier", value: "sleep earlier" },
  { label: "workout after work", value: "workout after work" },
  { label: "learn Japanese", value: "learn Japanese" },
  { label: "focus at work", value: "focus at work" },
];

export default function Home() {
  const [routineInput, setRoutineInput] = useState("");
  const [generatedRoutine, setGeneratedRoutine] = useState<null | RoutineStep[]>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!routineInput.trim()) return;

    const prompt = routineInput.trim();
    setIsGenerating(true);
    setLastPrompt(prompt);

    window.setTimeout(() => {
      setGeneratedRoutine(pickTemplate(prompt));
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="page-shell pb-10">
      <SiteHeader ctaHref="/#waitlist" ctaLabel="Join Waitlist" />

      <main className="mx-auto max-w-6xl px-6 pb-12 pt-6 sm:pb-20 sm:pt-10">
        <section className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel text-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-[var(--brand-warm)]" />
              A calmer operating system for your days
            </div>

            <h1 className="mt-7 max-w-4xl text-balance font-[var(--font-fraunces)] text-5xl leading-[0.95] text-[var(--brand-ink)] sm:text-6xl lg:text-7xl">
              Build a planning experience that feels like a finished product, not a pile of features.
            </h1>

            <p className="text-body mt-7 max-w-2xl text-justify text-lg leading-8 sm:text-left sm:text-xl">
              OneRoutine is being designed as a calmer planner for people who want one system for routines, tasks, and direction. AI helps translate intention into a usable day, without turning life into a dashboard.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-ink)] px-7 py-4 text-base font-semibold text-[color:var(--brand-ink-text)] hover:-translate-y-0.5 hover:opacity-90"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#generator"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-6 py-4 text-base font-semibold text-[var(--brand-ink)] hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
              >
                Try the generator
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {signals.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="section-card rounded-[1.6rem] p-5"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-warm)]">{item.value}</div>
                  <div className="mt-3 text-lg font-bold text-[var(--brand-ink)]">{item.label}</div>
                  <div className="text-muted-ui mt-2 text-sm leading-6">{item.note}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -left-3 top-8 hidden rounded-[1.75rem] bg-[var(--brand-ink)] px-5 py-4 text-sm text-[color:var(--brand-ink-text)] shadow-xl lg:block">
              <div className="font-semibold">Less noise</div>
              <div className="mt-1 max-w-[13rem] opacity-80">
                More guidance on what to do today, next, and later.
              </div>
            </div>

            <div className="section-card overflow-hidden rounded-[2.25rem] p-3">
              <div className="rounded-[1.8rem] bg-[var(--surface-input)] p-3">
                <Image
                  src="/hero-mock.png"
                  alt="OneRoutine app preview"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full rounded-[1.35rem]"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 right-4 hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-4 text-sm shadow-xl md:block">
              <div className="font-semibold text-[var(--brand-ink)]">A single philosophy</div>
              <div className="text-muted-ui mt-1 max-w-[14rem]">
                Calm, warm, and deliberate instead of generic SaaS polish.
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-6 md:mt-24 lg:grid-cols-3">
          {pillars.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="section-card rounded-[1.9rem] p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-ink)] text-[color:var(--brand-ink-text)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-[var(--brand-ink)]">{card.title}</h2>
                <p className="text-body mt-4 text-justify text-base leading-8 sm:text-left">{card.body}</p>
              </motion.article>
            );
          })}
        </section>

        <section className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Brand philosophy</p>
            <h2 className="mt-4 text-balance font-[var(--font-fraunces)] text-4xl leading-tight text-[var(--brand-ink)] sm:text-5xl">
              One routine. One day. One life.
            </h2>
            <p className="text-body mt-6 max-w-xl text-justify text-lg leading-8 sm:text-left">
              This product should feel coherent because the philosophy is coherent. It is not trying to win with more modules. It is trying to help people live with more clarity.
            </p>
          </div>

          <div className="grid gap-5">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="section-card rounded-[1.9rem] p-7"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-warm)]">{item.title}</div>
                <p className="text-body mt-4 text-justify text-lg leading-8 sm:text-left">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="generator" className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="section-card rounded-[2rem] bg-[var(--brand-ink)] bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.4))] p-8 text-[color:var(--brand-ink-text)] sm:p-10">
            <p className="eyebrow text-[color:var(--brand-rose)]">Mini experience</p>
            <h2 className="mt-4 text-balance font-[var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">
              Try the routine generator.
            </h2>
            <p className="mt-6 max-w-md text-justify text-base leading-8 opacity-90 sm:text-left">
              Start with a vague goal. The demo gives it enough structure that you can actually begin today.
            </p>
            <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-black/10 p-5">
              <div className="text-sm font-semibold opacity-100">What good output should feel like</div>
              <ul className="mt-4 space-y-3 text-sm leading-6 opacity-90">
                <li>Small enough to start without negotiation.</li>
                <li>Clear enough to fit into a real day.</li>
                <li>Gentle enough to feel sustainable.</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-card rounded-[2rem] p-6 sm:p-8"
          >
            <form onSubmit={handleGenerate} className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="E.g. sleep earlier, learn Japanese, workout after work"
                  value={routineInput}
                  onChange={(e) => setRoutineInput(e.target.value)}
                  className="surface-input h-14 w-full rounded-2xl border border-[var(--line)] pl-12 pr-4 text-base text-[var(--foreground)] outline-none placeholder:text-zinc-400 focus:border-[var(--brand-warm)]"
                />
              </div>
              <button
                type="submit"
                disabled={isGenerating || !routineInput.trim()}
                className="h-14 rounded-2xl bg-[var(--brand-warm)] px-7 text-sm font-semibold text-[color:var(--brand-warm-text)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isGenerating ? "Crafting..." : "Generate plan"}
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-ui mr-2 font-medium">Try:</span>
              {examples.map((example) => (
                <button
                  key={example.value}
                  type="button"
                  onClick={() => setRoutineInput(example.value)}
                  className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-zinc-700 hover:bg-[var(--surface-soft)] hover:text-[var(--brand-ink)]"
                >
                  {example.label}
                </button>
              ))}
            </div>

            {generatedRoutine && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="surface-soft mt-10 rounded-[1.75rem] p-6"
              >
                <div className="flex flex-col gap-3 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-warm)]">Routine suggestion</div>
                    <div className="mt-2 text-2xl font-bold text-[var(--brand-ink)]">{lastPrompt}</div>
                  </div>
                  <div className="text-muted-ui text-sm">Start with progress, not perfection.</div>
                </div>

                <div className="mt-6 space-y-3">
                  {generatedRoutine.map((step, index) => (
                    <motion.div
                      key={`${step.time}-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 sm:flex-row sm:items-center sm:gap-5"
                    >
                      <div className="w-fit rounded-xl bg-[var(--brand-ink)] px-3 py-2 font-mono text-sm font-semibold text-[color:var(--brand-ink-text)]">
                        {step.time}
                      </div>
                      <div className="text-base font-medium text-[var(--foreground)]">{step.title}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] bg-[var(--brand-ink)] p-6 text-[color:var(--brand-ink-text)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Want this inside the app?</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 opacity-90">
                        Join early access to follow the launch and help shape how AI planning should behave in real life.
                      </p>
                    </div>
                    <a
                      href="#waitlist"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--background)] px-5 py-3 text-sm font-semibold text-[var(--brand-ink)] hover:opacity-80"
                    >
                      Join waitlist
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        <section className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--brand-ink)] shadow-[var(--shadow-soft)]">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.1)_100%)]" />
            <div className="relative flex min-h-[30rem] flex-col justify-between p-8 sm:p-10">
              <div className="max-w-2xl">
                <p className="eyebrow text-[color:var(--brand-rose)]">Product direction</p>
                <h2 className="mt-4 text-balance font-[var(--font-fraunces)] text-4xl leading-tight text-[color:var(--brand-ink-text)] sm:text-5xl">
                  Build carefully. Make it feel intentional from the first screen.
                </h2>
                <p className="mt-5 max-w-xl text-justify text-base leading-8 text-[color:var(--brand-ink-text)] opacity-90 sm:text-left">
                  This area uses a purposeful composition, which gives the homepage a cleaner visual hierarchy and makes the product story feel authentic.
                </p>
              </div>

              <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
                <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-ink-text)] opacity-70">Visual brief</div>
                  <div className="mt-3 text-xl font-semibold text-[color:var(--brand-ink-text)]">Calm confidence, not app-store noise.</div>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-[color:var(--brand-ink-text)] opacity-70">Material</div>
                  <div className="mt-2 text-sm leading-6 text-[color:var(--brand-ink-text)] opacity-90">
                    Warm paper tones, restrained green, soft highlights.
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-black/10 p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-[color:var(--brand-ink-text)] opacity-70">Composition</div>
                  <div className="mt-2 text-sm leading-6 text-[color:var(--brand-ink-text)] opacity-90">
                    A wide scene with breathing room and controlled focus.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="section-card rounded-[1.75rem] p-6"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-warm)]">{item.phase}</div>
                <h3 className="mt-3 text-2xl font-bold text-[var(--brand-ink)]">{item.title}</h3>
                <p className="text-body mt-3 text-justify text-base leading-7 sm:text-left">{item.body}</p>
              </motion.div>
            ))}

            <div className="section-card rounded-[1.75rem] p-6">
              <div className="flex items-start gap-3">
                <Target className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-warm)]" />
                <div>
                  <div className="font-semibold text-[var(--brand-ink)]">Related reading</div>
                  <p className="text-muted-ui mt-2 text-justify text-sm leading-6 sm:text-left">
                    The content page explains what an AI routine planner should actually do, which also helps the site&apos;s SEO structure stay coherent.
                  </p>
                  <Link
                    href="/ai-routine-generator"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-ink)] hover:text-[var(--brand-warm)]"
                  >
                    Read the AI routine guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Early access</p>
            <h2 className="mt-4 font-[var(--font-fraunces)] text-4xl leading-tight text-[var(--brand-ink)] sm:text-5xl">
              Follow the first release.
            </h2>
            <p className="text-body mt-6 max-w-xl text-justify text-lg leading-8 sm:text-left">
              Join the waitlist if this planning philosophy resonates. Early users will get product updates, first access, and the chance to shape how routines, tasks, and life planning evolve together.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-ink)]" />
                  <div>
                    <div className="font-semibold text-[var(--brand-ink)]">Product updates without noise</div>
                    <div className="text-muted-ui mt-1 text-sm leading-6">
                      Launch progress, feature notes, and early access timing only.
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-ink)]" />
                  <div>
                    <div className="font-semibold text-[var(--brand-ink)]">A chance to influence the first version</div>
                    <div className="text-muted-ui mt-1 text-sm leading-6">
                      The first users will directly shape what becomes core and what gets cut.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-card rounded-[2rem] p-6 sm:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-warm)]">Join the waitlist</div>
            <div className="mt-5 w-full text-left">
              <iframe
                data-tally-src="https://tally.so/embed/LZdlWJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="277"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Waitlist"
              ></iframe>
              <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
