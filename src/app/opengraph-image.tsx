import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0e1a 0%, #111827 60%, #1a0a0a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(220,38,38,0.15)",
              border: "1px solid rgba(220,38,38,0.3)",
              borderRadius: "999px",
              padding: "8px 20px",
              color: "#f87171",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            <span>⚽</span>
            <span>Jun 11 – Jul 19, 2026</span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "white" }}>World Cup</span>
            <span style={{ color: "#ef4444" }}>2026</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#94a3b8",
              fontWeight: 400,
            }}
          >
            Match Schedule &amp; Local Kickoff Times
          </div>

          {/* Domain */}
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#475569",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            wc26time.com
          </div>
        </div>

        {/* Flags */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "16px",
            fontSize: "40px",
          }}
        >
          <span>🇺🇸</span>
          <span>🇨🇦</span>
          <span>🇲🇽</span>
        </div>
      </div>
    ),
    size
  );
}
