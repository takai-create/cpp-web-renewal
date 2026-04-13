import content from "../../data/content.json";

const { site, footer } = content;

export default function Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer__inner">
        <div className="v2-footer__grid">
          <div className="v2-footer__brand">
            <p className="v2-footer__logo">{site.name}</p>
            <p className="v2-footer__tagline">{site.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title} className="v2-footer__col">
              <p className="v2-footer__col-title">{col.title}</p>
              <ul className="v2-footer__links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="v2-footer__bottom">
          <div className="v2-footer__legal">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <p className="v2-footer__copy">{site.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
