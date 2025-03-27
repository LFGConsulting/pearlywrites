import { useTheme } from '../ThemeProvider'
import { Button } from './Button'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className="p-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path
          d={
            theme === 'dark'
              ? 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'
              : 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
          }
          stroke="currentColor"
        />
      </svg>
    </Button>
  )
} 