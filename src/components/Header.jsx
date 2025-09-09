import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../images/logo.png" // <-- src/images içinden import

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLeft = [
    { to: "/", label: "Anasayfa", end: true },
    { to: "/hakkimizda", label: "Hakkımızda" },
    { to: "/misyon-vizyon", label: "Misyon & Vizyon" },
  ]
  const navRight = [
    { to: "/projeler", label: "Projeler" },
    { to: "/referanslar", label: "Referanslar" },
    { to: "/iletisim", label: "İletişim" },
  ]

  const linkBase = "text-slate-700 hover:text-emerald-700 py-2"

  return (
    <header className="sticky top-0 z-50 isolate backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white border-b">
      {/* ÜST BAR */}
      <div className="bg-slate-900 text-white/80 text-xs">
        <div className="max-w-6xl mx-auto h-9 px-4 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+903123230600" className="hover:text-white inline-flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.1.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.85 22 2 12.15 2 1a1 1 0 011-1h3.49a1 1 0 011 1c0 1.28.2 2.48.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              +90 312 323 06 00
            </a>
            <a href="mailto:ckarainsaat@gmail.com" className="hover:text-white inline-flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm0 4.24l-8 5-8-5V18a2 2 0 002 2h16a2 2 0 002-2V8.24z"/></svg>
              ckarainsaat@gmail.com
            </a>
          </div>
          <div className="ml-auto hidden sm:block">Çalışma Saatleri: 09:00–18:00</div>
        </div>
      </div>

      {/* ALT BAR */}
      <div className="relative">
        <div className="relative max-w-6xl mx-auto h-[64px] md:h-[88px] grid grid-cols-3 items-center px-4">
          {/* SOL NAV */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium justify-start">
            {navLeft.map(i => (
              <NavLink
                key={i.to}
                to={i.to}
                end={i.end}
                className={({ isActive }) => `${linkBase} ${isActive ? "text-emerald-700" : ""}`}
              >
                {i.label}
              </NavLink>
            ))}
          </nav>

          {/* ORTA LOGO */}
          <div className="flex justify-center pointer-events-none select-none">
            <Link
              to="/"
              className="md:-mt-10 bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 px-4 py-2 inline-flex pointer-events-auto"
            >
              <img
                src={logo}
                alt="C.Kara İnşaat"
                className="h-14 md:h-20 lg:h-24 w-auto object-contain [filter:drop-shadow(0_0_1.6px_rgba(0,0,0,.5))]"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">C.Kara İnşaat</span>
            </Link>
          </div>

          {/* SAĞ NAV */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium justify-end">
            {navRight.map(i => (
              <NavLink
                key={i.to}
                to={i.to}
                className={({ isActive }) => `${linkBase} ${isActive ? "text-emerald-700" : ""}`}
              >
                {i.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBİL TOGGLE */}
          <button
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-slate-100"
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen(s => !s)}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBİL MENÜ */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t bg-white ${
            open ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-[15px]">
            {[...navLeft, ...navRight].map(i => (
              <NavLink
                key={i.to}
                to={i.to}
                end={i.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block py-2 ${isActive ? "text-emerald-700" : ""}`}
              >
                {i.label}
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t text-xs text-slate-500">
              <div className="flex items-center gap-3 flex-wrap">
                <a href="tel:+903123230600" className="hover:text-slate-700">+90 312 323 06 00</a>
                <span className="hidden sm:inline">•</span>
                <a href="mailto:ckarainsaat@gmail.com" className="hover:text-slate-700">ckarainsaat@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
