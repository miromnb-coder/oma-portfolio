import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact, socialLinks } from "@/lib/site-data";

export default function Contact() {
  return (
    <section id="yhteys" className="section contact-section">
      <div className="container contact-grid">
        <Reveal>
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

        <Reveal y={36} delay={0.12}>
          <form className="contact-form">
            <div className="form-grid">
              <input className="form-field" name="name" placeholder="Nimi" autoComplete="name" />
              <input className="form-field" name="email" placeholder="Sähköposti" type="email" autoComplete="email" />
              <input className="form-field" name="company" placeholder="Yritys" autoComplete="organization" />
              <textarea className="form-field" name="message" placeholder="Viesti" />
              <button className="premium-button premium-button--light form-submit" type="button">
                Lähetä viesti
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
