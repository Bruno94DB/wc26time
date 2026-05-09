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
  { id: "m1",  slug: "mexico-vs-south-africa",   homeTeamId: "mexico",       awayTeamId: "south-africa", stadiumId: "azteca",       kickoff: "2026-06-11T19:00:00Z", group: "A", round: "group", matchday: 1, matchNumber: 1 },
  { id: "m2",  slug: "south-korea-vs-czechia",   homeTeamId: "south-korea",  awayTeamId: "czechia",      stadiumId: "akron",        kickoff: "2026-06-12T02:00:00Z", group: "A", round: "group", matchday: 1, matchNumber: 2 },
  { id: "m3",  slug: "czechia-vs-south-africa",  homeTeamId: "czechia",      awayTeamId: "south-africa", stadiumId: "mercedes-benz",kickoff: "2026-06-18T16:00:00Z", group: "A", round: "group", matchday: 2, matchNumber: 3 },
  { id: "m4",  slug: "mexico-vs-south-korea",    homeTeamId: "mexico",       awayTeamId: "south-korea",  stadiumId: "akron",        kickoff: "2026-06-19T01:00:00Z", group: "A", round: "group", matchday: 2, matchNumber: 4 },
  { id: "m5",  slug: "south-africa-vs-south-korea", homeTeamId: "south-africa", awayTeamId: "south-korea", stadiumId: "bbva",      kickoff: "2026-06-25T01:00:00Z", group: "A", round: "group", matchday: 3, matchNumber: 5 },
  { id: "m6",  slug: "czechia-vs-mexico",        homeTeamId: "czechia",      awayTeamId: "mexico",       stadiumId: "azteca",       kickoff: "2026-06-25T01:00:00Z", group: "A", round: "group", matchday: 3, matchNumber: 6 },

  // Group B
  { id: "m7",  slug: "canada-vs-bosnia",         homeTeamId: "canada",       awayTeamId: "bosnia",       stadiumId: "bmo",          kickoff: "2026-06-12T19:00:00Z", group: "B", round: "group", matchday: 1, matchNumber: 7 },
  { id: "m8",  slug: "qatar-vs-switzerland",     homeTeamId: "qatar",        awayTeamId: "switzerland",  stadiumId: "levis",        kickoff: "2026-06-13T19:00:00Z", group: "B", round: "group", matchday: 1, matchNumber: 8 },
  { id: "m9",  slug: "switzerland-vs-bosnia",    homeTeamId: "switzerland",  awayTeamId: "bosnia",       stadiumId: "sofi",         kickoff: "2026-06-18T19:00:00Z", group: "B", round: "group", matchday: 2, matchNumber: 9 },
  { id: "m10", slug: "canada-vs-qatar",          homeTeamId: "canada",       awayTeamId: "qatar",        stadiumId: "bc-place",     kickoff: "2026-06-18T22:00:00Z", group: "B", round: "group", matchday: 2, matchNumber: 10 },
  { id: "m11", slug: "switzerland-vs-canada",    homeTeamId: "switzerland",  awayTeamId: "canada",       stadiumId: "bc-place",     kickoff: "2026-06-24T19:00:00Z", group: "B", round: "group", matchday: 3, matchNumber: 11 },
  { id: "m12", slug: "bosnia-vs-qatar",          homeTeamId: "bosnia",       awayTeamId: "qatar",        stadiumId: "lumen",        kickoff: "2026-06-24T19:00:00Z", group: "B", round: "group", matchday: 3, matchNumber: 12 },

  // Group C
  { id: "m13", slug: "brazil-vs-morocco",        homeTeamId: "brazil",       awayTeamId: "morocco",      stadiumId: "metlife",      kickoff: "2026-06-13T22:00:00Z", group: "C", round: "group", matchday: 1, matchNumber: 13 },
  { id: "m14", slug: "haiti-vs-scotland",        homeTeamId: "haiti",        awayTeamId: "scotland",     stadiumId: "gillette",     kickoff: "2026-06-14T01:00:00Z", group: "C", round: "group", matchday: 1, matchNumber: 14 },
  { id: "m15", slug: "scotland-vs-morocco",      homeTeamId: "scotland",     awayTeamId: "morocco",      stadiumId: "gillette",     kickoff: "2026-06-19T22:00:00Z", group: "C", round: "group", matchday: 2, matchNumber: 15 },
  { id: "m16", slug: "brazil-vs-haiti",          homeTeamId: "brazil",       awayTeamId: "haiti",        stadiumId: "lincoln",      kickoff: "2026-06-20T00:30:00Z", group: "C", round: "group", matchday: 2, matchNumber: 16 },
  { id: "m17", slug: "morocco-vs-haiti",         homeTeamId: "morocco",      awayTeamId: "haiti",        stadiumId: "mercedes-benz",kickoff: "2026-06-24T22:00:00Z", group: "C", round: "group", matchday: 3, matchNumber: 17 },
  { id: "m18", slug: "scotland-vs-brazil",       homeTeamId: "scotland",     awayTeamId: "brazil",       stadiumId: "hard-rock",    kickoff: "2026-06-24T22:00:00Z", group: "C", round: "group", matchday: 3, matchNumber: 18 },

  // Group D
  { id: "m19", slug: "usa-vs-paraguay",          homeTeamId: "usa",          awayTeamId: "paraguay",     stadiumId: "sofi",         kickoff: "2026-06-13T01:00:00Z", group: "D", round: "group", matchday: 1, matchNumber: 19 },
  { id: "m20", slug: "australia-vs-turkey",      homeTeamId: "australia",    awayTeamId: "turkey",       stadiumId: "bc-place",     kickoff: "2026-06-14T04:00:00Z", group: "D", round: "group", matchday: 1, matchNumber: 20 },
  { id: "m21", slug: "usa-vs-australia",         homeTeamId: "usa",          awayTeamId: "australia",    stadiumId: "lumen",        kickoff: "2026-06-19T19:00:00Z", group: "D", round: "group", matchday: 2, matchNumber: 21 },
  { id: "m22", slug: "turkey-vs-paraguay",       homeTeamId: "turkey",       awayTeamId: "paraguay",     stadiumId: "levis",        kickoff: "2026-06-20T03:00:00Z", group: "D", round: "group", matchday: 2, matchNumber: 22 },
  { id: "m23", slug: "turkey-vs-usa",            homeTeamId: "turkey",       awayTeamId: "usa",          stadiumId: "sofi",         kickoff: "2026-06-26T02:00:00Z", group: "D", round: "group", matchday: 3, matchNumber: 23 },
  { id: "m24", slug: "paraguay-vs-australia",    homeTeamId: "paraguay",     awayTeamId: "australia",    stadiumId: "levis",        kickoff: "2026-06-26T02:00:00Z", group: "D", round: "group", matchday: 3, matchNumber: 24 },

  // Group E
  { id: "m25", slug: "germany-vs-curacao",       homeTeamId: "germany",      awayTeamId: "curacao",      stadiumId: "nrg",          kickoff: "2026-06-14T17:00:00Z", group: "E", round: "group", matchday: 1, matchNumber: 25 },
  { id: "m26", slug: "ivory-coast-vs-ecuador",   homeTeamId: "ivory-coast",  awayTeamId: "ecuador",      stadiumId: "lincoln",      kickoff: "2026-06-14T23:00:00Z", group: "E", round: "group", matchday: 1, matchNumber: 26 },
  { id: "m27", slug: "germany-vs-ivory-coast",   homeTeamId: "germany",      awayTeamId: "ivory-coast",  stadiumId: "bmo",          kickoff: "2026-06-20T20:00:00Z", group: "E", round: "group", matchday: 2, matchNumber: 27 },
  { id: "m28", slug: "ecuador-vs-curacao",       homeTeamId: "ecuador",      awayTeamId: "curacao",      stadiumId: "arrowhead",    kickoff: "2026-06-21T00:00:00Z", group: "E", round: "group", matchday: 2, matchNumber: 28 },
  { id: "m29", slug: "curacao-vs-ivory-coast",   homeTeamId: "curacao",      awayTeamId: "ivory-coast",  stadiumId: "lincoln",      kickoff: "2026-06-25T20:00:00Z", group: "E", round: "group", matchday: 3, matchNumber: 29 },
  { id: "m30", slug: "ecuador-vs-germany",       homeTeamId: "ecuador",      awayTeamId: "germany",      stadiumId: "metlife",      kickoff: "2026-06-25T20:00:00Z", group: "E", round: "group", matchday: 3, matchNumber: 30 },

  // Group F
  { id: "m31", slug: "netherlands-vs-japan",     homeTeamId: "netherlands",  awayTeamId: "japan",        stadiumId: "att",          kickoff: "2026-06-14T20:00:00Z", group: "F", round: "group", matchday: 1, matchNumber: 31 },
  { id: "m32", slug: "sweden-vs-tunisia",        homeTeamId: "sweden",       awayTeamId: "tunisia",      stadiumId: "bbva",         kickoff: "2026-06-15T02:00:00Z", group: "F", round: "group", matchday: 1, matchNumber: 32 },
  { id: "m33", slug: "netherlands-vs-sweden",    homeTeamId: "netherlands",  awayTeamId: "sweden",       stadiumId: "nrg",          kickoff: "2026-06-20T17:00:00Z", group: "F", round: "group", matchday: 2, matchNumber: 33 },
  { id: "m34", slug: "tunisia-vs-japan",         homeTeamId: "tunisia",      awayTeamId: "japan",        stadiumId: "bbva",         kickoff: "2026-06-21T04:00:00Z", group: "F", round: "group", matchday: 2, matchNumber: 34 },
  { id: "m35", slug: "tunisia-vs-netherlands",   homeTeamId: "tunisia",      awayTeamId: "netherlands",  stadiumId: "arrowhead",    kickoff: "2026-06-25T23:00:00Z", group: "F", round: "group", matchday: 3, matchNumber: 35 },
  { id: "m36", slug: "japan-vs-sweden",          homeTeamId: "japan",        awayTeamId: "sweden",       stadiumId: "att",          kickoff: "2026-06-25T23:00:00Z", group: "F", round: "group", matchday: 3, matchNumber: 36 },

  // Group G
  { id: "m37", slug: "belgium-vs-egypt",         homeTeamId: "belgium",      awayTeamId: "egypt",        stadiumId: "lumen",        kickoff: "2026-06-15T19:00:00Z", group: "G", round: "group", matchday: 1, matchNumber: 37 },
  { id: "m38", slug: "iran-vs-new-zealand",      homeTeamId: "iran",         awayTeamId: "new-zealand",  stadiumId: "sofi",         kickoff: "2026-06-16T01:00:00Z", group: "G", round: "group", matchday: 1, matchNumber: 38 },
  { id: "m39", slug: "belgium-vs-iran",          homeTeamId: "belgium",      awayTeamId: "iran",         stadiumId: "sofi",         kickoff: "2026-06-21T19:00:00Z", group: "G", round: "group", matchday: 2, matchNumber: 39 },
  { id: "m40", slug: "new-zealand-vs-egypt",     homeTeamId: "new-zealand",  awayTeamId: "egypt",        stadiumId: "bc-place",     kickoff: "2026-06-21T22:00:00Z", group: "G", round: "group", matchday: 2, matchNumber: 40 },
  { id: "m41", slug: "new-zealand-vs-belgium",   homeTeamId: "new-zealand",  awayTeamId: "belgium",      stadiumId: "bc-place",     kickoff: "2026-06-27T03:00:00Z", group: "G", round: "group", matchday: 3, matchNumber: 41 },
  { id: "m42", slug: "egypt-vs-iran",            homeTeamId: "egypt",        awayTeamId: "iran",         stadiumId: "lumen",        kickoff: "2026-06-27T03:00:00Z", group: "G", round: "group", matchday: 3, matchNumber: 42 },

  // Group H
  { id: "m43", slug: "spain-vs-cape-verde",      homeTeamId: "spain",        awayTeamId: "cape-verde",   stadiumId: "mercedes-benz",kickoff: "2026-06-15T16:00:00Z", group: "H", round: "group", matchday: 1, matchNumber: 43 },
  { id: "m44", slug: "saudi-arabia-vs-uruguay",  homeTeamId: "saudi-arabia", awayTeamId: "uruguay",      stadiumId: "hard-rock",    kickoff: "2026-06-15T22:00:00Z", group: "H", round: "group", matchday: 1, matchNumber: 44 },
  { id: "m45", slug: "spain-vs-saudi-arabia",    homeTeamId: "spain",        awayTeamId: "saudi-arabia", stadiumId: "mercedes-benz",kickoff: "2026-06-21T16:00:00Z", group: "H", round: "group", matchday: 2, matchNumber: 45 },
  { id: "m46", slug: "uruguay-vs-cape-verde",    homeTeamId: "uruguay",      awayTeamId: "cape-verde",   stadiumId: "hard-rock",    kickoff: "2026-06-21T22:00:00Z", group: "H", round: "group", matchday: 2, matchNumber: 46 },
  { id: "m47", slug: "cape-verde-vs-saudi-arabia", homeTeamId: "cape-verde", awayTeamId: "saudi-arabia", stadiumId: "nrg",          kickoff: "2026-06-27T00:00:00Z", group: "H", round: "group", matchday: 3, matchNumber: 47 },
  { id: "m48", slug: "uruguay-vs-spain",         homeTeamId: "uruguay",      awayTeamId: "spain",        stadiumId: "akron",        kickoff: "2026-06-27T00:00:00Z", group: "H", round: "group", matchday: 3, matchNumber: 48 },

  // Group I
  { id: "m49", slug: "france-vs-senegal",        homeTeamId: "france",       awayTeamId: "senegal",      stadiumId: "metlife",      kickoff: "2026-06-16T19:00:00Z", group: "I", round: "group", matchday: 1, matchNumber: 49 },
  { id: "m50", slug: "iraq-vs-norway",           homeTeamId: "iraq",         awayTeamId: "norway",       stadiumId: "gillette",     kickoff: "2026-06-16T22:00:00Z", group: "I", round: "group", matchday: 1, matchNumber: 50 },
  { id: "m51", slug: "france-vs-iraq",           homeTeamId: "france",       awayTeamId: "iraq",         stadiumId: "lincoln",      kickoff: "2026-06-22T21:00:00Z", group: "I", round: "group", matchday: 2, matchNumber: 51 },
  { id: "m52", slug: "norway-vs-senegal",        homeTeamId: "norway",       awayTeamId: "senegal",      stadiumId: "bmo",          kickoff: "2026-06-23T00:00:00Z", group: "I", round: "group", matchday: 2, matchNumber: 52 },
  { id: "m53", slug: "norway-vs-france",         homeTeamId: "norway",       awayTeamId: "france",       stadiumId: "gillette",     kickoff: "2026-06-26T19:00:00Z", group: "I", round: "group", matchday: 3, matchNumber: 53 },
  { id: "m54", slug: "senegal-vs-iraq",          homeTeamId: "senegal",      awayTeamId: "iraq",         stadiumId: "bmo",          kickoff: "2026-06-26T19:00:00Z", group: "I", round: "group", matchday: 3, matchNumber: 54 },

  // Group J
  { id: "m55", slug: "argentina-vs-algeria",     homeTeamId: "argentina",    awayTeamId: "algeria",      stadiumId: "arrowhead",    kickoff: "2026-06-17T01:00:00Z", group: "J", round: "group", matchday: 1, matchNumber: 55 },
  { id: "m56", slug: "austria-vs-jordan",        homeTeamId: "austria",      awayTeamId: "jordan",       stadiumId: "levis",        kickoff: "2026-06-17T04:00:00Z", group: "J", round: "group", matchday: 1, matchNumber: 56 },
  { id: "m57", slug: "argentina-vs-austria",     homeTeamId: "argentina",    awayTeamId: "austria",      stadiumId: "att",          kickoff: "2026-06-22T17:00:00Z", group: "J", round: "group", matchday: 2, matchNumber: 57 },
  { id: "m58", slug: "jordan-vs-algeria",        homeTeamId: "jordan",       awayTeamId: "algeria",      stadiumId: "levis",        kickoff: "2026-06-23T03:00:00Z", group: "J", round: "group", matchday: 2, matchNumber: 58 },
  { id: "m59", slug: "algeria-vs-austria",       homeTeamId: "algeria",      awayTeamId: "austria",      stadiumId: "arrowhead",    kickoff: "2026-06-28T02:00:00Z", group: "J", round: "group", matchday: 3, matchNumber: 59 },
  { id: "m60", slug: "jordan-vs-argentina",      homeTeamId: "jordan",       awayTeamId: "argentina",    stadiumId: "att",          kickoff: "2026-06-28T02:00:00Z", group: "J", round: "group", matchday: 3, matchNumber: 60 },

  // Group K
  { id: "m61", slug: "portugal-vs-dr-congo",     homeTeamId: "portugal",     awayTeamId: "dr-congo",     stadiumId: "nrg",          kickoff: "2026-06-17T17:00:00Z", group: "K", round: "group", matchday: 1, matchNumber: 61 },
  { id: "m62", slug: "uzbekistan-vs-colombia",   homeTeamId: "uzbekistan",   awayTeamId: "colombia",     stadiumId: "azteca",       kickoff: "2026-06-18T02:00:00Z", group: "K", round: "group", matchday: 1, matchNumber: 62 },
  { id: "m63", slug: "portugal-vs-uzbekistan",   homeTeamId: "portugal",     awayTeamId: "uzbekistan",   stadiumId: "nrg",          kickoff: "2026-06-23T17:00:00Z", group: "K", round: "group", matchday: 2, matchNumber: 63 },
  { id: "m64", slug: "colombia-vs-dr-congo",     homeTeamId: "colombia",     awayTeamId: "dr-congo",     stadiumId: "akron",        kickoff: "2026-06-24T02:00:00Z", group: "K", round: "group", matchday: 2, matchNumber: 64 },
  { id: "m65", slug: "colombia-vs-portugal",     homeTeamId: "colombia",     awayTeamId: "portugal",     stadiumId: "hard-rock",    kickoff: "2026-06-27T23:30:00Z", group: "K", round: "group", matchday: 3, matchNumber: 65 },
  { id: "m66", slug: "dr-congo-vs-uzbekistan",   homeTeamId: "dr-congo",     awayTeamId: "uzbekistan",   stadiumId: "mercedes-benz",kickoff: "2026-06-27T23:30:00Z", group: "K", round: "group", matchday: 3, matchNumber: 66 },

  // Group L
  { id: "m67", slug: "england-vs-croatia",       homeTeamId: "england",      awayTeamId: "croatia",      stadiumId: "att",          kickoff: "2026-06-17T20:00:00Z", group: "L", round: "group", matchday: 1, matchNumber: 67 },
  { id: "m68", slug: "ghana-vs-panama",          homeTeamId: "ghana",        awayTeamId: "panama",       stadiumId: "bmo",          kickoff: "2026-06-17T23:00:00Z", group: "L", round: "group", matchday: 1, matchNumber: 68 },
  { id: "m69", slug: "england-vs-ghana",         homeTeamId: "england",      awayTeamId: "ghana",        stadiumId: "gillette",     kickoff: "2026-06-23T20:00:00Z", group: "L", round: "group", matchday: 2, matchNumber: 69 },
  { id: "m70", slug: "panama-vs-croatia",        homeTeamId: "panama",       awayTeamId: "croatia",      stadiumId: "gillette",     kickoff: "2026-06-23T23:00:00Z", group: "L", round: "group", matchday: 2, matchNumber: 70 },
  { id: "m71", slug: "panama-vs-england",        homeTeamId: "panama",       awayTeamId: "england",      stadiumId: "metlife",      kickoff: "2026-06-27T21:00:00Z", group: "L", round: "group", matchday: 3, matchNumber: 71 },
  { id: "m72", slug: "croatia-vs-ghana",         homeTeamId: "croatia",      awayTeamId: "ghana",        stadiumId: "lincoln",      kickoff: "2026-06-27T21:00:00Z", group: "L", round: "group", matchday: 3, matchNumber: 72 },

  // Round of 32 (placeholders)
  { id: "r32-1",  slug: "r32-match-1",  homeTeamId: "france",    awayTeamId: "argentina", stadiumId: "metlife", kickoff: "2026-07-01T20:00:00Z", round: "r32", matchNumber: 73 },
  { id: "r32-2",  slug: "r32-match-2",  homeTeamId: "brazil",    awayTeamId: "england",   stadiumId: "sofi",    kickoff: "2026-07-02T00:00:00Z", round: "r32", matchNumber: 74 },
  { id: "r32-3",  slug: "r32-match-3",  homeTeamId: "spain",     awayTeamId: "germany",   stadiumId: "att",     kickoff: "2026-07-02T20:00:00Z", round: "r32", matchNumber: 75 },
  { id: "r32-4",  slug: "r32-match-4",  homeTeamId: "portugal",  awayTeamId: "netherlands", stadiumId: "levis", kickoff: "2026-07-03T00:00:00Z", round: "r32", matchNumber: 76 },

  // Round of 16 (placeholders)
  { id: "r16-1",  slug: "r16-match-1",  homeTeamId: "brazil",    awayTeamId: "spain",     stadiumId: "metlife", kickoff: "2026-07-07T20:00:00Z", round: "r16", matchNumber: 105 },
  { id: "r16-2",  slug: "r16-match-2",  homeTeamId: "france",    awayTeamId: "england",   stadiumId: "att",     kickoff: "2026-07-08T00:00:00Z", round: "r16", matchNumber: 106 },

  // Quarterfinals (placeholders)
  { id: "qf-1",   slug: "qf-match-1",   homeTeamId: "brazil",    awayTeamId: "france",    stadiumId: "metlife", kickoff: "2026-07-11T20:00:00Z", round: "qf",  matchNumber: 113 },

  // Semifinals (placeholders)
  { id: "sf-1",   slug: "sf-match-1",   homeTeamId: "brazil",    awayTeamId: "spain",     stadiumId: "att",     kickoff: "2026-07-14T20:00:00Z", round: "sf",  matchNumber: 117 },

  // Third Place (placeholder)
  { id: "3rd",    slug: "3rd-place",    homeTeamId: "england",   awayTeamId: "argentina", stadiumId: "levis",   kickoff: "2026-07-18T20:00:00Z", round: "3rd", matchNumber: 119 },

  // Final (placeholder)
  { id: "final",  slug: "wc-2026-final", homeTeamId: "brazil",   awayTeamId: "france",    stadiumId: "metlife", kickoff: "2026-07-19T20:00:00Z", round: "final", matchNumber: 120 },
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
