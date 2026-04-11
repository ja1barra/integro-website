import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Integro Solutions',
  description:
    'Integro Solutions is a human-first, AI-augmented SaaS GTM consultancy. We believe the best revenue teams combine senior human judgment with AI leverage.',
}

const values = [
  {
    title: 'Human-First',
    desc: 'AI is a tool. Humans own the strategy, the relationships, and the decisions. Every engagement we run reflects this — senior practitioners in the room, not just dashboards.',
  },
  {
    title: 'SaaS-Native',
    desc: 'We only work with SaaS companies. That focus means we understand your motion, your metrics, and your buyer better than any generalist shop can.',
  },
  {
    title: 'Revenue-Focused',
    desc: 'We don\'t optimise for activity metrics. Everything we build — talent, playbooks, demand, outbound — is tied to pipeline, ARR, and retention.',
  },
  {
    title: 'AI-Augmented',
    desc: 'We use the best modern tools to move faster and do more with less. But we never let automation replace judgment — and we never will.',
  },
]

const tags = ['Human-First', 'SaaS GTM', 'AI-Augmented', 'Revenue-Focused', 'B2B']

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-12 max-md:px-6">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          About Integro
        </p>
        <h1 className="font-display text-[clamp(48px,7vw,100px)] leading-[0.95] tracking-[0.01em] max-w-4xl">
          Human-First.<br /><span className="text-orange">AI-Augmented.</span><br />Revenue-Focused.
        </h1>
      </section>

      {/* Story */}
      <section className="px-12 py-20 max-md:px-6 border-t border-warm grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-6">
            Our Story
          </p>
          <p className="text-lg leading-[1.8] text-mid font-light mb-6">
            Integro was built by practitioners who had lived inside SaaS GTM teams — not consultants who studied them from the outside. We saw the same problems repeated at company after company: wrong hires, vague playbooks, demand programs built on vanity metrics, and CS teams firefighting instead of expanding.
          </p>
          <p className="text-lg leading-[1.8] text-mid font-light">
            We started Integro to solve those problems with the same rigour we applied when we were operators. The result is a consultancy that embeds, executes, and delivers — not one that decks and disappears.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-6">
            Our Philosophy
          </p>
          <blockquote className="font-display text-[clamp(28px,3vw,44px)] leading-[1.1] tracking-[0.01em] mb-8">
            &ldquo;AI does the volume.<br /><span className="text-orange">Humans own</span><br />the strategy.&rdquo;
          </blockquote>
          <p className="text-base leading-[1.8] text-mid font-light">
            Every engagement we run — consulting or AI-powered — is grounded in one principle: the best GTM teams are those where humans and AI each do what they&apos;re best at. AI handles prospecting volume, content drafts, health monitoring, and data synthesis. Humans own relationships, judgment, and strategy.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] tracking-[0.08em] uppercase px-3.5 py-1.5 border border-warm rounded text-mid"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-12 py-20 max-md:px-6 border-t border-warm bg-white">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          What We Stand For
        </p>
        <h2 className="font-display text-[clamp(36px,4vw,60px)] leading-none tracking-[0.01em] mb-16">
          Four Principles<br />We Don&apos;t Compromise On
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-warm">
          {values.map((v) => (
            <div key={v.title} className="p-10 bg-white border border-warm">
              <h3 className="font-display text-3xl tracking-[0.02em] mb-4">{v.title}</h3>
              <p className="text-sm leading-7 text-mid font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-12 py-20 max-md:px-6 border-t border-warm">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          The Team
        </p>
        <h2 className="font-display text-[clamp(36px,4vw,60px)] leading-none tracking-[0.01em] mb-8">
          Senior Practitioners,<br />Not Generalists
        </h2>
        <p className="text-lg leading-[1.8] text-mid font-light max-w-2xl mb-6">
          Every person we place or embed has held operator roles inside SaaS companies — as VP of Sales, Head of Demand, CMO, or CS Director. We don&apos;t hire people who studied GTM. We hire people who did GTM.
        </p>
        <p className="text-lg leading-[1.8] text-mid font-light max-w-2xl">
          That means faster ramp, sharper judgment, and execution that actually sticks. No slide decks without follow-through. No recommendations without accountability.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange text-white px-12 py-24 max-md:px-6 flex flex-col sm:flex-row items-center justify-between gap-12">
        <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-none tracking-[0.01em] max-w-xl">
          Ready to work with us?
        </h2>
        <Link
          href="/contact"
          className="bg-white text-orange px-10 py-4 rounded text-base font-mono font-bold tracking-wide whitespace-nowrap hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150 flex-shrink-0"
        >
          Get in Touch
        </Link>
      </section>
    </>
  )
}
