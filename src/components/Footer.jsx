import { Link } from "react-router-dom"
import logo from "../images/logo.png" // <-- import

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="border-t-4 border-emerald-600"></div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1) Marka */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="C.Kara İnşaat"
              className="h-10 w-auto object-contain [filter:drop-shadow(0_0_1px_rgba(0,0,0,.45))]"
              loading="lazy"
              decoding="async"
            />
            <span className="sr-only">C.Kara İnşaat</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Konut, villa ve ticari yapılarda <span className="text-emerald-400">anahtar teslim</span> çözümler.
            Kalite, iş güvenliği ve zamanında teslim prensipleriyle.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/ckarainsaat/"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-4 h-4 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A5.5 5.5 0 1112 18a5.5 5.5 0 010-11zM18 6.5a1 1 0 110 2 1 1 0 010-2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 2) Hızlı Bağlantılar */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-300">Hızlı Bağlantılar</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Anasayfa</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
            <li><Link to="/misyon-vizyon" className="hover:text-white">Misyon & Vizyon</Link></li>
            <li><Link to="/projeler" className="hover:text-white">Projeler</Link></li>
            <li><Link to="/referanslar" className="hover:text-white">Referanslar</Link></li>
            <li><Link to="/iletisim" className="hover:text-white">İletişim</Link></li>
          </ul>
        </div>

        {/* 3) Kısayollar */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-300">Kısayollar</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/projeler?status=ongoing" className="hover:text-white">Devam Eden Projeler</Link></li>
            <li><Link to="/projeler?status=completed" className="hover:text-white">Tamamlanan Projeler</Link></li>
            <li><Link to="/projeler?status=upcoming" className="hover:text-white">Gelecek Projeler</Link></li>
            <li className="mt-3 pt-3 border-t border-white/10 text-slate-400">Referans türleri:</li>
            <li className="flex flex-wrap gap-3 text-xs">
              <Link to="/referanslar?cat=konut" className="px-2 py-1 rounded bg-white/5 hover:bg-white/10">Konut</Link>
              <Link to="/referanslar?cat=ticari" className="px-2 py-1 rounded bg-white/5 hover:bg-white/10">Ticari</Link>
              <Link to="/referanslar?cat=kamu" className="px-2 py-1 rounded bg-white/5 hover:bg-white/10">Kamu</Link>
            </li>
          </ul>
        </div>

        {/* 4) İletişim */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-300">İletişim</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 018 8c0 5.25-7.2 11.4-7.52 11.66a.7.7 0 01-.96 0C9.2 21.4 2 15.25 2 10a8 8 0 018-8zm0 4a4 4 0 100 8 4 4 0 000-8z"/></svg>
              <span>Menderes, 59. Cd. No:14 06900<br/>Sincan/Ankara</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.1.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.85 22 2 12.15 2 1a1 1 0 011-1h3.49a1 1 0 011 1c0 1.28.2 2.48.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              <a href="tel:+903123230600" className="hover:text-white">+90 312 323 06 00</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm0 4.24l-8 5-8-5V18a2 2 0 002 2h16a2 2 0 002-2V8.24z"/></svg>
              <a href="mailto:ckarainsaat@gmail.com" className="hover:text-white">ckarainsaat@gmail.com</a>
            </li>
          </ul>

          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 mt-4 text-xs px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5"
          >
            Haritada Gör
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7v-4H4v-6h9V5z"/></svg>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-3 text-slate-400">
          <p>© {new Date().getFullYear()} Cengizhan Kara İnşaat. Tüm hakları saklıdır.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-white">KVKK</a>
            <a href="#" className="hover:text-white">Aydınlatma Metni</a>
            <a href="#" className="hover:text-white">Çerez Politikası</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
