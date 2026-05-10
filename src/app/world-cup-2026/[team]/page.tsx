import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { teams, getTeamById, getTeamsByGroup } from "@/data/teams";
import { matches } from "@/data/matches";
import { getStadiumById } from "@/data/stadiums";
import { getFlagUrl } from "@/lib/utils";
import TeamFixturesClient from "./TeamFixturesClient";

interface Props {
  params: Promise<{ team: string }>;
}

export function generateStaticParams() {
  return teams.map((t) => ({ team: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { team: teamId } = await params;
  const team = getTeamById(teamId);
  if (!team) return { title: "Team Not Found" };

  const groupOpponents = getTeamsByGroup(team.group)
    .filter((t) => t.id !== teamId)
    .sort((a, b) => a.fifaRanking - b.fifaRanking)
    .map((t) => t.name)
    .join(", ");

  return {
    title: `${team.name} World Cup 2026 Schedule — Group ${team.group} Fixtures`,
    description: `${team.name}'s complete FIFA World Cup 2026 schedule. ${team.name} (FIFA #${team.fifaRanking}) is in Group ${team.group} with ${groupOpponents}. See all fixtures, venues and kickoff times.`,
    alternates: { canonical: `https://www.wc26time.com/world-cup-2026/${teamId}` },
    openGraph: {
      title: `${team.name} World Cup 2026 Schedule — Group ${team.group}`,
      description: `${team.name} Group ${team.group} fixtures at the 2026 FIFA World Cup. FIFA ranking #${team.fifaRanking}.`,
      url: `https://www.wc26time.com/world-cup-2026/${teamId}`,
    },
  };
}


export default async function TeamWorldCupPage({ params }: Props) {
  const { team: teamId } = await params;
  const team = getTeamById(teamId);
  if (!team) notFound();

  const teamMatches = matches
    .filter((m) => m.round === "group" && (m.homeTeamId === teamId || m.awayTeamId === teamId))
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime());

  const groupTeams = getTeamsByGroup(team.group).sort((a, b) => a.fifaRanking - b.fifaRanking);

  const opponents = teamMatches.map((m) => {
    const opponentId = m.homeTeamId === teamId ? m.awayTeamId : m.homeTeamId;
    return getTeamById(opponentId)!;
  });

  const venues = teamMatches.map((m) => getStadiumById(m.stadiumId)!);

  const fixtures = teamMatches.map((match, i) => ({
    match,
    home: getTeamById(match.homeTeamId)!,
    away: getTeamById(match.awayTeamId)!,
    stadium: getStadiumById(match.stadiumId)!,
    opponent: match.homeTeamId === teamId ? getTeamById(match.awayTeamId)! : getTeamById(match.homeTeamId)!,
    matchday: i + 1,
  }));

  const faqs = [
    {
      q: `Is ${team.name} in the 2026 World Cup?`,
      a: `Yes. ${team.name} qualified for the 2026 FIFA World Cup and has been drawn into Group ${team.group} alongside ${opponents.map((o) => o.name).join(", ")}.`,
    },
    {
      q: `When does ${team.name} play in the 2026 World Cup?`,
      a: `${team.name} plays three group stage matches: vs ${opponents[0]?.name} on ${new Date(teamMatches[0]?.kickoff).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "long", month: "long", day: "numeric", year: "numeric" })}, vs ${opponents[1]?.name} on ${new Date(teamMatches[1]?.kickoff).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "long", month: "long", day: "numeric", year: "numeric" })}, and vs ${opponents[2]?.name} on ${new Date(teamMatches[2]?.kickoff).toLocaleDateString("en-US", { timeZone: "UTC", weekday: "long", month: "long", day: "numeric", year: "numeric" })}.`,
    },
    {
      q: `What group is ${team.name} in at the 2026 World Cup?`,
      a: `${team.name} is in Group ${team.group} along with ${groupTeams.filter((t) => t.id !== teamId).map((t) => `${t.name} (FIFA #${t.fifaRanking})`).join(", ")}.`,
    },
    {
      q: `Where will ${team.name} play their World Cup 2026 matches?`,
      a: venues.map((v, i) => `Matchday ${i + 1}: ${v.name} in ${v.city}, ${v.state}`).join(". ") + ".",
    },
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Header */}
      <header className="bg-navy-900/60 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-3">
            FIFA World Cup 2026 · Group {team.group}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-10 rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10 flex-shrink-0">
              <Image src={getFlagUrl(team.countryCode, 160)} alt={team.name} fill className="object-cover" sizes="56px" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {team.name} World Cup 2026 Schedule
            </h1>
          </div>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {team.name} <span className="text-slate-500">(FIFA #{team.fifaRanking})</span> compete in{" "}
            <strong className="text-white">Group {team.group}</strong> at the 2026 FIFA World Cup,
            facing {opponents.map((o) => o.name).join(", ")}.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Fixtures */}
        <TeamFixturesClient fixtures={fixtures} teamId={teamId} teamName={team.name} />

        {/* Group table */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5">Group {team.group}</h2>
          <div className="bg-navy-800/40 border border-white/5 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-500 text-[11px] uppercase tracking-wider border-b border-white/5 bg-navy-900/40">
                    <th className="text-left px-4 py-3 w-6">#</th>
                    <th className="text-left px-4 py-3">Team</th>
                    <th className="text-center px-3 py-3">FIFA</th>
                    <th className="text-center px-3 py-3">P</th>
                    <th className="text-center px-3 py-3">W</th>
                    <th className="text-center px-3 py-3">D</th>
                    <th className="text-center px-3 py-3">L</th>
                    <th className="text-center px-3 py-3 text-slate-400 font-bold">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {groupTeams.map((t, i) => (
                    <tr key={t.id} className={t.id === teamId ? "bg-brand-red/5" : "hover:bg-white/3"}>
                      <td className="px-4 py-3 text-slate-600 text-xs font-medium">{i + 1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="relative flex-shrink-0 rounded overflow-hidden" style={{ width: 28, height: 20 }}>
                            <Image src={getFlagUrl(t.countryCode, 40)} alt={t.name} fill className="object-cover" sizes="28px" />
                          </div>
                          <Link href={`/world-cup-2026/${t.id}`} className={`font-medium text-sm hover:text-brand-red transition-colors ${t.id === teamId ? "text-white font-bold" : "text-white"}`}>
                            {t.name}
                          </Link>
                          {t.id === teamId && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 font-semibold">
                              {t.code}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center text-slate-500 text-xs">#{t.fifaRanking}</td>
                      <td className="px-3 py-3 text-center text-slate-500">0</td>
                      <td className="px-3 py-3 text-center text-slate-500">0</td>
                      <td className="px-3 py-3 text-center text-slate-500">0</td>
                      <td className="px-3 py-3 text-center text-slate-500">0</td>
                      <td className="px-3 py-3 text-center text-white font-bold">0</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-navy-800/40 border border-white/5 rounded-xl p-5">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-navy-800 to-navy-700 border border-white/10 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">
            See {team.name}&apos;s Matches in Your Timezone
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            All kickoff times automatically converted to your local timezone.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-red/20 hover:-translate-y-0.5"
          >
            Open Schedule
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
