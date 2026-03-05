"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Smartphone, Sparkles, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useMemo, useState } from "react";

// TODO: Replace with your actual Tally / Google Form URL
const WAITLIST_URL = "https://tally.so/r/LZdlWJ";

type RoutineStep = { time: string; title: string };

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function pickTemplate(inputRaw: string): RoutineStep[] {
  const input = normalize(inputRaw);

  // Sleep / bedtime
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
      { time: "22:30", title: "Go to bed (even if just lying down)" },
    ];
  }

  // Exercise / workout
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
      { time: "18:30", title: "Change clothes + fill water bottle" },
      { time: "18:40", title: "10-minute starter workout (no excuses)" },
      { time: "19:00", title: "Stretch 5 minutes + log completion" },
    ];
  }

  // Learning / language
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
      { time: "20:30", title: "Open lesson (2 minutes warm-up)" },
      { time: "20:35", title: "15 minutes focused study" },
      { time: "20:55", title: "5 minutes review + one tiny note" },
    ];
  }

  // Work focus / deep work
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
      { time: "09:30", title: "Pick 1 task + define done (2 minutes)" },
      { time: "09:35", title: "25 minutes deep work (no notifications)" },
      { time: "10:05", title: "5 minutes review + next step" },
    ];
  }

  // Default template
  return [
    { time: "08:30", title: "Choose one small action for today" },
    { time: "12:30", title: "Do a 10-minute version (keep it easy)" },
    { time: "21:30", title: "Reflect: what did I keep today?" },
  ];
}

