/*
 * REF-M-LINK HOME PAGE — EMBER MINIMAL
 * Design: Swiss Typographic + East African warmth
 * Background: #0A0A0A | Primary: #FF5722 | Text: #FFF / #888
 * Font: Inter (sans-serif throughout)
 */

import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

// ─── Asset URLs ────────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663656534237/L9RbiUnPdm7kCNPYQPFhK3/refulink-hero-NNmDk6abd7RrXA9RYnzGdV.webp";
const MISSION_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663656534237/L9RbiUnPdm7kCNPYQPFhK3/refulink-mission-cKtbHp3V8M2CLzgLYvLepx.webp";

// ─── Team data ─────────────────────────────────────────────────────────────────
const TEAM = [
  {
    login: "liliankavengi",
    name: "Lilian Kavengi",
    role: "Founder & Visionary",
    contributions: 55,
    avatar: "https://avatars.githubusercontent.com/u/122858862?v=4",
    github: "https://github.com/liliankavengi",
    bio: "Architect of Ref-M-Link's mission. Driving financial inclusion for refugees through blockchain-powered identity verification and mobile money integration.",
  },
  {
    login: "ben397",
    name: "Benjamin M",
    role: "Lead Engineer",
    contributions: 33,
    avatar: "https://avatars.githubusercontent.com/u/64592036?v=4",
    github: "https://github.com/ben397",
    bio: "Building the backbone of Ref-M-Link. Full-stack expertise in Stellar integration, M-Pesa bridge architecture, and production-grade backend systems.",
  },
  {
    login: "Tums2060",
    name: "Tumaini Wekesa",
    role: "Core Developer",
    contributions: 5,
    avatar: "https://avatars.githubusercontent.com/u/162110179?v=4",
    github: "https://github.com/Tums2060",
    bio: "Solving real-world problems with clean, purposeful code. Focused on smart contract implementation and on-chain identity verification.",
  },
  {
    login: "Joygloria334",
    name: "Joy Gloria",
    role: "Community Champion",
    contributions: 3,
    avatar: "https://avatars.githubusercontent.com/u/224504936?v=4",
    github: "https://github.com/Joygloria334",
    bio: "Championing the mission of financial inclusion. Connecting Ref-M-Link with refugee communities and ensuring the platform serves real needs.",
  },
];

// ─── Features data ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "◈",
    title: "RIN Verification",
    desc: "Refugee Identification Number (RIN) hashed on-chain via Soroban smart contracts — a tamper-proof digital identity that travels with the individual.",
  },
  {
    icon: "◎",
    title: "Stellar Wallet",
    desc: "Every verified refugee receives a Stellar keypair. KES tokens are minted, transferred, and burned on the Stellar testnet with full Horizon auditability.",
  },
  {
    icon: "◉",
    title: "M-Pesa Bridge",
    desc: "Deposit via Safaricom Daraja C2B webhooks; withdraw to any M-Pesa number in seconds. The bridge between local mobile money and global blockchain rails.",
  },
  {
    icon: "◇",
    title: "Trust Score",
    desc: "A 0–100 trust score derived from on-chain vouches, transaction volume, and account age maps to credit limits of up to KES 30,000.",
  },
  {
    icon: "◆",
    title: "Ambassador Vouching",
    desc: "Trusted community ambassadors scan a QR code to vouch for a refugee's identity on the Stellar ledger, unlocking higher KYC tiers.",
  },
  {
    icon: "◐",
    title: "Biometric Security",
    desc: "Private keys are stored in hardware-backed secure storage. Face ID and fingerprint authentication gate every wallet operation.",
  },
];

// ─── How It Works steps ────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Register Your Identity",
    desc: "Enter your Alien ID (RIN). The backend SHA-256 hashes it and registers a Stellar keypair on the Soroban ledger.",
  },
  {
    num: "02",
    title: "Get Vouched",
    desc: "A trusted ambassador scans your QR code, triggering vouch() on-chain. Your verification badge appears instantly.",
  },
  {
    num: "03",
    title: "Deposit via M-Pesa",
    desc: "Pay to the Ref-M-Link Paybill. Safaricom Daraja fires a webhook; KES tokens are minted to your Stellar wallet.",
  },
  {
    num: "04",
    title: "Send, Borrow & Grow",
    desc: "Transfer funds peer-to-peer, request micro-loans based on your trust score, and build a verifiable financial history.",
  },
];

