import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          background: "linear-gradient(135deg, #0a0e1a 0%, #111827 100%)",
          fontFamily: "sans-serif", position: "relative",
        }}
      >
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", display: "flex" }} />
        {/* Red glow */}
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 70%)", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "60px 80px", position: "relative" }}>
          {/* Top label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ color: "#ef4444", fontSize: 18, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>FIFA World Cup 2026</span>
          </div>

          {/* Title */}
          <div style={{ display: "flex", fontSize: 72, fontWeight: 900, color: "white", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Match Schedule
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#94a3b8", marginBottom: 48 }}>
            All 80 fixtures · Local kickoff times · Jun 11 – Jul 19
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 24 }}>
            {[["80", "Matches"], ["48", "Teams"], ["16", "Venues"], ["3", "Nations"]].map(([v, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 32px", minWidth: 120 }}>
                <span style={{ color: "white", fontSize: 40, fontWeight: 900 }}>{v}</span>
                <span style={{ color: "#64748b", fontSize: 16, marginTop: 4 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 80px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}>
          <span style={{ color: "#475569", fontSize: 20, fontWeight: 600 }}>wc26time.com</span>
          <div style={{ display: "flex", gap: 8 }}>
            {["🇺🇸", "🇨🇦", "🇲🇽"].map((f) => (
              <span key={f} style={{ fontSize: 28 }}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
