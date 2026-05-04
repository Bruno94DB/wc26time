import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { matches, getMatchBySlug, roundLabels } from "@/data/matches";
import { getTeamById, getTeamsByGroup } from "@/data/teams";
import { getStadiumById } from "@/data/stadiums";
import MatchDetailClient from "./MatchDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const match = getMatchBySlug(slug);
  if (!match) return { title: "Match Not Found" };

  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);
  const stadium = getStadiumById(match.stadiumId);

  const title = `${home?.name ?? "TBD"} vs ${away?.name ?? "TBD"}`;
  return {
    title,
    description: `World Cup 2026: ${title} at ${stadium?.name ?? ""}, ${stadium?.city ?? ""}. ${match.group ? `Group ${match.group}.` : roundLabels[match.round] + "."}`,
    openGraph: {
      title: `${title} · WC 2026`,
      description: `World Cup 2026 match details and local kickoff time.`,
    },
  };
}

export function generateStaticParams() {
  return matches.map((m) => ({ slug: m.slug }));
}

export default async function MatchDetailPage({ params }: Props) {
  const { slug } = await params;
  const match = getMatchBySlug(slug);

  if (!match) notFound();

  const homeTeam = getTeamById(match.homeTeamId);
  const awayTeam = getTeamById(match.awayTeamId);
  const stadium = getStadiumById(match.stadiumId);

  if (!homeTeam || !awayTeam || !stadium) notFound();

  const groupTeams = match.group ? getTeamsByGroup(match.group) : [];
  const groupMatchesForStandings = match.group
    ? matches.filter((m) => m.group === match.group)
    : [];

  return (
    <MatchDetailClient
      match={match}
      homeTeam={homeTeam}
      awayTeam={awayTeam}
      stadium={stadium}
      groupTeams={groupTeams}
      groupMatches={groupMatchesForStandings}
    />
  );
}