// ─── Scroll animation hook ─────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Mission", href: "#mission" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 250ms ease, border-color 250ms ease",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{ display: "block", width: "4px", height: "28px", background: "#FF5722", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#fff", letterSpacing: "0.02em" }}>
            Ref-M-<span style={{ color: "#FF5722" }}>Link</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="https://github.com/liliankavengi/refulink" target="_blank" rel="noopener noreferrer" className="btn-orange" style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}>
            GitHub
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            style={{
              background: "none",
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: theme === "dark" ? "#fff" : "#0A0A0A",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "border-color 200ms ease, color 200ms ease",
              flexShrink: 0,
            }}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#fff", padding: "8px", display: "none" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(10,10,10,0.97)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.5rem 1.25rem 2rem" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif", fontSize: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a href="https://github.com/liliankavengi/refulink" target="_blank" rel="noopener noreferrer" className="btn-orange" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
            GitHub
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
        }}
      />
      {/* Dark overlay gradient */}
      <div className="hero-overlay" />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <span style={{ display: "block", width: "4px", height: "40px", background: "#FF5722" }} />
          <span
            className="mono"
            style={{ color: "#FF5722", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Financial Inclusion · Kenya · Blockchain
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            lineHeight: 1.0,
            color: "#fff",
            marginBottom: "1.75rem",
          }}
        >
          Banking for those<br />
          the system<br />
          <span style={{ color: "#FF5722" }}>forgot.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Ref-M-Link combines RIN identity verification, a Stellar blockchain wallet, and an M-Pesa bridge to give refugees in Kenya a trusted financial identity — and the credit to prove it.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#how-it-works" className="btn-orange">How It Works</a>
          <a href="#team" className="btn-ghost">Meet the Team</a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { val: "96", label: "Commits" },
            { val: "5", label: "Contributors" },
            { val: "4", label: "Core Modules" },
            { val: "KES 30K", label: "Max Credit" },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-number" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>{s.val}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mission ───────────────────────────────────────────────────────────────────
