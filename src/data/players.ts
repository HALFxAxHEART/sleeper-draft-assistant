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
