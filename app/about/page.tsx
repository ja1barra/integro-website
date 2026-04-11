import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Integro Solutions',
  description:
    'Integro Solutions is a human-first, AI-augmented SaaS sales and marketing consultancy. Senior practitioners embedded into your go-to-market motion.',
}

const values = [
  {
    label: 'Human-First',
    desc: 'AI is a tool, not a replacement. Every engagement is led by experienced practitioners who own the strategy, the relationships, and the outcomes.',
  },
  {
    label: 'SaaS-Native',
    desc: 'We only work in SaaS. That means we understand your metrics, your motion, your buyer, and the specific pressures of recurring revenue businesses.',
  },
  {
    label: 'Revenue-Focused',
    desc: "We don't optimize for impressions, MQLs, or activity reports. We optimize for pipeline, conversion, and revenue impact — the numbers that matter.",
  },
  {
    label: 'AI-Augmented',
    desc: 'We use AI where it creates real leverage: volume tasks, enrichment, monitoring, and synthesis. Humans stay in control of judgment and strategy.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="px-12 max-md:px-6 pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212,80,26,0.07) 0%, transparent 70%)',
          }}
        />
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          About Integro
        </p>
        <h1
          className="font-display leading-none tracking-tight max-w-4xl"
          style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
        >
          Human-First.
          <br />
          AI-Augmented.
          <br />
          <span className="text-orange">Revenue-Focused.</span>
        </h1>
        <p className="mt-8 text-lg text-mid font-light leading-relaxed max-w-xl">
          We are a SaaS sales and marketing consultancy built on one conviction:
          the best go-to-market teams in the world combine senior human judgment
          with the leverage of modern AI.
        </p>
      </section>

      {/* ── STORY ── */}
      <section className="px-12 max-md:px-6 py-24 border-t border-warm bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
              Our Story
            </p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-tight tracking-tight mb-6">
              Built for the way
              <br />
              SaaS actually works
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-base text-mid leading-[1.8] font-light">
              Integro was founded by senior go-to-market practitioners who had
              spent years inside SaaS companies — building sales teams,
              designing demand programs, scaling outbound, and reducing churn.
              We saw the same patterns fail, over and over: generalist agencies
              that didn&apos;t understand SaaS metrics, hiring delays that cost
              quarters of pipeline, and AI hype that created noise instead of
              revenue.
            </p>
            <p className="text-base text-mid leading-[1.8] font-light">
              So we built Integro to do it differently. Embedded senior talent.
              Custom playbooks. AI tools that actually work for sales and
              marketing teams. And a relentless focus on the metrics that move
              the business — pipeline, conversion, NRR.
            </p>
            <p className="text-base text-mid leading-[1.8] font-light">
              We work with SaaS companies from Series A through growth stage,
              typically as an embedded extension of the leadership team. Not a
              vendor. A partner.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="px-12 max-md:px-6 py-24 border-t border-warm grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <blockquote
          className="font-display leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
        >
          &ldquo;AI does the volume.
          <br />
          <span className="text-orange">Humans own</span>
          <br />
          the strategy.&rdquo;
        </blockquote>
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
            Our Philosophy
          </p>
          <p className="text-base text-mid leading-[1.8] font-light mb-5">
            We built Integro around a simple belief: the best GTM teams are
            those where humans and AI each do what they&apos;re best at. AI
            handles prospecting volume, content drafts, health monitoring, and
            data synthesis. Humans own relationships, judgment, and strategy.
          </p>
          <p className="text-base text-mid leading-[1.8] font-light mb-5">
            Every engagement we run — consulting or AI-powered — is grounded in
            this principle. You get the leverage of modern AI without losing the
            strategic edge that only experienced humans provide.
          </p>
          <p className="text-base text-mid leading-[1.8] font-light">
            This isn&apos;t a buzzword. It&apos;s the operating model that
            shapes every engagement, every tool recommendation, and every
            output we deliver.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="px-12 max-md:px-6 py-24 border-t border-warm bg-white">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          How We Work
        </p>
        <h2 className="font-display text-[clamp(36px,4vw,64px)] leading-tight tracking-tight mb-16">
          Four principles
          <br />
          that guide everything
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.label}
              className="p-8 border border-warm rounded-lg bg-cream relative group overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <h3 className="font-display text-2xl tracking-wide mb-3">{v.label}</h3>
              <p className="text-sm text-mid leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="px-12 max-md:px-6 py-24 border-t border-warm">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
            The Team
          </p>
          <h2 className="font-display text-[clamp(36px,4vw,64px)] leading-tight tracking-tight mb-8">
            Senior practitioners,
            <br />
            not generalists
          </h2>
          <p className="text-base text-mid leading-[1.8] font-light mb-5">
            Everyone who works on your engagement at Integro has spent years
            inside SaaS companies — not consulting about them from the outside.
            We&apos;ve carried quotas, run demand programs, built CS teams, and
            stared down churn. We know what it feels like to be accountable to
            a revenue number.
          </p>
          <p className="text-base text-mid leading-[1.8] font-light mb-8">
            That experience is what makes the difference between advice that
            sounds right and work that actually moves the needle. Our team
            brings VP-level GTM experience across sales, marketing, customer
            success, and revenue operations — available to your business without
            the full-time hire.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-cream px-7 py-3.5 rounded text-sm font-mono tracking-wide border-2 border-ink hover:bg-orange hover:border-orange transition-all duration-200 hover:-translate-y-0.5"
          >
            Meet the Team →
          </Link>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="px-12 max-md:px-6 py-24 bg-orange text-white flex flex-col sm:flex-row items-center justify-between gap-12">
        <h2
          className="font-display leading-none tracking-tight max-w-xl"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          Ready to build your revenue machine?
        </h2>
        <Link
          href="/contact"
          className="flex-shrink-0 bg-white text-orange px-10 py-4 rounded text-base font-mono font-bold tracking-wide whitespace-nowrap hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </>
  )
}
