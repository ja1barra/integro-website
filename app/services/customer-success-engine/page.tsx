import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata = {
  title: 'Customer Success Engine | Integro',
  description: 'Reduce churn, expand accounts, and turn your best customers into your most powerful sales channel.',
}

const data = {
  number: '04',
  title: 'Customer Success Engine',
  tagline: 'Reduce churn, expand accounts, and turn your best customers into your most powerful sales channel.',
  heroStat: { value: '110%+', label: 'net revenue retention — the benchmark we engineer toward' },
  overview: "For growth-stage SaaS, customer success isn't a support function — it's a revenue function. Every percentage point of churn reduction compounds directly into your ARR. We build the systems, playbooks, and hiring profiles to make your CS org a growth engine, not a cost center.",
  whatWeDeliver: [
    {
      title: 'Churn Diagnostic',
      body: 'A structured audit of your current churn drivers: product adoption gaps, onboarding failures, support escalation patterns, and renewal cycle breakdowns. We identify the root causes before recommending solutions.',
    },
    {
      title: 'Onboarding Redesign',
      body: 'A time-to-value blueprint that gets customers to their first meaningful outcome in the shortest possible window. Includes email sequences, in-app checkpoints, and success milestone definitions.',
    },
    {
      title: 'Health Score Framework',
      body: "A custom health score model in HubSpot built on the signals that actually predict churn in your product — not generic usage metrics. Includes automated alerts and escalation workflows.",
    },
    {
      title: 'Expansion Playbook',
      body: 'Structured upsell and cross-sell motions for your CS team: trigger-based expansion prompts, QBR templates, stakeholder expansion sequences, and ROI review frameworks.',
    },
    {
      title: 'CS Hiring & Enablement',
      body: "If you're building the team, we define the role profiles, interview process, and onboarding curriculum so your CS hires ramp to productivity in weeks, not quarters.",
    },
  ],
  howItWorks: [
    { step: '01', label: 'Churn Audit', detail: '3-week diagnostic of your current retention data, customer interviews, and onboarding analysis.' },
    { step: '02', label: 'System Design', detail: 'We architect the health score model, onboarding sequence, and expansion triggers in HubSpot.' },
    { step: '03', label: 'Team Enablement', detail: 'Playbook delivery, CS team training, and QBR template rollout.' },
    { step: '04', label: 'Launch & Monitor', detail: 'Programs go live with a 90-day monitoring period and biweekly optimization check-ins.' },
    { step: '05', label: 'Retention Review', detail: 'Monthly retention reporting tied to NRR targets — not just renewal rates.' },
  ],
  forWho: "Critical for any SaaS company at $2M+ ARR with more than 20 active accounts. Especially high-ROI for teams where gross churn is above 15% annually, onboarding is informal, or CS is currently handled by the founders.",
  cta: 'Reduce my churn',
}

export default function CustomerSuccessEnginePage() {
  return <ServiceDetailPage {...data} />
}
