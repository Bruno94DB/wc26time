import Image from "next/image";
import { getTeamsByGroup } from "@/data/teams";
import { getFlagUrl } from "@/lib/utils";

interface GroupStandingsProps {
  group: string;
}

export default function GroupStandings({ group }: GroupStandingsProps) {
  const teams = getTeamsByGroup(group).sort((a, b) => a.fifaRanking - b.fifaRanking);

  return (
    <div className="bg-navy-800/40 border border-white/8 rounded-xl overflow-hidden mb-6">
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-white font-bold text-sm">Group {group} Standings</h3>
        <span className="text-slate-600 text-xs">Pre-tournament</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-500 text-[11px] uppercase tracking-wider border-b border-white/5">
              <th className="text-left px-4 py-2 w-6">#</th>
              <th className="text-left px-4 py-2">Team</th>
              <th className="text-center px-3 py-2">P</th>
              <th className="text-center px-3 py-2">W</th>
              <th className="text-center px-3 py-2">D</th>
              <th className="text-center px-3 py-2">L</th>
              <th className="text-center px-3 py-2">GD</th>
              <th className="text-center px-3 py-2 text-slate-400 font-bold">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {teams.map((team, index) => (
              <tr key={team.id} className="hover:bg-white/5 transition-colors">
                <td className="px-4 py-3 text-slate-600 text-xs font-medium">{index + 1}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex-shrink-0 rounded overflow-hidden" style={{ width: 28, height: 20 }}>
                      <Image
                        src={getFlagUrl(team.countryCode, 40)}
                        alt={team.name}
                        fill
                        className="object-cover"
                        sizes="28px"
                      />
                    </div>
                    <span className="text-white font-medium text-sm">{team.name}</span>
                    <span className="text-slate-600 text-xs hidden sm:inline">#{team.fifaRanking} FIFA</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-center text-slate-500">0</td>
                <td className="px-3 py-3 text-center text-slate-500">0</td>
                <td className="px-3 py-3 text-center text-slate-500">0</td>
                <td className="px-3 py-3 text-center text-slate-500">0</td>
                <td className="px-3 py-3 text-center text-slate-500">0</td>
                <td className="px-3 py-3 text-center text-white font-bold">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
