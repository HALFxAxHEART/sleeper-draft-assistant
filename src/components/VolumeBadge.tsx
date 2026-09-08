import { PLAYER_VOLUME } from "../data/volume";
import { TEAM_PASS_ATTEMPTS } from "../data/teamPassing";
import type { BoardPlayer } from "../lib/recommend";

export function VolumeBadge({ player }: { player: BoardPlayer }) {
  const info = PLAYER_VOLUME[player.id];
  if (!info) return null;

  const teamAttempts = TEAM_PASS_ATTEMPTS[player.team];
  const targetPct = teamAttempts ? Math.round((info.targets / teamAttempts) * 100) : null;
  const pctText = targetPct != null ? ` · ${targetPct}%` : "";

  const text = player.position === "RB" && info.touches != null ? `${info.touches} tch${pctText}` : `${info.targets} tgt${pctText}`;

  const targetShareLine = targetPct != null ? `${targetPct}% target share (${info.targets} of the team's ~${teamAttempts} pass attempts)` : "";
  const title =
    player.position === "RB" && info.touches != null
      ? `${info.touches} touches (rush att + targets), ${info.targets} of those targets — 2025 season${targetShareLine ? `. ${targetShareLine}` : ""}`
      : `${info.targets} targets — 2025 season${targetShareLine ? `. ${targetShareLine}` : ""}`;

  return (
    <span className="volume-badge" title={title}>
      {text}
    </span>
  );
}
