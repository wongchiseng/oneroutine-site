import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-24 text-zinc-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute left-0 top-64 h-72 w-72 rounded-full bg-zinc-200/45 blur-3xl" />
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
            <Link href="/privacy" className="transition-colors hover:text-zinc-900">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-zinc-900">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-4xl pt-12">
        <div className="grid gap-8 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/creator.jpg"
              alt="Creator of OneRoutine"
              width={160}
              height={160}
              className="mb-8 h-32 w-32 rounded-full object-cover"
            />
            <div className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-600">
              Built independently as an experiment in making life planning feel lighter, more focused, and more human.
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">About the creator</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900">Why OneRoutine exists</h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-700">
              <p>
                Hi, I'm Nakia, the creator of <strong>OneRoutine</strong>.
              </p>

              <p>
                I'm an engineering graduate from National Taiwan University, interested in how simple systems can help people build better daily habits.
              </p>

              <p>
                I started building OneRoutine after realizing that many productivity apps try to do too much. Instead of adding more complexity, OneRoutine focuses on a simpler idea: helping people move through life with more clarity and less friction.
              </p>

              <blockquote className="border-l-2 border-zinc-300 pl-5 italic text-zinc-800">
                meaningful change often starts with just one routine.
              </blockquote>

              <p>
                This project is being built independently as an experiment in creating tools that support routines, daily tasks, and long-term direction without overwhelming the person using them.
              </p>

              <p>
                If you have ideas, feedback, or simply want to say hello, feel free to reach out.
              </p>

              <p className="font-medium text-zinc-900">hello@oneroutine.one</p>
            </div>
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
