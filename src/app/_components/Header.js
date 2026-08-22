"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone } from "lucide-react";
import { site } from "../data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`nav ${menuOpen ? "menu-open" : ""}`}>
      <Link className="brand" href="/" aria-label="Balprada Ayurvedic Hospital & Research Center home">
        <img className="brand-logo" src="https://res.cloudinary.com/dv9tivfvq/image/upload/v1787323813/balprada-logo-header-small_gwdwcf.svg" alt="Balprada" />
        <span className="brand-copy">
          <strong>{site.name}</strong>
          <small>Ayurvedic Hospital & Research Center</small>
        </span>
      </Link>
      {!menuOpen ? (
        <nav aria-label="Primary navigation" id="primary-navigation">
          <Link href="/about">About</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/pathology-lab">Pathology</Link>
          <Link href="/ashram">Ashram</Link>
          <Link href="/organic-food">Organic Food</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      ) : null}
      <a
        className="nav-call"
        href={`tel:${site.primaryPhone}`}
        aria-label={`Call main branch on ${site.primaryPhone}`}
        title={`Call ${site.primaryPhone}`}
      >
        <Phone size={19} strokeWidth={2} aria-hidden="true" />
      </a>
      <Link className="nav-cta" href="/appointment">
        Book Appointment
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      {menuOpen ? (
        <div
          className="mobile-nav-panel"
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/treatments" onClick={() => setMenuOpen(false)}>Treatments</Link></li>
            <li><Link href="/pathology-lab" onClick={() => setMenuOpen(false)}>Pathology</Link></li>
            <li><Link href="/ashram" onClick={() => setMenuOpen(false)}>Ashram</Link></li>
            <li><Link href="/organic-food" onClick={() => setMenuOpen(false)}>Organic Food</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li className="mobile-menu-contact">
              <a
                className="mobile-menu-call"
                href={`tel:${site.primaryPhone}`}
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={19} strokeWidth={2} aria-hidden="true" />
                <span>Call Main Branch</span>
                <strong>{site.primaryPhone}</strong>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
