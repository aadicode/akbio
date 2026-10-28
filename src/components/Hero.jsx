import { metrics, profile } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">
        <span className="dot" aria-hidden="true" />
        Open to SDET roles · {profile.location}
      </p>
      <h1>
        <span>{profile.first}</span>
        <span className="last">{profile.last}</span>
      </h1>
      <div className="hero-grid">
        <div>
          <p className="lede">{profile.summary}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Email Aaditya
            </a>
            <a className="btn" href="#ai">
              How I use AI
            </a>
            <a className="btn ghost" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </div>
        </div>
        <aside className="report" aria-label="Profile summary">
          <p className="report-kicker">Status report</p>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>SDET</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Automation · API · Mobile</dd>
            </div>
            <div>
              <dt>Domains</dt>
              <dd>Payments, automotive, electronics</dd>
            </div>
            <div>
              <dt>Core stack</dt>
              <dd>Java, Python, Selenium, Appium</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>Jenkins, Maven, BDD</dd>
            </div>
            <div>
              <dt>AI</dt>
              <dd>Claude skills for coverage and scenarios</dd>
            </div>
          </dl>
        </aside>
      </div>
      <ul className="metrics">
        {metrics.map((item) => (
          <li key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
