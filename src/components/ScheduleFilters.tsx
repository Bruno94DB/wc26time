"use client";

import { useRef } from "react";

interface ScheduleFiltersProps {
  selectedGroup: string;
  onGroupChange: (group: string) => void;
  selectedTime: string;
  onTimeChange: (time: string) => void;
  selectedDate: string;
  onDateChange: (date: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const timeFilters = [
  { value: "all", label: "All Matches" },
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "week", label: "This Week" },
];

function formatDateLabel(dateStr: string): string {
  // dateStr is YYYY-MM-DD; parse in local time to avoid off-by-one
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function ScheduleFilters({
  selectedGroup,
  onGroupChange,
  selectedTime,
  onTimeChange,
  selectedDate,
  onDateChange,
  searchQuery,
  onSearchChange,
}: ScheduleFiltersProps) {
  const dateInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-3">
      {/* Search + time filter row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search team..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition-colors"
          />
        </div>

        {/* Time filter */}
        <div className="flex gap-1.5 flex-wrap sm:flex-nowrap">
          {timeFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => onTimeChange(filter.value)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                selectedTime === filter.value
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/20"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Group dropdown + date picker */}
      <div className="flex gap-2 items-center flex-wrap">
        {/* Group select */}
        <div className="relative">
          <select
            value={selectedGroup}
            onChange={(e) => onGroupChange(e.target.value)}
            className={`h-8 pl-3 pr-7 rounded-lg text-xs font-medium transition-all appearance-none cursor-pointer bg-white/5 border focus:outline-none focus:ring-2 focus:ring-brand-red/50 ${
              selectedGroup !== "all"
                ? "text-white border-brand-red/40 bg-brand-red/20"
                : "text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
            }`}
            style={{ colorScheme: "dark" }}
          >
            <option value="all">All Groups</option>
            {groups.map((g) => (
              <option key={g} value={g}>
                Group {g}
              </option>
            ))}
          </select>
          {/* Custom chevron */}
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Divider */}
        <span className="w-px h-5 bg-white/10" />

        {/* Date picker */}
        <div className="relative inline-flex">
          <button
            type="button"
            onClick={() => dateInputRef.current?.showPicker()}
            className={`h-8 pl-2.5 pr-3 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              selectedDate
                ? "bg-brand-red/20 text-white border border-brand-red/40"
                : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
            }`}
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {selectedDate ? formatDateLabel(selectedDate) : "Date"}
          </button>

          {/* Hidden input — holds value and owns the native picker */}
          <input
            ref={dateInputRef}
            type="date"
            value={selectedDate}
            min="2026-06-11"
            max="2026-07-19"
            onChange={(e) => onDateChange(e.target.value)}
            className="absolute opacity-0 pointer-events-none w-0 h-0"
          />

          {/* Clear × */}
          {selectedDate && (
            <button
              type="button"
              onClick={() => onDateChange("")}
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center transition-colors"
              aria-label="Clear date"
            >
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
