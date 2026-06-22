import Reveal from "@/components/Reveal";
import { site, socialLinks } from "@/lib/site-data";

export default function Hero() {
  return (
    <section id="etusivu" className="section hero-section">
      <div className="hero-socials" aria-label="Sosiaalinen media">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.label}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="hero-content">
        <Reveal y={18}>
          <div className="hero-line" />
          <p className="eyebrow">{site.tagline}</p>
        </Reveal>

        <Reveal y={34} delay={0.08}>
          <h1 className="hero-title">{site.headline}</h1>
        </Reveal>

        <Reveal y={28} delay={0.16}>
          <p className="hero-subtitle">{site.subtitle}</p>
          <p className="hero-copy">{site.supportingText}</p>
        </Reveal>

        <Reveal y={24} delay={0.24}>
          <div className="hero-actions">
            <a className="premium-button premium-button--light" href="#yhteys">
              {site.primaryCta}
            </a>
            <a className="premium-button" href="#tyot">
              {site.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <span />
      </div>
    </section>
  );
}
