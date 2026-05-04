"use client";

import Image from "next/image";
import Link from "next/link";
import { Match } from "@/data/matches";
import { Team, groupColors } from "@/data/teams";
import { Stadium } from "@/data/stadiums";
import { getFlagUrl, formatKickoff, cn } from "@/lib/utils";
import CountdownTimer from "./CountdownTimer";

interface MatchCardProps {
  match: Match;
  homeTeam: Team;
  awayTeam: Team;
  stadium: Stadium;
  timezone: string;
  variant?: "default" | "featured" | "compact";
}

export default function MatchCard({
  match,
  homeTeam,
  awayTeam,
  stadium,
  timezone,
  variant = "default",
}: MatchCardProps) {
  const groupColor = match.group ? groupColors[match.group] : "";

  if (variant === "featured") {
    return (
      <Link href={`/matches/${match.slug}`} className="block group">
        <div className="relative bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5">
          {/* Group badge */}
          {match.group && (
            <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border mb-4", groupColor)}>
              Group {match.group}
            </span>
          )}

          {/* Teams */}
          <div className="flex items-center justify-between gap-4">
            {/* Home team */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="relative w-16 h-11 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={getFlagUrl(homeTeam.countryCode, 160)}
                  alt={homeTeam.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">{homeTeam.shortName}</p>
                <p className="text-slate-500 text-xs">{homeTeam.code}</p>
              </div>
            </div>

            {/* VS / Time */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-black text-white/20">VS</span>
              <div className="text-center">
                <p className="text-white font-bold text-lg">
                  {formatKickoff(match.kickoff, timezone, "time")}
                </p>
                <p className="text-slate-500 text-xs">Local time</p>
              </div>
            </div>

            {/* Away team */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="relative w-16 h-11 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={getFlagUrl(awayTeam.countryCode, 160)}
                  alt={awayTeam.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">{awayTeam.shortName}</p>
                <p className="text-slate-500 text-xs">{awayTeam.code}</p>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mt-4 flex justify-center">
            <CountdownTimer kickoff={match.kickoff} size="sm" />
          </div>

          {/* Stadium */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-slate-500 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{stadium.name}, {stadium.city}</span>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/matches/${match.slug}`} className="block group">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10">
          {/* Home flag + name */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="text-white text-sm font-medium text-right leading-tight hidden sm:block">
              {homeTeam.shortName}
            </span>
            <span className="text-white text-sm font-medium text-right leading-tight sm:hidden">
              {homeTeam.code}
            </span>
            <div className="relative w-8 h-5.5 rounded overflow-hidden shadow flex-shrink-0" style={{ height: "22px", width: "32px" }}>
              <Image
                src={getFlagUrl(homeTeam.countryCode, 80)}
                alt={homeTeam.name}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center gap-0.5 min-w-[72px]">
            <span className="text-white font-bold text-sm">
              {formatKickoff(match.kickoff, timezone, "time")}
            </span>
            {match.group && (
              <span className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded-full border", groupColor)}>
                Grp {match.group}
              </span>
            )}
          </div>

          {/* Away flag + name */}
          <div className="flex items-center gap-2 flex-1 justify-start">
            <div className="relative flex-shrink-0 rounded overflow-hidden shadow" style={{ height: "22px", width: "32px" }}>
              <Image
                src={getFlagUrl(awayTeam.countryCode, 80)}
                alt={awayTeam.name}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-white text-sm font-medium leading-tight hidden sm:block">
              {awayTeam.shortName}
            </span>
            <span className="text-white text-sm font-medium leading-tight sm:hidden">
              {awayTeam.code}
            </span>
          </div>

          {/* Arrow */}
          <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    );
  }

  // Default variant — full row
  return (
    <Link href={`/matches/${match.slug}`} className="block group">
      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 rounded-xl border border-white/5 bg-navy-800/40 hover:bg-navy-800/80 hover:border-white/10 transition-all duration-200 hover:shadow-lg hover:shadow-black/20">
        {/* Home team */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end">
          <span className="text-white text-sm font-semibold text-right leading-tight hidden sm:block">
            {homeTeam.name}
          </span>
          <span className="text-white text-sm font-semibold text-right leading-tight sm:hidden">
            {homeTeam.code}
          </span>
          <div className="relative flex-shrink-0 rounded-md overflow-hidden shadow-sm" style={{ height: "28px", width: "40px" }}>
            <Image
              src={getFlagUrl(homeTeam.countryCode, 80)}
              alt={homeTeam.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </div>

        {/* Center: time & meta */}
        <div className="flex flex-col items-center gap-1 min-w-[100px] sm:min-w-[130px]">
          <span className="text-white font-bold text-base sm:text-lg tabular-nums">
            {formatKickoff(match.kickoff, timezone, "time")}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {match.group && (
              <span className={cn("text-[10px] font-semibold px-1.5 py-0.5 rounded-full border", groupColor)}>
                Group {match.group}
              </span>
            )}
          </div>
        </div>

        {/* Away team */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-start">
          <div className="relative flex-shrink-0 rounded-md overflow-hidden shadow-sm" style={{ height: "28px", width: "40px" }}>
            <Image
              src={getFlagUrl(awayTeam.countryCode, 80)}
              alt={awayTeam.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="text-white text-sm font-semibold leading-tight hidden sm:block">
            {awayTeam.name}
          </span>
          <span className="text-white text-sm font-semibold leading-tight sm:hidden">
            {awayTeam.code}
          </span>
        </div>

        {/* Stadium - desktop only */}
        <div className="hidden lg:flex flex-col items-end gap-0.5 min-w-[160px]">
          <span className="text-slate-400 text-xs">{stadium.name}</span>
          <span className="text-slate-600 text-xs">{stadium.city}</span>
        </div>

        {/* Arrow */}
        <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
