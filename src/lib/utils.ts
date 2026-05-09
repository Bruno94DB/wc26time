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

export function getTimezoneOffset(timezone: string): string {
  if (timezone === "UTC") return "UTC";
  try {
    const parts = new Intl.DateTimeFormat("en", {
      timeZone: timezone,
      timeZoneName: "shortOffset",
    }).formatToParts(new Date());
    return parts.find((p) => p.type === "timeZoneName")?.value ?? "UTC";
  } catch {
    return "UTC";
  }
}

const TIMEZONE_COUNTRY: Record<string, string> = {
  "Pacific/Honolulu": "USA", "America/Anchorage": "USA", "America/Los_Angeles": "USA",
  "America/Phoenix": "USA", "America/Denver": "USA", "America/Chicago": "USA",
  "America/New_York": "USA", "America/Detroit": "USA", "America/Indiana/Indianapolis": "USA",
  "America/Halifax": "Canada", "America/Toronto": "Canada", "America/Vancouver": "Canada",
  "America/Winnipeg": "Canada", "America/Edmonton": "Canada", "America/St_Johns": "Canada",
  "America/Sao_Paulo": "Brazil", "America/Manaus": "Brazil", "America/Belem": "Brazil",
  "America/Argentina/Buenos_Aires": "Argentina", "America/Lima": "Peru",
  "America/Bogota": "Colombia", "America/Santiago": "Chile", "America/Caracas": "Venezuela",
  "America/La_Paz": "Bolivia", "America/Asuncion": "Paraguay", "America/Montevideo": "Uruguay",
  "America/Guayaquil": "Ecuador",
  "America/Mexico_City": "Mexico", "America/Cancun": "Mexico", "America/Mazatlan": "Mexico",
  "America/Guatemala": "Guatemala", "America/Costa_Rica": "Costa Rica",
  "America/Panama": "Panama", "America/Tegucigalpa": "Honduras",
  "America/El_Salvador": "El Salvador", "America/Port-au-Prince": "Haiti",
  "America/Jamaica": "Jamaica", "America/Nassau": "Bahamas",
  "Europe/London": "UK", "Europe/Dublin": "Ireland",
  "Europe/Paris": "France", "Europe/Berlin": "Germany", "Europe/Vienna": "Austria",
  "Europe/Madrid": "Spain", "Europe/Lisbon": "Portugal", "Europe/Rome": "Italy",
  "Europe/Amsterdam": "Netherlands", "Europe/Brussels": "Belgium",
  "Europe/Zurich": "Switzerland", "Europe/Bern": "Switzerland",
  "Europe/Stockholm": "Sweden", "Europe/Oslo": "Norway", "Europe/Copenhagen": "Denmark",
  "Europe/Helsinki": "Finland", "Europe/Warsaw": "Poland", "Europe/Prague": "Czechia",
  "Europe/Budapest": "Hungary", "Europe/Bratislava": "Slovakia",
  "Europe/Zagreb": "Croatia", "Europe/Belgrade": "Serbia", "Europe/Ljubljana": "Slovenia",
  "Europe/Sarajevo": "Bosnia", "Europe/Podgorica": "Montenegro", "Europe/Tirane": "Albania",
  "Europe/Skopje": "N. Macedonia", "Europe/Sofia": "Bulgaria", "Europe/Bucharest": "Romania",
  "Europe/Athens": "Greece", "Europe/Istanbul": "Turkey",
  "Europe/Moscow": "Russia", "Europe/Kaliningrad": "Russia", "Europe/Samara": "Russia",
  "Europe/Kiev": "Ukraine", "Europe/Chisinau": "Moldova",
  "Europe/Riga": "Latvia", "Europe/Tallinn": "Estonia", "Europe/Vilnius": "Lithuania",
  "Europe/Minsk": "Belarus", "Atlantic/Azores": "Portugal", "Atlantic/Reykjavik": "Iceland",
  "Asia/Dubai": "UAE", "Asia/Riyadh": "Saudi Arabia", "Asia/Qatar": "Qatar",
  "Asia/Kuwait": "Kuwait", "Asia/Baghdad": "Iraq", "Asia/Tehran": "Iran",
  "Asia/Jerusalem": "Israel", "Asia/Amman": "Jordan", "Asia/Beirut": "Lebanon",
  "Asia/Damascus": "Syria", "Asia/Yerevan": "Armenia", "Asia/Baku": "Azerbaijan",
  "Asia/Tbilisi": "Georgia",
  "Africa/Cairo": "Egypt", "Africa/Casablanca": "Morocco", "Africa/Tunis": "Tunisia",
  "Africa/Algiers": "Algeria", "Africa/Lagos": "Nigeria", "Africa/Johannesburg": "S. Africa",
  "Africa/Nairobi": "Kenya", "Africa/Accra": "Ghana", "Africa/Abidjan": "Ivory Coast",
  "Africa/Dakar": "Senegal", "Africa/Kinshasa": "DR Congo",
  "Asia/Karachi": "Pakistan", "Asia/Kolkata": "India", "Asia/Colombo": "Sri Lanka",
  "Asia/Dhaka": "Bangladesh", "Asia/Kathmandu": "Nepal",
  "Asia/Almaty": "Kazakhstan", "Asia/Tashkent": "Uzbekistan",
  "Asia/Bangkok": "Thailand", "Asia/Ho_Chi_Minh": "Vietnam",
  "Asia/Kuala_Lumpur": "Malaysia", "Asia/Singapore": "Singapore",
  "Asia/Jakarta": "Indonesia", "Asia/Manila": "Philippines",
  "Asia/Shanghai": "China", "Asia/Hong_Kong": "Hong Kong", "Asia/Taipei": "Taiwan",
  "Asia/Seoul": "South Korea", "Asia/Tokyo": "Japan",
  "Australia/Sydney": "Australia", "Australia/Melbourne": "Australia",
  "Australia/Brisbane": "Australia", "Australia/Perth": "Australia",
  "Pacific/Auckland": "New Zealand",
  "UTC": "UTC",
};

export function getCountryFromTimezone(timezone: string): string {
  if (TIMEZONE_COUNTRY[timezone]) return TIMEZONE_COUNTRY[timezone];
  // Fallback: extract city name from timezone string
  const city = timezone.split("/").pop()?.replace(/_/g, " ") ?? "";
  return city;
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
