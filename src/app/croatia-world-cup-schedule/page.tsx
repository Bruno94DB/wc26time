import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { matches } from "@/data/matches";
import { getTeamById, getTeamsByGroup } from "@/data/teams";
import { getStadiumById } from "@/data/stadiums";
import { getFlagUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Croatia World Cup 2026 Schedule — All Fixtures & Group L",
  description:
    "Croatia's complete World Cup 2026 schedule. Croatia is in Group L with England, Ghana and Panama. See all kickoff dates, venues and match details.",
  alternates: { canonical: "https://www.wc26time.com/croatia-world-cup-schedule" },
  openGraph: {
    title: "Croatia World Cup 2026 Schedule — All Fixtures & Group L",
    description:
      "Croatia is in Group L at World Cup 2026. Fixtures vs England (Jun 17), Panama (Jun 23) and Ghana (Jun 27).",
    url: "https://www.wc26time.com/croatia-world-cup-schedule",
  },
};

const faqs = [
  {
    q: "Is Croatia in the 2026 World Cup?",
    a: "Yes. Croatia qualified for the 2026 FIFA World Cup and has been drawn into Group L alongside England, Ghana and Panama.",
  },
  {
    q: "When does Croatia play in the 2026 World Cup?",
    a: "Croatia plays three group stage matches: vs England on June 17, vs Panama on June 23, and vs Ghana on June 27, 2026.",
  },
  {
    q: "What group is Croatia in at the 2026 World Cup?",
    a: "Croatia is in Group L along with England (FIFA #4), Ghana (FIFA #74) and Panama (FIFA #33).",
  },
  {
    q: "Where will Croatia play their World Cup 2026 matches?",
    a: "Croatia's group matches are at AT&T Stadium in Arlington, Texas (vs England), Gillette Stadium in Foxborough, Massachusetts (vs Panama), and Lincoln Financial Field in Philadelphia, Pennsylvania (vs Ghana).",
  },
  {
    q: "What are Croatia's chances at the 2026 World Cup?",
    a: "Croatia (FIFA #11) are one of the stronger teams in Group L. Their toughest match is against England (FIFA #4), while matches against Panama (#33) and Ghana (#74) present better opportunities to earn points.",
  },
];

function formatUTCDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatUTCTime(isoString: string): string {
  return new Date(isoString).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }) + " UTC";
}

function matchdayLabel(matchday: number): string {
  return `Matchday ${matchday}`;
}

export default function CroatiaWorldCupSchedulePage() {
  const croatiaMatches = matches
    .filter(
      (m) =>
        m.round === "group" &&
        (m.homeTeamId === "croatia" || m.awayTeamId === "croatia")
    )
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime());

  const groupLTeams = getTeamsByGroup("L").sort((a, b) => a.fifaRanking - b.fifaRanking);
  const croatia = getTeamById("croatia")!;

  return (
    <div className="min-h-screen">
      {/* Schema */}
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
            FIFA World Cup 2026 · Group L
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-10 rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10 flex-shrink-0">
              <Image
                src={getFlagUrl("hr", 160)}
                alt="Croatia"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Croatia World Cup 2026 Schedule
            </h1>
          </div>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Croatia (FIFA #{croatia.fifaRanking}) compete in <strong className="text-white">Group L</strong> at
            the 2026 FIFA World Cup, facing England, Panama and Ghana across three stadiums in the United States.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Croatia Fixtures */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5">Croatia Fixtures</h2>
          <div className="space-y-4">
            {croatiaMatches.map((match) => {
              const home = getTeamById(match.homeTeamId)!;
              const away = getTeamById(match.awayTeamId)!;
              const stadium = getStadiumById(match.stadiumId)!;
              const isCroatiaHome = match.homeTeamId === "croatia";
              const opponent = isCroatiaHome ? away : home;

              return (
                <Link
                  key={match.id}
                  href={`/matches/${match.slug}`}
                  className="group block bg-navy-800/40 border border-white/5 rounded-xl p-5 hover:border-white/15 hover:bg-navy-800/70 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                    {/* Teams */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-10 h-7 rounded-md overflow-hidden shadow flex-shrink-0">
                          <Image
                            src={getFlagUrl(home.countryCode, 80)}
                            alt={home.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <span className={`font-bold text-sm ${home.id === "croatia" ? "text-white" : "text-slate-300"}`}>
                          {home.name}
                        </span>
                      </div>
                      <span className="text-slate-600 text-xs font-bold">vs</span>
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-10 h-7 rounded-md overflow-hidden shadow flex-shrink-0">
                          <Image
                            src={getFlagUrl(away.countryCode, 80)}
                            alt={away.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <span className={`font-bold text-sm ${away.id === "croatia" ? "text-white" : "text-slate-300"}`}>
                          {away.name}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col gap-1 sm:items-end text-xs text-slate-500">
                      <span className="text-brand-red font-semibold text-xs">
                        {matchdayLabel(match.matchday!)} · vs {opponent.name} (#{opponent.fifaRanking})
                      </span>
                      <span>{formatUTCDate(match.kickoff)}</span>
                      <span>{formatUTCTime(match.kickoff)}</span>
                      <span>{stadium.name}, {stadium.city}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="text-slate-600 text-xs mt-3">
            All times shown in UTC. Use the{" "}
            <Link href="/schedule" className="text-brand-red hover:text-red-400">full schedule</Link>
            {" "}for kickoff times in your local timezone.
          </p>
        </section>

        {/* Group L Standings */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5">Group L</h2>
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
                  {groupLTeams.map((team, i) => (
                    <tr
                      key={team.id}
                      className={`transition-colors ${team.id === "croatia" ? "bg-brand-red/5" : "hover:bg-white/3"}`}
                    >
                      <td className="px-4 py-3 text-slate-600 text-xs font-medium">{i + 1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="relative flex-shrink-0 rounded overflow-hidden"
                            style={{ width: 28, height: 20 }}
                          >
                            <Image
                              src={getFlagUrl(team.countryCode, 40)}
                              alt={team.name}
                              fill
                              className="object-cover"
                              sizes="28px"
                            />
                          </div>
                          <span className={`font-medium text-sm ${team.id === "croatia" ? "text-white font-bold" : "text-white"}`}>
                            {team.name}
                          </span>
                          {team.id === "croatia" && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 font-semibold">
                              CRO
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center text-slate-500 text-xs">#{team.fifaRanking}</td>
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
          <h2 className="text-2xl font-black text-white">See Croatia&apos;s Matches in Your Timezone</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            All kickoff times automatically converted to your local timezone. Never miss a Croatia match.
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
