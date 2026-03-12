import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/ai-routine-generator", label: "AI Guide" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteHeader({ ctaHref, ctaLabel }: SiteHeaderProps) {
  return (
    <nav className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-5 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-[0.95rem] font-semibold text-[var(--brand-ink)]">
          <Image src="/logo.png" alt="OneRoutine Logo" width={34} height={34} className="rounded-2xl" />
          <div className="min-w-0">
            <div className="truncate">OneRoutine</div>
            <div className="text-muted-ui truncate text-xs font-medium">One Routine. One Day. One Life.</div>
          </div>
        </Link>

        <div className="text-body hidden items-center gap-5 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--brand-ink)]">
              {link.label}
            </Link>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <Link
            href={ctaHref}
            className="rounded-full bg-[var(--brand-ink)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-ink-text)] hover:-translate-y-0.5 hover:opacity-90"
          >
            {ctaLabel}
          </Link>
        ) : (
          <div className="hidden w-[96px] md:block" />
        )}
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10 pt-4">
      <div className="text-body mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold text-[var(--brand-ink)]">OneRoutine</div>
          <div className="mt-1">A calmer planner for routines, tasks, and direction.</div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/about" className="hover:text-[var(--brand-ink)]">
            About
          </Link>
          <Link href="/ai-routine-generator" className="hover:text-[var(--brand-ink)]">
            AI Guide
          </Link>
          <Link href="/privacy" className="hover:text-[var(--brand-ink)]">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[var(--brand-ink)]">
            Terms
          </Link>
        </div>
        <div className="text-muted-ui">© 2026 OneRoutine</div>
      </div>
    </footer>
  );
}

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  meta: string[];
  children: React.ReactNode;
};

export function LegalLayout({ eyebrow, title, meta, children }: LegalLayoutProps) {
  return (
    <div className="page-shell pb-10">
      <SiteHeader ctaHref="/#waitlist" ctaLabel="Join Waitlist" />

      <main className="mx-auto max-w-4xl px-6 pb-16 pt-10">
        <section className="section-card rounded-[2rem] p-8 sm:p-12">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-[var(--font-fraunces)] text-4xl leading-tight text-[var(--brand-ink)] sm:text-5xl">
            {title}
          </h1>
          <div className="text-muted-ui mt-5 space-y-1 text-sm font-medium">
            {meta.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
          <div className="legal-prose mt-10">{children}</div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
