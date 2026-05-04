import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFlagUrl(countryCode: string, size: number = 80): string {
  return `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.png`;
}

export function formatKickoff(
  isoString: string,
  timezone: string,
  format: "time" | "datetime" | "date" = "datetime"
): string {
  const date = new Date(isoString);

  if (format === "time") {
    return date.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  if (format === "date") {
    return date.toLocaleDateString("en-US", {
      timeZone: timezone,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return date.toLocaleString("en-US", {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function formatMatchDate(
  isoString: string,
  timezone: string
): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    timeZone: timezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function groupMatchesByDay(
  matches: Array<{ kickoff: string; [key: string]: unknown }>,
  timezone: string
): Map<string, typeof matches> {
  const grouped = new Map<string, typeof matches>();

  for (const match of matches) {
    const date = new Date(match.kickoff);
    const dayKey = date.toLocaleDateString("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    if (!grouped.has(dayKey)) {
      grouped.set(dayKey, []);
    }
    grouped.get(dayKey)!.push(match);
  }

  return grouped;
}

export function getTimeUntil(isoString: string): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
} {
  const now = Date.now();
  const target = new Date(isoString).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
}

export function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
}

export function getAllTimezones(): string[] {
  const zones = [
    "Pacific/Honolulu",
    "America/Anchorage",
    "America/Los_Angeles",
    "America/Phoenix",
    "America/Denver",
    "America/Chicago",
    "America/New_York",
    "America/Halifax",
    "America/St_Johns",
    "America/Sao_Paulo",
    "America/Argentina/Buenos_Aires",
    "Atlantic/Azores",
    "UTC",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Helsinki",
    "Europe/Moscow",
    "Asia/Dubai",
    "Asia/Karachi",
    "Asia/Kolkata",
    "Asia/Dhaka",
    "Asia/Bangkok",
    "Asia/Shanghai",
    "Asia/Tokyo",
    "Asia/Seoul",
    "Australia/Sydney",
    "Pacific/Auckland",
  ];
  return zones;
}

export function formatTimezoneLabel(tz: string): string {
  try {
    const date = new Date();
    const offset = date.toLocaleTimeString("en-US", {
      timeZone: tz,
      timeZoneName: "short",
    }).split(" ").pop();
    const city = tz.split("/").pop()?.replace(/_/g, " ") ?? tz;
    return `${city} (${offset})`;
  } catch {
    return tz;
  }
}

export function isSameDay(iso1: string, iso2: string, timezone: string): boolean {
  const d1 = new Date(iso1).toLocaleDateString("en-US", { timeZone: timezone });
  const d2 = new Date(iso2).toLocaleDateString("en-US", { timeZone: timezone });
  return d1 === d2;
}

export function isToday(isoString: string, timezone: string): boolean {
  return isSameDay(isoString, new Date().toISOString(), timezone);
}

export function isTomorrow(isoString: string, timezone: string): boolean {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return isSameDay(isoString, tomorrow.toISOString(), timezone);
}

export function isThisWeek(isoString: string, _timezone: string): boolean {
  const now = new Date();
  const weekEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const target = new Date(isoString);
  return target >= now && target <= weekEnd;
}
