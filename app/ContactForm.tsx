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
      <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" />
      <div className="form-row">
        <label>
          <span>Nimi</span>
          <input name="name" type="text" placeholder="Nimi" autoComplete="name" required />
        </label>
        <label>
          <span>Yritys</span>
          <input name="company" type="text" placeholder="Yritys" autoComplete="organization" />
        </label>
      </div>
      <label>
        <span>Sähköposti</span>
        <input name="email" type="email" placeholder="Sähköposti" autoComplete="email" required />
      </label>
      <label>
        <span>Mitä tarvitset?</span>
        <textarea name="message" placeholder="Mitä tarvitset?" required />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Lähetetään..." : "Lähetä"} <span aria-hidden="true">→</span>
      </button>
      {message && <p className={`form-status ${status}`}>{message}</p>}
    </form>
  );
}
