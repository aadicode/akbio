import { experience } from "../data.js";

export default function Experience() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="index">01</p>
        <div>
          <h2>Experience</h2>
          <p>Frameworks, pipelines, and the releases they protected.</p>
        </div>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`}>
            <div className="when">
              <p className="dates">{job.dates}</p>
              <p className="domain">{job.domain}</p>
            </div>
            <article>
              <header>
                <h3>{job.title}</h3>
                <p>
                  {job.company}
                  <span> · {job.place}</span>
                </p>
              </header>
              <ul>
                {job.points.map((point) => (
                  <li key={point.text} className={point.ai ? "ai-point" : undefined}>
                    {point.ai ? <span className="ai-tag">AI</span> : null}
                    {point.text}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
