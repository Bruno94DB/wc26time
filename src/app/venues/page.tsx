import Image from "next/image";
import type { Metadata } from "next";
import { stadiums } from "@/data/stadiums";
import { getFlagUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Venues",
  description: "All 16 World Cup 2026 host stadiums across the United States, Canada, and Mexico.",
};

const countryGroups = [
  { country: "USA", countryCode: "us", flag: "🇺🇸" },
  { country: "Canada", countryCode: "ca", flag: "🇨🇦" },
  { country: "Mexico", countryCode: "mx", flag: "🇲🇽" },
];

export default function VenuesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy-900/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-2">
            World Cup 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Host Venues</h1>
          <p className="text-slate-400 mt-2 text-sm">
            {stadiums.length} stadiums across 3 host nations
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-navy-900/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-3 divide-x divide-white/5">
            {countryGroups.map(({ country, flag }) => {
              const count = stadiums.filter((s) => s.country === country).length;
              return (
                <div key={country} className="flex flex-col items-center px-4 gap-0.5">
                  <span className="text-2xl">{flag}</span>
                  <span className="text-white font-bold text-xl">{count}</span>
                  <span className="text-slate-500 text-xs">{country === "USA" ? "US" : country}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stadiums by country */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {countryGroups.map(({ country, countryCode, flag }) => {
          const countryStadiums = stadiums.filter((s) => s.country === country);
          return (
            <div key={country}>
              {/* Country header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-5 rounded overflow-hidden shadow">
                  <Image
                    src={getFlagUrl(countryCode, 40)}
                    alt={country}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
                <h2 className="text-white font-bold text-xl">{flag} {country}</h2>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-slate-600 text-xs">{countryStadiums.length} venues</span>
              </div>

              {/* Stadium grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {countryStadiums.map((stadium) => (
                  <div
                    key={stadium.id}
                    className="group bg-navy-800/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Stadium image */}
                    <div className="relative h-44 overflow-hidden">
                      {stadium.imageUrl ? (
                        <Image
                          src={stadium.imageUrl}
                          alt={stadium.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <div className={`h-full bg-gradient-to-br ${stadium.imageGradient} flex items-center justify-center`}>
                          <svg viewBox="0 0 300 200" className="w-full h-full opacity-10">
                            <rect x="10" y="10" width="280" height="180" fill="none" stroke="white" strokeWidth="2"/>
                            <line x1="150" y1="10" x2="150" y2="190" stroke="white" strokeWidth="1.5"/>
                            <circle cx="150" cy="100" r="35" fill="none" stroke="white" strokeWidth="1.5"/>
                            <rect x="10" y="65" width="45" height="70" fill="none" stroke="white" strokeWidth="1.5"/>
                            <rect x="245" y="65" width="45" height="70" fill="none" stroke="white" strokeWidth="1.5"/>
                            <circle cx="150" cy="100" r="2" fill="white"/>
                          </svg>
                        </div>
                      )}
                      {/* Overlay for readability of badges */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Country badge */}
                      <div className="absolute top-3 right-3">
                        <div className="relative w-7 h-5 rounded overflow-hidden shadow ring-1 ring-white/20">
                          <Image
                            src={getFlagUrl(stadium.countryCode, 40)}
                            alt={stadium.country}
                            fill
                            className="object-cover"
                            sizes="28px"
                          />
                        </div>
                      </div>

                      {/* Capacity badge */}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-white text-xs font-medium">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {stadium.capacity.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                          {stadium.name}
                        </h3>
                        <p className="text-slate-400 text-sm mt-0.5">
                          {stadium.city}, {stadium.state}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <p className="text-white font-bold text-base">{stadium.capacity.toLocaleString()}</p>
                          <p className="text-slate-500 text-xs">Capacity</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <p className="text-white font-bold text-base">{stadium.opened}</p>
                          <p className="text-slate-500 text-xs">Opened</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span>{stadium.surface}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
