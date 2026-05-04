export interface Match {
  id: string;
  slug: string;
  homeTeamId: string;
  awayTeamId: string;
  stadiumId: string;
  kickoff: string; // ISO UTC
  group?: string;
  round: "group" | "r32" | "r16" | "qf" | "sf" | "3rd" | "final";
  matchday?: number;
  matchNumber: number;
}

export const matches: Match[] = [
  // Group A
  { id: "m1", slug: "usa-vs-panama", homeTeamId: "usa", awayTeamId: "panama", stadiumId: "azteca", kickoff: "2026-06-11T23:00:00Z", group: "A", round: "group", matchday: 1, matchNumber: 1 },
  { id: "m2", slug: "morocco-vs-panama", homeTeamId: "morocco", awayTeamId: "panama", stadiumId: "hard-rock", kickoff: "2026-06-15T17:00:00Z", group: "A", round: "group", matchday: 2, matchNumber: 7 },
  { id: "m3", slug: "usa-vs-morocco", homeTeamId: "usa", awayTeamId: "morocco", stadiumId: "att", kickoff: "2026-06-19T02:00:00Z", group: "A", round: "group", matchday: 3, matchNumber: 13 },

  // Group B
  { id: "m4", slug: "mexico-vs-jamaica", homeTeamId: "mexico", awayTeamId: "jamaica", stadiumId: "akron", kickoff: "2026-06-12T01:00:00Z", group: "B", round: "group", matchday: 1, matchNumber: 2 },
  { id: "m5", slug: "honduras-vs-mexico", homeTeamId: "honduras", awayTeamId: "mexico", stadiumId: "bbva", kickoff: "2026-06-16T20:00:00Z", group: "B", round: "group", matchday: 2, matchNumber: 8 },
  { id: "m6", slug: "jamaica-vs-honduras", homeTeamId: "jamaica", awayTeamId: "honduras", stadiumId: "gillette", kickoff: "2026-06-20T20:00:00Z", group: "B", round: "group", matchday: 3, matchNumber: 14 },

  // Group C
  { id: "m7", slug: "canada-vs-trinidad", homeTeamId: "canada", awayTeamId: "trinidad", stadiumId: "bmo", kickoff: "2026-06-12T20:00:00Z", group: "C", round: "group", matchday: 1, matchNumber: 3 },
  { id: "m8", slug: "costa-rica-vs-canada", homeTeamId: "costa-rica", awayTeamId: "canada", stadiumId: "lumen", kickoff: "2026-06-16T23:00:00Z", group: "C", round: "group", matchday: 2, matchNumber: 9 },
  { id: "m9", slug: "trinidad-vs-costa-rica", homeTeamId: "trinidad", awayTeamId: "costa-rica", stadiumId: "bc-place", kickoff: "2026-06-20T23:00:00Z", group: "C", round: "group", matchday: 3, matchNumber: 15 },

  // Group D
  { id: "m10", slug: "argentina-vs-bolivia", homeTeamId: "argentina", awayTeamId: "bolivia", stadiumId: "metlife", kickoff: "2026-06-13T00:00:00Z", group: "D", round: "group", matchday: 1, matchNumber: 4 },
  { id: "m11", slug: "peru-vs-argentina", homeTeamId: "peru", awayTeamId: "argentina", stadiumId: "lincoln", kickoff: "2026-06-17T20:00:00Z", group: "D", round: "group", matchday: 2, matchNumber: 10 },
  { id: "m12", slug: "bolivia-vs-peru", homeTeamId: "bolivia", awayTeamId: "peru", stadiumId: "empower", kickoff: "2026-06-21T20:00:00Z", group: "D", round: "group", matchday: 3, matchNumber: 16 },

  // Group E
  { id: "m13", slug: "brazil-vs-ecuador", homeTeamId: "brazil", awayTeamId: "ecuador", stadiumId: "sofi", kickoff: "2026-06-13T22:00:00Z", group: "E", round: "group", matchday: 1, matchNumber: 5 },
  { id: "m14", slug: "colombia-vs-brazil", homeTeamId: "colombia", awayTeamId: "brazil", stadiumId: "arrowhead", kickoff: "2026-06-17T23:00:00Z", group: "E", round: "group", matchday: 2, matchNumber: 11 },
  { id: "m15", slug: "ecuador-vs-colombia", homeTeamId: "ecuador", awayTeamId: "colombia", stadiumId: "allegiant", kickoff: "2026-06-21T23:00:00Z", group: "E", round: "group", matchday: 3, matchNumber: 17 },

  // Group F
  { id: "m16", slug: "uruguay-vs-chile", homeTeamId: "uruguay", awayTeamId: "chile", stadiumId: "levis", kickoff: "2026-06-14T00:00:00Z", group: "F", round: "group", matchday: 1, matchNumber: 6 },
  { id: "m17", slug: "paraguay-vs-uruguay", homeTeamId: "paraguay", awayTeamId: "uruguay", stadiumId: "att", kickoff: "2026-06-18T20:00:00Z", group: "F", round: "group", matchday: 2, matchNumber: 12 },
  { id: "m18", slug: "chile-vs-paraguay", homeTeamId: "chile", awayTeamId: "paraguay", stadiumId: "metlife", kickoff: "2026-06-22T20:00:00Z", group: "F", round: "group", matchday: 3, matchNumber: 18 },

  // Group G
  { id: "m19", slug: "england-vs-serbia", homeTeamId: "england", awayTeamId: "serbia", stadiumId: "metlife", kickoff: "2026-06-14T20:00:00Z", group: "G", round: "group", matchday: 1, matchNumber: 19 },
  { id: "m20", slug: "slovakia-vs-england", homeTeamId: "slovakia", awayTeamId: "england", stadiumId: "sofi", kickoff: "2026-06-18T23:00:00Z", group: "G", round: "group", matchday: 2, matchNumber: 25 },
  { id: "m21", slug: "serbia-vs-slovakia", homeTeamId: "serbia", awayTeamId: "slovakia", stadiumId: "lincoln", kickoff: "2026-06-22T23:00:00Z", group: "G", round: "group", matchday: 3, matchNumber: 31 },

  // Group H
  { id: "m22", slug: "germany-vs-hungary", homeTeamId: "germany", awayTeamId: "hungary", stadiumId: "allegiant", kickoff: "2026-06-15T00:00:00Z", group: "H", round: "group", matchday: 1, matchNumber: 20 },
  { id: "m23", slug: "scotland-vs-germany", homeTeamId: "scotland", awayTeamId: "germany", stadiumId: "lumen", kickoff: "2026-06-19T20:00:00Z", group: "H", round: "group", matchday: 2, matchNumber: 26 },
  { id: "m24", slug: "hungary-vs-scotland", homeTeamId: "hungary", awayTeamId: "scotland", stadiumId: "arrowhead", kickoff: "2026-06-23T20:00:00Z", group: "H", round: "group", matchday: 3, matchNumber: 32 },

  // Group I
  { id: "m25", slug: "france-vs-belgium", homeTeamId: "france", awayTeamId: "belgium", stadiumId: "att", kickoff: "2026-06-15T20:00:00Z", group: "I", round: "group", matchday: 1, matchNumber: 21 },
  { id: "m26", slug: "ukraine-vs-france", homeTeamId: "ukraine", awayTeamId: "france", stadiumId: "hard-rock", kickoff: "2026-06-19T23:00:00Z", group: "I", round: "group", matchday: 2, matchNumber: 27 },
  { id: "m27", slug: "belgium-vs-ukraine", homeTeamId: "belgium", awayTeamId: "ukraine", stadiumId: "bc-place", kickoff: "2026-06-23T23:00:00Z", group: "I", round: "group", matchday: 3, matchNumber: 33 },

  // Group J
  { id: "m28", slug: "spain-vs-portugal", homeTeamId: "spain", awayTeamId: "portugal", stadiumId: "levis", kickoff: "2026-06-15T23:00:00Z", group: "J", round: "group", matchday: 1, matchNumber: 22 },
  { id: "m29", slug: "turkey-vs-spain", homeTeamId: "turkey", awayTeamId: "spain", stadiumId: "empower", kickoff: "2026-06-20T20:00:00Z", group: "J", round: "group", matchday: 2, matchNumber: 28 },
  { id: "m30", slug: "portugal-vs-turkey", homeTeamId: "portugal", awayTeamId: "turkey", stadiumId: "gillette", kickoff: "2026-06-24T20:00:00Z", group: "J", round: "group", matchday: 3, matchNumber: 34 },

  // Group K
  { id: "m31", slug: "netherlands-vs-romania", homeTeamId: "netherlands", awayTeamId: "romania", stadiumId: "arrowhead", kickoff: "2026-06-16T00:00:00Z", group: "K", round: "group", matchday: 1, matchNumber: 23 },
  { id: "m32", slug: "greece-vs-netherlands", homeTeamId: "greece", awayTeamId: "netherlands", stadiumId: "gillette", kickoff: "2026-06-20T23:00:00Z", group: "K", round: "group", matchday: 2, matchNumber: 29 },
  { id: "m33", slug: "romania-vs-greece", homeTeamId: "romania", awayTeamId: "greece", stadiumId: "bmo", kickoff: "2026-06-24T23:00:00Z", group: "K", round: "group", matchday: 3, matchNumber: 35 },

  // Group L
  { id: "m34", slug: "italy-vs-croatia", homeTeamId: "italy", awayTeamId: "croatia", stadiumId: "empower", kickoff: "2026-06-16T20:00:00Z", group: "L", round: "group", matchday: 1, matchNumber: 24 },
  { id: "m35", slug: "albania-vs-italy", homeTeamId: "albania", awayTeamId: "italy", stadiumId: "allegiant", kickoff: "2026-06-21T20:00:00Z", group: "L", round: "group", matchday: 2, matchNumber: 30 },
  { id: "m36", slug: "croatia-vs-albania", homeTeamId: "croatia", awayTeamId: "albania", stadiumId: "levis", kickoff: "2026-06-25T20:00:00Z", group: "L", round: "group", matchday: 3, matchNumber: 36 },

  // Group M
  { id: "m37", slug: "senegal-vs-cameroon", homeTeamId: "senegal", awayTeamId: "cameroon", stadiumId: "azteca", kickoff: "2026-06-17T00:00:00Z", group: "M", round: "group", matchday: 1, matchNumber: 37 },
  { id: "m38", slug: "egypt-vs-senegal", homeTeamId: "egypt", awayTeamId: "senegal", stadiumId: "bbva", kickoff: "2026-06-21T23:00:00Z", group: "M", round: "group", matchday: 2, matchNumber: 43 },
  { id: "m39", slug: "cameroon-vs-egypt", homeTeamId: "cameroon", awayTeamId: "egypt", stadiumId: "lincoln", kickoff: "2026-06-25T23:00:00Z", group: "M", round: "group", matchday: 3, matchNumber: 49 },

  // Group N
  { id: "m40", slug: "nigeria-vs-ghana", homeTeamId: "nigeria", awayTeamId: "ghana", stadiumId: "akron", kickoff: "2026-06-17T20:00:00Z", group: "N", round: "group", matchday: 1, matchNumber: 38 },
  { id: "m41", slug: "tunisia-vs-nigeria", homeTeamId: "tunisia", awayTeamId: "nigeria", stadiumId: "bc-place", kickoff: "2026-06-22T20:00:00Z", group: "N", round: "group", matchday: 2, matchNumber: 44 },
  { id: "m42", slug: "ghana-vs-tunisia", homeTeamId: "ghana", awayTeamId: "tunisia", stadiumId: "hard-rock", kickoff: "2026-06-26T20:00:00Z", group: "N", round: "group", matchday: 3, matchNumber: 50 },

  // Group O
  { id: "m43", slug: "japan-vs-south-korea", homeTeamId: "japan", awayTeamId: "south-korea", stadiumId: "sofi", kickoff: "2026-06-18T00:00:00Z", group: "O", round: "group", matchday: 1, matchNumber: 39 },
  { id: "m44", slug: "australia-vs-japan", homeTeamId: "australia", awayTeamId: "japan", stadiumId: "att", kickoff: "2026-06-22T23:00:00Z", group: "O", round: "group", matchday: 2, matchNumber: 45 },
  { id: "m45", slug: "south-korea-vs-australia", homeTeamId: "south-korea", awayTeamId: "australia", stadiumId: "metlife", kickoff: "2026-06-26T23:00:00Z", group: "O", round: "group", matchday: 3, matchNumber: 51 },

  // Group P
  { id: "m46", slug: "saudi-arabia-vs-iran", homeTeamId: "saudi-arabia", awayTeamId: "iran", stadiumId: "lumen", kickoff: "2026-06-18T20:00:00Z", group: "P", round: "group", matchday: 1, matchNumber: 40 },
  { id: "m47", slug: "qatar-vs-saudi-arabia", homeTeamId: "qatar", awayTeamId: "saudi-arabia", stadiumId: "arrowhead", kickoff: "2026-06-23T20:00:00Z", group: "P", round: "group", matchday: 2, matchNumber: 46 },
  { id: "m48", slug: "iran-vs-qatar", homeTeamId: "iran", awayTeamId: "qatar", stadiumId: "sofi", kickoff: "2026-06-27T20:00:00Z", group: "P", round: "group", matchday: 3, matchNumber: 52 },

  // Round of 32 (sample)
  { id: "r32-1", slug: "r32-match-1", homeTeamId: "usa", awayTeamId: "argentina", stadiumId: "metlife", kickoff: "2026-07-01T20:00:00Z", round: "r32", matchNumber: 65 },
  { id: "r32-2", slug: "r32-match-2", homeTeamId: "brazil", awayTeamId: "france", stadiumId: "sofi", kickoff: "2026-07-02T00:00:00Z", round: "r32", matchNumber: 66 },
  { id: "r32-3", slug: "r32-match-3", homeTeamId: "spain", awayTeamId: "germany", stadiumId: "att", kickoff: "2026-07-02T20:00:00Z", round: "r32", matchNumber: 67 },
  { id: "r32-4", slug: "r32-match-4", homeTeamId: "england", awayTeamId: "netherlands", stadiumId: "levis", kickoff: "2026-07-03T00:00:00Z", round: "r32", matchNumber: 68 },

  // Round of 16 (sample)
  { id: "r16-1", slug: "r16-match-1", homeTeamId: "brazil", awayTeamId: "spain", stadiumId: "metlife", kickoff: "2026-07-07T20:00:00Z", round: "r16", matchNumber: 73 },
  { id: "r16-2", slug: "r16-match-2", homeTeamId: "france", awayTeamId: "england", stadiumId: "att", kickoff: "2026-07-08T00:00:00Z", round: "r16", matchNumber: 74 },

  // Quarterfinals
  { id: "qf-1", slug: "qf-match-1", homeTeamId: "brazil", awayTeamId: "france", stadiumId: "metlife", kickoff: "2026-07-11T20:00:00Z", round: "qf", matchNumber: 77 },

  // Semifinals
  { id: "sf-1", slug: "sf-match-1", homeTeamId: "brazil", awayTeamId: "spain", stadiumId: "att", kickoff: "2026-07-14T20:00:00Z", round: "sf", matchNumber: 79 },

  // Final
  { id: "final", slug: "wc-2026-final", homeTeamId: "brazil", awayTeamId: "france", stadiumId: "metlife", kickoff: "2026-07-19T20:00:00Z", round: "final", matchNumber: 80 },
];

export const getMatchBySlug = (slug: string): Match | undefined =>
  matches.find((m) => m.slug === slug);

export const getMatchesByGroup = (group: string): Match[] =>
  matches.filter((m) => m.group === group);

export const getMatchesByTeam = (teamId: string): Match[] =>
  matches.filter((m) => m.homeTeamId === teamId || m.awayTeamId === teamId);

export const roundLabels: Record<string, string> = {
  group: "Group Stage",
  r32: "Round of 32",
  r16: "Round of 16",
  qf: "Quarterfinal",
  sf: "Semifinal",
  "3rd": "Third Place",
  final: "Final",
};
