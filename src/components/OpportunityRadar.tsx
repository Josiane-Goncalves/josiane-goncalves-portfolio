export function OpportunityRadar() {
  return (
    <span
      aria-hidden="true"
      className="system-radar"
      data-opportunity-radar=""
    >
      <span className="system-radar__ring system-radar__ring--outer" />
      <span className="system-radar__ring system-radar__ring--inner" />
      <span className="system-radar__axis system-radar__axis--horizontal" />
      <span className="system-radar__axis system-radar__axis--vertical" />
      <span className="system-radar__sweep" />
      <span className="system-radar__signal" />
    </span>
  );
}
