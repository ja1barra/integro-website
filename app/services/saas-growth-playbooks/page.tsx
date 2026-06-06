import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata = {
  title: 'SaaS Growth Playbooks | Integro',
  description: 'Custom GTM playbooks built around your ICP, competitive landscape, and growth stage.',
}

const data = {
  number: '02',
  title: 'SaaS Growth Playbooks',
  tagline: 'Custom GTM playbooks built around your ICP, competitive landscape, and growth stage — from Series A hustle to enterprise motion.',
  heroStat: { value: '4–6 weeks', label: 'to a fully documented, team-ready GTM playbook' },
  overview: "Most SaaS teams operate on institutional knowledge, tribal tactics, and borrowed frameworks. We replace that with a documented, repeatable growth system built entirely around your buyer, your market, and your stage — not a generic template.",
  whatWeDeliver: [
    {
      title: 'ICP & Buyer Map',
      body: "Deep research into your ideal customer profile: firmographics, technographics, trigger events, decision-making unit, and the jobs-to-be-done your product solves. Every playbook starts with who you're selling to — not how.",
    },
    {
      title: 'Competitive Positioning Brief',
      body: 'A head-to-head analysis of your top 3–5 competitors with win/loss narrative, differentiation levers, and objection-handling scripts your team can use in live deals.',
    },
    {
      title: 'Stage-Specific GTM Blueprint',
      body: 'We build the right motion for your ARR stage. $1M–$3M means founder-led outbound precision. $3M–$10M means team-scalable sequences. $10M+ means multi-channel, multi-persona enterprise playbooks.',
    },
    {
      title: 'Messaging Architecture',
      body: 'A hierarchy of messages: category story → solution narrative → persona-specific value props → feature-level proof points. Aligned across sales, marketing, and CS so every team speaks the same language.',
    },
    {
      title: 'Living Playbook Format',
      body: "Delivered as a structured Notion workspace with version control so your team can update, annotate, and build on it as the market shifts — not a static PDF that collects dust.",
    },
  ],
  howItWorks: [
    { step: '01', label: 'Discovery Sprint', detail: '3 sessions across 2 weeks: ICP mapping, deal teardowns, and competitive analysis.' },
    { step: '02', label: 'Draft Playbook', detail: 'We build the full document structure and core sections for your review.' },
    { step: '03', label: 'Team Review', detail: 'Sync with your sales and marketing leads to pressure-test the content against real deals.' },
    { step: '04', label: 'Final Delivery', detail: 'Polished playbook in Notion, plus a 60-minute team readout session.' },
    { step: '05', label: 'Quarterly Update Option', detail: 'Add-on retainer to refresh messaging, update competitive intel, and extend the playbook as you scale.' },
  ],
  forWho: "Ideal for founders and revenue leaders at $2M–$15M ARR who are scaling the team but haven't documented the motion that's been working — or who are entering a new segment and need a clean GTM blueprint before firing the first shot.",
  cta: 'Build my playbook',
}

export default function SaasGrowthPlaybooksPage() {
  return <ServiceDetailPage {...data} />
}
