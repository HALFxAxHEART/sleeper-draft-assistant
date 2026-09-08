import { PLAYER_VOLUME } from "../data/volume";
import type { BoardPlayer } from "../lib/recommend";

export function VolumeBadge({ player }: { player: BoardPlayer }) {
  const info = PLAYER_VOLUME[player.id];
  if (!info) return null;

  const text = player.position === "RB" && info.touches != null ? `${info.touches} tch` : `${info.targets} tgt`;
  const title =
    player.position === "RB" && info.touches != null
      ? `${info.touches} touches (rush att + targets), ${info.targets} of those targets — 2025 season`
      : `${info.targets} targets — 2025 season`;

  return (
    <span className="volume-badge" title={title}>
      {text}
    </span>
  );
}
