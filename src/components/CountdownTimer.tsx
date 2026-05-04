"use client";

import { useEffect, useState } from "react";
import { getTimeUntil } from "@/lib/utils";

interface CountdownTimerProps {
  kickoff: string;
  size?: "sm" | "md" | "lg";
}

export default function CountdownTimer({ kickoff, size = "md" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(getTimeUntil(kickoff));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntil(kickoff));
    }, 1000);
    return () => clearInterval(interval);
  }, [kickoff]);

  if (timeLeft.isPast) {
    return (
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Match Started
        </span>
      </div>
    );
  }

  const units =
    size === "lg"
      ? [
          { label: "DAYS", value: timeLeft.days },
          { label: "HRS", value: timeLeft.hours },
          { label: "MIN", value: timeLeft.minutes },
          { label: "SEC", value: timeLeft.seconds },
        ]
      : timeLeft.days > 0
      ? [
          { label: "D", value: timeLeft.days },
          { label: "H", value: timeLeft.hours },
          { label: "M", value: timeLeft.minutes },
          { label: "S", value: timeLeft.seconds },
        ]
      : [
          { label: "H", value: timeLeft.hours },
          { label: "M", value: timeLeft.minutes },
          { label: "S", value: timeLeft.seconds },
        ];

  if (size === "sm") {
    return (
      <div className="flex items-center gap-1 text-sm font-mono text-slate-300">
        {timeLeft.days > 0 && (
          <span>{String(timeLeft.days).padStart(2, "0")}d </span>
        )}
        <span>{String(timeLeft.hours).padStart(2, "0")}h </span>
        <span>{String(timeLeft.minutes).padStart(2, "0")}m </span>
        <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div
            className={`flex flex-col items-center ${
              size === "lg"
                ? "bg-navy-800 border border-white/10 rounded-xl px-4 py-3 min-w-[72px]"
                : "bg-white/5 rounded-lg px-2.5 py-1.5 min-w-[44px]"
            }`}
          >
            <span
              className={`font-mono font-bold tabular-nums text-white ${
                size === "lg" ? "text-3xl" : "text-xl"
              }`}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
            <span
              className={`text-slate-500 font-medium tracking-wider ${
                size === "lg" ? "text-xs mt-1" : "text-[9px]"
              }`}
            >
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              className={`font-bold text-slate-600 ${
                size === "lg" ? "text-2xl" : "text-lg"
              }`}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