export default function Home() {
  const [routineInput, setRoutineInput] = useState("");
  const [generatedRoutine, setGeneratedRoutine] = useState<null | RoutineStep[]>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastPrompt, setLastPrompt] = useState<string>("");
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false);

  const examples = useMemo(
    () => [
      { label: "exercise", value: "exercise" },
      { label: "sleep earlier", value: "sleep earlier" },
      { label: "learn Japanese", value: "learn Japanese" },
      { label: "focus at work", value: "focus at work" },
    ],
    []
  );

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!routineInput.trim()) return;

    setIsGenerating(true);
    const prompt = routineInput.trim();
    setLastPrompt(prompt);

    // Simulate AI generation (client-only demo)
    setTimeout(() => {
      setGeneratedRoutine(pickTemplate(prompt));
      setIsGenerating(false);
    }, 650);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200">
      {/* Subtle background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-zinc-300/40 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur-md z-50">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <div className="h-6 w-6 rounded-md bg-zinc-900" />
            <span>OneRoutine</span>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <main className="relative mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* 1. HERO */}
        <section className="flex flex-col items-center pt-20 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
              Plan your life, <br className="hidden sm:block" />
              <span className="text-zinc-500">one routine at a time.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 sm:text-xl">
              A minimal AI-powered routine planner that turns intentions into simple daily actions.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-transform hover:scale-105"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#generator"
                className="flex items-center gap-2 rounded-full border border-zinc-200 px-8 py-4 text-base font-medium transition-transform hover:scale-105 hover:bg-zinc-100"
              >
                Try the routine generator
              </a>
            </div>

            {/* Platform Availability Hints */}
            <div className="mt-8 flex items-center justify-center gap-4 text-sm font-medium text-zinc-500">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-zinc-400" />
                <span>Android first • Google Play coming soon</span>
              </div>
              <span className="text-zinc-300">|</span>
              <div className="flex items-center gap-2">
                <span>iOS planned</span>
              </div>
            </div>

            {/* ✅ HERO IMAGE PLACEHOLDER */}
            {/* 1) Create an image file named: hero-mock.png
                2) Put it here: /public/hero-mock.png
                3) You can also use .jpg or .webp, but keep the name consistent with src below.
            */}
            <div className="mt-14">
              <Image
                src="/hero-mock.png"
                alt="OneRoutine preview"
                width={1200}
                height={720}
                priority
                className="mx-auto rounded-3xl border border-zinc-200 bg-white shadow-2xl"
              />
              <p className="mt-4 text-sm text-zinc-500">
                (Replace <span className="font-mono">/public/hero-mock.png</span> with your app mockup or screenshot.)
              </p>
            </div>
          </motion.div>
        </section>

        {/* 2. FEATURES */}
        <section className="py-24 border-t border-zinc-200">
          <div className="grid gap-12 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4"
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                <Sparkles className="h-6 w-6 text-zinc-700" />
              </div>
              <h3 className="text-xl font-semibold">Natural language</h3>
              <p className="text-zinc-600 leading-relaxed">
                Turn “I want to exercise more” into a realistic daily routine without complex forms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-zinc-700" />
              </div>
              <h3 className="text-xl font-semibold">AI assisted breakdown</h3>
              <p className="text-zinc-600 leading-relaxed">
                AI helps break ambitious goals into small, manageable steps you can actually do today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                <Sun className="h-6 w-6 text-zinc-700" />
              </div>
              <h3 className="text-xl font-semibold">Minimal tracking</h3>
              <p className="text-zinc-600 leading-relaxed">
                Complete, Skip, or Tomorrow. No pressure, just momentum to keep you moving forward.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. BRAND STORY */}
        <section className="py-32">
          <div className="mx-auto max-w-4xl space-y-32 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Every meaningful change begins with one routine.
              </h2>
              <p className="text-xl text-zinc-600">
                A routine is not restriction.
                <br />
                It is a structure that protects what matters.
              </p>
            </motion.div>

            <div className="grid gap-12 sm:grid-cols-3 text-left">
              <div>
                <div className="mb-4 text-sm font-semibold text-zinc-400 uppercase tracking-widest">Morning</div>
                <p className="text-xl font-medium">Just complete one routine.</p>
              </div>
              <div>
                <div className="mb-4 text-sm font-semibold text-zinc-400 uppercase tracking-widest">Afternoon</div>
                <p className="text-xl font-medium">Turn intention into action.</p>
              </div>
              <div>
                <div className="mb-4 text-sm font-semibold text-zinc-400 uppercase tracking-widest">Evening</div>
                <p className="text-xl font-medium">Reflect on what you kept.</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mx-auto max-w-md rounded-2xl bg-zinc-900 p-10 text-center text-white shadow-xl"
            >
              <h3 className="mb-8 text-2xl font-bold">
                One life.
                <br />
                Less noise.
                <br />
                More becoming.
              </h3>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Not productivity addiction
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Sustainable discipline
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Small steps that compound
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 4. ONEROUTINE GENERATOR */}
        <section id="generator" className="py-24 border-t border-zinc-200">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight">Try the Routine Generator</h2>

            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm text-left relative overflow-hidden">
              <form onSubmit={handleGenerate} className="flex gap-2">
                <input
                  type="text"
                  placeholder="What routine do you want to build? (e.g., sleep earlier)"
                  value={routineInput}
                  onChange={(e) => setRoutineInput(e.target.value)}
                  className="w-full flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-zinc-400 focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={isGenerating || !routineInput.trim()}
                  className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
                >
                  {isGenerating ? "Thinking..." : "Generate"}
                </button>
              </form>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-500">
                <span>Examples:</span>
                {examples.map((ex) => (
                  <button
                    key={ex.value}
                    type="button"
                    onClick={() => setRoutineInput(ex.value)}
                    className="hover:text-zinc-900 px-2 py-1 rounded-md hover:bg-zinc-100 transition-colors"
                  >
                    {ex.label}
                  </button>
                ))}
              </div>

              {generatedRoutine && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-8 border-t border-zinc-100 pt-8"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                      Routine suggestion
                    </h4>
                    {lastPrompt && (
                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
                        For: <span className="font-medium text-zinc-900">{lastPrompt}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {generatedRoutine.map((step, i) => (
                      <div
                        key={`${step.time}-${i}`}
                        className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4"
                      >
                        <div className="font-mono text-zinc-400 mt-0.5">{step.time}</div>
                        <div className="font-medium text-zinc-800">{step.title}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl bg-zinc-900 p-6 text-center text-white">
                    <p className="mb-4 font-medium">Want to save this routine?</p>
                    <a
                      href="#waitlist"
                      className="inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
                    >
                      Join the waitlist
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* 5. WAITLIST */}
        <section id="waitlist" className="py-24">
          <div className="mx-auto max-w-xl rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-xl shadow-zinc-200/50 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Get early access</h2>
            <p className="mb-8 text-zinc-600">Early users will get first access and help shape the product.</p>

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
        </section>

        {/* 6. BUILD IN PUBLIC */}
        <section className="py-24 border-t border-zinc-200">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Building OneRoutine in public</h2>
              <p className="text-zinc-600">Transparency • Community • Sharing the journey</p>
            </div>

            <div className="relative border-l border-zinc-200 pl-6 ml-4 sm:ml-0 md:pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] flex h-4 w-4 items-center justify-center rounded-full bg-zinc-200">
                  <div className="h-2 w-2 rounded-full bg-zinc-400"></div>
                </div>
                <div className="mb-1 text-sm font-bold text-zinc-400">Week 1</div>
                <h4 className="text-lg font-semibold text-zinc-400">Core routine data model</h4>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 shadow-[0_0_0_4px_white]">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="mb-1 text-sm font-bold text-zinc-500">Week 2</div>
                <h4 className="text-lg font-semibold text-zinc-900">
                  AI routine parser
                  <span className="ml-3 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600 uppercase">
                    In progress
                  </span>
                </h4>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] flex h-4 w-4 items-center justify-center rounded-full bg-zinc-100 border border-zinc-200"></div>
                <div className="mb-1 text-sm font-bold text-zinc-400">Week 3</div>
                <h4 className="text-lg font-semibold text-zinc-400">Multi-language support (EN / ZH / JP / KR)</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-12 text-center text-sm text-zinc-500">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold text-zinc-900">
            <div className="h-4 w-4 rounded bg-zinc-900" />
            <span>OneRoutine</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Terms
            </Link>
            <a href="mailto:hello@oneroutine.one" className="hover:text-zinc-900 transition-colors">
              Contact
            </a>
          </div>
          <div>© {new Date().getFullYear()} OneRoutine</div>
        </div>
      </footer>
    </div>
  );
}