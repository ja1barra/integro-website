import Link from 'next/link'

interface ServiceDetailPageProps {
  number: string
  title: string
  tagline: string
  heroStat: { value: string; label: string }
  overview: string
  whatWeDeliver: { title: string; body: string }[]
  howItWorks: { step: string; label: string; detail: string }[]
  forWho: string
  cta: string
}

export default function ServiceDetailPage({
  number,
  title,
  tagline,
  heroStat,
  overview,
  whatWeDeliver,
  howItWorks,
  forWho,
  cta,
}: ServiceDetailPageProps) {
  return (
    <div className="sdp-root">
      <div className="sdp-container">
        {/* Back link */}
        <div className="sdp-back-wrap">
          <Link href="/#services" className="sdp-back-link">
            ← Back to Services
          </Link>
        </div>

        {/* Hero */}
        <div className="sdp-hero">
          <p className="sdp-number">{number}</p>
          <h1 className="sdp-title">{title}</h1>
          <p className="sdp-tagline">{tagline}</p>
          <div className="sdp-stat-block">
            <div className="sdp-stat-value">{heroStat.value}</div>
            <div className="sdp-stat-label">{heroStat.label}</div>
          </div>
        </div>

        {/* Overview */}
        <p className="sdp-overview">{overview}</p>

        {/* What We Deliver */}
        <div className="sdp-section">
          <p className="sdp-section-label">What We Deliver</p>
          <div className="sdp-deliver-grid">
            {whatWeDeliver.map((item) => (
              <div key={item.title} className="sdp-deliver-card">
                <h3 className="sdp-deliver-title">{item.title}</h3>
                <p className="sdp-deliver-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="sdp-section">
          <p className="sdp-section-label">How It Works</p>
          <ol className="sdp-steps">
            {howItWorks.map((item) => (
              <li key={item.step} className="sdp-step">
                <span className="sdp-step-num">{item.step}</span>
                <div className="sdp-step-content">
                  <span className="sdp-step-label">{item.label}</span>
                  <span className="sdp-step-detail">{item.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Who This Is For */}
        <div className="sdp-section">
          <p className="sdp-section-label">Who This Is For</p>
          <div className="sdp-for-who">
            <p className="sdp-for-who-text">{forWho}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="sdp-cta-wrap">
          <a href="mailto:jay@getintegro.com" className="sdp-cta-btn">
            {cta}
          </a>
        </div>
      </div>
    </div>
  )
}
