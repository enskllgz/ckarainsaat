import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useRef } from "react"
import {
  cats as catsSource,
  counts as countsSource,
  references as refsSource,
  testimonials as testiSource,
} from "../data/data"

export default function References() {
  const [params] = useSearchParams()
  const tab = params.get("cat") // null | "konut" | "ticari" | "kamu"

  // tek veri kaynağı
  const cats = catsSource
  const counts = countsSource
  const references = refsSource
  const testimonials = testiSource

  // filtre
  const list = Array.isArray(references)
    ? references.filter((r) => (tab ? r.category === tab : true))
    : []

  // slider refs
  const listRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const prevMRef = useRef(null)
  const nextMRef = useRef(null)

  useEffect(() => {
    const listEl = listRef.current
    if (!listEl) return

    const step = () => listEl.clientWidth * 0.9
    const scrollByStep = (dir) =>
      listEl.scrollBy({ left: dir * step(), behavior: "smooth" })

    const goNext = () => scrollByStep(1)
    const goPrev = () => scrollByStep(-1)

    const btns = [nextRef.current, nextMRef.current, prevRef.current, prevMRef.current]
    btns[0]?.addEventListener("click", goNext)
    btns[1]?.addEventListener("click", goNext)
    btns[2]?.addEventListener("click", goPrev)
    btns[3]?.addEventListener("click", goPrev)

    let timer = setInterval(goNext, 5000)
    const pause = () => clearInterval(timer)
    const resume = () => (timer = setInterval(goNext, 5000))

    ;[listEl, ...btns.filter(Boolean)].forEach((el) => {
      el?.addEventListener("mouseenter", pause)
      el?.addEventListener("mouseleave", resume)
    })

    return () => {
      btns[0]?.removeEventListener("click", goNext)
      btns[1]?.removeEventListener("click", goNext)
      btns[2]?.removeEventListener("click", goPrev)
      btns[3]?.removeEventListener("click", goPrev)
      ;[listEl, ...btns.filter(Boolean)].forEach((el) => {
        el?.removeEventListener("mouseenter", pause)
        el?.removeEventListener("mouseleave", resume)
      })
      clearInterval(timer)
    }
  }, [])

  const pillClass = (isActive) =>
    "whitespace-nowrap px-3.5 py-1.5 rounded-xl border text-sm " +
    (isActive
      ? "border-emerald-600 text-emerald-700 bg-emerald-50"
      : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50")

  const catColor = (c) =>
    c === "konut" ? "bg-emerald-600"
    : c === "ticari" ? "bg-sky-600"
    : c === "kamu" ? "bg-amber-600"
    : "bg-gray-600"

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600"
          className="absolute inset-0 w-full h-48 sm:h-56 md:h-64 object-cover"
          alt="Referanslar"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/15 pointer-events-none z-[1]" />
        <div className="relative z-[2] max-w-6xl mx-auto px-4 h-48 sm:h-56 md:h-64 flex items-end pb-6">
          <div className="text-white">
            <p className="uppercase tracking-widest text-[11px] sm:text-xs opacity-90">
              C.Kara İnşaat
            </p>
            <h1 className="font-extrabold leading-tight text-[clamp(22px,4.5vw,36px)]">
              Referanslar
            </h1>
            <p className="opacity-90 text-sm sm:text-base">
              Çalıştığımız kurum ve projelerden seçmeler.
            </p>
          </div>
        </div>
      </section>

      {/* FİLTRE PİLLS */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 overflow-x-auto -mx-1 px-1">
          <Link to="/referanslar" className={pillClass(!tab)}>
            Tümü <span className="ml-1 text-gray-400">({counts.all ?? 0})</span>
          </Link>
          {Object.entries(cats).map(([key, label]) => (
            <Link
              key={key}
              to={`/referanslar?cat=${key}`}
              className={pillClass(tab === key)}
            >
              {label}{" "}
              <span className="ml-1 text-gray-400">({counts[key] ?? 0})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        {list.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
            Bu kategoride referans bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((r, idx) => {
              const cover = r.cover || "https://picsum.photos/seed/ref/900/600"
              const name = r.name || "Referans"
              const sub = r.subtitle || ""
              const year = r.year
              const cat = r.category
              const catLabel = cat
                ? cats[cat] || (cat[0]?.toUpperCase() + cat.slice(1))
                : null

              return (
                <div
                  key={r.id || name + idx}
                  className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={cover}
                    alt={name}
                    className="w-full h-44 sm:h-56 md:h-60 object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {catLabel && (
                      <span
                        className={`text-[11px] sm:text-xs text-white px-2 py-1 rounded-md ${catColor(
                          cat
                        )} shadow`}
                      >
                        {catLabel}
                      </span>
                    )}
                    {year && (
                      <span className="text-[11px] sm:text-xs text-white px-2 py-1 rounded-md bg-black/50">
                        {year}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <h3 className="font-semibold text-[17px] md:text-lg leading-tight">
                      {name}
                    </h3>
                    {sub && (
                      <p className="text-[13px] md:text-sm opacity-90">{sub}</p>
                    )}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500 scale-x-0 hover:scale-x-100 origin-left transition" />
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* MÜŞTERİ MEMNUNİYETLERİ (Slider) */}
      {testimonials?.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pt-6 pb-8">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-sm tracking-wide text-gray-500 uppercase">
                Görüşler
              </p>
              <h2 className="text-[clamp(18px,3.5vw,28px)] font-semibold">
                Müşteri Memnuniyetleri
              </h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                ref={prevRef}
                className="h-9 w-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center"
                aria-label="Önceki"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="h-9 w-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center"
                aria-label="Sonraki"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={listRef}
            className="mt-6 -mx-1 px-1 grid grid-flow-col auto-cols-[90%] sm:auto-cols-[60%] md:auto-cols-[45%] lg:auto-cols-[33%] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.name + i}
                className="snap-start rounded-2xl bg-white ring-1 ring-gray-200 shadow p-6"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={t.name}
                  />
                  <div>
                    <figcaption className="font-semibold">{t.name}</figcaption>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < (t.rating ?? 5) ? "text-amber-400" : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.966 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.4 8.72c-.783-.57-.38-1.81.588-1.81H7.45a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <blockquote className="mt-4 text-gray-700 leading-relaxed text-sm">
                  “{t.quote}”
                </blockquote>
                {t.project && (
                  <p className="mt-3 text-xs text-gray-500">
                    Proje: <span className="font-medium">{t.project}</span>
                  </p>
                )}
              </figure>
            ))}
          </div>

          {/* Mobil butonlar */}
          <div className="sm:hidden mt-3 flex justify-center gap-3">
            <button
              ref={prevMRef}
              className="h-9 w-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center"
              aria-label="Önceki"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              ref={nextMRef}
              className="h-9 w-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 grid place-items-center"
              aria-label="Sonraki"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="mt-6 text-center">
          <Link
            to="/projeler"
            className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            Tüm Projeleri Gör
          </Link>
        </div>
      </section>
    </>
  )
}
