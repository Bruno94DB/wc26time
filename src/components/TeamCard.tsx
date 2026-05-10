import Image from "next/image";
import Link from "next/link";
import { Team, groupColors } from "@/data/teams";
import { getFlagUrl, cn } from "@/lib/utils";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link href={`/world-cup-2026/${team.id}`} className="group bg-navy-800/60 border border-white/5 rounded-2xl p-5 hover:bg-navy-800/90 hover:border-white/15 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 block">
      {/* Flag */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-4" style={{ paddingBottom: "62.5%" }}>
        <Image
          src={getFlagUrl(team.countryCode, 160)}
          alt={team.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>

      {/* Team info */}
      <div className="space-y-2">
        <h3 className="text-white font-bold text-base leading-tight">
          {team.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border", groupColors[team.group])}>
            Group {team.group}
          </span>
          <span className="text-slate-500 text-xs font-mono">{team.code}</span>
        </div>

        {/* FIFA Ranking */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-slate-500 text-xs">FIFA Ranking</span>
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-sm">#{team.fifaRanking}</span>
          </div>
        </div>

        {/* Confederation */}
        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-xs">Confederation</span>
          <span className="text-slate-400 text-xs font-medium">{team.continent}</span>
        </div>
      </div>
    </Link>
  );
}
