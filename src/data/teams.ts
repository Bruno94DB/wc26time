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
  { id: "mexico", name: "Mexico", shortName: "Mexico", code: "MEX", countryCode: "mx", group: "A", fifaRanking: 15, continent: "CONCACAF" },
  { id: "south-korea", name: "South Korea", shortName: "Korea", code: "KOR", countryCode: "kr", group: "A", fifaRanking: 25, continent: "AFC" },
  { id: "south-africa", name: "South Africa", shortName: "S. Africa", code: "RSA", countryCode: "za", group: "A", fifaRanking: 60, continent: "CAF" },
  { id: "czechia", name: "Czechia", shortName: "Czechia", code: "CZE", countryCode: "cz", group: "A", fifaRanking: 41, continent: "UEFA" },

  // Group B
  { id: "canada", name: "Canada", shortName: "Canada", code: "CAN", countryCode: "ca", group: "B", fifaRanking: 30, continent: "CONCACAF" },
  { id: "switzerland", name: "Switzerland", shortName: "Switzerland", code: "SUI", countryCode: "ch", group: "B", fifaRanking: 19, continent: "UEFA" },
  { id: "qatar", name: "Qatar", shortName: "Qatar", code: "QAT", countryCode: "qa", group: "B", fifaRanking: 55, continent: "AFC" },
  { id: "bosnia", name: "Bosnia & Herzegovina", shortName: "Bosnia", code: "BIH", countryCode: "ba", group: "B", fifaRanking: 90, continent: "UEFA" },

  // Group C
  { id: "brazil", name: "Brazil", shortName: "Brazil", code: "BRA", countryCode: "br", group: "C", fifaRanking: 6, continent: "CONMEBOL" },
  { id: "morocco", name: "Morocco", shortName: "Morocco", code: "MAR", countryCode: "ma", group: "C", fifaRanking: 8, continent: "CAF" },
  { id: "haiti", name: "Haiti", shortName: "Haiti", code: "HAI", countryCode: "ht", group: "C", fifaRanking: 100, continent: "CONCACAF" },
  { id: "scotland", name: "Scotland", shortName: "Scotland", code: "SCO", countryCode: "gb-sct", group: "C", fifaRanking: 43, continent: "UEFA" },

  // Group D
  { id: "usa", name: "United States", shortName: "USA", code: "USA", countryCode: "us", group: "D", fifaRanking: 16, continent: "CONCACAF" },
  { id: "paraguay", name: "Paraguay", shortName: "Paraguay", code: "PAR", countryCode: "py", group: "D", fifaRanking: 40, continent: "CONMEBOL" },
  { id: "australia", name: "Australia", shortName: "Australia", code: "AUS", countryCode: "au", group: "D", fifaRanking: 27, continent: "AFC" },
  { id: "turkey", name: "Turkey", shortName: "Turkey", code: "TUR", countryCode: "tr", group: "D", fifaRanking: 22, continent: "UEFA" },

  // Group E
  { id: "germany", name: "Germany", shortName: "Germany", code: "GER", countryCode: "de", group: "E", fifaRanking: 10, continent: "UEFA" },
  { id: "curacao", name: "Curaçao", shortName: "Curaçao", code: "CUW", countryCode: "cw", group: "E", fifaRanking: 82, continent: "CONCACAF" },
  { id: "ivory-coast", name: "Ivory Coast", shortName: "Ivory Coast", code: "CIV", countryCode: "ci", group: "E", fifaRanking: 34, continent: "CAF" },
  { id: "ecuador", name: "Ecuador", shortName: "Ecuador", code: "ECU", countryCode: "ec", group: "E", fifaRanking: 23, continent: "CONMEBOL" },

  // Group F
  { id: "netherlands", name: "Netherlands", shortName: "Netherlands", code: "NED", countryCode: "nl", group: "F", fifaRanking: 7, continent: "UEFA" },
  { id: "japan", name: "Japan", shortName: "Japan", code: "JPN", countryCode: "jp", group: "F", fifaRanking: 18, continent: "AFC" },
  { id: "tunisia", name: "Tunisia", shortName: "Tunisia", code: "TUN", countryCode: "tn", group: "F", fifaRanking: 44, continent: "CAF" },
  { id: "sweden", name: "Sweden", shortName: "Sweden", code: "SWE", countryCode: "se", group: "F", fifaRanking: 38, continent: "UEFA" },

  // Group G
  { id: "belgium", name: "Belgium", shortName: "Belgium", code: "BEL", countryCode: "be", group: "G", fifaRanking: 9, continent: "UEFA" },
  { id: "egypt", name: "Egypt", shortName: "Egypt", code: "EGY", countryCode: "eg", group: "G", fifaRanking: 29, continent: "CAF" },
  { id: "iran", name: "Iran", shortName: "Iran", code: "IRN", countryCode: "ir", group: "G", fifaRanking: 21, continent: "AFC" },
  { id: "new-zealand", name: "New Zealand", shortName: "N. Zealand", code: "NZL", countryCode: "nz", group: "G", fifaRanking: 85, continent: "OFC" },

  // Group H
  { id: "spain", name: "Spain", shortName: "Spain", code: "ESP", countryCode: "es", group: "H", fifaRanking: 2, continent: "UEFA" },
  { id: "cape-verde", name: "Cape Verde", shortName: "C. Verde", code: "CPV", countryCode: "cv", group: "H", fifaRanking: 69, continent: "CAF" },
  { id: "saudi-arabia", name: "Saudi Arabia", shortName: "Saudi Arabia", code: "KSA", countryCode: "sa", group: "H", fifaRanking: 61, continent: "AFC" },
  { id: "uruguay", name: "Uruguay", shortName: "Uruguay", code: "URU", countryCode: "uy", group: "H", fifaRanking: 17, continent: "CONMEBOL" },

  // Group I
  { id: "france", name: "France", shortName: "France", code: "FRA", countryCode: "fr", group: "I", fifaRanking: 1, continent: "UEFA" },
  { id: "senegal", name: "Senegal", shortName: "Senegal", code: "SEN", countryCode: "sn", group: "I", fifaRanking: 14, continent: "CAF" },
  { id: "norway", name: "Norway", shortName: "Norway", code: "NOR", countryCode: "no", group: "I", fifaRanking: 31, continent: "UEFA" },
  { id: "iraq", name: "Iraq", shortName: "Iraq", code: "IRQ", countryCode: "iq", group: "I", fifaRanking: 57, continent: "AFC" },

  // Group J
  { id: "argentina", name: "Argentina", shortName: "Argentina", code: "ARG", countryCode: "ar", group: "J", fifaRanking: 3, continent: "CONMEBOL" },
  { id: "algeria", name: "Algeria", shortName: "Algeria", code: "ALG", countryCode: "dz", group: "J", fifaRanking: 28, continent: "CAF" },
  { id: "austria", name: "Austria", shortName: "Austria", code: "AUT", countryCode: "at", group: "J", fifaRanking: 24, continent: "UEFA" },
  { id: "jordan", name: "Jordan", shortName: "Jordan", code: "JOR", countryCode: "jo", group: "J", fifaRanking: 63, continent: "AFC" },

  // Group K
  { id: "portugal", name: "Portugal", shortName: "Portugal", code: "POR", countryCode: "pt", group: "K", fifaRanking: 5, continent: "UEFA" },
  { id: "dr-congo", name: "DR Congo", shortName: "DR Congo", code: "COD", countryCode: "cd", group: "K", fifaRanking: 46, continent: "CAF" },
  { id: "uzbekistan", name: "Uzbekistan", shortName: "Uzbekistan", code: "UZB", countryCode: "uz", group: "K", fifaRanking: 50, continent: "AFC" },
  { id: "colombia", name: "Colombia", shortName: "Colombia", code: "COL", countryCode: "co", group: "K", fifaRanking: 13, continent: "CONMEBOL" },

  // Group L
  { id: "england", name: "England", shortName: "England", code: "ENG", countryCode: "gb-eng", group: "L", fifaRanking: 4, continent: "UEFA" },
  { id: "croatia", name: "Croatia", shortName: "Croatia", code: "CRO", countryCode: "hr", group: "L", fifaRanking: 11, continent: "UEFA" },
  { id: "ghana", name: "Ghana", shortName: "Ghana", code: "GHA", countryCode: "gh", group: "L", fifaRanking: 74, continent: "CAF" },
  { id: "panama", name: "Panama", shortName: "Panama", code: "PAN", countryCode: "pa", group: "L", fifaRanking: 33, continent: "CONCACAF" },
];

export const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

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
};
