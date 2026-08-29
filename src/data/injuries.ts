// Injury-risk notes, 2026 preseason (researched Aug 2026 via live web search — camp reports,
// beat-writer updates, PUP/injury lists). Two categories:
//  - "long_out": currently hurt/recovering/suspended enough to plausibly miss real games this
//    season. `gamesOut` is the best-guess number of games missed — the recommendation engine
//    scales the penalty to that number, so a 1-2 game absence barely moves them but a
//    multi-month one (ACL, Achilles, no timetable) drops them hard.
//  - "prone": expected to play a full/near-full season, but has a real recent injury history
//    worth knowing about. `gamesOut` is always 0 here — it's about risk, not a known absence.
// Only non-clean players are listed; anyone missing from this map is currently considered healthy.
// Editable by hand as news breaks — update `gamesOut`/`note`, or delete the entry once resolved.
import { playerId } from "./players";

export type InjuryRisk = "prone" | "long_out";

export interface InjuryInfo {
  risk: InjuryRisk;
  gamesOut: number;
  note: string;
}

function entry(risk: InjuryRisk, gamesOut: number, note: string): InjuryInfo {
  return { risk, gamesOut, note };
}

export const INJURY_INFO: Record<string, InjuryInfo> = {
  [playerId("Puka Nacua", "WR")]: entry("prone", 0, "History of knee/ankle injuries; current psoas soreness expected to resolve quickly"),
  [playerId("Christian McCaffrey", "RB")]: entry("prone", 0, "Missed 13 games in 2024 with Achilles/knee injury; managing camp tightness now"),
  [playerId("CeeDee Lamb", "WR")]: entry("prone", 0, "Missed games each of the past two seasons; says he feels healthiest now"),
  [playerId("Justin Jefferson", "WR")]: entry("prone", 0, "Missed 7 games in 2023 with a torn hamstring; minor 2026 camp hamstring tweak resolved"),
  [playerId("Drake London", "WR")]: entry("prone", 0, "PCL knee sprain cost 4 games in 2025; minor 2026 offseason knee issue resolved"),
  [playerId("Brock Bowers", "TE")]: entry("prone", 0, "Knee injury limited him to 12 games in 2025; now fully healthy"),
  [playerId("Saquon Barkley", "RB")]: entry("prone", 0, "Recurring ankle sprains in 2019, 2021, 2023; minor ankle scare in 2026 camp"),
  [playerId("Omarion Hampton", "RB")]: entry("prone", 0, "Ankle fracture ended most of his 2025 rookie season; fully recovered now"),
  [playerId("De'Von Achane", "RB")]: entry("prone", 0, "Recovering from offseason shoulder surgery; also had 2025 rib and knee injuries"),
  [playerId("Nico Collins", "WR")]: entry("prone", 0, "History of multiple concussions in 2025, including playoffs; healthy entering 2026 camp"),
  [playerId("Kenneth Walker III", "RB")]: entry("prone", 0, "Frequent soft-tissue injuries through 2024 (ankle, calf, groin); played all 17 games in 2025"),
  [playerId("Chris Olave", "WR")]: entry("prone", 0, "History of concussions plus a lung blood clot that ended his 2025 season"),
  [playerId("Rashee Rice", "WR")]: entry("prone", 0, "Major 2024 knee reconstruction; minor knee clean-up surgery in May 2026"),
  [playerId("DeVonta Smith", "WR")]: entry("prone", 0, "Recurring hamstring issues in 2024 and again in 2026 training camp"),
  [playerId("Malik Nabers", "WR")]: entry("long_out", 1, "Off a 2025 ACL/meniscus tear but trending toward Week 1 — avoided PUP, slight opener risk, not a long absence"),
  [playerId("Kyren Williams", "RB")]: entry("prone", 0, "Recurring ankle issues in 2023 and again late in 2025 season"),
  [playerId("Tee Higgins", "WR")]: entry("prone", 0, "Recurring hamstring injuries in 2023-2024; dealt with concussions in 2025"),

  [playerId("Lamar Jackson", "QB")]: entry("prone", 0, "Missed 4 games in 2025 with hamstring, knee, and back issues"),
  [playerId("Josh Jacobs", "RB")]: entry("prone", 0, "Minor camp groin injury; also facing a possible NFL suspension over a May arrest"),
  [playerId("Javonte Williams", "RB")]: entry("prone", 0, "2022 torn ACL/LCL/PLC; recurring soft-tissue issues since"),
  [playerId("Ladd McConkey", "WR")]: entry("prone", 0, "Hip, shoulder, knee, and toe injuries in 2025 plus recurring hamstring strains"),
  [playerId("Garrett Wilson", "WR")]: entry("prone", 0, "Missed most of 2025 with a knee injury; now fully cleared"),
  [playerId("Terry McLaurin", "WR")]: entry("prone", 0, "Recurring ankle issue; opened 2026 camp on the PUP list"),
  [playerId("Davante Adams", "WR")]: entry("prone", 0, "Hamstring injury limited him late last season, entering his age-34 season"),
  [playerId("Joe Burrow", "QB")]: entry("prone", 0, "Missed time to a season-ending wrist injury (2023) and turf toe (2025)"),
  [playerId("Cam Skattebo", "RB")]: entry("prone", 0, "Recovered from a severe ankle dislocation/fibula fracture in 2025, full go"),
  [playerId("Jayden Daniels", "QB")]: entry("prone", 0, "Missed the final games of 2025 for injury management; healthy now"),
  [playerId("D'Andre Swift", "RB")]: entry("prone", 0, "Recurring groin injury issues throughout the 2025 season"),
  [playerId("Bucky Irving", "RB")]: entry("prone", 0, "Missed 7 games in 2025 with a shoulder injury requiring surgery, now full-go"),
  [playerId("Quinshon Judkins", "RB")]: entry("prone", 0, "Recovering from a dislocated ankle/fractured fibula suffered Week 16 2025"),
  [playerId("Christian Watson", "WR")]: entry("prone", 0, "Tore his ACL late in 2024; fully recovered but carries recurrence risk"),
  [playerId("Mike Evans", "WR")]: entry("prone", 0, "Minor camp quad strain resolving quickly; missed time with injury last season"),
  [playerId("David Montgomery", "RB")]: entry("prone", 0, "History includes a 2024 MCL sprain rehabbed without surgery"),
  [playerId("Rome Odunze", "WR")]: entry("prone", 0, "Missed 5 games in 2025 with a foot fracture, looks recovered for 2026"),
  [playerId("Jalen Hurts", "QB")]: entry("prone", 0, "History of concussions in recent seasons"),
  [playerId("Bhayshul Tuten", "RB")]: entry("prone", 0, "Dealt with a shoulder injury and finger surgery as a rookie in 2025"),
  [playerId("Tucker Kraft", "TE")]: entry("prone", 0, "Recovering from a Nov 2025 ACL tear; on track for Week 1"),

  [playerId("Jaylen Warren", "RB")]: entry("prone", 0, "Hamstring and knee injuries cost him time in 2024"),
  [playerId("Marvin Harrison Jr.", "WR")]: entry("prone", 0, "Missed 5 games in 2025 (appendicitis, two heel injuries, a concussion)"),
  [playerId("Tony Pollard", "RB")]: entry("prone", 0, "Recurring ankle/foot issues 2023-2025, though he's generally played through them"),
  [playerId("DK Metcalf", "WR")]: entry("prone", 0, "Sat out camp with a minor injury; missed 2 games with an MCL sprain in 2024"),
  [playerId("Brian Thomas Jr.", "WR")]: entry("prone", 0, "2025 ankle/shoulder injuries cost 4 games, lingering wrist; healthy now"),
  [playerId("Rhamondre Stevenson", "RB")]: entry("prone", 0, "Missed time each of the last 3 years with foot/ankle/calf injuries"),
  [playerId("Dak Prescott", "QB")]: entry("prone", 0, "2024 season-ending hamstring surgery (9 games missed); healthy since"),
  [playerId("Trevor Lawrence", "QB")]: entry("prone", 0, "Multiple concussions and a 2024 season-ending shoulder (AC joint) surgery"),
  [playerId("Sam LaPorta", "TE")]: entry("prone", 0, "Herniated disc ended his 2025 season (8 games missed); now cleared"),
  [playerId("Chuba Hubbard", "RB")]: entry("long_out", 3, "Week-to-week hamstring strain in Aug 2026 camp; also losing camp reps to a surging Jonathon Brooks"),
  [playerId("Alec Pierce", "WR")]: entry("long_out", 4, "On the PUP list all camp after ankle surgery — may miss the first ~4 games; Colts signed Keenan Allen as insurance"),
  [playerId("Rico Dowdle", "RB")]: entry("prone", 0, "Lost most of 2021 to a hip injury, 12 games in 2022 to an ankle injury"),
  [playerId("Chris Godwin Jr.", "WR")]: entry("prone", 0, "Dislocated ankle in 2024, past ACL/MCL tear; currently healthy in camp"),
  [playerId("Jordyn Tyson", "WR")]: entry("long_out", 9, "Hamstring injury in Aug 2026 camp — one report now puts the absence at ~2 months, real doubt about Week 1"),
  [playerId("J.K. Dobbins", "RB")]: entry("prone", 0, "History of multiple ACL tears; minor soft-tissue tweak in 2026 camp"),
  [playerId("Michael Pittman Jr.", "WR")]: entry("prone", 0, "Minor camp leg injury; history of back/lower-body issues, rarely a full 17 games"),
  [playerId("Brock Purdy", "QB")]: entry("prone", 0, "History of UCL surgery, shoulder/elbow, and turf toe that cost him 6 games in 2025"),
  [playerId("Quentin Johnston", "WR")]: entry("prone", 0, "History of concussion, ankle, hamstring, and rib injuries across recent seasons"),
  [playerId("Josh Downs", "WR")]: entry("prone", 0, "Recurring minor injuries (shoulder, ankle, knee, groin) across recent seasons"),
  [playerId("Bo Nix", "QB")]: entry("prone", 0, "Recovering from a fractured ankle (surgery in Jan, cleanup in April) but full go at camp"),

  [playerId("Wan'Dale Robinson", "WR")]: entry("prone", 0, "Past ACL tear, knee/quad issues, rib fracture; healthy now"),
  [playerId("Patrick Mahomes II", "QB")]: entry("prone", 0, "Recovering from ACL/LCL knee surgery, trending toward a Week 1 return"),
  [playerId("Makai Lemon", "WR")]: entry("prone", 0, "Recurring hamstring injury cost him camp reps, availability uncertain"),
  [playerId("Matthew Stafford", "QB")]: entry("prone", 0, "Recurring back/disc issues limited camp reps; expected to play"),
  [playerId("Jonathon Brooks", "RB")]: entry("prone", 0, "Two ACL tears in the past two years; now taking on more camp reps as Chuba Hubbard deals with a hamstring injury"),
  [playerId("Jordan Addison", "WR")]: entry("prone", 0, "History of recurring ankle injuries; minor camp thumb injury now"),
  [playerId("George Kittle", "TE")]: entry("long_out", 1, "Activated off PUP (2025 Achilles); Week 1 a distinct possibility, game-time decision — no longer a multi-week absence"),
  [playerId("Rachaad White", "RB")]: entry("prone", 0, "History of minor ankle, foot, and groin injuries"),
  [playerId("Jakobi Meyers", "WR")]: entry("prone", 0, "History of concussions, knee, ankle, and toe injuries in recent seasons"),
  [playerId("Jacory Croskey-Merritt", "RB")]: entry("prone", 0, "Missed camp time this offseason with a soft-tissue injury"),
  [playerId("Jayden Reed", "WR")]: entry("prone", 0, "Past season-ending collarbone/foot fractures; minor ankle issue in camp"),
  [playerId("Dalton Kincaid", "TE")]: entry("prone", 0, "Played 2025 on a torn PCL, opted for rehab again rather than surgery"),
  [playerId("Aaron Jones Sr.", "RB")]: entry("prone", 0, "Extensive injury history: hamstring, MCL, shoulder in recent seasons"),
  [playerId("Jordan Mason", "RB")]: entry("prone", 0, "2024 high ankle sprain landed him on IR; healthy now"),
  [playerId("Kyler Murray", "QB")]: entry("prone", 0, "Missed 12 games in 2025 with a foot/Lisfranc injury; full go now"),
  [playerId("Jake Ferguson", "TE")]: entry("prone", 0, "2024 concussion and knee injury; minor back contusion in camp"),
  [playerId("Dallas Goedert", "TE")]: entry("prone", 0, "History of concussion, fractured shoulder, forearm fracture; healthy now"),
  [playerId("Baker Mayfield", "QB")]: entry("prone", 0, "Played through MCL/PCL sprain, bicep, and shoulder injuries in 2025"),
  [playerId("Isaiah Likely", "TE")]: entry("prone", 0, "Broken foot required surgery in 2025 camp, missed 3 games; healthy now"),
  [playerId("Jordan Love", "QB")]: entry("prone", 0, "Torn thumb ligament, surgery in 2025 preseason; healthy in camp"),
  [playerId("Mark Andrews", "TE")]: entry("prone", 0, "Fractured fibula/ankle required surgery in 2023; healthy in camp"),
  [playerId("Xavier Worthy", "WR")]: entry("prone", 0, "Shoulder dislocation/labrum surgery in 2025, re-sprained the same shoulder in camp"),
  [playerId("Tyrone Tracy Jr.", "RB")]: entry("prone", 0, "Dislocated shoulder in Week 3 2025, missed weeks; healthy now"),
  [playerId("Chris Rodriguez Jr.", "RB")]: entry("prone", 0, "Recovering from offseason foot surgery, expected ready for Week 1"),
  [playerId("Khalil Shakir", "WR")]: entry("prone", 0, "Recurring high ankle sprains in back-to-back preseasons/seasons"),
  [playerId("Jalen Coker", "WR")]: entry("prone", 0, "Missed 6 games in 2025 with a quad strain; healthy now"),
  [playerId("Romeo Doubs", "WR")]: entry("prone", 0, "History of multiple concussions (two in 2024); minor camp absence"),

  // --- Added from Aug 25, 2026 news refresh ---
  [playerId("Jayden Higgins", "WR")]: entry("long_out", 17, "Torn ACL in Aug 2026 camp — done for the entire 2026 season"),
  [playerId("Zach Charbonnet", "RB")]: entry("long_out", 4, "On PUP recovering from ACL surgery — misses at least the first 4 games, with some risk it runs later"),
  [playerId("Jeremiyah Love", "RB")]: entry("long_out", 3, "High-ankle sprain in Aug 2026 camp, expected out several weeks; currently behind Tyler Allgeier and James Conner on Arizona's depth chart"),
  [playerId("Ashton Jeanty", "RB")]: entry("prone", 0, "Ankle sprain in Aug 2026 camp; trending better but Week 1 workload still uncertain"),
  [playerId("TreVeyon Henderson", "RB")]: entry("prone", 0, "Minor ankle issue in Aug 2026 camp, called a minor concern"),
  [playerId("Kyle Monangai", "RB")]: entry("prone", 0, "Hyperextended knee in Aug 2026 camp on top of an already-fading role; Week 1 availability in doubt"),
  [playerId("Alvin Kamara", "RB")]: entry("long_out", 4, "MCL sprain in Aug 2026 camp — expected to miss about a month"),
  [playerId("Breece Hall", "RB")]: entry("prone", 0, "Groin strain in Aug 2026 camp; reports conflict on severity, expected ready for Week 1"),
  [playerId("Deshaun Watson", "QB")]: entry("prone", 0, "Twice tore his right Achilles (Oct 2024, re-tear Jan 2025); medically cleared and playing in the preseason but in a real QB competition in Cleveland"),
  [playerId("Michael Penix Jr.", "QB")]: entry("prone", 0, "ACL recovery (Nov 2025 surgery) still lagging — has cost him the Week 1 starting job to Tua Tagovailoa"),
  [playerId("Anthony Richardson Sr.", "QB")]: entry("prone", 0, "Not competing for the starting job (Daniel Jones has it); fighting Riley Leonard for QB2, and his earlier trade request reportedly remains active"),

  // --- Extended depth additions (top 248-400) ---
  [playerId("Kendre Miller", "RB")]: entry("prone", 0, "recurring knee-hamstring issues have limited practice availability"),
  [playerId("Trey Benson", "RB")]: entry("long_out", 17, "Waived Aug 24 2026 with a knee flare-up and reverted to IR — out for the entire season"),
  [playerId("Elijah Mitchell", "RB")]: entry("prone", 0, "chronic hamstring and ankle injuries have repeatedly cost him time"),
  [playerId("Evan Hull", "RB")]: entry("long_out", 5, "missed games in 2025 with a knee injury"),
  [playerId("Marlon Mack", "RB")]: entry("prone", 0, "injury history, past ACL tear"),
  [playerId("Kenny McIntosh", "RB")]: entry("prone", 0, "injury-prone, dealt with a lingering lower-leg issue"),
  [playerId("Keenan Allen", "WR")]: entry("prone", 0, "hamstring"),
  [playerId("Rondale Moore", "WR")]: entry("prone", 0, "soft-tissue/hamstring"),
  [playerId("Jalin Hyatt", "WR")]: entry("long_out", 3, "hamstring strain"),
  [playerId("Zay Jones", "WR")]: entry("prone", 0, "recurring lower-body injuries have limited his availability"),
  [playerId("Erik Ezukanma", "WR")]: entry("long_out", 6, "missed roughly six games in 2025 with a concussion/lower-body injury"),
  [playerId("Luke Musgrave", "TE")]: entry("long_out", 4, "On PUP with a neck injury and an uncertain timeline — misses at least the first 4 games"),
  [playerId("Ricky Pearsall", "WR")]: entry("long_out", 17, "Placed on IR Aug 1 2026 after season-ending PCL knee surgery — out for the entire season"),
  [playerId("Foster Moreau", "TE")]: entry("long_out", 3, "offseason hip procedure limited camp and early-season workload"),
  [playerId("Will Levis", "QB")]: entry("prone", 0, "shoulder soreness that flares up under contact"),
  [playerId("Joe Milton III", "QB")]: entry("long_out", 3, "thumb injury that limited offseason and camp reps"),
};
