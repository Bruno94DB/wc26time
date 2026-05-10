import { ImageResponse } from "next/og";
import { getTeamById, getTeamsByGroup } from "@/data/teams";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ team: string }>;
}

export default async function Image({ params }: Props) {
  const { team: teamId } = await params;
  const team = getTeamById(teamId);

  if (!team) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a0e1a" }} />,
      size
    );
  }

  const opponents = getTeamsByGroup(team.group)
    .filter((t) => t.id !== teamId)
    .sort((a, b) => a.fifaRanking - b.fifaRanking);

  const flagUrl = `https://flagcdn.com/w640/${team.countryCode.toLowerCase()}.png`;

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
        <div style={{ display: "flex", width: 400, position: "relative", overflow: "hidden" }}>
          <img
            src={flagUrl}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
          />
          {/* Fade to dark */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, #111827 100%)", display: "flex" }} />
          {/* Bottom fade */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,14,26,0.5) 0%, transparent 40%)", display: "flex" }} />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "50px 70px 50px 40px", gap: 18, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ color: "#ef4444", fontSize: 16, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Group {team.group} · FIFA #{team.fifaRanking}
            </span>
          </div>

          <div style={{ display: "flex", fontSize: 62, fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {team.name}
          </div>

          <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
            World Cup 2026 Schedule
          </div>

          {/* Opponents */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            <span style={{ color: "#475569", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Group opponents</span>
            <div style={{ display: "flex", gap: 10 }}>
              {opponents.map((opp) => (
                <div key={opp.id} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 16px" }}>
                  <img
                    src={`https://flagcdn.com/w80/${opp.countryCode.toLowerCase()}.png`}
                    style={{ width: 32, height: 22, objectFit: "cover", borderRadius: 3 }}
                  />
                  <span style={{ color: "white", fontSize: 16, fontWeight: 600 }}>{opp.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", color: "#475569", fontSize: 18, marginTop: 4 }}>wc26time.com</div>
        </div>
      </div>
    ),
    size
  );
}
