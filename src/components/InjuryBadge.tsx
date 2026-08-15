import { INJURY_INFO } from "../data/injuries";
import { SHORT_ABSENCE_GAMES } from "../lib/recommend";

export function InjuryBadge({ id }: { id: string }) {
  const info = INJURY_INFO[id];
  if (!info) return null;

  if (info.risk === "long_out") {
    // A short, well-defined absence (~3 games or fewer) isn't a real risk — show it
    // as plain info, not an alarm, and don't dock the recommendation for it (see recommend.ts).
    const isMinor = info.gamesOut <= SHORT_ABSENCE_GAMES;
    return (
      <span className={`injury-badge ${isMinor ? "injury-minor" : "injury-long"}`} title={info.note}>
        OUT ~{info.gamesOut}g
      </span>
    );
  }

  return (
    <span className="injury-badge injury-prone" title={info.note}>
      RISK
    </span>
  );
}
