"use client";

import { useEffect, useState } from "react";
import { getAllTimezones, formatTimezoneLabel, getUserTimezone } from "@/lib/utils";

interface TimezoneSelectorProps {
  value: string;
  onChange: (tz: string) => void;
  className?: string;
}

export default function TimezoneSelector({ value, onChange, className = "" }: TimezoneSelectorProps) {
  const [mounted, setMounted] = useState(false);
  const timezones = getAllTimezones();

  useEffect(() => {
    setMounted(true);
    if (!value) {
      onChange(getUserTimezone());
    }
  }, [value, onChange]);

  if (!mounted) {
    return (
      <div className={`h-10 bg-white/5 rounded-lg animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full pl-9 pr-8 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red/50 transition-colors cursor-pointer hover:bg-white/10 ${className}`}
      >
        {timezones.map((tz) => (
          <option key={tz} value={tz} className="bg-slate-900 text-white">
            {formatTimezoneLabel(tz)}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
