// Seed rankings: FantasyPros consensus expert tiers, 2026 preseason (fetched Aug 2026).
// Source: fantasypros.com/2026/08 draft-rankings-tiers article + position tier pieces.
// Editable by hand — bump `tier` or reorder within a tier as news breaks.
export type Position = "QB" | "RB" | "WR" | "TE" | "K" | "DST";

export interface Player {
  id: string;
  name: string;
  position: Position;
  team: string;
  tier: number;
}

export function playerId(name: string, position: string) {
  return `${name}-${position}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const RAW: Array<[string, Position, string, number]> = [
  // Tier 1
  ["Jahmyr Gibbs", "RB", "DET", 1],
  ["Bijan Robinson", "RB", "ATL", 1],
  ["Ja'Marr Chase", "WR", "CIN", 1],
  ["Puka Nacua", "WR", "LAR", 1],
  ["Jaxon Smith-Njigba", "WR", "SEA", 1],
  ["Amon-Ra St. Brown", "WR", "DET", 1],
  ["Christian McCaffrey", "RB", "SF", 1],
  ["Jonathan Taylor", "RB", "IND", 1],

  // Tier 2
  ["CeeDee Lamb", "WR", "DAL", 2],
  ["James Cook III", "RB", "BUF", 2],
  ["Justin Jefferson", "WR", "MIN", 2],
  ["Ashton Jeanty", "RB", "LV", 2],
  ["Drake London", "WR", "ATL", 2],
  ["A.J. Brown", "WR", "NE", 2],
  ["Chase Brown", "RB", "CIN", 2],
  ["Brock Bowers", "TE", "LV", 2],
  ["Saquon Barkley", "RB", "PHI", 2],
  ["Omarion Hampton", "RB", "LAC", 2],
  ["De'Von Achane", "RB", "MIA", 2],
  ["Nico Collins", "WR", "HOU", 2],

  // Tier 3
  ["Derrick Henry", "RB", "BAL", 3],
  ["George Pickens", "WR", "DAL", 3],
  ["Kenneth Walker III", "RB", "KC", 3],
  ["Trey McBride", "TE", "ARI", 3],
  ["Chris Olave", "WR", "NO", 3],
  ["Rashee Rice", "WR", "KC", 3],
  ["Josh Allen", "QB", "BUF", 3],
  ["DeVonta Smith", "WR", "PHI", 3],
  ["Zay Flowers", "WR", "BAL", 3],
  ["Malik Nabers", "WR", "NYG", 3],
  ["Kyren Williams", "RB", "LAR", 3],
  ["Tee Higgins", "WR", "CIN", 3],
  ["Jeremiyah Love", "RB", "ARI", 3],
  ["Tetairoa McMillan", "WR", "CAR", 3],

  // Tier 4
  ["Emeka Egbuka", "WR", "TB", 4],
  ["Lamar Jackson", "QB", "BAL", 4],
  ["Josh Jacobs", "RB", "GB", 4],
  ["Breece Hall", "RB", "NYJ", 4],
  ["Javonte Williams", "RB", "DAL", 4],
  ["Ladd McConkey", "WR", "LAC", 4],
  ["Garrett Wilson", "WR", "NYJ", 4],
  ["Colston Loveland", "TE", "CHI", 4],
  ["Jaylen Waddle", "WR", "DEN", 4],
  ["Drake Maye", "QB", "NE", 4],
  ["Terry McLaurin", "WR", "WAS", 4],
  ["Luther Burden III", "WR", "CHI", 4],
  ["Travis Etienne Jr.", "RB", "NO", 4],
  ["Davante Adams", "WR", "LAR", 4],
  ["Joe Burrow", "QB", "CIN", 4],
  ["Cam Skattebo", "RB", "NYG", 4],
  ["Jameson Williams", "WR", "DET", 4],
  ["Jayden Daniels", "QB", "WAS", 4],
  ["D'Andre Swift", "RB", "CHI", 4],
  ["Bucky Irving", "RB", "TB", 4],
  ["Tyler Warren", "TE", "IND", 4],
  ["Quinshon Judkins", "RB", "CLE", 4],
  ["Christian Watson", "WR", "GB", 4],
  ["Mike Evans", "WR", "SF", 4],
  ["David Montgomery", "RB", "HOU", 4],

  // Tier 5
  ["DJ Moore", "WR", "BUF", 5],
  ["TreVeyon Henderson", "RB", "NE", 5],
  ["Rome Odunze", "WR", "CHI", 5],
  ["Jalen Hurts", "QB", "PHI", 5],
  ["Bhayshul Tuten", "RB", "JAC", 5],
  ["Jadarian Price", "RB", "SEA", 5],
  ["Tucker Kraft", "TE", "GB", 5],
  ["Caleb Williams", "QB", "CHI", 5],
  ["Justin Herbert", "QB", "LAC", 5],
  ["Jaylen Warren", "RB", "PIT", 5],
  ["Carnell Tate", "WR", "TEN", 5],
  ["Marvin Harrison Jr.", "WR", "ARI", 5],
  ["Tony Pollard", "RB", "TEN", 5],
  ["Parker Washington", "WR", "JAC", 5],
  ["DK Metcalf", "WR", "PIT", 5],
  ["Brian Thomas Jr.", "WR", "JAC", 5],
  ["Rhamondre Stevenson", "RB", "NE", 5],
  ["Harold Fannin Jr.", "TE", "CLE", 5],
  ["Dak Prescott", "QB", "DAL", 5],
  ["Trevor Lawrence", "QB", "JAC", 5],
  ["Sam LaPorta", "TE", "DET", 5],
  ["Chuba Hubbard", "RB", "CAR", 5],
  ["Kyle Pitts Sr.", "TE", "ATL", 5],
  ["Alec Pierce", "WR", "IND", 5],

  // Tier 6
  ["Rico Dowdle", "RB", "PIT", 6],
  ["Courtland Sutton", "WR", "DEN", 6],
  ["Chris Godwin Jr.", "WR", "TB", 6],
  ["Jordyn Tyson", "WR", "NO", 6],
  ["Jaxson Dart", "QB", "NYG", 6],
  ["J.K. Dobbins", "RB", "DEN", 6],
  ["Michael Wilson", "WR", "ARI", 6],
  ["Michael Pittman Jr.", "WR", "PIT", 6],
  ["RJ Harvey", "RB", "DEN", 6],
  ["Brock Purdy", "QB", "SF", 6],
  ["Quentin Johnston", "WR", "LAC", 6],
  ["Kyle Monangai", "RB", "CHI", 6],
  ["Blake Corum", "RB", "LAR", 6],
  ["Josh Downs", "WR", "IND", 6],
  ["Bo Nix", "QB", "DEN", 6],
  ["Wan'Dale Robinson", "WR", "TEN", 6],
  ["Patrick Mahomes II", "QB", "KC", 6],
  ["Makai Lemon", "WR", "PHI", 6],
  ["Matthew Stafford", "QB", "LAR", 6],
  ["Travis Kelce", "TE", "KC", 6],
  ["Jonathon Brooks", "RB", "CAR", 6],
  ["Jordan Addison", "WR", "MIN", 6],
  ["George Kittle", "TE", "SF", 6],
  ["Kenny Gainwell", "RB", "TB", 6],
  ["Rachaad White", "RB", "WAS", 6],
  ["Jakobi Meyers", "WR", "JAC", 6],
  ["Jacory Croskey-Merritt", "RB", "WAS", 6],
  ["Jared Goff", "QB", "DET", 6],
  ["Jayden Reed", "WR", "GB", 6],
  ["Dalton Kincaid", "TE", "BUF", 6],
  ["Aaron Jones Sr.", "RB", "MIN", 6],
  ["Jordan Mason", "RB", "MIN", 6],
  ["Kyler Murray", "QB", "MIN", 6],

  // Tier 7
  ["Jake Ferguson", "TE", "DAL", 7],
  ["Dallas Goedert", "TE", "PHI", 7],
  ["Baker Mayfield", "QB", "TB", 7],
  ["Isaiah Likely", "TE", "NYG", 7],
  ["Jordan Love", "QB", "GB", 7],
  ["Mark Andrews", "TE", "BAL", 7],
  ["Xavier Worthy", "WR", "KC", 7],
  ["Jayden Higgins", "WR", "HOU", 7],
  ["Tyler Shough", "QB", "NO", 7],
  ["Tyrone Tracy Jr.", "RB", "NYG", 7],
  ["Chris Rodriguez Jr.", "RB", "JAC", 7],
  ["Khalil Shakir", "WR", "BUF", 7],
  ["Jalen Coker", "WR", "CAR", 7],
  ["Romeo Doubs", "WR", "NE", 7],

  // Tier 8 (bench/handcuff/streaming depth, Aug 2026)
  ["Alvin Kamara", "RB", "NO", 8],  // Splits Saints backfield with Etienne; proven receiving role
  ["Brian Robinson Jr.", "RB", "ATL", 8],  // Former starter, handcuff to Bijan with goal-line role
  ["Justice Hill", "RB", "BAL", 8],  // Receiving back, would start if Henry gets hurt
  ["Ray Davis", "RB", "BUF", 8],  // Handcuff to Cook with short-yardage and goal-line role
  ["Samaje Perine", "RB", "CIN", 8],  // Veteran receiving back, would start if Chase Brown hurt
  ["Dylan Sampson", "RB", "CLE", 8],  // Rookie handcuff to Judkins, change-of-pace role
  ["Jaydon Blue", "RB", "DAL", 8],  // Handcuff to Javonte Williams with passing-down role
  ["Isiah Pacheco", "RB", "DET", 8],  // Former Chiefs starter, now handcuff to Gibbs
  ["MarShawn Lloyd", "RB", "GB", 8],  // Handcuff to Josh Jacobs, would start if hurt
  ["Woody Marks", "RB", "HOU", 8],  // Pass-catching role behind Montgomery, real standalone value
  ["DJ Giddens", "RB", "IND", 8],  // Handcuff to Jonathan Taylor, lead-back upside if hurt
  ["Jaylen Wright", "RB", "MIA", 8],  // Handcuff to Achane, would start if hurt
  ["Devin Singletary", "RB", "NYG", 8],  // Veteran depth, standalone value if Giants backs hurt
  ["Braelon Allen", "RB", "NYJ", 8],  // Handcuff to Breece Hall with early-down and goal-line role
  ["Tank Bigsby", "RB", "PHI", 8],  // Handcuff to Saquon Barkley, early-down role
  ["Kaleb Johnson", "RB", "PIT", 8],  // Rookie handcuff, would start if Warren or Dowdle hurt
  ["Zach Charbonnet", "RB", "SEA", 8],  // Seattle's other lead back, real standalone value
  ["Isaac Guerendo", "RB", "SF", 8],  // Handcuff to McCaffrey, would start if hurt
  ["Tyjae Spears", "RB", "TEN", 8],  // Passing-down back with standalone value behind Pollard
  ["Jahan Dotson", "WR", "ATL", 8],  // Falcons WR2, real snaps if London misses time
  ["Rashod Bateman", "WR", "BAL", 8],  // Ravens WR2 with proven big-play production
  ["Xavier Legette", "WR", "CAR", 8],  // Panthers WR2, athletic size-speed target
  ["Jerry Jeudy", "WR", "CLE", 8],  // Browns WR1, real target volume in rebuild
  ["Marvin Mims Jr.", "WR", "DEN", 8],  // Broncos WR2 with growing target share
  ["Matthew Golden", "WR", "GB", 8],  // Packers rookie first-rounder, breakout WR2 candidate
  ["Travis Hunter", "WR", "JAC", 8],  // Jaguars two-way star, real WR2 volume
  ["Tre Tucker", "WR", "LV", 8],  // Raiders WR1, leading target share
  ["Tutu Atwell", "WR", "MIA", 8],  // Dolphins WR1, speedster in new lead role
  ["Jauan Jennings", "WR", "MIN", 8],  // Vikings WR3, proven veteran target
  ["Kayshon Boutte", "WR", "NE", 8],  // Patriots WR2 next to A.J. Brown
  ["Darnell Mooney", "WR", "NYG", 8],  // Giants WR2, real production when healthy
  ["Hollywood Brown", "WR", "PHI", 8],  // Eagles WR2, vertical threat next to Smith
  ["Tory Horton", "WR", "SEA", 8],  // Seahawks rookie WR2, ascending target share
  ["Christian Kirk", "WR", "SF", 8],  // 49ers WR2, reliable possession target
  ["Jalen McMillan", "WR", "TB", 8],  // Buccaneers WR3, real red-zone role
  ["Calvin Ridley", "WR", "TEN", 8],  // Titans WR2, proven veteran production
  ["Stefon Diggs", "WR", "WAS", 8],  // Commanders WR2, big name still relevant
  ["T.J. Hockenson", "TE", "MIN", 8],  // Vikings' primary receiving TE, strong target share
  ["Hunter Henry", "TE", "NE", 8],  // Reliable red-zone target, veteran Patriots starter
  ["Evan Engram", "TE", "DEN", 8],  // Broncos' pass-catching TE, heavy target volume
  ["Dalton Schultz", "TE", "HOU", 8],  // Texans' starting TE, steady check-down role
  ["Cade Otton", "TE", "TB", 8],  // Bucs' primary TE, red-zone role in Tampa offense
  ["Pat Freiermuth", "TE", "PIT", 8],  // Steelers' starting TE, goal-line and possession role
  ["David Njoku", "TE", "LAC", 8],  // Proven producer, now Chargers' TE room after trade
  ["Mike Gesicki", "TE", "CIN", 8],  // Bengals' red-zone TE threat, size mismatch weapon
  ["Tyler Higbee", "TE", "LAR", 8],  // Rams' veteran starting TE, still involved in passing game
  ["Brenton Strange", "TE", "JAC", 8],  // Jaguars' ascending starting TE, growing role
  ["Mason Taylor", "TE", "NYJ", 8],  // Jets' talented young starting TE, early-down and red-zone use
  ["Chig Okonkwo", "TE", "WAS", 8],  // Athletic Commanders TE after trade, big-play upside
  ["Geno Smith", "QB", "NYJ", 8],  // Steady Jets starter, solid weekly floor
  ["Sam Darnold", "QB", "SEA", 8],  // Seahawks starter coming off strong 2025 bounce-back
  ["Aaron Rodgers", "QB", "PIT", 8],  // Veteran Steelers starter, still throws for volume
  ["Cam Ward", "QB", "TEN", 8],  // Titans' former top prospect, rushing upside as starter
  ["C.J. Stroud", "QB", "HOU", 8],  // Talented Texans starter, sneaky streamer with weapons
  ["Kirk Cousins", "QB", "LV", 8],  // Veteran Raiders starter, high-volume passer
  ["Daniel Jones", "QB", "IND", 8],  // Colts starter, added rushing floor
  ["Bryce Young", "QB", "CAR", 8],  // Panthers starter showing improvement, streamable in good matchups
  ["Tua Tagovailoa", "QB", "ATL", 8],  // Falcons starter after trade, efficient when healthy
  ["Deshaun Watson", "QB", "CLE", 8],  // Browns starter, dual-threat upside if healthy

  // Tier 9 (deep fliers/waiver stashes, Aug 2026)
  ["Tyler Goodson", "RB", "ATL", 9],  // Pass-catching depth behind Bijan Robinson in Atlanta
  ["Jonah Coleman", "RB", "DEN", 9],  // Rookie depth behind Dobbins and Harvey in Denver
  ["Sione Vaki", "RB", "DET", 9],  // Versatile Lions depth back, some passing-down usage
  ["Emari Demercado", "RB", "KC", 9],  // Passing-down depth behind Kenneth Walker in KC
  ["Keaton Mitchell", "RB", "LAC", 9],  // Speedy handcuff behind Omarion Hampton in LA
  ["Jarquez Hunter", "RB", "LAR", 9],  // Rookie depth behind Kyren Williams and Corum
  ["Dylan Laube", "RB", "LV", 9],  // Passing-down back behind Ashton Jeanty in Vegas
  ["Devin Neal", "RB", "NO", 9],  // Rookie change-of-pace back in crowded Saints backfield
  ["Sean Tucker", "RB", "TB", 9],  // Depth behind Irving and Gainwell in Tampa
  ["Devin Duvernay", "WR", "ARI", 9],  // Cardinals WR2, kick returner with big-play upside
  ["Devontez Walker", "WR", "BAL", 9],  // Ravens WR3, deep-threat flier for touchdowns
  ["Joshua Palmer", "WR", "BUF", 9],  // Bills WR2, veteran hands in high-powered offense
  ["Andrei Iosivas", "WR", "CIN", 9],  // Bengals WR3, red-zone size behind stars
  ["Cedric Tillman", "WR", "CLE", 9],  // Browns WR2, breakout-upside flier
  ["Troy Franklin", "WR", "DEN", 9],  // Broncos depth WR, former top-round talent
  ["Greg Dortch", "WR", "DET", 9],  // Lions WR3, slot role in efficient offense
  ["Tank Dell", "WR", "HOU", 9],  // Texans WR2, talented but injury-prone flier
  ["Nick Westbrook-Ikhine", "WR", "IND", 9],  // Colts WR2 while Pierce is out
  ["Tre' Harris", "WR", "LAC", 9],  // Chargers rookie WR, size-speed flier
  ["Jalen Nailor", "WR", "LV", 9],  // Raiders depth WR, big-play upside
  ["Bryce Lance", "WR", "NO", 9],  // Saints WR2, emerging role in rebuild
  ["Rashid Shaheed", "WR", "SEA", 9],  // Seahawks deep threat, big-play flier
  ["Odell Beckham Jr.", "WR", "NYG", 9],  // Giants veteran WR3, name-value flier
  ["Adonai Mitchell", "WR", "NYJ", 9],  // Jets depth WR, former high-upside rookie
  ["Roman Wilson", "WR", "PIT", 9],  // Steelers WR3, developing role behind Metcalf
  ["Cooper Kupp", "WR", "SEA", 9],  // Seahawks veteran, name-value depth flier
  ["Jacob Cowing", "WR", "SF", 9],  // 49ers WR3, slot role with upside
  ["Elic Ayomanor", "WR", "TEN", 9],  // Titans depth WR, rookie flier
  ["Treylon Burks", "WR", "WAS", 9],  // Commanders WR3, former first-round pick flier
  ["Tommy Tremble", "TE", "CAR", 9],  // Panthers' starting TE, touchdown-dependent streamer
  ["Greg Dulcich", "TE", "MIA", 9],  // Talented but injury-prone Dolphins TE1, boom/bust flier
  ["Gunnar Helm", "TE", "TEN", 9],  // Rookie Titans starting TE, unproven but featured
  ["AJ Barner", "TE", "SEA", 9],  // Second-year Seahawks TE, growing role in offense
  ["Juwan Johnson", "TE", "NO", 9],  // Saints' veteran TE, inconsistent but touchdown-capable
  ["Jacoby Brissett", "QB", "ARI", 9],  // Cardinals starter, game-manager streamer in a pinch
  ["Malik Willis", "QB", "MIA", 9],  // Dolphins starter, low-floor rushing-dependent flier
  ["Anthony Richardson Sr.", "QB", "IND", 9],  // Colts backup, huge rushing ceiling if he starts

  // Kickers (drafted last; tiers loose)
  ["Cameron Dicker", "K", "LAC", 1],
  ["Brandon Aubrey", "K", "DAL", 1],
  ["Matthew Wright", "K", "ARI", 2],
  ["Jake Bates", "K", "DET", 2],
  ["Tyler Bass", "K", "BUF", 2],
  ["Ka'imi Fairbairn", "K", "HOU", 3],
  ["Evan McPherson", "K", "CIN", 3],
  ["Jason Myers", "K", "SEA", 3],
  ["Cam Little", "K", "JAC", 3],
  ["Tyler Loop", "K", "BAL", 3],

  // Defenses/Special Teams
  ["Houston Texans", "DST", "HOU", 1],
  ["Seattle Seahawks", "DST", "SEA", 1],
  ["Los Angeles Rams", "DST", "LAR", 1],
  ["Baltimore Ravens", "DST", "BAL", 2],
  ["Denver Broncos", "DST", "DEN", 2],
  ["Los Angeles Chargers", "DST", "LAC", 2],
  ["Detroit Lions", "DST", "DET", 2],
  ["Pittsburgh Steelers", "DST", "PIT", 3],
  ["Green Bay Packers", "DST", "GB", 3],
  ["Minnesota Vikings", "DST", "MIN", 3],
  ["Philadelphia Eagles", "DST", "PHI", 3],
  ["Buffalo Bills", "DST", "BUF", 3],
];

export const PLAYERS: Player[] = RAW.map(([name, position, team, tier]) => ({
  id: playerId(name, position),
  name,
  position,
  team,
  tier,
}));
