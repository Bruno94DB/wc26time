import Link from "next/link";
import type { Metadata } from "next";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata: Metadata = {
  title: "World Cup 2026 Countdown — Days Until FIFA WC 2026",
  description:
    "Live countdown to the FIFA World Cup 2026. The tournament kicks off June 11, 2026, with Mexico vs South Africa at Estadio Azteca. See exactly how long until the World Cup starts.",
  alternates: { canonical: "https://www.wc26time.com/world-cup-2026-countdown" },
  openGraph: {
    title: "World Cup 2026 Countdown — Days Until FIFA WC 2026",
    description:
      "Live countdown to the FIFA World Cup 2026. Kicks off June 11, 2026 at Estadio Azteca in Mexico City.",
    url: "https://www.wc26time.com/world-cup-2026-countdown",
  },
};

const milestones = [
  { date: "June 11, 2026", event: "Opening Match — Mexico vs South Africa", venue: "Estadio Azteca, Mexico City", isFirst: true },
  { date: "June 27, 2026", event: "Group Stage ends", venue: "All venues" },
  { date: "July 9, 2026", event: "Quarter-finals completed", venue: "Various venues" },
  { date: "July 14, 2026", event: "Semi-finals completed", venue: "Various venues" },
  { date: "July 19, 2026", event: "World Cup Final", venue: "MetLife Stadium, New Jersey", isFinal: true },
];

const faqs = [
  {
    q: "When does the 2026 World Cup start?",
    a: "The FIFA World Cup 2026 kicks off on June 11, 2026. The opening match is Mexico vs South Africa at Estadio Azteca in Mexico City, starting at 19:00 UTC (15:00 ET / 21:00 CEST).",
  },
  {
    q: "What is the opening match of the 2026 World Cup?",
    a: "Mexico vs South Africa opens the 2026 FIFA World Cup on June 11, 2026 at Estadio Azteca in Mexico City — one of the most iconic football stadiums in the world with a capacity of 87,523.",
  },
  {
    q: "When is the 2026 World Cup Final?",
    a: "The World Cup Final is on July 19, 2026 at MetLife Stadium in East Rutherford, New Jersey, USA. The stadium holds 82,500 fans.",
  },
  {
    q: "How long is the 2026 World Cup?",
    a: "The 2026 FIFA World Cup runs for 39 days, from the opening match on June 11 to the Final on July 19, 2026.",
  },
];

// Tournament opening kickoff (UTC)
const OPENING_KICKOFF = "2026-06-11T19:00:00Z";

export default function WorldCup2026CountdownPage() {
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
            World Cup 2026 Countdown
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            The FIFA World Cup 2026 kicks off on <strong className="text-white">June 11, 2026</strong>.
            Here&apos;s how long until the opening whistle.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Countdown */}
        <section>
          <div className="bg-navy-800/60 border border-white/10 rounded-2xl p-8 sm:p-12 flex flex-col items-center gap-6 text-center">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
              Time until kick-off
            </p>
            <CountdownTimer kickoff={OPENING_KICKOFF} size="lg" />
            <div className="space-y-1">
              <p className="text-white font-bold text-lg">Mexico vs South Africa</p>
              <p className="text-slate-500 text-sm">June 11, 2026 · 19:00 UTC · Estadio Azteca</p>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Key Dates</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 pb-6 last:pb-0">
                  <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    m.isFirst || m.isFinal
                      ? "bg-brand-red border-brand-red"
                      : "bg-navy-900 border-white/20"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${m.isFirst || m.isFinal ? "bg-white" : "bg-white/40"}`} />
                  </div>
                  <div className="pt-1 pb-2">
                    <p className={`font-bold text-sm ${m.isFirst || m.isFinal ? "text-brand-red" : "text-white"}`}>
                      {m.date}
                    </p>
                    <p className="text-white font-medium text-sm">{m.event}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{m.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section>
          <h2 className="text-xl font-bold text-white mb-5">Tournament at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "48", label: "Nations" },
              { value: "12", label: "Groups" },
              { value: "80", label: "Matches" },
              { value: "16", label: "Venues" },
            ].map((s) => (
              <div key={s.label} className="bg-navy-800/40 border border-white/5 rounded-xl p-4 text-center">
                <p className="text-white font-black text-3xl">{s.value}</p>
                <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
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
          <h2 className="text-2xl font-black text-white">See the Full Match Schedule</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            All 80 fixtures with kickoff times in your local timezone. Filter by group, team or date.
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
