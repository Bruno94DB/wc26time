import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          background: "linear-gradient(135deg, #0a0e1a 0%, #0f172a 60%, #1a0a0a 100%)",
          fontFamily: "sans-serif", position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", display: "flex" }} />
        <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center", padding: "60px 80px", position: "relative", gap: 28 }}>
          {/* Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 999, padding: "8px 24px" }}>
            <span style={{ color: "#f87171", fontSize: 18, fontWeight: 700, letterSpacing: "0.08em" }}>⚽ KICKOFF COUNTDOWN</span>
          </div>

          {/* Main title */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 16, fontSize: 76, fontWeight: 900, lineHeight: 1 }}>
              <span style={{ color: "white" }}>World Cup</span>
              <span style={{ color: "#ef4444" }}>2026</span>
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "#94a3b8" }}>
              Countdown to the opening whistle
            </div>
          </div>

          {/* Countdown blocks */}
          <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
            {[["DD", "Days"], ["HH", "Hours"], ["MM", "Mins"], ["SS", "Secs"]].map(([v, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "18px 28px", minWidth: 110 }}>
                <span style={{ color: "white", fontSize: 36, fontWeight: 900, fontVariantNumeric: "tabular-nums" }}>{v}</span>
                <span style={{ color: "#64748b", fontSize: 14, marginTop: 4, letterSpacing: "0.06em" }}>{l}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", color: "#475569", fontSize: 20 }}>
            June 11, 2026 · Estadio Azteca, Mexico City
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 80px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}>
          <span style={{ color: "#475569", fontSize: 20, fontWeight: 600 }}>wc26time.com</span>
          <span style={{ color: "#475569", fontSize: 18 }}>USA · Canada · Mexico</span>
        </div>
      </div>
    ),
    size
  );
}
