const COLORS = [
  "#f43f5e", // 1
  "#fb923c", // 2
  "#facc15", // 3
  "#a3e635", // 4
  "#34d399", // 5
  "#22d3ee", // 6
  "#818cf8", // 7
  "#c084fc", // 8+
];

export function tierColor(tier: number): string {
  return COLORS[Math.min(tier - 1, COLORS.length - 1)] ?? COLORS[COLORS.length - 1];
}

export function TierBadge({ tier }: { tier: number }) {
  return (
    <span className="tier-badge" style={{ background: tierColor(tier) }}>
      T{tier}
    </span>
  );
}
