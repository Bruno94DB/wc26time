"use client";

import { useState, useEffect, useMemo } from "react";
import { matches } from "@/data/matches";
import { getTeamById } from "@/data/teams";
import { getStadiumById } from "@/data/stadiums";
import { getUserTimezone, isToday, isTomorrow, isThisWeek, formatMatchDate } from "@/lib/utils";
import MatchCard from "@/components/MatchCard";
import TimezoneSelector from "@/components/TimezoneSelector";
import ScheduleFilters from "@/components/ScheduleFilters";
import GroupStandings from "@/components/GroupStandings";

export default function SchedulePage() {
  const [timezone, setTimezone] = useState("UTC");
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [selectedTime, setSelectedTime] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimezone(getUserTimezone());
    setMounted(true);
  }, []);

  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      // Group filter
      if (selectedGroup !== "all" && match.group !== selectedGroup) return false;

      // Time filter
      if (selectedTime === "today" && !isToday(match.kickoff, timezone)) return false;
      if (selectedTime === "tomorrow" && !isTomorrow(match.kickoff, timezone)) return false;
      if (selectedTime === "week" && !isThisWeek(match.kickoff, timezone)) return false;

      // Search filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const home = getTeamById(match.homeTeamId);
        const away = getTeamById(match.awayTeamId);
        const matchesSearch =
          home?.name.toLowerCase().includes(q) ||
          home?.code.toLowerCase().includes(q) ||
          away?.name.toLowerCase().includes(q) ||
          away?.code.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [selectedGroup, selectedTime, searchQuery, timezone]);

  // Group by day
  const matchesByDay = useMemo(() => {
    const sorted = [...filteredMatches].sort(
      (a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime()
    );

    const grouped = new Map<string, typeof sorted>();
    for (const match of sorted) {
      const dayKey = formatMatchDate(match.kickoff, timezone);
      if (!grouped.has(dayKey)) grouped.set(dayKey, []);
      grouped.get(dayKey)!.push(match);
    }
    return grouped;
  }, [filteredMatches, timezone]);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-navy-900/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-2">
                World Cup 2026
              </p>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                Match Schedule
              </h1>
              <p className="text-slate-400 mt-2 text-sm">
                {filteredMatches.length} match{filteredMatches.length !== 1 ? "es" : ""} · All times in your local timezone
              </p>
            </div>
            <div className="w-full sm:w-72">
              <TimezoneSelector value={timezone} onChange={setTimezone} />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky filters */}
      <div className="sticky top-16 z-40 bg-navy-950/95 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto">
          <ScheduleFilters
            selectedGroup={selectedGroup}
            onGroupChange={setSelectedGroup}
            selectedTime={selectedTime}
            onTimeChange={setSelectedTime}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      </div>

      {/* Group standings (when a specific group is selected) */}
      {selectedGroup !== "all" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <GroupStandings group={selectedGroup} />
        </div>
      )}

      {/* Match list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!mounted ? (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 w-48 bg-white/5 rounded animate-pulse" />
                {[1, 2].map((j) => (
                  <div key={j} className="h-16 bg-white/5 rounded-xl animate-pulse" />
                ))}
              </div>
            ))}
          </div>
        ) : matchesByDay.size === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">No matches found</h3>
            <p className="text-slate-500 text-sm max-w-sm">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setSelectedGroup("all");
                setSelectedTime("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-white/10"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {Array.from(matchesByDay.entries()).map(([day, dayMatches]) => (
              <div key={day}>
                {/* Day header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    {isToday(dayMatches[0].kickoff, timezone) && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-red/20 text-brand-red text-xs font-bold border border-brand-red/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                        TODAY
                      </span>
                    )}
                    <h2 className="text-white font-bold text-lg">{day}</h2>
                  </div>
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-slate-600 text-xs">
                    {dayMatches.length} match{dayMatches.length !== 1 ? "es" : ""}
                  </span>
                </div>

                {/* Matches for this day */}
                <div className="space-y-2">
                  {dayMatches.map((match) => {
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
