"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import content from "../../data/content.json";

const { site, nav } = content;

export default function Header() {
  const pathname = usePathname();
  const isTop = pathname === "/v2";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (anchor: string) => (isTop ? `#${anchor}` : `/v2#${anchor}`);
  const close = () => setMenuOpen(false);

  return (
    <header
      className={`v2-header ${!isTop ? "v2-header--solid" : ""} ${scrolled ? "v2-header--scrolled" : ""}`}
    >
      <div className="v2-header__inner">
        <a href="/v2" className="v2-header__logo">
          {site.name}
        </a>
        <nav className={`v2-header__nav ${menuOpen ? "v2-header__nav--open" : ""}`}>
          <a href={link("about")} className="v2-header__link" onClick={close}>
            {nav.about}
          </a>
          <a href="/v2/business" className="v2-header__link" onClick={close}>
            {nav.business}
          </a>
          <a href={link("news")} className="v2-header__link" onClick={close}>
            {nav.news}
          </a>
          <a href={link("careers")} className="v2-header__link" onClick={close}>
            {nav.careers}
          </a>
          <a href={link("contact")} className="v2-header__cta" onClick={close}>
            {nav.contact}
          </a>
        </nav>
        <button
          className="v2-header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
