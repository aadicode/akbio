import { awards, certifications, education, project } from "../data.js";

export default function Work() {
  return (
    <section className="section" id="selected">
      <div className="section-head">
        <p className="index">03</p>
        <div>
          <h2>Selected work</h2>
          <p>A product build, the credentials behind it, and recognition along the way.</p>
        </div>
      </div>

      <article className="project">
        <p className="report-kicker">{project.kicker}</p>
        <h3>{project.name}</h3>
        <p className="project-title">{project.title}</p>
        <p className="project-copy">{project.summary}</p>
        <ul className="stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <div className="split">
        <div>
          <h3 className="subhead">Awards</h3>
          <ul className="awards">
            {awards.map((award) => (
              <li key={award.title}>
                <strong>{award.title}</strong>
                <span>{award.detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subhead">Certifications</h3>
          <ul className="certs">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="subhead education-head">Education</h3>
          <p className="edu-degree">{education.degree}</p>
          <p className="edu-school">{education.school}</p>
          <p className="edu-meta">{education.meta}</p>
        </div>
      </div>
    </section>
  );
}
