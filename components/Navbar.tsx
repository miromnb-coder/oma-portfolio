const navItems = [
  { label: "Palvelut", href: "#palvelut" },
  { label: "Projektit", href: "#projektit" },
  { label: "Prosessi", href: "#prosessi" },
  { label: "Yhteys", href: "#yhteys" },
];

export default function Navbar() {
  return (
    <header className="navbar" aria-label="Päänavigaatio">
      <a className="brand" href="#top" aria-label="NODRA etusivu">
        NODRA
      </a>

      <nav className="nav-links" aria-label="Sivun osiot">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#yhteys">
        Pyydä tarjous
      </a>
    </header>
  );
}
