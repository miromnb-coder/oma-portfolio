import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact, socialLinks } from "@/lib/site-data";

export default function Contact() {
  return (
    <section id="yhteys" className="section contact-section">
      <div className="container contact-grid">
        <Reveal x={-36} y={18} duration={1.08}>
          <div className="contact-line" />
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-copy">{contact.copy}</p>

          <div className="contact-list">
            <a className="contact-item" href={`mailto:${contact.email}`}>
              <Mail size={18} strokeWidth={1.6} />
              <span>{contact.email}</span>
            </a>
            <a className="contact-item" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              <Phone size={18} strokeWidth={1.6} />
              <span>{contact.phone}</span>
            </a>
            <div className="contact-item">
              <MapPin size={18} strokeWidth={1.6} />
              <span>{contact.location}</span>
            </div>
          </div>

          <div className="contact-socials" aria-label="Sosiaalinen media">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal x={36} y={18} scale={0.985} duration={1.08} delay={0.12}>
          <form className="contact-form">
            <div className="form-grid">
              <Reveal className="form-reveal" y={16} delay={0.18} duration={0.72}>
                <input className="form-field" name="name" placeholder="Nimi" autoComplete="name" />
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.24} duration={0.72}>
                <input className="form-field" name="email" placeholder="Sähköposti" type="email" autoComplete="email" />
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.3} duration={0.72}>
                <input className="form-field" name="company" placeholder="Yritys" autoComplete="organization" />
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.36} duration={0.72}>
                <textarea className="form-field" name="message" placeholder="Viesti" />
              </Reveal>
              <Reveal className="form-reveal" y={16} delay={0.42} duration={0.72}>
                <button className="premium-button premium-button--light form-submit" type="button">
                  Lähetä viesti
                </button>
              </Reveal>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