function Mission() {
  const ref = useFadeUp();
  return (
    <section id="mission" className="section-pad" style={{ background: "#0A0A0A" }}>
      <hr className="section-divider" />
      <div className="container section-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="mission-grid"
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4/3",
              overflow: "hidden",
            }}
          >
            <img
              src={MISSION_IMG}
              alt="Ref-M-Link network visualization"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Orange border offset */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                right: "-12px",
                bottom: "-12px",
                border: "2px solid #FF5722",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Text */}
          <div ref={ref} className="fade-up">
            <div style={{ position: "relative" }}>
              <span className="ghost-number">01</span>
              <p className="mono" style={{ color: "#FF5722", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
                Our Mission
              </p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                  color: "#fff",
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                A financial identity for every refugee.
              </h2>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Over 750,000 refugees live in Kenya. Most are excluded from formal banking because they lack the documentation that traditional institutions require. Ref-M-Link changes that.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "2rem" }}>
              By anchoring a refugee's Alien ID (RIN) to a Stellar blockchain identity and connecting it to M-Pesa, we create a verifiable, portable financial record that grows with every transaction.
            </p>
            <a href="https://github.com/liliankavengi/refulink" target="_blank" rel="noopener noreferrer" className="btn-orange">
              Read the Docs
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .mission-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 480px) {
          .mission-grid { gap: 1.75rem !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────────
function Features() {
  const ref = useFadeUp();
  return (
    <section id="features" className="section-pad" style={{ background: "#0A0A0A" }}>
      <hr className="section-divider" />
      <div className="container section-inner">
        <div ref={ref} className="fade-up" style={{ marginBottom: "4rem" }}>
          <div style={{ position: "relative" }}>
            <span className="ghost-number">02</span>
            <p className="mono" style={{ color: "#FF5722", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
              Core Features
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                color: "#fff",
                lineHeight: 1.15,
                position: "relative",
                zIndex: 1,
              }}
            >
              Built for trust. Designed for access.
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
          className="features-grid"
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 60} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ feature, delay }: { feature: (typeof FEATURES)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="feature-card fade-up">
      <div style={{ color: "#FF5722", fontSize: "1.5rem", marginBottom: "1.25rem", fontFamily: "monospace" }}>{feature.icon}</div>
      <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: "0.75rem" }}>
        {feature.title}
      </h3>
      <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>
        {feature.desc}
      </p>
    </div>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const ref = useFadeUp();
  return (
    <section id="how-it-works" className="section-pad" style={{ background: "#0A0A0A" }}>
      <hr className="section-divider" />
      <div className="container section-inner">
        <div ref={ref} className="fade-up" style={{ marginBottom: "4rem" }}>
          <div style={{ position: "relative" }}>
            <span className="ghost-number">03</span>
            <p className="mono" style={{ color: "#FF5722", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                color: "#fff",
                lineHeight: 1.15,
                position: "relative",
                zIndex: 1,
              }}
            >
              From identity to financial freedom.
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "rgba(255,255,255,0.06)" }} className="steps-grid">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} delay={i * 80} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function StepCard({ step, delay }: { step: (typeof STEPS)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-up step-card-item"
      style={{
        background: "#141414",
        padding: "2.5rem 2rem",
        display: "flex",
        gap: "1.5rem",
        alignItems: "flex-start",
      }}
    >
      <div
        className="mono"
        style={{
          color: "#FF5722",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          fontWeight: 500,
          flexShrink: 0,
          paddingTop: "4px",
        }}
      >
        {step.num}
      </div>
      <div>
        <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.6rem" }}>
          {step.title}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

// ─── Team ──────────────────────────────────────────────────────────────────────
function Team() {
  const ref = useFadeUp();
  return (
    <section id="team" className="section-pad" style={{ background: "#0A0A0A" }}>
      <hr className="section-divider" />
      <div className="container section-inner">
        <div ref={ref} className="fade-up" style={{ marginBottom: "4rem" }}>
          <div style={{ position: "relative" }}>
            <span className="ghost-number">04</span>
            <p className="mono" style={{ color: "#FF5722", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.25rem", position: "relative", zIndex: 1 }}>
              The Team
            </p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                color: "#fff",
                lineHeight: 1.15,
                position: "relative",
                zIndex: 1,
              }}
            >
              The builders behind the mission.
            </h2>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
          className="team-grid"
        >
          {TEAM.map((member, i) => (
            <TeamCard key={member.login} member={member} delay={i * 60} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function TeamCard({ member, delay }: { member: (typeof TEAM)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="team-card fade-up">
      {/* Avatar */}
      <div style={{ marginBottom: "1.25rem" }}>
        <img
          src={member.avatar}
          alt={member.name}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "0",
            objectFit: "cover",
            border: "2px solid rgba(255,87,34,0.3)",
          }}
        />
      </div>

      {/* Info */}
      <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "4px" }}>
        {member.name}
      </h3>
      <p style={{ fontFamily: "'Inter', sans-serif", color: "#FF5722", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
        {member.role}
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
        {member.bio}
      </p>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <span className="mono" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
          {member.contributions} commits
        </span>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,0.35)", transition: "color 180ms ease", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5722")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          aria-label={`${member.name} on GitHub`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Waitlist Section ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = "xykvjgyw";

function Waitlist() {
  const ref = useFadeUp();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setMessage("Welcome to the Ref-M-Link waitlist! We'll be in touch.");
      setEmail("");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section-pad" style={{ background: "#0A0A0A" }}>
      <hr className="section-divider" />
      <div className="container section-inner">
        <div
          ref={ref}
          className="fade-up box-pad"
          style={{
            background: "linear-gradient(135deg, rgba(255,87,34,0.08) 0%, rgba(255,87,34,0.02) 100%)",
            border: "1px solid rgba(255,87,34,0.15)",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Get early access.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.55)",
              fontSize: "1rem",
              lineHeight: 1.7,
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Join the waitlist to be among the first refugees to access Ref-M-Link's financial identity and credit platform.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="waitlist-form">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              style={{
                flex: 1,
                padding: "0.75rem 1.25rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                transition: "border-color 200ms ease, background 200ms ease",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,87,34,0.4)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="btn-orange"
              style={{
                opacity: status === "loading" || !email ? 0.5 : 1,
                cursor: status === "loading" || !email ? "not-allowed" : "pointer",
              }}
            >
              {status === "loading" ? "Joining..." : "Join"}
            </button>
          </form>

          {/* Status message */}
          {message && (
            <div
              style={{
                padding: "0.75rem 1rem",
                background: status === "success" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                border: `1px solid ${status === "success" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                color: status === "success" ? "#86efac" : "#fca5a5",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                textAlign: "center",
                borderRadius: "2px",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  const ref = useFadeUp();
  return (
    <section className="section-pad" style={{ background: "#0A0A0A" }}>
      <hr className="section-divider" />
      <div className="container section-inner">
        <div
          ref={ref}
          className="fade-up box-pad cta-inner"
          style={{
            background: "#141414",
            border: "1px solid rgba(255,87,34,0.2)",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              Open source.<br />
              <span style={{ color: "#FF5722" }}>Open to contributions.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "480px" }}>
              Ref-M-Link is built in public. Review the architecture, contribute code, or fork the project to adapt it for your region.
            </p>
          </div>
          <div className="cta-inner-btns">
            <a href="https://github.com/liliankavengi/refulink" target="_blank" rel="noopener noreferrer" className="btn-orange">
              View on GitHub
            </a>
            <a href="https://github.com/liliankavengi/refulink/blob/main/docs/architecture.md" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Architecture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "3rem 0" }}>
      <div className="container footer-inner">
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{ display: "block", width: "3px", height: "22px", background: "#FF5722" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff" }}>
            Ref-M-<span style={{ color: "#FF5722" }}>Link</span>
          </span>
        </a>

        {/* Links */}
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: "https://github.com/liliankavengi/refulink" },
            { label: "Architecture", href: "https://github.com/liliankavengi/refulink/blob/main/docs/architecture.md" },
            { label: "WhatsApp", href: "https://wa.me/254715516715" },
          ].map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.82rem" }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Copy */}
        <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
          © 2026 Ref-M-Link. MIT License.
        </p>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float ────────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254715516715"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 200,
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 200ms ease, box-shadow 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Mission />
      <Features />
      <HowItWorks />
      <Team />
      <Waitlist />
      <CTABanner />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
