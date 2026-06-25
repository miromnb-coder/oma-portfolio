import Link from "next/link";
import { notFound } from "next/navigation";
import { getServicePage, servicePages } from "../serviceData";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {
      title: "Palvelu ei löytynyt — NODRA",
    };
  }

  return {
    title: `${service.title} — NODRA`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="site-shell">
      <section className="subpage-section">
        <div className="container subpage-container">
          <Link className="back-link" href="/">
            ← Takaisin etusivulle
          </Link>

          <div className="subpage-card">
            <p className="section-label">Palvelu</p>
            <h1>{service.title}</h1>
            <p className="subpage-lead">{service.intro}</p>
            <p>{service.description}</p>

            <div className="subpage-list">
              {service.points.map((point) => (
                <div key={point}>✓ {point}</div>
              ))}
            </div>

            <Link className="button button-primary" href="/#yhteys">
              Pyydä tarjous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
