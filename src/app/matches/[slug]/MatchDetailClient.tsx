"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Match, roundLabels } from "@/data/matches";
import { Team, groupColors } from "@/data/teams";
import { Stadium } from "@/data/stadiums";
import { getUserTimezone, getFlagUrl, formatKickoff, formatMatchDate, getTimezoneOffset, getCountryFromTimezone, cn } from "@/lib/utils";
import CountdownTimer from "@/components/CountdownTimer";
import TimezoneSelector from "@/components/TimezoneSelector";

interface Props {
  match: Match;
  homeTeam: Team;
  awayTeam: Team;
  stadium: Stadium;
  groupTeams: Team[];
  groupMatches: Match[];
}

type Tab = "overview" | "lineups" | "standings";

export default function MatchDetailClient({
  match,
  homeTeam,
  awayTeam,
  stadium,
  groupTeams,
  groupMatches: _groupMatches,
}: Props) {
  const [timezone, setTimezone] = useState("UTC");
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimezone(getUserTimezone());
    setMounted(true);
  }, []);

  const groupColor = match.group ? groupColors[match.group] : "";
  const roundLabel = roundLabels[match.round];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "lineups", label: "Lineups" },
    { id: "standings", label: match.group ? `Group ${match.group}` : "Standings" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-navy-800 to-navy-950 border-b border-white/5">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
            <span>/</span>
            <span className="text-slate-400">{homeTeam.code} vs {awayTeam.code}</span>
          </div>

          {/* Round + group */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-slate-400 text-sm">{roundLabel}</span>
            {match.group && (
              <>
                <span className="text-slate-600">·</span>
                <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border", groupColor)}>
                  Group {match.group}
                </span>
              </>
            )}
            {match.matchday && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-slate-500 text-xs">Matchday {match.matchday}</span>
              </>
            )}
          </div>

          {/* Teams */}
          <div className="flex items-center justify-between gap-6 sm:gap-10">
            {/* Home team */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="relative w-24 h-16 sm:w-32 sm:h-22 rounded-xl overflow-hidden shadow-2xl ring-2 ring-white/10">
                <Image
                  src={getFlagUrl(homeTeam.countryCode, 320)}
                  alt={homeTeam.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 128px"
                  priority
                />
              </div>
              <div className="text-center">
                <h2 className="text-white font-black text-xl sm:text-2xl">{homeTeam.name}</h2>
                <p className="text-slate-500 text-sm">#{homeTeam.fifaRanking} FIFA · {homeTeam.continent}</p>
              </div>
            </div>

            {/* Center */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-slate-600 text-sm font-medium uppercase tracking-widest">vs</div>
              <div className="text-center">
                <p className="text-white font-black text-3xl sm:text-4xl tabular-nums">
                  {mounted ? formatKickoff(match.kickoff, timezone, "time") : "--:--"}
                </p>
                <p className="text-slate-500 text-xs mt-1">Local kickoff</p>
                {mounted && (
                  <p className="text-slate-600 text-[10px] mt-0.5">
                    {getTimezoneOffset(timezone)} · {getCountryFromTimezone(timezone)}
                  </p>
                )}
              </div>
            </div>

            {/* Away team */}
            <div className="flex flex-col items-center gap-4 flex-1">
              <div className="relative w-24 h-16 sm:w-32 rounded-xl overflow-hidden shadow-2xl ring-2 ring-white/10" style={{ height: mounted ? undefined : "64px" }}>
                <Image
                  src={getFlagUrl(awayTeam.countryCode, 320)}
                  alt={awayTeam.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 128px"
                  priority
                />
              </div>
              <div className="text-center">
                <h2 className="text-white font-black text-xl sm:text-2xl">{awayTeam.name}</h2>
                <p className="text-slate-500 text-sm">#{awayTeam.fifaRanking} FIFA · {awayTeam.continent}</p>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Kickoff Countdown</p>
            <CountdownTimer kickoff={match.kickoff} size="lg" />
          </div>

          {/* Date & timezone selector */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <p className="text-slate-400 text-sm">
              {mounted ? formatMatchDate(match.kickoff, timezone) : ""}
            </p>
            <div className="w-full sm:w-64">
              <TimezoneSelector value={timezone} onChange={setTimezone} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-navy-950/95 backdrop-blur border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 sm:px-6 py-4 text-sm font-medium border-b-2 transition-all",
                  activeTab === tab.id
                    ? "text-white border-brand-red"
                    : "text-slate-500 border-transparent hover:text-slate-300"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Match info card */}
            <div className="bg-navy-800/40 border border-white/5 rounded-2xl divide-y divide-white/5">
              <h3 className="px-6 py-4 text-white font-semibold">Match Information</h3>

              {[
                { label: "Date", value: mounted ? formatMatchDate(match.kickoff, timezone) : "" },
                { label: "Kickoff", value: mounted ? `${formatKickoff(match.kickoff, timezone, "time")} (${getTimezoneOffset(timezone)} · ${getCountryFromTimezone(timezone)})` : "--:--" },
                { label: "Round", value: roundLabel },
                match.group ? { label: "Group", value: `Group ${match.group}` } : null,
                match.matchday ? { label: "Matchday", value: `${match.matchday} of 3` } : null,
                { label: "Match #", value: `#${match.matchNumber}` },
              ]
                .filter(Boolean)
                .map((item) => (
                  <div key={item!.label} className="flex items-center justify-between px-6 py-3.5">
                    <span className="text-slate-500 text-sm">{item!.label}</span>
                    <span className="text-white text-sm font-medium">{item!.value}</span>
                  </div>
                ))}
            </div>

            {/* Stadium card */}
            <div className="bg-navy-800/40 border border-white/5 rounded-2xl overflow-hidden">
              <div className={`relative h-48 sm:h-64 bg-gradient-to-r ${stadium.imageGradient}`}>
                {stadium.imageUrl && (
                  <Image
                    src={stadium.imageUrl}
                    alt={stadium.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2">
                  <div className="w-6 h-4 relative rounded overflow-hidden">
                    <Image
                      src={getFlagUrl(stadium.countryCode, 40)}
                      alt={stadium.country}
                      fill
                      className="object-cover"
                      sizes="24px"
                    />
                  </div>
                  <span className="text-white/80 text-xs font-medium">{stadium.country}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-white font-bold text-xl">{stadium.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{stadium.city}, {stadium.state}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Capacity", value: stadium.capacity.toLocaleString() },
                    { label: "Surface", value: stadium.surface },
                    { label: "Opened", value: stadium.opened.toString() },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-white font-bold text-lg">{stat.value}</p>
                      <p className="text-slate-500 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team comparison */}
            <div className="bg-navy-800/40 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Team Comparison</h3>
              <div className="space-y-3">
                {[
                  { label: "FIFA Ranking", home: `#${homeTeam.fifaRanking}`, away: `#${awayTeam.fifaRanking}` },
                  { label: "Confederation", home: homeTeam.continent, away: awayTeam.continent },
                  { label: "Code", home: homeTeam.code, away: awayTeam.code },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="text-white font-medium text-sm text-right flex-1">{row.home}</span>
                    <span className="text-slate-600 text-xs w-28 text-center">{row.label}</span>
                    <span className="text-white font-medium text-sm flex-1">{row.away}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lineups Tab */}
        {activeTab === "lineups" && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Lineups Not Available</h3>
            <p className="text-slate-500 text-sm max-w-sm">
              Official lineups are typically announced 1 hour before kickoff.
            </p>
          </div>
        )}

        {/* Standings Tab */}
        {activeTab === "standings" && (
          <div>
            {match.group ? (
              <div className="bg-navy-800/40 border border-white/5 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5">
                  <h3 className="text-white font-semibold">Group {match.group} Standings</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Projected based on FIFA rankings</p>
                </div>
                <div className="divide-y divide-white/5">
                  {/* Header */}
                  <div className="grid grid-cols-12 gap-2 px-6 py-2 text-slate-500 text-xs font-medium">
                    <span className="col-span-1">#</span>
                    <span className="col-span-5">Team</span>
                    <span className="col-span-1 text-center">P</span>
                    <span className="col-span-1 text-center">W</span>
                    <span className="col-span-1 text-center">D</span>
                    <span className="col-span-1 text-center">L</span>
                    <span className="col-span-2 text-center">Pts</span>
                  </div>
                  {groupTeams
                    .sort((a, b) => a.fifaRanking - b.fifaRanking)
                    .map((team, idx) => (
                      <div
                        key={team.id}
                        className={cn(
                          "grid grid-cols-12 gap-2 px-6 py-3.5 items-center transition-colors hover:bg-white/5",
                          (match.homeTeamId === team.id || match.awayTeamId === team.id) &&
                            "bg-white/5"
                        )}
                      >
                        <span className="col-span-1 text-slate-500 text-sm font-mono">{idx + 1}</span>
                        <div className="col-span-5 flex items-center gap-2">
                          <div className="relative flex-shrink-0 rounded overflow-hidden" style={{ width: 24, height: 16 }}>
                            <Image
                              src={getFlagUrl(team.countryCode, 40)}
                              alt={team.name}
                              fill
                              className="object-cover"
                              sizes="24px"
                            />
                          </div>
                          <span className="text-white text-sm font-medium">{team.name}</span>
                          {(match.homeTeamId === team.id || match.awayTeamId === team.id) && (
                            <span className="text-[10px] text-brand-red font-bold">THIS</span>
                          )}
                        </div>
                        <span className="col-span-1 text-slate-400 text-sm text-center">0</span>
                        <span className="col-span-1 text-slate-400 text-sm text-center">0</span>
                        <span className="col-span-1 text-slate-400 text-sm text-center">0</span>
                        <span className="col-span-1 text-slate-400 text-sm text-center">0</span>
                        <span className="col-span-2 text-white font-bold text-sm text-center">0</span>
                      </div>
                    ))}
                </div>
                <div className="px-6 py-3 text-slate-600 text-xs">
                  Top 2 teams advance to Round of 32
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-slate-500">
                Standings not available for knockout rounds.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
