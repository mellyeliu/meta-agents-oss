/**
 * Header - App header with branding and controls
 */

import { Sun, Moon, X } from 'lucide-react'

/**
 * MetaLogo - The Meta infinity logo
 */
function CraftAgentLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1, 5)" fill="currentColor">
        <path
          d="M17.4 0.2c-1.2 0.1-2.3 0.8-3.4 2-0.6 0.7-1.1 1.3-2.4 3.2-0.2 0.3-0.4 0.6-0.5 0.7l-0.1 0.1-0.3-0.4c-1.2-1.7-2-2.8-2.8-3.5C6.9 1.4 6 1.1 5.1 1.1c-1.5 0-2.8 1-3.5 2.8C0.9 5.5 0.5 7.5 0.5 9.4c0 1.3 0.3 2.3 0.8 3 0.5 0.6 1.1 0.9 1.8 0.9 0.8 0 1.5-0.4 2.4-1.3 0.7-0.8 1.3-1.6 2.8-4 1-1.5 1.3-2 1.6-2.5 0.6-0.8 1.1-1.1 1.6-1.2 0.3-0.1 0.6 0 0.9 0.1 0.6 0.3 1.3 1.2 2 2.5l0.3 0.6-0.3 0.4c-1.2 1.9-2 3.1-2.6 3.8-0.9 1-1.6 1.3-2.4 1.3-0.4 0-0.7-0.1-1-0.4-0.3-0.3-0.5-0.6-0.6-1.2l-0.6-0.1c-0.1 0.7 0.1 1.4 0.5 1.8 0.4 0.5 1 0.8 1.7 0.8 0.8 0 1.6-0.4 2.5-1.3 0.8-0.8 1.5-1.8 2.8-4l0.3-0.5 0.2 0.4c1 1.8 1.8 3 2.5 3.8 1.1 1.3 2 1.8 3.1 1.8 0.9 0 1.6-0.4 2.1-1.2 0.5-0.7 0.7-1.6 0.7-2.6 0-2-0.6-4.1-1.5-5.7C20.5 1.3 19 0.3 17.4 0.2z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}

interface HeaderProps {
  hasSession: boolean
  sessionTitle?: string
  isDark: boolean
  onToggleTheme: () => void
  onClear: () => void
}

export function Header({ hasSession, sessionTitle, isDark, onToggleTheme, onClear }: HeaderProps) {
  return (
    <header className="shrink-0 grid grid-cols-[auto_1fr_auto] items-center px-4 py-3">
      {/* Logo - links to main site */}
      <a
        href="https://agents.craft.do"
        className="hover:opacity-80 transition-opacity"
        title="Craft Agent"
      >
        <CraftAgentLogo className="w-6 h-6 text-[#9570BE]" />
      </a>

      {/* Session title - centered */}
      <div className="flex justify-center">
        {sessionTitle && (
          <span className="text-sm font-semibold text-foreground truncate max-w-md">
            {sessionTitle}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Clear button (when session is loaded) */}
        {hasSession && (
          <button
            onClick={onClear}
            className="p-1.5 rounded-md bg-background shadow-minimal text-foreground/40 hover:text-foreground/70 transition-colors"
            title="Clear session"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="p-1.5 rounded-md bg-background shadow-minimal text-foreground/40 hover:text-foreground/70 transition-colors"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  )
}
