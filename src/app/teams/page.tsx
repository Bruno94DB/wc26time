"use client";

import { useState, useMemo } from "react";
import { teams, groups, groupColors } from "@/data/teams";
import { cn } from "@/lib/utils";
import TeamCard from "@/components/TeamCard";
const continents = ["All", "UEFA", "CONMEBOL", "CONCACAF", "CAF", "AFC", "OFC"];

export default function TeamsPage() {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");

  const filteredTeams = useMemo(() => {
    return teams.filter((team) => {
      if (selectedGroup !== "all" && team.group !== selectedGroup) return false;
      if (selectedContinent !== "All" && team.continent !== selectedContinent) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          team.name.toLowerCase().includes(q) ||
          team.code.toLowerCase().includes(q) ||
          team.shortName.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedGroup, searchQuery, selectedContinent]);

  // Group teams by group for the grouped view
  const teamsByGroup = useMemo(() => {
    if (selectedGroup !== "all") {
      return new Map([[selectedGroup, filteredTeams]]);
    }
    const map = new Map<string, typeof teams>();
    for (const group of groups) {
      const groupTeams = filteredTeams.filter((t) => t.group === group);
      if (groupTeams.length > 0) map.set(group, groupTeams);
    }
    return map;
  }, [filteredTeams, selectedGroup]);

  const showGrouped = selectedGroup === "all" && !searchQuery && selectedContinent === "All";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy-900/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-2">
            World Cup 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            All 48 Teams
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            {filteredTeams.length} team{filteredTeams.length !== 1 ? "s" : ""} in {groups.length} groups
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-navy-950/95 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Search + continent */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-sm">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition-colors"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {continents.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedContinent(c)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap",
                    selectedContinent === c
                      ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Group filter */}
          <div className="flex gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedGroup("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                selectedGroup === "all"
                  ? "bg-white/15 text-white border border-white/20"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
              )}
            >
              All Groups
            </button>
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={cn(
                  "w-9 h-8 rounded-lg text-xs font-bold transition-all",
                  selectedGroup === group
                    ? "bg-brand-red text-white shadow-sm shadow-brand-red/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
                )}
              >
                {group}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Teams grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredTeams.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">No teams found</h3>
            <button
              onClick={() => { setSelectedGroup("all"); setSearchQuery(""); setSelectedContinent("All"); }}
              className="mt-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-colors border border-white/10"
            >
              Clear filters
            </button>
          </div>
        ) : showGrouped ? (
          // Grouped view
          <div className="space-y-10">
            {Array.from(teamsByGroup.entries()).map(([group, groupTeams]) => (
              <div key={group}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border", groupColors[group])}>
                    Group {group}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-slate-600 text-xs">{groupTeams.length} teams</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {groupTeams.map((team) => (
                    <TeamCard key={team.id} team={team} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Flat grid view
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
