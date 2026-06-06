import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata = {
  title: 'Demand Generation | Integro',
  description: 'Multi-channel demand programs that fill your pipeline with qualified buyers — not vanity leads.',
}

const data = {
  number: '03',
  title: 'Demand Generation',
  tagline: 'Multi-channel demand programs that fill your pipeline with qualified buyers — not vanity leads.',
  heroStat: { value: '3–5x', label: 'pipeline coverage ratio target for programs we run' },
  overview: "Demand generation at growth-stage SaaS isn't about running ads or publishing blog posts — it's about engineering a system that consistently creates awareness with the right buyers, at the right time, across the right channels. We build and run that system for you.",
  whatWeDeliver: [
    {
      title: 'Multi-Channel Program Architecture',
      body: "We design a demand system across content, paid, ABM, and lifecycle — not siloed campaigns. Every channel has a role: awareness, consideration, conversion, or retention. We map the full motion before we produce a single asset.",
    },
    {
      title: 'Content Engine',
      body: "Editorial calendar, SEO strategy, long-form content, LinkedIn thought leadership, and distribution playbook. Built around your ICP's actual questions — not topics your team thinks sound smart.",
    },
    {
      title: 'Paid Demand Programs',
      body: 'Google, LinkedIn, and retargeting campaigns designed for pipeline, not impressions. We own setup, creative, bidding strategy, and weekly optimization. No black-box reporting.',
    },
    {
      title: 'ABM Targeting',
      body: 'Account-based programs for your top 100–250 target accounts. Intent data, personalized sequences, and LinkedIn touchpoints coordinated to move entire buying committees, not just individual contacts.',
    },
    {
      title: 'Pipeline Reporting Dashboard',
      body: "A live HubSpot dashboard that connects program spend to sourced pipeline, not just MQLs. You'll always know which channels are producing revenue-grade leads.",
    },
  ],
  howItWorks: [
    { step: '01', label: 'Audit & Strategy', detail: 'We audit current spend, channels, and conversion rates. Identify the highest-leverage programs for your pipeline gap.' },
    { step: '02', label: 'Program Build', detail: '4–6 weeks to build the infrastructure: ad accounts, content calendar, ABM target list, and attribution setup.' },
    { step: '03', label: 'Launch', detail: 'Programs go live with weekly check-ins and a shared Slack channel for real-time reporting.' },
    { step: '04', label: 'Optimize', detail: 'Monthly performance reviews with budget reallocation recommendations and creative refresh cadence.' },
    { step: '05', label: 'Quarterly Planning', detail: 'Each quarter begins with a program refresh tied to pipeline goals and product roadmap updates.' },
  ],
  forWho: "Best for SaaS companies at $3M–$15M ARR that have proven product-market fit and need to move beyond founder-led growth. Particularly high-impact for teams with a strong outbound motion that want inbound demand to complement it.",
  cta: 'Build my demand program',
}

export default function DemandGenerationPage() {
  return <ServiceDetailPage {...data} />
}
