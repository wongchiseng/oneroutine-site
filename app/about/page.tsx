import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export default function AboutPage() {
  return (
    <div className="page-shell pb-10">
      <SiteHeader ctaHref="/#waitlist" ctaLabel="Join Waitlist" />

      <main className="mx-auto max-w-5xl px-6 pb-16 pt-10">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="section-card rounded-[2rem] p-8 sm:p-10">
            <Image
              src="/creator.jpg"
              alt="Creator of OneRoutine"
              width={220}
              height={220}
              className="h-36 w-36 rounded-[2rem] object-cover"
            />
            <div className="mt-8 rounded-[1.5rem] bg-[var(--surface-soft)] p-5 text-sm leading-7 text-body">
              Built independently as a calmer alternative to productivity products that feel too loud, too abstract, or too fragmented.
            </div>
          </div>

          <div className="section-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">About the creator</p>
            <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl leading-tight text-[var(--brand-ink)] sm:text-5xl">
              Why OneRoutine exists
            </h1>

            <div className="text-body mt-8 space-y-6 text-lg leading-8">
              <p>
                I&apos;m Nakia, the creator of <strong className="text-[var(--foreground)]">OneRoutine</strong>.
              </p>
              <p>
                I studied engineering at National Taiwan University and became increasingly interested in how simple systems can help people live with more clarity.
              </p>
              <p>
                OneRoutine started from a straightforward frustration: many productivity apps either demand too much setup or reduce life into a checklist. I wanted something quieter, warmer, and more coherent.
              </p>
              <blockquote className="border-l-2 border-[var(--brand-rose)] pl-5 font-[var(--font-fraunces)] text-2xl italic text-[var(--brand-ink)]">
                Meaningful change often starts with just one routine.
              </blockquote>
              <p>
                The project is being shaped as an experiment in making routines, tasks, and long-term direction feel like one system instead of separate categories competing for attention.
              </p>
              <p>
                If you want to talk, share product feedback, or follow the launch, reach out at{" "}
                <a className="font-semibold text-[var(--brand-ink)] underline decoration-[var(--brand-rose)] underline-offset-4" href="mailto:hello@oneroutine.one">
                  hello@oneroutine.one
                </a>
                .
              </p>
            </div>

            <Link
              href="/#waitlist"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-ink)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-ink-text)] hover:-translate-y-0.5 hover:opacity-90"
            >
              Follow the launch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
