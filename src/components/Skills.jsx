import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <p className="index">02</p>
        <div>
          <h2>Skills</h2>
          <p>The tools behind the suites, from the test to the pipeline.</p>
        </div>
      </div>
      <div className="skill-board">
        {skillGroups.map((group) => (
          <div key={group.label} className={group.label === "AI in testing" ? "skill-ai" : undefined}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
