import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Cup 2026 Schedule — All Fixtures & Match Dates",
  description:
    "The complete FIFA World Cup 2026 match schedule. 104 fixtures across 16 stadiums in the USA, Canada and Mexico. Group stage, knockout rounds and the Final on July 19, 2026.",
  alternates: { canonical: "https://www.wc26time.com/world-cup-2026-schedule" },
  openGraph: {
    title: "World Cup 2026 Schedule — All Fixtures & Match Dates",
    description:
      "The complete FIFA World Cup 2026 match schedule. 104 fixtures across 16 stadiums in the USA, Canada and Mexico.",
    url: "https://www.wc26time.com/world-cup-2026-schedule",
  },
};

const phases = [
  { phase: "Group Stage", dates: "June 11 – June 27, 2026", matches: 72, highlight: true },
  { phase: "Round of 32", dates: "June 28 – July 2, 2026", matches: 16, highlight: false },
  { phase: "Round of 16", dates: "July 3 – July 6, 2026", matches: 8, highlight: false },
  { phase: "Quarter-finals", dates: "July 8 – 9, 2026", matches: 4, highlight: false },
  { phase: "Semi-finals", dates: "July 13 – 14, 2026", matches: 2, highlight: false },
  { phase: "Third-place play-off", dates: "July 17, 2026", matches: 1, highlight: false },
  { phase: "Final", dates: "July 19, 2026", matches: 1, highlight: true },
];

const keyFixtures = [
  {
    label: "Opening Match",
    home: "Mexico",
    away: "South Africa",
    date: "June 11, 2026",
    time: "19:00 UTC",
    venue: "Estadio Azteca, Mexico City",
    slug: "mexico-vs-south-africa",
  },
  {
    label: "Group L",
    home: "England",
    away: "Croatia",
    date: "June 17, 2026",
    time: "20:00 UTC",
    venue: "AT&T Stadium, Arlington",
    slug: "england-vs-croatia",
  },
  {
    label: "Group I",
    home: "France",
    away: "Senegal",
    date: "June 20, 2026",
    time: "20:00 UTC",
    venue: "Levi's Stadium, Santa Clara",
    slug: "france-vs-senegal",
  },
  {
    label: "The Final",
    home: "TBD",
    away: "TBD",
    date: "July 19, 2026",
    time: "20:00 UTC",
    venue: "MetLife Stadium, New Jersey",
    slug: null,
  },
];

const faqs = [
  {
    q: "When does the FIFA World Cup 2026 start?",
    a: "The 2026 FIFA World Cup kicks off on June 11, 2026, with the opening match Mexico vs South Africa at Estadio Azteca in Mexico City at 19:00 UTC.",
  },
  {
    q: "How many matches are in the 2026 World Cup?",
    a: "The 2026 World Cup features 104 matches in total — 72 group stage matches across 12 groups, followed by a Round of 32 (16 matches), Round of 16 (8 matches), Quarter-finals (4), Semi-finals (2), a Third-place play-off, and the Final.",
  },
  {
    q: "Where is the 2026 World Cup being played?",
    a: "The 2026 World Cup is hosted across 16 stadiums in three countries: 11 venues in the United States, 2 in Canada (Vancouver and Toronto), and 3 in Mexico (Mexico City, Monterrey, Guadalajara).",
  },
  {
    q: "When is the 2026 World Cup Final?",
    a: "The World Cup Final takes place on July 19, 2026, at MetLife Stadium in East Rutherford, New Jersey, USA — the largest stadium in the tournament with a capacity of 82,500.",
  },
  {
    q: "How many teams are in the 2026 World Cup?",
    a: "48 national teams compete in the 2026 FIFA World Cup, divided into 12 groups of 4. This is an expansion from the 32-team format used in previous tournaments.",
  },
];

export default function WorldCup2026SchedulePage() {
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
            FIFA World Cup 2026
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            World Cup 2026 Schedule
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            The complete FIFA World Cup 2026 fixture list — 104 matches across 16 stadiums in
            the United States, Canada and Mexico, running from June 11 to July 19, 2026.
          </p>
        </div>
      </header>

      {/* Stats bar */}
      <div className="bg-navy-900/30 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x divide-white/5">
            {[
              { value: "48", label: "Teams" },
              { value: "80", label: "Matches" },
              { value: "16", label: "Venues" },
              { value: "39", label: "Days" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center sm:px-6 gap-0.5">
                <span className="text-white font-black text-2xl">{s.value}</span>
                <span className="text-slate-500 text-xs uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Tournament Phases */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5">Tournament Phases</h2>
          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-white/5 bg-navy-900/40">
                  <th className="text-left px-4 py-3">Phase</th>
                  <th className="text-left px-4 py-3">Dates</th>
                  <th className="text-center px-4 py-3">Matches</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {phases.map((p) => (
                  <tr key={p.phase} className={p.highlight ? "bg-brand-red/5" : "hover:bg-white/3"}>
                    <td className={`px-4 py-3 font-semibold ${p.highlight ? "text-brand-red" : "text-white"}`}>
                      {p.phase}
                    </td>
                    <td className="px-4 py-3 text-slate-400">{p.dates}</td>
                    <td className="px-4 py-3 text-center text-slate-400">{p.matches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Fixtures */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5">Key Fixtures</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {keyFixtures.map((f) => (
              <div
                key={f.slug ?? f.label}
                className="bg-navy-800/40 border border-white/5 rounded-xl p-5 space-y-3"
              >
                <span className="inline-block text-xs font-semibold text-brand-red uppercase tracking-wider">
                  {f.label}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-white font-bold text-sm sm:text-base">{f.home}</span>
                  <span className="text-slate-600 text-xs font-bold px-2">vs</span>
                  <span className="text-white font-bold text-sm sm:text-base">{f.away}</span>
                </div>
                <div className="space-y-1 text-xs text-slate-500">
                  <p>{f.date} · {f.time}</p>
                  <p>{f.venue}</p>
                </div>
                {f.slug && (
                  <Link
                    href={`/matches/${f.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-brand-red hover:text-red-400 font-medium transition-colors"
                  >
                    Match details →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
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
          <h2 className="text-2xl font-black text-white">View the Full Interactive Schedule</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            All 104 matches with kickoff times automatically converted to your local timezone.
            Filter by group, date, or team.
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
