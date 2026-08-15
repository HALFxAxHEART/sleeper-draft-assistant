import { INJURY_INFO } from "../data/injuries";
import { SHORT_ABSENCE_GAMES } from "../lib/recommend";

// Only shown for a real, active concern — a long absence beyond the "not really a risk"
// threshold. A short absence or mere injury history isn't penalized in recommend.ts anymore,
// so it doesn't get a badge either; a gray "risk" badge for something that isn't a risk is
// just noise.
export function InjuryBadge({ id }: { id: string }) {
  const info = INJURY_INFO[id];
  if (!info || info.risk !== "long_out" || info.gamesOut <= SHORT_ABSENCE_GAMES) return null;

  return (
    <span className="injury-badge injury-long" title={info.note}>
      OUT ~{info.gamesOut}g
    </span>
  );
}
