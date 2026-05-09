"use client";

interface ScheduleFiltersProps {
  selectedGroup: string;
  onGroupChange: (group: string) => void;
  selectedTime: string;
  onTimeChange: (time: string) => void;
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

export default function ScheduleFilters({
  selectedGroup,
  onGroupChange,
  selectedTime,
  onTimeChange,
  searchQuery,
  onSearchChange,
}: ScheduleFiltersProps) {
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

      {/* Group filter chips */}
      <div className="flex gap-1.5 flex-wrap">
        <button
          onClick={() => onGroupChange("all")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            selectedGroup === "all"
              ? "bg-white/15 text-white border border-white/20"
              : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
          }`}
        >
          All Groups
        </button>
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => onGroupChange(group)}
            className={`w-9 h-8 rounded-lg text-xs font-bold transition-all ${
              selectedGroup === group
                ? "bg-brand-red text-white shadow-sm shadow-brand-red/30"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
}
