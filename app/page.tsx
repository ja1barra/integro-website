import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Revenue-Ready\nTalent',
    desc: 'We source, vet, and embed senior sales and marketing professionals who hit the ground running — no ramp-up tax, no mediocre hires.',
    slug: 'revenue-ready-talent',
  },
  {
    num: '02',
    title: 'SaaS Growth\nPlaybooks',
    desc: 'Custom GTM playbooks built around your ICP, competitive landscape, and stage. From Series A hustle to enterprise motion — we write the manual.',
    slug: 'saas-growth-playbooks',
  },
  {
    num: '03',
    title: 'Demand\nGeneration',
    desc: 'Multi-channel demand programs that fill your pipeline with qualified buyers — not vanity leads. Content, paid, ABM, and lifecycle in one motion.',
    slug: 'demand-generation',
  },
  {
    num: '04',
    title: 'Customer\nSuccess Engine',
    desc: 'Reduce churn, expand accounts, and turn customers into advocates. We build the playbooks, tooling, and processes that make retention a revenue driver.',
    slug: 'customer-success-engine',
  },
  {
    num: '05',
    title: 'Outbound\nSales Machine',
    desc: 'Targeted, signal-driven outbound at scale. Apollo, HubSpot, and AI-enriched sequences that book meetings with the accounts that actually matter.',
    slug: 'outbound-sales-machine',
  },
]

const agents = [
  {
    name: 'Outbound Agent',
    desc: 'Prospecting, enrichment, and sequencing — fully automated with human approval gates.',
  },
  {
    name: 'Demand Gen Agent',
    desc: 'Content briefs, campaign drafts, and channel optimization at scale.',
  },
  {
    name: 'CS Engine Agent',
    desc: 'Health scoring, churn signals, expansion triggers — monitored continuously.',
  },
  {
    name: 'Playbook Agent',
    desc: 'GTM strategy synthesis and competitive intel, updated in real time.',
  },
]

