import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

        {/* Flag panel */}
        <div style={{ display: "flex", width: 420, position: "relative", overflow: "hidden" }}>
          <img
            src="https://flagcdn.com/w640/hr.png"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #111827 100%)", display: "flex" }} />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "60px 80px 60px 40px", gap: 20, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ color: "#ef4444", fontSize: 16, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Group L · FIFA #11</span>
          </div>
          <div style={{ display: "flex", fontSize: 62, fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Croatia
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
            World Cup 2026 Schedule
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
            {[
              { match: "vs England", date: "June 17, 2026" },
              { match: "vs Panama", date: "June 23, 2026" },
              { match: "vs Ghana", date: "June 27, 2026" },
            ].map((m) => (
              <div key={m.match} style={{ display: "flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 20px" }}>
                <span style={{ color: "white", fontSize: 18, fontWeight: 700 }}>{m.match}</span>
                <span style={{ color: "#64748b", fontSize: 16 }}>·</span>
                <span style={{ color: "#94a3b8", fontSize: 16 }}>{m.date}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: "#475569", fontSize: 18, marginTop: 8 }}>wc26time.com</div>
        </div>
      </div>
    ),
    size
  );
}
