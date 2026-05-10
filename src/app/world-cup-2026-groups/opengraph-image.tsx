import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GROUPS = ["A","B","C","D","E","F","G","H","I","J","K","L"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex",
          background: "linear-gradient(135deg, #0a0e1a 0%, #111827 100%)",
          fontFamily: "sans-serif", position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", display: "flex" }} />

        {/* Left content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 60px 60px 80px", flex: 1, gap: 24, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ color: "#ef4444", fontSize: 18, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>FIFA World Cup 2026</span>
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            All Groups
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
            12 Groups · A–L · 48 Teams
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {[["12", "Groups"], ["4", "Per group"], ["72", "Matches"]].map(([v, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 24px" }}>
                <span style={{ color: "white", fontSize: 32, fontWeight: 900 }}>{v}</span>
                <span style={{ color: "#64748b", fontSize: 14 }}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: "#475569", fontSize: 18, marginTop: 8 }}>wc26time.com</div>
        </div>

        {/* Right: groups grid */}
        <div style={{ display: "flex", flexWrap: "wrap", width: 420, padding: "60px 60px 60px 20px", gap: 10, alignContent: "center", position: "relative" }}>
          {GROUPS.map((g) => (
            <div key={g} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 88, height: 64, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}>
              <span style={{ color: "white", fontSize: 28, fontWeight: 900 }}>{g}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