const tags = ['Human-First', 'SaaS GTM', 'AI-Augmented', 'Revenue-Focused', 'B2B']

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-36 pb-20 px-12 max-md:px-6 relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(253,112,22,0.07)_0%,transparent_70%)]" />
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-orange mb-6">
          SaaS Sales &amp; Marketing Consultancy
        </p>
        <h1 className="font-display text-[clamp(64px,9vw,140px)] leading-[0.95] tracking-[0.01em]">
          Revenue<br />Engineered<br /><span className="text-orange">For SaaS</span>
        </h1>
        <p className="mt-8 text-[clamp(16px,1.8vw,20px)] font-light text-mid max-w-xl leading-relaxed">
          We embed senior go-to-market talent and AI-powered systems into your SaaS company — so you can build pipeline, convert faster, and scale without guesswork.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link
            href="/services"
            className="bg-ink text-cream px-8 py-4 rounded text-sm font-mono tracking-wide border-2 border-ink hover:bg-orange hover:border-orange hover:text-nearblack transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore Services
          </Link>
          <Link
            href="#integro-ai"
            className="bg-transparent text-ink px-8 py-4 rounded text-sm font-mono tracking-wide border-2 border-warm hover:border-ink transition-all duration-200 hover:-translate-y-0.5"
          >
            Meet Integro AI →
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-12 mt-20 pt-12 border-t border-warm w-full max-w-xl">
          {[
            { num: '3×', label: 'Avg. Pipeline Lift' },
            { num: '90d', label: 'To First Revenue Impact' },
            { num: '5', label: 'Core Service Lines' },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-display text-5xl leading-none">
                {m.num}
              </div>
              <div className="mt-1 text-xs font-mono tracking-[0.05em] text-mid">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="px-12 py-28 max-md:px-6" id="services">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          What We Do
        </p>
        <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-[0.01em] mb-16">
          Five Ways We<br />Drive Revenue
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-warm">
          {services.map((s) => (
            <Link
              key={s.num}
              href={`/services/${s.slug}`}
              className="p-10 bg-[#f8f8f8] border border-warm group hover:bg-white transition-colors duration-200 relative overflow-hidden block"
            >
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="font-mono text-[11px] text-orange tracking-[0.1em] mb-5">{s.num}</div>
              <h3 className="font-display text-3xl tracking-[0.02em] mb-3 leading-tight whitespace-pre-line">
                {s.title}
              </h3>
              <p className="text-sm leading-7 text-mid font-light mb-6">{s.desc}</p>
              <span className="inline-block text-mid group-hover:text-orange group-hover:translate-x-1 transition-all duration-200 text-base">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── INTEGRO AI ── */}
      <section className="bg-ink text-cream px-12 py-28 max-md:px-6 relative overflow-hidden" id="integro-ai">
        <div
          className="absolute right-[-40px] top-[-60px] font-display text-[400px] leading-none pointer-events-none select-none"
          style={{ color: 'rgba(255,255,255,0.03)' }}
          aria-hidden
        >
          AI
        </div>
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          Introducing
        </p>
        <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-[0.01em] mb-16 text-cream">
          Integro AI
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[17px] leading-[1.75] font-light text-cream/70 mb-6">
              An AI-powered sales operating system built specifically for SaaS companies. Four autonomous agents handling volume and repetition — so your team can own strategy, relationships, and decisions.
            </p>
            <p className="text-[17px] leading-[1.75] font-light text-cream/70 mb-8">
              Human-first is non-negotiable. AI handles the work that doesn&apos;t need a human. Your strategists approve every output, manage every relationship, and steer every campaign.
            </p>
            <a
              href="mailto:hello@getintegro.com?subject=Integro AI Demo"
              className="inline-block bg-orange border-2 border-orange text-nearblack px-8 py-4 rounded text-sm font-mono tracking-wide hover:bg-[#d45e12] hover:border-[#d45e12] transition-all duration-200 hover:-translate-y-0.5"
            >
              Request Early Access
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {agents.map((a) => (
              <div
                key={a.name}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-orange/10 hover:border-orange transition-all duration-200"
              >
                <div className="w-2 h-2 bg-orange rounded-full mb-3" />
                <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-orange mb-1.5">
                  {a.name}
                </h4>
                <p className="text-[13px] text-cream/60 leading-relaxed font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING / COMING SOON ── */}
      <section className="px-12 py-24 max-md:px-6" id="pricing">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4 text-center">
          Integro AI &mdash; Pricing
        </p>
        <div className="max-w-2xl mx-auto text-center py-20 px-12 border border-warm rounded-xl bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(253,112,22,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative w-3 h-3 bg-orange rounded-full mx-auto mb-7">
            <span className="absolute inset-[-6px] rounded-full border-2 border-orange opacity-40 animate-pulse-ring" />
          </div>
          <h2 className="font-display text-[80px] leading-none tracking-[0.04em] text-ink mb-4">
            Coming Soon
          </h2>
          <p className="text-[17px] font-light text-mid leading-[1.7] max-w-sm mx-auto">
            Integro AI is currently in private development. Be the first to know when we launch — and get early access pricing.
          </p>
          <a
            href="mailto:hello@getintegro.com?subject=Integro AI Early Access"
            className="inline-block mt-8 bg-ink text-cream px-8 py-4 rounded text-sm font-mono tracking-wide border-2 border-ink hover:bg-orange hover:border-orange hover:text-nearblack transition-all duration-200 hover:-translate-y-0.5"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="px-12 py-28 max-md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center" id="about">
        <blockquote className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[0.01em]">
          &ldquo;AI does the volume.<br /><span className="text-orange">Humans own</span><br />the strategy.&rdquo;
        </blockquote>
        <div>
          <p className="text-base leading-[1.8] text-mid font-light mb-5">
            We built Integro around a simple belief: the best GTM teams are those where humans and AI each do what they&apos;re best at. AI handles prospecting volume, content drafts, health monitoring, and data synthesis. Humans own relationships, judgment, and strategy.
          </p>
          <p className="text-base leading-[1.8] text-mid font-light mb-8">
            Every engagement we run — consulting or AI-powered — is grounded in this principle. You get the leverage of modern AI without losing the strategic edge that only experienced humans provide.
          </p>
          <div className="flex flex-wrap gap-2">
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

      {/* ── CTA STRIP ── */}
      <section className="bg-orange text-nearblack px-12 py-24 max-md:px-6 flex flex-col sm:flex-row items-center justify-between gap-12">
        <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-none tracking-[0.01em] max-w-xl">
          Ready to build your revenue machine?
        </h2>
        <Link
          href="/contact"
          className="bg-white text-orange px-10 py-4 rounded text-base font-mono font-bold tracking-wide whitespace-nowrap hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150 flex-shrink-0"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </>
  )
}
