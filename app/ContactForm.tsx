"use client";

import { FormEvent, useState } from "react";

const ACCESS_KEY = "de5e3d6d-e641-404c-8a9d-5bb1f5f88cd7";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const need = String(formData.get("message") || "").trim();

    if (!name || !email || !need || !email.includes("@")) {
      setStatus("error");
      setMessage("Täytä nimi, sähköposti ja viesti ennen lähettämistä.");
      return;
    }

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Uusi tarjouspyyntö NODRA-sivulta");
    formData.append("from_name", "NODRA verkkosivu");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Kiitos! Viesti lähetettiin.");
        form.reset();
        return;
      }

      setStatus("error");
      setMessage("Jokin meni pieleen. Yritä uudelleen.");
    } catch {
      setStatus("error");
      setMessage("Jokin meni pieleen. Yritä uudelleen.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="botcheck"
      />

      <label className="form-field">
        <span>Nimi</span>
        <input name="name" type="text" placeholder="Etunimi Sukunimi" autoComplete="name" required />
      </label>

      <label className="form-field">
        <span>Sähköposti</span>
        <input name="email" type="email" placeholder="esimerkki@yritys.fi" autoComplete="email" required />
      </label>

      <label className="form-field">
        <span>Yritys</span>
        <input name="company" type="text" placeholder="Yrityksen nimi" autoComplete="organization" />
      </label>

      <label className="form-field">
        <span>Tarvitsemasi sivusto</span>
        <select name="service" defaultValue="">
          <option value="" disabled>Valitse vaihtoehto</option>
          <option value="Yhden sivun nettisivu">Yhden sivun nettisivu</option>
          <option value="Yrityssivusto">Yrityssivusto</option>
          <option value="Sivuston uudistus">Sivuston uudistus</option>
          <option value="Ylläpito">Ylläpito</option>
          <option value="En ole vielä varma">En ole vielä varma</option>
        </select>
      </label>

      <label className="form-field align-start">
        <span>Viesti</span>
        <textarea name="message" placeholder="Kerro lyhyesti projektistasi ja tavoitteistasi..." required />
      </label>

      <div className="form-actions">
        <button className="button button-dark" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Lähetetään..." : "Lähetä viesti"}
        </button>
        <a href="mailto:nodra.verkkosivut@gmail.com">Tai lähetä sähköpostia <span aria-hidden="true">→</span></a>
      </div>

      {message && (
        <p className={`form-status ${status}`} role={status === "error" ? "alert" : "status"}>
          {message}
        </p>
      )}
    </form>
  );
}
