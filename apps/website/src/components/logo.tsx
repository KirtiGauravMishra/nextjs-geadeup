export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white ${className}`}
    >
      <svg width="60%" height="60%" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 3 1.5 6.5 9 10l7.5-3.5L9 3Z" fill="currentColor" />
        <path
          d="M4.5 8.2v3.3c0 1 2 2 4.5 2s4.5-1 4.5-2V8.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
