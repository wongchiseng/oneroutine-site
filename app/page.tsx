"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ListTodo,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useMemo, useState } from "react";

type RoutineStep = { time: string; title: string };

function normalize(s: string) {
  return s.trim().toLowerCase();
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
      { time: "21:30", title: "Shower and put phone away" },
      { time: "22:00", title: "10 minutes prepare tomorrow" },
      { time: "22:30", title: "Go to bed even if it is only a quiet reset" },
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
      { time: "18:30", title: "Change clothes and fill your water bottle" },
      { time: "18:40", title: "Do a 10 minute starter workout" },
      { time: "19:00", title: "Stretch 5 minutes and log completion" },
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
      { time: "20:30", title: "Open the lesson and do a 2 minute warm-up" },
      { time: "20:35", title: "Study with focus for 15 minutes" },
      { time: "20:55", title: "Write one short review note before stopping" },
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
      { time: "09:30", title: "Pick one priority and define what done means" },
      { time: "09:35", title: "Work deeply for 25 minutes with no notifications" },
      { time: "10:05", title: "Review progress and set the next step" },
    ];
  }

  return [
    { time: "08:30", title: "Choose one meaningful action for today" },
    { time: "12:30", title: "Do the 10 minute version to make progress real" },
    { time: "21:30", title: "Reflect on what you kept and what to continue tomorrow" },
  ];
}

const launchSignals = [
  { value: "3", label: "planning layers", note: "Tasks, routines, bucket list" },
  { value: "1", label: "clean timeline", note: "See today, upcoming, and long-term" },
  { value: "AI", label: "guided breakdown", note: "Turns vague goals into next steps" },
];

const productCards = [
  {
    icon: ListTodo,
    title: "Tasks + Routines together",
    body: "OneRoutine is not only for repeating habits. It helps you place daily tasks and recurring routines in the same flow, so life does not feel split across multiple apps.",
  },
  {
    icon: CalendarDays,
    title: "Dates that actually matter",
    body: "A date-aware timeline gives structure to the week. Deadlines, follow-ups, and personal goals stay visible without becoming overwhelming.",
  },
  {
    icon: Target,
    title: "Bucket list into real steps",
    body: "Big ambitions often stay vague. The app helps turn long-term ideas into smaller, scheduled actions that fit into a real day.",
  },
];

const roadmap = [
  {
    phase: "Now",
    title: "Sharpening the planning core",
    body: "Refining the structure that connects one-time tasks, repeating routines, and flexible AI suggestions in a single flow.",
  },
  {
    phase: "Next",
    title: "Closed early user testing",
    body: "Testing whether the planner feels lighter than traditional productivity apps, especially for people who want guidance without too much setup.",
  },
  {
    phase: "Later",
    title: "Calendar depth and personal direction",
    body: "Expanding into bucket list planning, date-based organization, and broader life planning so the app can support more than just habit tracking.",
  },
];

