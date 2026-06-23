import { Gauge, LayoutGrid, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { valuePoints, whyNodra } from "@/lib/site-data";

const icons = {
  structure: LayoutGrid,
  design: Sparkles,
  speed: Gauge
};

export default function WhyNodra() {
  return (
    <section className="why-section">
      <div className="container why-grid">
        <Reveal className="why-statement" x={-28} y={18} duration={1.08}>
          <p className="eyebrow">{whyNodra.eyebrow}</p>
          <h2>{whyNodra.title}</h2>
        </Reveal>

        <Reveal className="why-content" x={28} y={18} duration={1.08} delay={0.08}>
          <p className="why-copy">{whyNodra.copy}</p>
          <div className="value-grid">
            {valuePoints.map((point, index) => {
              const Icon = icons[point.icon];
              return (
                <Reveal key={point.title} delay={0.16 + index * 0.08} y={24} duration={0.84}>
                  <article className="value-card">
                    <Icon size={24} strokeWidth={1.45} />
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <div className="why-still-life" aria-hidden="true">
          <span className="vase" />
          <span className="candle" />
        </div>
      </div>
    </section>
  );
}
