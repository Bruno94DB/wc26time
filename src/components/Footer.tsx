import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 dark:bg-navy-950 border-t border-white/5 mt-auto pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-red to-orange-500 flex items-center justify-center text-white font-black text-sm">
                WC
              </div>
              <span className="font-bold text-white">
                WC<span className="text-brand-red">2026</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Match times automatically converted to your local timezone. Never miss a kickoff.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/schedule", label: "Schedule" },
                { href: "/teams", label: "Teams" },
                { href: "/venues", label: "Venues" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tournament info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Tournament
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-slate-500">Dates</span>
                <span>Jun 11 – Jul 19, 2026</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500">Teams</span>
                <span>48 nations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500">Venues</span>
                <span>16 stadiums</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500">Hosts</span>
                <span>🇺🇸 USA · 🇨🇦 CAN · 🇲🇽 MEX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 WC2026 Schedule. Not affiliated with FIFA. For informational purposes only.
          </p>
          <p className="text-slate-600 text-xs">
            Times displayed in your local timezone
          </p>
        </div>
      </div>
    </footer>
  );
}
