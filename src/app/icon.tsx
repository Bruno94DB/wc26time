import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e1a",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#dc2626",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 11,
              fontWeight: 900,
              fontFamily: "sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            WC
          </span>
        </div>
      </div>
    ),
    size
  );
}
