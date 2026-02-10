interface CraftAgentsLogoProps {
  className?: string
}

/**
 * Meta wordmark logo - uses accent color from theme
 * Apply text-accent class to get the brand blue color
 */
export function CraftAgentsLogo({ className }: CraftAgentsLogoProps) {
  return (
    <svg
      viewBox="0 0 240 50"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="42"
        fontFamily="Helvetica Neue, Arial, sans-serif"
        fontSize="52"
        fontWeight="300"
        letterSpacing="-1"
      >
        Meta
      </text>
    </svg>
  )
}
