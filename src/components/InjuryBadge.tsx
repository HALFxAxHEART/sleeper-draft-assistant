import { INJURY_INFO } from "../data/injuries";

export function InjuryBadge({ id }: { id: string }) {
  const info = INJURY_INFO[id];
  if (!info) return null;

  if (info.risk === "long_out") {
    return (
      <span className="injury-badge injury-long" title={info.note}>
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
