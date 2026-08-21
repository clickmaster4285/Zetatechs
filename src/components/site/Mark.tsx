export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {[0, 3.6, 7.2].map((i) => (
        <path
          key={i}
          d={`M${3 + i} ${4 + i} H${29 - i} L${3 + i} ${28 - i} H${29 - i}`}
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="miter"
          fill="none"
        />
      ))}
    </svg>
  );
}
