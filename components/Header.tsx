import MobileMenu from "@/components/MobileMenu";
import { navItems, site } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="logo" href="#etusivu" aria-label="NODRA etusivulle">
          {site.name}
        </a>

        <nav className="desktop-nav" aria-label="Päävalikko">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="premium-button nav-cta" href="#yhteys">
            {site.primaryCta}
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
