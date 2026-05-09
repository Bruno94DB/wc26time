"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { matches } from "@/data/matches";
import { teams, getTeamById } from "@/data/teams";
import { getStadiumById } from "@/data/stadiums";
import { getUserTimezone, isToday, formatKickoff, formatMatchDate, getFlagUrl, getTimezoneOffset, getCountryFromTimezone } from "@/lib/utils";
import TimezoneSelector from "@/components/TimezoneSelector";
import CountdownTimer from "@/components/CountdownTimer";
import MatchCard from "@/components/MatchCard";

export default function HomePage() {
  const [timezone, setTimezone] = useState("UTC");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimezone(getUserTimezone());
    setMounted(true);
  }, []);

  // Find next upcoming match
  const now = new Date();
  const upcomingMatches = matches
    .filter((m) => new Date(m.kickoff) > now)
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime());

  const nextMatch = upcomingMatches[0];
  const nextMatchHome = nextMatch ? getTeamById(nextMatch.homeTeamId) : null;
  const nextMatchAway = nextMatch ? getTeamById(nextMatch.awayTeamId) : null;
  const nextMatchStadium = nextMatch ? getStadiumById(nextMatch.stadiumId) : null;

  // Today's matches
  const todayMatches = matches
    .filter((m) => isToday(m.kickoff, timezone))
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime());

  // Upcoming (next 4, skip next match)
  const upcomingSoon = upcomingMatches.slice(1, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="2"/>
            <path d="M100 10 L100 190 M10 100 L190 100 M29.3 29.3 L170.7 170.7 M170.7 29.3 L29.3 170.7" stroke="white" strokeWidth="1"/>
            <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <div className="space-y-6 animate-slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                Jun 11 – Jul 19, 2026 · USA · Canada · Mexico
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-balance">
                World Cup{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-400">
                  2026
                </span>
                <br />
                Match Schedule &amp;{" "}
                <span className="text-slate-300">Time Converter</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                All 80 matches. Times automatically converted to{" "}
                <span className="text-white font-medium">your local timezone</span>.
                Never miss a kickoff.
              </p>

              {/* Timezone selector */}
              <div className="space-y-2">
                <label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                  Your Timezone
                </label>
                <TimezoneSelector
                  value={timezone}
                  onChange={setTimezone}
                  className="max-w-sm"
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/30 hover:-translate-y-0.5"
                >
                  View Full Schedule
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/teams"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  All 48 Teams
                </Link>
              </div>
            </div>

            {/* Right: Next match card */}
            {nextMatch && nextMatchHome && nextMatchAway && nextMatchStadium && (
              <div className="relative animate-fade-in">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-orange-500/5 rounded-3xl blur-2xl" />

                <div className="relative bg-navy-800/80 backdrop-blur border border-white/10 rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        Next Match
                      </p>
                      <p className="text-slate-400 text-sm mt-0.5">
                        {mounted ? formatMatchDate(nextMatch.kickoff, timezone) : "Loading..."}
                      </p>
                    </div>
                    {nextMatch.group && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold">
                        Group {nextMatch.group}
                      </span>
                    )}
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col items-center gap-3 flex-1">
                      <div className="relative w-14 h-10 sm:w-20 sm:h-14 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
                        <Image
                          src={getFlagUrl(nextMatchHome.countryCode, 160)}
                          alt={nextMatchHome.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold">{nextMatchHome.name}</p>
                        <p className="text-slate-500 text-xs">#{nextMatchHome.fifaRanking} FIFA</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-slate-400 text-xs font-bold">VS</span>
                      </div>
                      <span className="text-white font-bold text-xl sm:text-2xl tabular-nums">
                        {mounted ? formatKickoff(nextMatch.kickoff, timezone, "time") : "--:--"}
                      </span>
                      <span className="text-slate-500 text-xs">
                        {mounted
                          ? `Local (${getTimezoneOffset(timezone)}, ${getCountryFromTimezone(timezone)})`
                          : "Local time"}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-3 flex-1">
                      <div className="relative w-14 h-10 sm:w-20 sm:h-14 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10">
                        <Image
                          src={getFlagUrl(nextMatchAway.countryCode, 160)}
                          alt={nextMatchAway.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold">{nextMatchAway.name}</p>
                        <p className="text-slate-500 text-xs">#{nextMatchAway.fifaRanking} FIFA</p>
                      </div>
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="bg-navy-950/60 rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-2 overflow-x-auto">
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                      Kickoff in
                    </p>
                    <CountdownTimer kickoff={nextMatch.kickoff} size="lg" />
                  </div>

                  {/* Stadium */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{nextMatchStadium.name} · {nextMatchStadium.city}, {nextMatchStadium.country}</span>
                  </div>

                  <Link
                    href={`/matches/${nextMatch.slug}`}
                    className="block w-full text-center py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10"
                  >
                    Match Details →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x divide-white/5">
            {[
              { label: "Nations", value: "48" },
              { label: "Matches", value: "80" },
              { label: "Venues", value: "16" },
              { label: "Days", value: "39" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center sm:px-8 gap-0.5">
                <span className="text-white font-black text-2xl sm:text-3xl">{stat.value}</span>
                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Matches */}
      {mounted && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {todayMatches.length > 0 ? "Today's Matches" : "Upcoming Matches"}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {timezone.replace(/_/g, " ")}
              </p>
            </div>
            <Link
              href="/schedule"
              className="text-brand-red hover:text-red-400 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              Full schedule
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {todayMatches.length > 0 ? (
            <div className="space-y-2">
              {todayMatches.map((match) => {
                const home = getTeamById(match.homeTeamId);
                const away = getTeamById(match.awayTeamId);
                const stadium = getStadiumById(match.stadiumId);
                if (!home || !away || !stadium) return null;
                return (
                  <MatchCard
                    key={match.id}
                    match={match}
                    homeTeam={home}
                    awayTeam={away}
                    stadium={stadium}
                    timezone={timezone}
                    variant="default"
                  />
                );
              })}
            </div>
          ) : (
            <div className="space-y-2">
              {upcomingSoon.map((match) => {
                const home = getTeamById(match.homeTeamId);
                const away = getTeamById(match.awayTeamId);
                const stadium = getStadiumById(match.stadiumId);
                if (!home || !away || !stadium) return null;
                return (
                  <MatchCard
                    key={match.id}
                    match={match}
                    homeTeam={home}
                    awayTeam={away}
                    stadium={stadium}
                    timezone={timezone}
                    variant="default"
                    showDate
                  />
                );
              })}
              {upcomingSoon.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                  No matches scheduled yet
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* Groups preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">All Teams</h2>
          <Link
            href="/teams"
            className="text-brand-red hover:text-red-400 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View all 48
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Show a few teams as preview */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {teams.slice(0, 16).map((team) => (
            <div
              key={team.id}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-navy-800/40 border border-white/5 hover:bg-navy-800/80 hover:border-white/10 transition-all cursor-default"
            >
              <div className="relative w-full rounded-lg overflow-hidden shadow" style={{ paddingBottom: "66%" }}>
                <Image
                  src={getFlagUrl(team.countryCode, 80)}
                  alt={team.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <span className="text-white text-xs font-semibold text-center leading-tight">
                {team.code}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 border border-white/10 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Never miss a kickoff
              </h2>
              <p className="text-slate-400 max-w-md">
                Match times automatically adapt to your timezone. Filter by team, group, or date.
              </p>
            </div>
            <Link
              href="/schedule"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-red/20 hover:-translate-y-0.5"
            >
              Open Schedule
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
