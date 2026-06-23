import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/site-data";

export default function Process() {
  return (
    <section id="prosessi" className="section process-section">
      <div className="container">
        <Reveal className="process-heading" y={38} duration={1.04}>
          <p className="eyebrow">Näin projekti etenee</p>
          <h2 className="section-title">Selkeä prosessi alusta julkaisuun.</h2>
        </Reveal>

        <div className="process-track">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} className="process-reveal" delay={index * 0.1} y={38} duration={0.98}>
              <article className="process-step">
                <span className="process-number">{step.number}</span>
                <span className="process-line" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
