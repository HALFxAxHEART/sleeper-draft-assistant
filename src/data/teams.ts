// Team context: 2026 fantasy-playoff (weeks 15-17) schedule strength + offseason notes.
// Researched live (web search) August 2026 — not from training data. Re-verify/refresh
// as the season approaches if news changes (trades, injuries, coordinator hires, etc.).
export type SOS = "easy" | "medium" | "hard";

export interface TeamContext {
  bye: number;
  sos: SOS;
  sosNote: string;
  offenseNote: string;
}

export const TEAM_CONTEXT: Record<string, TeamContext> = {
  ARI: {
    bye: 14,
    sos: "easy",
    sosNote: "Wk15-17: vs NYJ, @NO, vs LV — all bottom-tier defenses",
    offenseNote:
      "New HC Mike LaFleur + OC Nathaniel Hackett install a McVay-tree scheme; Jacoby Brissett/Carson Beck at QB after Kyler Murray left for Minnesota. Rookie RB Jeremiyah Love (No. 3 overall) joins Trey McBride/Marvin Harrison Jr.",
  },
  ATL: {
    bye: 11,
    sos: "medium",
    sosNote: "Wk15-17: @WAS, vs TB, vs NO",
    offenseNote:
      "New HC Kevin Stefanski (ex-Browns) after Morris/Fontenot fired. Kirk Cousins released; Michael Penix Jr. (recovering from knee injury) battles newly-signed Tua Tagovailoa for the starting job. Kyle Pitts tagged, Brian Robinson added at RB.",
  },
  BAL: {
    bye: 13,
    sos: "medium",
    sosNote: "Wk15-17: @PIT, vs CLE, @CIN",
    offenseNote:
      "Interior O-line overhauled after C Tyler Linderbaum left for Las Vegas; rookie Olaivavega Ioane + Danny Pinter step in. Zay Flowers/Mark Andrews remain the top targets.",
  },
  BUF: {
    bye: 7,
    sos: "medium",
    sosNote: "Wk15-17: vs CHI, @DEN, @MIA",
    offenseNote: "Traded for WR DJ Moore (from Chicago), giving Josh Allen an instant No.1/2 alongside Khalil Shakir.",
  },
  CAR: {
    bye: 5,
    sos: "medium",
    sosNote: "Wk15-17: vs CIN, @PIT, vs SEA",
    offenseNote:
      "Rico Dowdle left in FA; Chuba Hubbard (hamstring) and Jonathon Brooks share the backfield. OROY Tetairoa McMillan headlines the passing game.",
  },
  CHI: {
    bye: 10,
    sos: "hard",
    sosNote: "Wk15-17: @BUF, vs GB, vs DET",
    offenseNote:
      "Traded away WR DJ Moore (to Buffalo); Press Taylor promoted to OC under HC Ben Johnson. Caleb Williams leans on Rome Odunze, Luther Burden, and breakout TE Colston Loveland.",
  },
  CIN: {
    bye: 6,
    sos: "hard",
    sosNote: "Wk15-17: @CAR, @IND, vs BAL",
    offenseNote: "Essentially no fantasy-relevant personnel changes — Burrow, Chase, and Higgins all return in the same roles.",
  },
  CLE: {
    bye: 11,
    sos: "medium",
    sosNote: "Wk15-17: @NYG, @BAL, vs IND",
    offenseNote:
      "HC Kevin Stefanski left for Atlanta, replaced by Todd Monken (faster, more vertical scheme). Drafted WRs KC Concepcion and Denzel Boston to pair with Jerry Jeudy; Watson-vs-Shedeur-Sanders QB battle unresolved.",
  },
  DAL: {
    bye: 14,
    sos: "hard",
    sosNote: "Wk15-17: @LAR (elite D), vs JAX, vs NYG",
    offenseNote: "Nearly every starter returns, but WR George Pickens is in a contract dispute clouding his outlook next to CeeDee Lamb.",
  },
  DEN: {
    bye: 10,
    sos: "medium",
    sosNote: "Wk15-17: @LV (easy), vs BUF, @NE",
    offenseNote: "Traded a 2026 1st-rounder for WR Jaylen Waddle; playcalling moves from Sean Payton to new OC Davis Webb.",
  },
  DET: {
    bye: 6,
    sos: "medium",
    sosNote: "Wk15-17: @MIN, vs NYG (easy), @CHI",
    offenseNote:
      "Hired ex-Cardinals OC Drew Petzing; replaced traded-away RB David Montgomery (to Houston) with free agent Isiah Pacheco behind Jahmyr Gibbs.",
  },
  GB: {
    bye: 11,
    sos: "medium",
    sosNote: "Wk15-17: vs MIA (easy), @CHI, vs HOU (very hard)",
    offenseNote:
      "Lost WRs Romeo Doubs and Dontayvion Wicks, cleaning up the target tree. RB Josh Jacobs faces an open legal investigation from a May arrest.",
  },
  HOU: {
    bye: 8,
    sos: "hard",
    sosNote: "Wk15-17: vs JAX, @PHI, @GB",
    offenseNote: "Overhauled the O-line and traded for RB David Montgomery after letting Nick Chubb walk.",
  },
  IND: {
    bye: 13,
    sos: "easy",
    sosNote: "Wk15-17: @TEN, vs CIN, @CLE — bottom-third defenses",
    offenseNote: "Re-signed WR Alec Pierce to a $114M deal; Daniel Jones' development as entrenched starter is the top camp storyline.",
  },
  JAC: {
    bye: 7,
    sos: "medium",
    sosNote: "Wk15-17: @HOU (very hard), @DAL (easy), vs WAS (easy)",
    offenseNote:
      "Lost RB Travis Etienne Jr. to New Orleans — backfield turns over to 2nd-year Bhayshul Tuten. Trevor Lawrence and OC Liam Coen return intact.",
  },
  KC: {
    bye: 5,
    sos: "hard",
    sosNote: "Wk15-17: vs NE, vs SF, @LAC",
    offenseNote: "Signed RB Ken Walker III to replace departed Isiah Pacheco. Mahomes returns from a torn ACL to a still-thin WR room with Kelce back.",
  },
  LAC: {
    bye: 7,
    sos: "easy",
    sosNote: "Wk15-17: vs SF, @MIA (bottom-5 pass D), vs KC",
    offenseNote: "New OC Mike McDaniel (ex-Dolphins HC) installs an outside-zone/motion scheme for Herbert; Omarion Hampton positioned for a workhorse role.",
  },
  LAR: {
    bye: 11,
    sos: "medium",
    sosNote: "Wk15-17: vs DAL, @SEA (elite D), @TB",
    offenseNote: "Return all 11 offensive starters (Stafford, Nacua, Adams, Kyren Williams), but Williams' touches are shrinking in a committee with Blake Corum.",
  },
  LV: {
    bye: 13,
    sos: "medium",
    sosNote: "Wk15-17: vs DEN (top-2 D), vs TEN, @ARI",
    offenseNote: "Pete Carroll fired; traded for Geno Smith (to Jets) — Kirk Cousins opened camp as starter with rookie Fernando Mendoza developing behind him.",
  },
  MIA: {
    bye: 6,
    sos: "medium",
    sosNote: "Wk15-17: @GB (top-10 D), vs LAC, vs BUF",
    offenseNote: "Tua Tagovailoa released (signed with Atlanta), replaced by Malik Willis under new HC Jeff Hafley/OC Bobby Slowik. Jaylen Waddle traded to Denver.",
  },
  MIN: {
    bye: 6,
    sos: "easy",
    sosNote: "Wk15-17: vs DET, vs WAS, @NYJ — WAS/NYJ pass D rank among league's worst",
    offenseNote: "Kyler Murray (after Arizona release) beat out J.J. McCarthy and was named Week 1 starter, inheriting the offense to Justin Jefferson.",
  },
  NE: {
    bye: 11,
    sos: "hard",
    sosNote: "Wk15-17: @KC, @NYJ, vs DEN (top-2 D, league sack leader)",
    offenseNote: "Drake Maye gets a true No.1 target in free-agent WR A.J. Brown plus a rebuilt O-line, after a historic sack total last postseason.",
  },
  NO: {
    bye: 8,
    sos: "easy",
    sosNote: "Wk15-17: @TB, vs ARI (league's weakest D), @ATL",
    offenseNote: "2nd-year QB Tyler Shough is the entrenched starter under HC Kellen Moore with a settled coaching staff.",
  },
  NYG: {
    bye: 8,
    sos: "medium",
    sosNote: "Wk15-17: vs CLE, @DET, @DAL",
    offenseNote:
      "New HC John Harbaugh (ex-Ravens) and OC Matt Nagy overhauled Jaxson Dart's weapons — TE Isaiah Likely, WRs Darnell Mooney/JuJu Smith-Schuster/Odell Beckham Jr. around returning Malik Nabers.",
  },
  NYJ: {
    bye: 13,
    sos: "medium",
    sosNote: "Wk15-17: @ARI, vs NE, vs MIN",
    offenseNote:
      "Geno Smith (via trade from Las Vegas) takes over at QB. Breece Hall signed a 3-year extension as the clear lead back; rookie WR Omar Cooper Jr. and TE Kenyon Sadiq join Garrett Wilson.",
  },
  PHI: {
    bye: 10,
    sos: "hard",
    sosNote: "Wk15-17: vs SEA, vs HOU, @SF — one of the league's toughest pass/run-defense slates",
    offenseNote: "New OC Sean Mannion replaces Kevin Patullo, installing more under-center play-action for Hurts; longtime O-line coach Jeff Stoutland departed.",
  },
  PIT: {
    bye: 9,
    sos: "easy",
    sosNote: "Wk15-17: vs BAL, vs CAR, @TEN — weak pass defenses, though TEN's run D is stout",
    offenseNote: "Aaron Rodgers signed a 1-year deal reuniting with new HC Mike McCarthy. DK Metcalf reclaims the top-target role; added WR Michael Pittman Jr.",
  },
  SEA: {
    bye: 11,
    sos: "hard",
    sosNote: "Wk15-17: @PHI, vs LAR, @CAR — one of the league's toughest pass-defense stretches",
    offenseNote:
      "New OC Brian Fleury promises more pre-snap motion. Kenneth Walker III left in FA; rookie 1st-rounder Jadarian Price expected to take a large early-down role amid a banged-up RB room.",
  },
  SF: {
    bye: 8,
    sos: "hard",
    sosNote: "Wk15-17: @LAC, @KC, vs PHI — three strong, physical defenses",
    offenseNote:
      "WR room overhauled with Mike Evans added (from Tampa Bay) as a WR1-caliber target and Deebo Samuel reunited with Kyle Shanahan. Ricky Pearsall sidelined; George Kittle (Achilles) on PUP but expected Week 1.",
  },
  TB: {
    bye: 10,
    sos: "medium",
    sosNote: "Wk15-17: vs NO (soft pass D), @ATL, vs LAR",
    offenseNote:
      "Longtime WR1 Mike Evans departed after 12 years (to San Francisco). New OC Zac Robinson takes over; Rachaad White's FA exit leaves Kenneth Gainwell alongside an injured Bucky Irving.",
  },
  TEN: {
    bye: 9,
    sos: "medium",
    sosNote: "Wk15-17: vs IND, @LV, vs PIT — favorable pass matchups, tougher run defenses",
    offenseNote:
      "2nd-year QB Cam Ward gets new OC Brian Daboll plus a revamped cast (4th-overall rookie WR Carnell Tate, FA WR Wan'Dale Robinson, O-line upgrades) after absorbing an NFL-high 55 sacks as a rookie.",
  },
  WAS: {
    bye: 7,
    sos: "medium",
    sosNote: "Wk15-17: vs ATL, @MIN, @JAX (weak pass D)",
    offenseNote:
      "New OC David Blough replaces Kliff Kingsbury for a healthy Jayden Daniels. Deebo Samuel and Austin Ekeler are gone, replaced by RBs Rachaad White/Jerome Ford; TE Chig Okonkwo gets a bigger role.",
  },
};
