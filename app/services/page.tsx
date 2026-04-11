import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Integro Solutions',
  description:
    'Five service lines built to drive SaaS revenue: Revenue-Ready Talent, SaaS Growth Playbooks, Demand Generation, Customer Success Engine, and Outbound Sales Machine.',
}

const services = [
  {
    num: '01',
    title: 'Revenue-Ready Talent',
    subtitle: 'Senior GTM professionals, embedded from day one.',
    description:
      'Finding great sales and marketing talent is hard. Finding people who can actually perform in a SaaS environment — without a six-month ramp — is harder. We source, vet, and embed senior go-to-market professionals who hit the ground running, contributing to pipeline and revenue from week one.',
    deliverables: [
      'Fractional CRO, VP Sales, or VP Marketing engagements',
      'Embedded SDR and AE capacity for outbound or inbound coverage',
      'Sales and marketing leadership on a project or retainer basis',
      'Talent assessment and org design for your GTM team',
    ],
  },
  {
    num: '02',
    title: 'SaaS Growth Playbooks',
    subtitle: 'Your GTM motion, written down and built to scale.',
    description:
      'Most SaaS companies grow on instinct and tribal knowledge. That works — until it doesn\'t. We build custom GTM playbooks around your ICP, competitive landscape, product stage, and growth goals. From Series A hustle to enterprise motion, we write the manual so your team can execute with consistency and speed.',
    deliverables: [
      'ICP definition, persona mapping, and competitive positioning',
      'Full sales playbook: discovery, objection handling, closing sequences',
      'Channel-specific demand strategy (content, paid, ABM, lifecycle)',
      'Quarterly GTM review and playbook iteration process',
    ],
  },
  {
    num: '03',
    title: 'Demand Generation',
    subtitle: 'Pipeline that converts, not vanity metrics.',
    description:
      'We build multi-channel demand programs designed to fill your pipeline with qualified buyers who are actually ready to talk. No spray-and-pray. No vanity metrics. Every channel, every campaign, every piece of content is engineered to move your ICP from awareness to pipeline. Content, paid, ABM, and lifecycle — in one coordinated motion.',
    deliverables: [
      'Account-Based Marketing (ABM) program design and execution',
      'Content strategy and editorial calendar aligned to pipeline stages',
      'Paid acquisition strategy across LinkedIn, Google, and intent networks',
      'Marketing automation and lifecycle nurture program setup',
    ],
  },
  {
    num: '04',
    title: 'Customer Success Engine',
    subtitle: 'Retention is a revenue strategy.',
    description:
      'Churn is the silent killer of SaaS growth. We build the playbooks, tooling, and processes that turn customer success from a cost center into a revenue driver. Health scoring, expansion plays, renewal optimization, and advocacy programs — everything you need to reduce churn, grow net revenue retention, and build a base of customers who sell for you.',
    deliverables: [
      'Customer health scoring model and early churn signal detection',
      'Onboarding and adoption playbooks tied to time-to-value milestones',
      'Expansion and upsell motion design with revenue attribution',
      'Customer advocacy and referral program strategy',
    ],
  },
  {
    num: '05',
    title: 'Outbound Sales Machine',
    subtitle: 'Signal-driven outbound that books meetings with accounts that matter.',
    description:
      'Cold outbound is broken — for most companies. We build targeted, signal-driven outbound systems that use intent data, technographic signals, and AI enrichment to identify accounts in-market right now. Apollo, HubSpot, and AI-powered sequencing combine to deliver personalized outreach at scale, with human approval at every key step.',
    deliverables: [
      'Outbound infrastructure setup: Apollo, HubSpot, and sequencing tools',
      'ICP-matched prospect list building with intent and enrichment data',
      'Multi-step, multi-channel sequence design (email, LinkedIn, phone)',
      'Ongoing optimization: A/B testing, reply analysis, and weekly reporting',
    ],
  },
]

export default function ServicesPage() {
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
          What We Do
        </p>
        <h1
          className="font-display leading-none tracking-tight max-w-3xl"
          style={{ fontSize: 'clamp(48px, 7vw, 104px)' }}
        >
          Five Ways We
          <br />
          Drive Revenue
        </h1>
        <p className="mt-8 text-lg text-mid font-light leading-relaxed max-w-xl">
          Every service we offer is built around one objective: accelerating
          SaaS revenue. No generalist consulting. No boilerplate frameworks.
          Just proven GTM motion, embedded into your business.
        </p>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((s, i) => (
        <section
          key={s.num}
          className={`px-12 max-md:px-6 py-24 border-t border-warm ${
            i % 2 === 1 ? 'bg-white' : 'bg-cream'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 max-w-6xl">
            {/* Number + title */}
            <div>
              <div className="font-mono text-[11px] text-orange tracking-[0.1em] mb-4">
                {s.num}
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-tight tracking-tight mb-3">
                {s.title}
              </h2>
              <p className="font-mono text-sm text-orange tracking-wide leading-snug">
                {s.subtitle}
              </p>
            </div>

            {/* Body */}
            <div>
              <p className="text-base text-mid leading-[1.8] font-light mb-10">
                {s.description}
              </p>

              <h3 className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink mb-5">
                What&apos;s Included
              </h3>
              <ul className="space-y-3 mb-10">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-4 text-sm text-mid font-light">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-ink text-cream px-7 py-3.5 rounded text-sm font-mono tracking-wide border-2 border-ink hover:bg-orange hover:border-orange transition-all duration-200 hover:-translate-y-0.5"
              >
                Talk to Us About {s.title.split(' ')[0]} →
              </Link>
            </div>
          </div>
        </section>
      ))}

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
