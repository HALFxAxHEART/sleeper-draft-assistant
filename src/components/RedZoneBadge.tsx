import { redZoneBadgeInfo, type BoardPlayer } from "../lib/recommend";

export function RedZoneBadge({ player }: { player: BoardPlayer }) {
  const info = redZoneBadgeInfo(player);
  if (!info) return null;

  return (
    <span className={`redzone-badge ${info.standout ? "redzone-high" : "redzone-mid"}`} title={info.note}>
      RZ {info.pct}%
    </span>
  );
}
