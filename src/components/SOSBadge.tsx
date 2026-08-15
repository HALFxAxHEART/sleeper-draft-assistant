import { TEAM_CONTEXT } from "../data/teams";

const LABEL: Record<string, string> = { easy: "Easy SOS", medium: "Med SOS", hard: "Hard SOS" };

export function SOSBadge({ team }: { team: string }) {
  const ctx = TEAM_CONTEXT[team];
  if (!ctx) return null;
  const title = `Playoff schedule (wk 15-17): ${ctx.sosNote}\n\nOffseason: ${ctx.offenseNote}`;
  return (
    <span className={`sos-badge sos-${ctx.sos}`} title={title}>
      {LABEL[ctx.sos]}
    </span>
  );
}
