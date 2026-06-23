import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/site-data";

export default function Contact() {
  const phoneHref = contact.phone.replace(/\s/g, "");

  return (
    <section id="yhteys" className="section contact-section">
      <div className="contact-surface" aria-hidden="true" />
      <div className="container contact-grid">
        <Reveal className="contact-info" x={-36} y={18} duration={1.08}>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-copy">{contact.copy}</p>

          <div className="contact-list">
            <a className="contact-item" href={`mailto:${contact.email}`}>
              <Mail size={18} strokeWidth={1.6} />
              <span>{contact.email}</span>
            </a>
            <a className="contact-item" href={`tel:${phoneHref}`}>
              <Phone size={18} strokeWidth={1.6} />
              <span>{contact.phone}</span>
            </a>
            <div className="contact-item">
              <MapPin size={18} strokeWidth={1.6} />
              <span>{contact.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal x={36} y={18} scale={0.985} duration={1.08} delay={0.12}>
          <form className="contact-form">
            <div className="form-grid form-grid--v2">
              <Reveal className="form-reveal" y={16} delay={0.18} duration={0.72}>
                <input className="form-field" name="name" placeholder="Nimi" autoComplete="name" />
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.24} duration={0.72}>
                <input className="form-field" name="email" placeholder="Sähköposti" type="email" autoComplete="email" />
              </Reveal>
              <Reveal className="form-reveal form-wide" y={16} delay={0.3} duration={0.72}>
                <input className="form-field" name="company" placeholder="Yritys" autoComplete="organization" />
              </Reveal>
              <Reveal className="form-reveal form-wide" y={16} delay={0.36} duration={0.72}>
                <textarea className="form-field" name="message" placeholder="Millaisen sivuston tarvitset?" />
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.42} duration={0.72}>
                <select className="form-field" name="timeline" defaultValue="">
                  <option value="" disabled>Aikataulu</option>
                  <option>Mahdollisimman pian</option>
                  <option>1–2 kuukauden sisällä</option>
                  <option>Ei kiirettä</option>
                </select>
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.48} duration={0.72}>
                <select className="form-field" name="budget" defaultValue="">
                  <option value="" disabled>Budjetti</option>
                  <option>Alle 1000 €</option>
                  <option>1000–2500 €</option>
                  <option>2500 €+</option>
                </select>
              </Reveal>
              <Reveal className="form-reveal form-wide" y={16} delay={0.54} duration={0.72}>
                <button className="premium-button premium-button--light form-submit" type="button">
                  Lähetä tarjouspyyntö ↗
                </button>
              </Reveal>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
