// src/pages/Home.jsx
import { Link } from "react-router-dom"

/**
 * props:
 *  - sliders: [{ title, subtitle, image, button_text, button_url }]
 *  - projects: [{ slug, title, short, cover, status, is_featured }]
 */
export default function Home({ sliders = [], projects = [] }) {
  // === Blade'deki @php bloğunun birebir JS karşılığı ===
  const slides = sliders ?? []
  const hero =
    slides[0] ?? {
      title: "Güvenli Yapılar, Zamanında Teslim",
      subtitle: "Konut, villa ve ticari projelerde anahtar teslim çözümler.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",
      button_text: "Projeleri Gör",
      // SPA'de /projeler rotası:
      button_url: "/projeler",
    }

  const plist = Array.isArray(projects) ? projects : []
  const featured = plist.filter((p) => p.is_featured).slice(0, 3)
  const cAll = plist.length
  const cOngoing = plist.filter((p) => p.status === "ongoing").length
  const cDone = plist.filter((p) => p.status === "completed").length
  const cNext = plist.filter((p) => p.status === "upcoming").length

  return (
    <>
      {/* HERO */}
      <section className="relative">
        {/* arka görsel */}
        <img
          src={hero.image}
          alt="Hero görseli"
          className="absolute inset-0 w-full h-[44vh] md:h-[60vh] object-cover"
        />

        {/* gradient + soft pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10 pointer-events-none z-[1]" />
        <div
          className="absolute inset-0 opacity-[.08] pointer-events-none z-[1]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* içerik */}
        <div className="relative z-[2] max-w-6xl mx-auto px-4 h-[44vh] md:h-[60vh] flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="font-extrabold tracking-tight leading-tight text-[clamp(22px,4.8vw,48px)]">
              {hero.title}
            </h1>
            <p className="mt-3 text-[clamp(14px,2.6vw,18px)] opacity-95">
              {hero.subtitle}
            </p>

            {/* Buton: eğer absolute url ise <a>, değilse <Link> */}
            {/^https?:\/\//.test(hero.button_url) ? (
              <a
                href={hero.button_url}
                className="mt-5 inline-block px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-emerald-600 text-white text-[15px] md:text-base font-medium hover:bg-emerald-700 transition"
              >
                {hero.button_text}
              </a>
            ) : (
              <Link
                to={hero.button_url || "/projeler"}
                className="mt-5 inline-block px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-emerald-600 text-white text-[15px] md:text-base font-medium hover:bg-emerald-700 transition"
              >
                {hero.button_text}
              </Link>
            )}

            {/* Hizmet kısa yolları */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 max-w-md gap-3 text-xs md:text-sm">
              <Link
                to="/referanslar?cat=konut"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-8z" />
                </svg>
                <span>Konut</span>
              </Link>
              <Link
                to="/referanslar?cat=ticari"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 13h18v7H3zM7 4h10v7H7z" />
                </svg>
                <span>Ticari</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İSTATİSTİK ŞERİDİ */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat title="Toplam Proje" value={cAll} />
          <Stat title="Devam Eden" value={cOngoing} />
          <Stat title="Tamamlanan" value={cDone} />
          <Stat title="Gelecek Proje" value={cNext} />
        </div>
      </section>

      {/* ÖNE ÇIKAN PROJELER */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Öne Çıkan Projelerimiz</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Seçtiğimiz birkaç projeye hızlı göz at.
            </p>
          </div>
          <Link
            to="/projeler"
            className="hidden sm:inline-block px-3.5 py-2 rounded-lg border text-xs md:text-sm hover:bg-gray-50"
          >
            Tüm Projeleri Görüntüle
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featured.length > 0 ? (
            featured.map((p) => (
              <Link
                key={p.slug}
                to={`/projeler/${p.slug}`}
                className="relative group rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={p.cover}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
                  alt={p.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] md:text-xs px-2 py-1 rounded bg-white/90 text-gray-800 capitalize">
                  {p.status}
                </span>

                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="font-semibold text-lg leading-tight">
                    {p.title}
                  </h3>
                  {p.short && (
                    <p className="text-sm opacity-90">
                      {truncate(p.short, 90)}
                    </p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed p-8 text-center text-gray-600">
              Şimdilik öne çıkan proje eklenmedi.
            </div>
          )}
        </div>

        {/* mobil "tüm projeler" */}
        <Link
          to="/projeler"
          className="sm:hidden mt-6 inline-block px-3.5 py-2 rounded-lg border text-xs hover:bg-gray-50"
        >
          Tüm Projeleri Görüntüle
        </Link>
      </section>

      {/* NEDEN C.KARA İNŞAAT? */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17l-5.5 3 1.5-6.2L3 9l6.3-.5L12 3l2.7 5.5L21 9l-5 4.8 1.5 6.2z" />
              </svg>
            }
            title="Kalite & İş Güvenliği"
            text="Malzeme ve işçilikte standardı yüksek tutar, şantiyede güvenliği önceleyen süreçler uygularız."
          />
          <Feature
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v4H4zm0 6h10v4H4zm0 6h7v4H4z" />
              </svg>
            }
            title="Uçtan Uca Koordinasyon"
            text="Statik, mimari, mekanik ve elektrik disiplinlerini tek elden koordine ederiz."
          />
          <Feature
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5a2 2 0 00-2 2v14l4-3h12a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
            }
            title="Zamanında Teslim"
            text="Gerçekçi planlama, şeffaf raporlama ve güçlü saha yönetimiyle işimizi zamanında bitiririz."
          />
        </div>
      </section>

      {/* YORUMLAR (mock) */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
          <h3 className="font-semibold text-lg mb-4">Müşterilerimiz Ne Diyor?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <blockquote className="p-4 rounded-xl bg-gray-50">
              “Planlanan tarihten önce teslim edildi, süreç boyu iletişim çok
              iyiydi.”{" "}
              <span className="block mt-2 text-xs text-gray-500">— A. Yılmaz</span>
            </blockquote>
            <blockquote className="p-4 rounded-xl bg-gray-50">
              “Teknik ekip detaylara hakimdi, kalite beklentimizi karşıladılar.”{" "}
              <span className="block mt-2 text-xs text-gray-500">— N. Demir</span>
            </blockquote>
            <blockquote className="p-4 rounded-xl bg-gray-50">
              “Şantiye düzeni ve iş güvenliği örnek gösterilecek seviyedeydi.”{" "}
              <span className="block mt-2 text-xs text-gray-500">— M. Koç</span>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}

// === küçük yardımcılar ===
function Stat({ title, value }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-extrabold text-emerald-700">
        {value}
      </div>
      <div className="text-xs md:text-sm text-gray-600">{title}</div>
    </div>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-6">
      <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 grid place-content-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  )
}

function truncate(str = "", n = 90) {
  return str.length > n ? str.slice(0, n - 1) + "…" : str
}
