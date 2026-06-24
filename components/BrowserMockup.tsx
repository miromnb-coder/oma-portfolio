import Image from "next/image";

export default function BrowserMockup() {
  return (
    <figure className="preview-card" aria-label="Esimerkki NODRA:n verkkosivuprojektista">
      <Image
        src="/puuhaus-esimerkki.jpg"
        alt="Esimerkki modernista yrityssivustosta"
        fill
        sizes="(max-width: 900px) 92vw, 54vw"
        className="preview-image"
        priority
      />
    </figure>
  );
}
