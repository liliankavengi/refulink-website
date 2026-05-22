import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div
      style={{
        background: "#0A0A0A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost number */}
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(12rem, 30vw, 22rem)",
          color: "rgba(255,87,34,0.05)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          position: "absolute",
          top: "50%",
          left: "3rem",
          transform: "translateY(-50%)",
        }}
      >
        404
      </span>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <span style={{ display: "block", width: "4px", height: "40px", background: "#FF5722" }} />
          <span
            style={{
              fontFamily: "monospace",
              color: "#FF5722",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Error · Page Not Found
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
            marginBottom: "1.5rem",
          }}
        >
          You seem<br />
          <span style={{ color: "#FF5722" }}>lost.</span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "480px",
          }}
        >
          This page doesn't exist or has been moved. Head back to the homepage.
        </p>

        <button
          onClick={() => setLocation("/")}
          className="btn-orange"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