export default function Home() {
  const [routineInput, setRoutineInput] = useState("");
  const [generatedRoutine, setGeneratedRoutine] = useState<null | RoutineStep[]>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");

  const examples = useMemo(
    () => [
      { label: "sleep earlier", value: "sleep earlier" },
      { label: "workout after work", value: "workout after work" },
      { label: "learn Japanese", value: "learn Japanese" },
      { label: "focus at work", value: "focus at work" },
    ],
    []
  );

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!routineInput.trim()) return;

    const prompt = routineInput.trim();
    setIsGenerating(true);
    setLastPrompt(prompt);

    setTimeout(() => {
      setGeneratedRoutine(pickTemplate(prompt));
      setIsGenerating(false);
    }, 650);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-stone-300/35 blur-3xl" />
        <div className="absolute right-0 top-72 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-zinc-200/40 blur-3xl" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/80 bg-white/75 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 font-semibold text-zinc-900">
            <Image src="/logo.png" alt="OneRoutine Logo" width={32} height={32} className="rounded-xl" />
            <div>
              <div>OneRoutine</div>
              <div className="text-xs font-medium text-zinc-500">One Routine. One Day. One Life.</div>
            </div>
          </Link>

          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
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

          <a
            href="#waitlist"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-32">
        <section className="grid items-center gap-14 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-500" />
              AI planning for real daily life
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
              One Routine.
              <br />
              One Day.
              <br />
              One Life.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
              OneRoutine is built for people who want a calmer way to organize life. Use AI to turn rough intentions into clear routines, place tasks beside habits, and move long-term goals into real dates.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#generator"
                className="inline-flex items-center rounded-full px-1 py-1 text-base font-semibold text-zinc-700 transition-colors hover:text-zinc-900"
              >
                Try routine generator
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {launchSignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm">
                  <div className="text-2xl font-black text-zinc-900">{signal.value}</div>
                  <div className="mt-1 font-semibold text-zinc-800">{signal.label}</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-500">{signal.note}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-lg lg:block">
              <div className="text-sm font-semibold text-zinc-900">Today feels lighter</div>
              <div className="mt-1 text-sm text-zinc-500">Tasks, routines, and goals in one place.</div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-[0_20px_80px_rgba(24,24,27,0.12)]">
              <Image
                src="/hero-mock.png"
                alt="OneRoutine app preview"
                width={1200}
                height={900}
                priority
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>

            <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-zinc-200 bg-zinc-900 p-4 text-white shadow-xl md:block">
              <div className="text-sm font-semibold">Built to reduce friction</div>
              <div className="mt-1 max-w-[14rem] text-sm leading-6 text-zinc-300">
                Less setup. Less guilt. More clarity on what to do next.
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-t border-zinc-200/80 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">What OneRoutine is for</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
              A quieter planner for the full shape of life.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Most productivity tools either become too heavy or too shallow. OneRoutine is meant to sit in the middle: simple enough to use every day, powerful enough to guide routines, dates, and long-term direction.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {productCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">{card.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 border-t border-zinc-200/80 py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-900"
          >
            <div className="relative">
              <Image
                src="/hero-mock.png"
                alt="OneRoutine planning view"
                width={1200}
                height={760}
                className="h-[24rem] w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/70 via-zinc-900/55 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">The idea</p>
                  <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                    Planning should feel like guidance, not pressure.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-zinc-300">
                    OneRoutine aims to help people see life more clearly: what matters today, what repeats every week, and what they want to become over time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Creator</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-zinc-900">Built independently with a simple belief.</h3>
            <p className="mt-5 text-base leading-7 text-zinc-600">
              Good tools do not need to shout. OneRoutine is being shaped as a calmer planning app for people who want structure, direction, and a little intelligent help without turning life into a dashboard.
            </p>
            <blockquote className="mt-8 border-l-2 border-zinc-300 pl-4 text-lg italic text-zinc-700">
              Meaningful change often starts with just one routine.
            </blockquote>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Meet the creator
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </section>

        <section id="generator" className="border-t border-zinc-200/80 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Preview the AI</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">Try the routine generator.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Start with a vague goal. The demo turns it into a smaller structure you could actually follow today.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.08)] sm:p-8"
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
                  className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 pl-12 pr-4 text-base outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white"
                />
              </div>
              <button
                type="submit"
                disabled={isGenerating || !routineInput.trim()}
                className="h-14 rounded-2xl bg-zinc-900 px-7 text-sm font-semibold text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isGenerating ? "Crafting..." : "Generate plan"}
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
              <span className="mr-2 font-medium text-zinc-500">Try:</span>
              {examples.map((example) => (
                <button
                  key={example.value}
                  type="button"
                  onClick={() => setRoutineInput(example.value)}
                  className="rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-900"
                >
                  {example.label}
                </button>
              ))}
            </div>

            {generatedRoutine && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 rounded-[1.5rem] bg-zinc-50 p-6"
              >
                <div className="flex flex-col gap-3 border-b border-zinc-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Routine suggestion</div>
                    <div className="mt-2 text-2xl font-bold text-zinc-900">{lastPrompt}</div>
                  </div>
                  <div className="text-sm text-zinc-500">Small enough to start today.</div>
                </div>

                <div className="mt-6 space-y-3">
                  {generatedRoutine.map((step, index) => (
                    <motion.div
                      key={`${step.time}-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:gap-5"
                    >
                      <div className="w-fit rounded-xl bg-zinc-900 px-3 py-2 font-mono text-sm font-semibold text-white">
                        {step.time}
                      </div>
                      <div className="text-base font-medium text-zinc-800">{step.title}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] bg-zinc-900 p-6 text-white">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Want this inside the app?</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-300">
                        Join early access to follow the launch and help shape how AI planning should work in real life.
                      </p>
                    </div>
                    <a
                      href="#waitlist"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
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

        <section className="grid gap-8 border-t border-zinc-200/80 py-24 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Roadmap</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
              Building carefully, not pretending everything exists already.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              The goal is not to rush out a bloated planner. The goal is to shape something focused and genuinely helpful, then expand only where it makes life clearer.
            </p>

            <div className="mt-10 rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Current signals</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-2xl font-black text-zinc-900">Core</div>
                  <div className="mt-1 font-semibold text-zinc-800">Tasks + routines + dates</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-500">The product focus is broad life planning, not only streaks or checklists.</div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-2xl font-black text-zinc-900">Beta</div>
                  <div className="mt-1 font-semibold text-zinc-800">Early access via waitlist</div>
                  <div className="mt-2 text-sm leading-6 text-zinc-500">A smaller first release is better than a noisy, overpromised launch.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {roadmap.map((item) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{item.phase}</div>
                <h3 className="mt-3 text-2xl font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-600">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="waitlist" className="border-t border-zinc-200/80 py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Early access</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
                Follow the first release.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                If this way of planning resonates with you, join the waitlist. You will hear about product updates, early versions, and when the first public release is ready.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" />
                  <div>
                    <div className="font-semibold text-zinc-900">Early access updates</div>
                    <div className="mt-1 text-sm leading-6 text-zinc-500">Get launch progress and feature news without unnecessary spam.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-zinc-900" />
                  <div>
                    <div className="font-semibold text-zinc-900">Help shape the product</div>
                    <div className="mt-1 text-sm leading-6 text-zinc-500">The first users will influence how routines, tasks, and long-term planning evolve.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.08)] sm:p-8">
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Join the waitlist</div>
              <div className="w-full text-left">
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
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-12 text-sm text-zinc-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-3 font-semibold text-zinc-900">
            <Image src="/logo.png" alt="OneRoutine Logo" width={22} height={22} className="rounded-md" />
            <div>
              <div>OneRoutine</div>
              <div className="text-xs font-medium text-zinc-500">One Routine. One Day. One Life.</div>
            </div>
          </div>
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
          <div>© 2026 OneRoutine</div>
        </div>
      </footer>
    </div>
  );
}