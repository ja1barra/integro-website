import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata = {
  title: 'Outbound Sales Machine | Integro',
  description: 'Targeted, signal-driven outbound at scale — built to create pipeline from your best-fit accounts, not spray and pray.',
}

const data = {
  number: '05',
  title: 'Outbound Sales Machine',
  tagline: 'Targeted, signal-driven outbound at scale — built to create pipeline from your best-fit accounts, not spray and pray.',
  heroStat: { value: '8–12%', label: 'positive reply rate target for optimized sequences we build' },
  overview: "Outbound works. What doesn't work is cold, generic, high-volume messaging sent to everyone with a job title that sounds vaguely relevant. We build signal-based, account-prioritized outbound systems that treat every prospect as an individual — and scale without losing that precision.",
  whatWeDeliver: [
    {
      title: 'Signal-Based Prospecting',
      body: 'We build your target account list using buying signals: funding events, hiring patterns, tech stack changes, intent data, and job postings. Every account on the list has a reason to be there.',
    },
    {
      title: 'Multi-Touch Sequence Architecture',
      body: 'Email, LinkedIn, and call sequences built around personas, industries, and trigger events. Not a generic 6-step email cadence — a true multi-channel motion with branching logic.',
    },
    {
      title: 'Messaging Personalization at Scale',
      body: "We create segment-level personalization frameworks that let your team write relevant first lines, reference specific context, and speak to each persona's specific pain — without manual research on every prospect.",
    },
    {
      title: 'Infrastructure & Deliverability',
      body: "Domain warm-up, inbox rotation, SPF/DKIM/DMARC configuration, and sending volume management. We ensure your outbound infrastructure doesn't get your domains blacklisted.",
    },
    {
      title: 'SDR Playbook & Coaching',
      body: 'If you have an SDR team, we train them on the system, build their daily prospecting cadence, and run weekly pipeline reviews to improve quality and consistency.',
    },
  ],
  howItWorks: [
    { step: '01', label: 'ICP & Signal Mapping', detail: 'Define tier-1 target account criteria and the buying signals that trigger outreach.' },
    { step: '02', label: 'List Build & Enrichment', detail: 'Apollo.io-powered account and contact sourcing with full enrichment and validation.' },
    { step: '03', label: 'Sequence Build', detail: 'Persona-specific sequences written, loaded into your sending platform, and tested.' },
    { step: '04', label: 'Infrastructure Setup', detail: 'Email infrastructure audit and configuration for maximum deliverability.' },
    { step: '05', label: 'Launch & Iterate', detail: 'Sequences go live with weekly performance reviews and monthly full-funnel optimization.' },
  ],
  forWho: "Ideal for SaaS companies at $1M–$15M ARR that have a defined ICP but inconsistent or non-existent outbound motion. High-impact for founders transitioning out of all sales, or teams scaling from 1 to 3+ AEs.",
  cta: 'Build my outbound machine',
}

export default function OutboundSalesMachinePage() {
  return <ServiceDetailPage {...data} />
}
