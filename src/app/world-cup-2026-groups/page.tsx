import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { teams, groups } from "@/data/teams";
import { getFlagUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "World Cup 2026 Groups — All 12 Groups & Teams",
  description:
    "All 12 FIFA World Cup 2026 groups (A–L) with team rosters, FIFA rankings and group compositions. 48 nations across 12 groups of 4.",
  alternates: { canonical: "https://www.wc26time.com/world-cup-2026-groups" },
  openGraph: {
    title: "World Cup 2026 Groups — All 12 Groups & Teams",
    description: "All 12 FIFA World Cup 2026 groups (A–L) with team rosters and FIFA rankings.",
    url: "https://www.wc26time.com/world-cup-2026-groups",
  },
};

const faqs = [
  {
    q: "How many groups are in the 2026 World Cup?",
    a: "The 2026 FIFA World Cup has 12 groups (A through L), each containing 4 teams — a total of 48 nations.",
  },
  {
    q: "How does the 2026 World Cup group stage work?",
    a: "Each team plays 3 group stage matches. The top 2 teams from each group advance to the Round of 32. Additionally, the 8 best third-placed teams also qualify, giving 32 teams in the knockout round.",
  },
  {
    q: "How many group stage matches are there in the 2026 World Cup?",
    a: "There are 72 group stage matches in total — 6 per group across 12 groups.",
  },
  {
    q: "Which teams are in the toughest group at World Cup 2026?",
    a: "Group H features Spain (FIFA #2) and Uruguay (FIFA #17), while Group I contains France (FIFA #1) and Senegal (FIFA #14). Group J has Argentina (FIFA #3) — making these among the most competitive groups.",
  },
  {
    q: "How many teams advance from the group stage?",
    a: "32 teams advance: the top 2 finishers from each of the 12 groups (24 teams), plus the 8 best third-placed teams from across all groups.",
  },
];

export default function WorldCup2026GroupsPage() {
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-3">
            FIFA World Cup 2026
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            World Cup 2026 Groups
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            48 nations split across 12 groups (A–L), each with 4 teams. The top 2 from every group
            plus the 8 best third-placed teams advance to the Round of 32.
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-navy-900/30 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start text-center">
            {[
              { value: "12", label: "Groups" },
              { value: "4", label: "Teams per group" },
              { value: "6", label: "Matches per group" },
              { value: "3", label: "Teams advance per group*" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5 min-w-[90px]">
                <span className="text-white font-black text-2xl">{s.value}</span>
                <span className="text-slate-500 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-3">* Top 2 guaranteed + 8 best third-placed qualify</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Groups grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {groups.map((group) => {
              const groupTeams = teams
                .filter((t) => t.group === group)
                .sort((a, b) => a.fifaRanking - b.fifaRanking);
              return (
                <div
                  key={group}
                  className="bg-navy-800/40 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors"
                >
                  <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-white font-bold text-sm">Group {group}</h2>
                    <Link
                      href={`/schedule?group=${group}`}
                      className="text-xs text-brand-red hover:text-red-400 transition-colors"
                    >
                      Fixtures →
                    </Link>
                  </div>
                  <div className="divide-y divide-white/5">
                    {groupTeams.map((team) => (
                      <div key={team.id} className="flex items-center gap-3 px-4 py-2.5">
                        <div
                          className="relative flex-shrink-0 rounded overflow-hidden"
                          style={{ width: 32, height: 22 }}
                        >
                          <Image
                            src={getFlagUrl(team.countryCode, 80)}
                            alt={team.name}
                            fill
                            className="object-cover"
                            sizes="32px"
                          />
                        </div>
                        <span className="text-white text-sm font-medium flex-1">{team.name}</span>
                        <span className="text-slate-600 text-xs">#{team.fifaRanking}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Format explanation */}
        <section className="bg-navy-800/40 border border-white/5 rounded-xl p-6 space-y-3">
          <h2 className="text-white font-bold text-lg">How the Group Stage Works</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-white font-semibold">Round Robin</p>
              <p className="text-slate-400">Each team plays all 3 other teams in their group — 6 matches per group, 72 total.</p>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold">Qualification</p>
              <p className="text-slate-400">Top 2 from each group qualify automatically. The 8 best third-placed teams also advance.</p>
            </div>
            <div className="space-y-1">
              <p className="text-white font-semibold">Tiebreakers</p>
              <p className="text-slate-400">Points → Goal difference → Goals scored → Head-to-head → Fair play → Drawing of lots.</p>
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
          <h2 className="text-2xl font-black text-white">View Group Fixtures</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            See all match times converted to your local timezone. Filter by group, date or team.
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
