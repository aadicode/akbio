import { aiWork } from "../data.js";

export default function Ai() {
  return (
    <section className="ai-band" id="ai">
      <div className="ai-inner">
        <p className="ai-kicker">AI in the test loop</p>
        <h2>The model drafts. The suite still has to pass.</h2>
        <p className="ai-lead">{aiWork.lead}</p>
        <ol className="pipeline">
          {aiWork.steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="ai-cards">
          {aiWork.cards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
