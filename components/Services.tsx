import { Monitor, PenTool, Rocket, Target } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site-data";

const icons = {
  monitor: Monitor,
  target: Target,
  pen: PenTool,
  rocket: Rocket
};

export default function Services() {
  return (
    <section id="palvelut" className="section services-section">
      <div className="container services-grid">
        <Reveal className="services-intro" y={38} duration={1.04}>
          <p className="eyebrow">Mitä teemme</p>
          <h2 className="services-title">Kokonaisvaltainen verkkosivupalvelu yrityksellesi</h2>
          <p className="services-copy">
            Autamme sinua erottumaan verkossa ja muuttamaan kävijät asiakkaiksi – tyylillä ja toimivuudella.
          </p>
          <a className="text-link" href="#yhteys">Tutustu palveluihimme ↗</a>
        </Reveal>

        <div className="services-cards">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={0.08 + index * 0.08} y={42} scale={0.99} duration={0.96}>
                <article className="service-card">
                  <div className="service-number">{service.number}</div>
                  <Icon className="service-icon" size={32} strokeWidth={1.35} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
