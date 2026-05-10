"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Match } from "@/data/matches";
import { Team } from "@/data/teams";
import { Stadium } from "@/data/stadiums";
import {
  getUserTimezone, getFlagUrl, formatKickoff, formatMatchDate,
  getTimezoneOffset, getCountryFromTimezone,
} from "@/lib/utils";
import TimezoneSelector from "@/components/TimezoneSelector";

interface FixtureItem {
  match: Match;
  home: Team;
  away: Team;
  stadium: Stadium;
  opponent: Team;
  matchday: number;
}

interface Props {
  fixtures: FixtureItem[];
  teamId: string;
  teamName: string;
}

export default function TeamFixturesClient({ fixtures, teamId, teamName }: Props) {
  const [timezone, setTimezone] = useState("UTC");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimezone(getUserTimezone());
    setMounted(true);
  }, []);

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <h2 className="text-xl font-bold text-white">{teamName} Fixtures</h2>
        <div className="w-full sm:w-56">
          <TimezoneSelector value={timezone} onChange={setTimezone} />
        </div>
      </div>
      <div className="space-y-4">
        {fixtures.map(({ match, home, away, stadium, opponent, matchday }) => (
          <Link
            key={match.id}
            href={`/matches/${match.slug}`}
            className="group block bg-navy-800/40 border border-white/5 rounded-xl p-5 hover:border-white/15 hover:bg-navy-800/70 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-7 rounded-md overflow-hidden shadow flex-shrink-0">
                    <Image src={getFlagUrl(home.countryCode, 80)} alt={home.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <span className={`font-bold text-sm ${home.id === teamId ? "text-white" : "text-slate-300"}`}>{home.name}</span>
                </div>
                <span className="text-slate-600 text-xs font-bold">vs</span>
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-7 rounded-md overflow-hidden shadow flex-shrink-0">
                    <Image src={getFlagUrl(away.countryCode, 80)} alt={away.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <span className={`font-bold text-sm ${away.id === teamId ? "text-white" : "text-slate-300"}`}>{away.name}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 sm:items-end text-xs text-slate-500">
                <span className="text-brand-red font-semibold">
                  Matchday {matchday} · vs {opponent.name} (#{opponent.fifaRanking})
                </span>
                <span>
                  {mounted
                    ? formatMatchDate(match.kickoff, timezone)
                    : formatMatchDate(match.kickoff, "UTC")}
                </span>
                <span className="flex items-center gap-1.5">
                  <span>
                    {mounted
                      ? formatKickoff(match.kickoff, timezone, "time")
                      : formatKickoff(match.kickoff, "UTC", "time")}
                  </span>
                  {mounted && (
                    <span className="text-slate-600 text-[10px]">
                      {getTimezoneOffset(timezone)} · {getCountryFromTimezone(timezone)}
                    </span>
                  )}
                </span>
                <span>{stadium.name}, {stadium.city}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
