export interface Team {
  id: string;
  name: string;
  shortName: string;
  code: string;
  countryCode: string;
  group: string;
  fifaRanking: number;
  continent: string;
}

export const teams: Team[] = [
  // Group A
  { id: "usa", name: "United States", shortName: "USA", code: "USA", countryCode: "us", group: "A", fifaRanking: 11, continent: "CONCACAF" },
  { id: "panama", name: "Panama", shortName: "Panama", code: "PAN", countryCode: "pa", group: "A", fifaRanking: 43, continent: "CONCACAF" },
  { id: "morocco", name: "Morocco", shortName: "Morocco", code: "MAR", countryCode: "ma", group: "A", fifaRanking: 14, continent: "CAF" },

  // Group B
  { id: "mexico", name: "Mexico", shortName: "Mexico", code: "MEX", countryCode: "mx", group: "B", fifaRanking: 16, continent: "CONCACAF" },
  { id: "jamaica", name: "Jamaica", shortName: "Jamaica", code: "JAM", countryCode: "jm", group: "B", fifaRanking: 55, continent: "CONCACAF" },
  { id: "honduras", name: "Honduras", shortName: "Honduras", code: "HON", countryCode: "hn", group: "B", fifaRanking: 78, continent: "CONCACAF" },

  // Group C
  { id: "canada", name: "Canada", shortName: "Canada", code: "CAN", countryCode: "ca", group: "C", fifaRanking: 38, continent: "CONCACAF" },
  { id: "trinidad", name: "Trinidad & Tobago", shortName: "Trinidad", code: "TRI", countryCode: "tt", group: "C", fifaRanking: 95, continent: "CONCACAF" },
  { id: "costa-rica", name: "Costa Rica", shortName: "Costa Rica", code: "CRC", countryCode: "cr", group: "C", fifaRanking: 49, continent: "CONCACAF" },

  // Group D
  { id: "argentina", name: "Argentina", shortName: "Argentina", code: "ARG", countryCode: "ar", group: "D", fifaRanking: 1, continent: "CONMEBOL" },
  { id: "bolivia", name: "Bolivia", shortName: "Bolivia", code: "BOL", countryCode: "bo", group: "D", fifaRanking: 85, continent: "CONMEBOL" },
  { id: "peru", name: "Peru", shortName: "Peru", code: "PER", countryCode: "pe", group: "D", fifaRanking: 62, continent: "CONMEBOL" },

  // Group E
  { id: "brazil", name: "Brazil", shortName: "Brazil", code: "BRA", countryCode: "br", group: "E", fifaRanking: 5, continent: "CONMEBOL" },
  { id: "ecuador", name: "Ecuador", shortName: "Ecuador", code: "ECU", countryCode: "ec", group: "E", fifaRanking: 34, continent: "CONMEBOL" },
  { id: "colombia", name: "Colombia", shortName: "Colombia", code: "COL", countryCode: "co", group: "E", fifaRanking: 19, continent: "CONMEBOL" },

  // Group F
  { id: "uruguay", name: "Uruguay", shortName: "Uruguay", code: "URU", countryCode: "uy", group: "F", fifaRanking: 17, continent: "CONMEBOL" },
  { id: "chile", name: "Chile", shortName: "Chile", code: "CHI", countryCode: "cl", group: "F", fifaRanking: 33, continent: "CONMEBOL" },
  { id: "paraguay", name: "Paraguay", shortName: "Paraguay", code: "PAR", countryCode: "py", group: "F", fifaRanking: 60, continent: "CONMEBOL" },

  // Group G
  { id: "england", name: "England", shortName: "England", code: "ENG", countryCode: "gb-eng", group: "G", fifaRanking: 4, continent: "UEFA" },
  { id: "serbia", name: "Serbia", shortName: "Serbia", code: "SRB", countryCode: "rs", group: "G", fifaRanking: 33, continent: "UEFA" },
  { id: "slovakia", name: "Slovakia", shortName: "Slovakia", code: "SVK", countryCode: "sk", group: "G", fifaRanking: 48, continent: "UEFA" },

  // Group H
  { id: "germany", name: "Germany", shortName: "Germany", code: "GER", countryCode: "de", group: "H", fifaRanking: 12, continent: "UEFA" },
  { id: "hungary", name: "Hungary", shortName: "Hungary", code: "HUN", countryCode: "hu", group: "H", fifaRanking: 29, continent: "UEFA" },
  { id: "scotland", name: "Scotland", shortName: "Scotland", code: "SCO", countryCode: "gb-sct", group: "H", fifaRanking: 35, continent: "UEFA" },

  // Group I
  { id: "france", name: "France", shortName: "France", code: "FRA", countryCode: "fr", group: "I", fifaRanking: 2, continent: "UEFA" },
  { id: "belgium", name: "Belgium", shortName: "Belgium", code: "BEL", countryCode: "be", group: "I", fifaRanking: 3, continent: "UEFA" },
  { id: "ukraine", name: "Ukraine", shortName: "Ukraine", code: "UKR", countryCode: "ua", group: "I", fifaRanking: 22, continent: "UEFA" },

  // Group J
  { id: "spain", name: "Spain", shortName: "Spain", code: "ESP", countryCode: "es", group: "J", fifaRanking: 6, continent: "UEFA" },
  { id: "portugal", name: "Portugal", shortName: "Portugal", code: "POR", countryCode: "pt", group: "J", fifaRanking: 7, continent: "UEFA" },
  { id: "turkey", name: "Turkey", shortName: "Turkey", code: "TUR", countryCode: "tr", group: "J", fifaRanking: 26, continent: "UEFA" },

  // Group K
  { id: "netherlands", name: "Netherlands", shortName: "Netherlands", code: "NED", countryCode: "nl", group: "K", fifaRanking: 8, continent: "UEFA" },
  { id: "romania", name: "Romania", shortName: "Romania", code: "ROU", countryCode: "ro", group: "K", fifaRanking: 41, continent: "UEFA" },
  { id: "greece", name: "Greece", shortName: "Greece", code: "GRE", countryCode: "gr", group: "K", fifaRanking: 46, continent: "UEFA" },

  // Group L
  { id: "italy", name: "Italy", shortName: "Italy", code: "ITA", countryCode: "it", group: "L", fifaRanking: 9, continent: "UEFA" },
  { id: "croatia", name: "Croatia", shortName: "Croatia", code: "CRO", countryCode: "hr", group: "L", fifaRanking: 10, continent: "UEFA" },
  { id: "albania", name: "Albania", shortName: "Albania", code: "ALB", countryCode: "al", group: "L", fifaRanking: 66, continent: "UEFA" },

  // Group M
  { id: "senegal", name: "Senegal", shortName: "Senegal", code: "SEN", countryCode: "sn", group: "M", fifaRanking: 20, continent: "CAF" },
  { id: "cameroon", name: "Cameroon", shortName: "Cameroon", code: "CMR", countryCode: "cm", group: "M", fifaRanking: 47, continent: "CAF" },
  { id: "egypt", name: "Egypt", shortName: "Egypt", code: "EGY", countryCode: "eg", group: "M", fifaRanking: 36, continent: "CAF" },

  // Group N
  { id: "nigeria", name: "Nigeria", shortName: "Nigeria", code: "NGA", countryCode: "ng", group: "N", fifaRanking: 28, continent: "CAF" },
  { id: "ghana", name: "Ghana", shortName: "Ghana", code: "GHA", countryCode: "gh", group: "N", fifaRanking: 56, continent: "CAF" },
  { id: "tunisia", name: "Tunisia", shortName: "Tunisia", code: "TUN", countryCode: "tn", group: "N", fifaRanking: 31, continent: "CAF" },

  // Group O
  { id: "japan", name: "Japan", shortName: "Japan", code: "JPN", countryCode: "jp", group: "O", fifaRanking: 15, continent: "AFC" },
  { id: "south-korea", name: "South Korea", shortName: "South Korea", code: "KOR", countryCode: "kr", group: "O", fifaRanking: 23, continent: "AFC" },
  { id: "australia", name: "Australia", shortName: "Australia", code: "AUS", countryCode: "au", group: "O", fifaRanking: 24, continent: "AFC" },

  // Group P
  { id: "saudi-arabia", name: "Saudi Arabia", shortName: "Saudi Arabia", code: "KSA", countryCode: "sa", group: "P", fifaRanking: 56, continent: "AFC" },
  { id: "iran", name: "Iran", shortName: "Iran", code: "IRN", countryCode: "ir", group: "P", fifaRanking: 22, continent: "AFC" },
  { id: "qatar", name: "Qatar", shortName: "Qatar", code: "QAT", countryCode: "qa", group: "P", fifaRanking: 37, continent: "AFC" },
];

export const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];

export const getTeamById = (id: string): Team | undefined =>
  teams.find((t) => t.id === id);

export const getTeamsByGroup = (group: string): Team[] =>
  teams.filter((t) => t.group === group);

export const groupColors: Record<string, string> = {
  A: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  B: "bg-green-500/20 text-green-400 border-green-500/30",
  C: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  D: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  E: "bg-red-500/20 text-red-400 border-red-500/30",
  F: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  G: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  H: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  I: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  J: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  K: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  L: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  M: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  N: "bg-lime-500/20 text-lime-400 border-lime-500/30",
  O: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  P: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};
