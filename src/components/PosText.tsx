export function PosText({ position }: { position: string }) {
  return <span className={`pos-text pos-${position.toLowerCase()}`}>{position}</span>;
}
