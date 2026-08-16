import { PLAYER_STATS } from "../data/stats";
import type { BoardPlayer } from "../lib/recommend";

export function PpgBadge({ player }: { player: BoardPlayer }) {
  const stats = PLAYER_STATS[player.id];
  if (!stats) return null;

  return (
    <span className="ppg-badge" title={`${stats.ppg.toFixed(1)} PPR points/game, 2025`}>
      {stats.ppg.toFixed(1)}p
    </span>
  );
}
