import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata = {
  title: 'Revenue-Ready Talent | Integro',
  description: 'Senior sales and marketing professionals who hit the ground running — no ramp-up tax, no mediocre hires.',
}

const data = {
  number: '01',
  title: 'Revenue-Ready Talent',
  tagline: "Senior sales and marketing professionals who hit the ground running — no ramp-up tax, no mediocre hires.",
  heroStat: { value: '90 days', label: 'to full productivity vs. 6–9 months with a traditional hire' },
  overview: "Most growth-stage SaaS companies lose 6–18 months every time they make a bad hire or onboard the wrong profile. We eliminate that cost entirely. Integro sources, vets, and embeds senior revenue professionals who are already fluent in your motion — product-led, sales-led, or hybrid.",
  whatWeDeliver: [
    {
      title: 'ICP-Matched Sourcing',
      body: "We don't post on job boards and wait. We proactively target professionals whose last 2–3 roles match your exact GTM motion, deal size, and buyer persona. Every candidate is pre-screened against your ICP before you see a single resume.",
    },
    {
      title: 'Embedded Vetting Process',
      body: 'Our 4-stage evaluation covers: competency interviews, live pipeline review exercises, a written GTM case study, and a reference audit. We only present candidates who have carried quota in your category.',
    },
    {
      title: 'Ramp-Ready Onboarding Kit',
      body: 'Every placed hire receives a 30/60/90-day playbook, a library of outbound sequences tailored to your ICP, and their first 10 target accounts pre-researched and enriched — from day one.',
    },
    {
      title: 'Roles We Place',
      body: 'Account Executives (SMB → Mid-Market → Enterprise), SDRs, Head of Sales / VP of Sales, Demand Generation Managers, Revenue Operations Leads, and Customer Success Managers and Directors.',
    },
    {
      title: 'Fractional & Full-Time Options',
      body: "Need senior horsepower before you're ready to hire full-time? We place fractional VP-level operators who drive results at a fraction of the cost — ideal for the $1M–$5M ARR stage.",
    },
  ],
  howItWorks: [
    { step: '01', label: 'Intake Call', detail: 'We map your ICP, deal cycle, team gaps, and culture profile in 60 minutes.' },
    { step: '02', label: 'Target Sourcing', detail: 'Our team builds a live shortlist of 15–20 pre-qualified candidates within 10 business days.' },
    { step: '03', label: 'Deep Vetting', detail: 'We run all 4 evaluation stages and present 2–3 finalists with full scorecards.' },
    { step: '04', label: 'Embed & Onboard', detail: 'The hire is placed with a ramp kit, week-one agenda, and 90-day success milestones.' },
    { step: '05', label: '90-Day Guarantee', detail: "If the hire isn't performing to agreed milestones, we replace at no cost." },
  ],
  forWho: "Best fit for SaaS companies at $1M–$10M ARR that need to scale a revenue team without the risk of bad hires or slow ramp curves. Ideal when you're post-product-market-fit and pre-Series B.",
  cta: 'Start a talent search',
}

export default function RevenueReadyTalentPage() {
  return <ServiceDetailPage {...data} />
}
