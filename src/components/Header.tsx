import { useState } from 'react'
import { CloseIcon, MenuIcon } from './icons.tsx'

const navItems = [
  { href: '#blurb', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#shop', label: 'Shop' },
  { href: '#connect', label: 'Connect' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-[rgba(20,31,28,0.85)] backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <a
          className="inline-flex items-center gap-2 whitespace-nowrap font-heading text-lg text-paper no-underline"
          href="#top"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/logo.png" alt="Vivaria logo" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" />
          Vivaria
        </a>

        <nav className="hidden items-center gap-5 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-ink-soft no-underline hover:text-accent-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-paper sm:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 pb-4 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-[0.95rem] text-ink-soft no-underline hover:bg-forest hover:text-accent-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
