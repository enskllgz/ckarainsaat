import { Link } from "react-router-dom"

export default function About() {
  // Blade'deki $stats ve $steps verilerini JS dizilerine çevirdim
  const stats = [
    { num: "15+", label: "Yıl Tecrübe" },
    { num: "120.000 m²", label: "Tamamlanan İnşaat" },
    { num: "35", label: "Teslim Edilen Proje" },
  ]

  const steps = [
    { title: "Keşif & İhtiyaç Analizi", desc: "Arazi/yerinde inceleme, hedef ve bütçe netleştirme." },
    { title: "Tasarım & Planlama", desc: "Mimari, statik ve MEP koordinasyonu; onay süreçleri." },
    { title: "Uygulama", desc: "Şantiye mobilizasyonu, iş programı ve kalite kontrol." },
    { title: "Teslim & Sonrası", desc: "Test-devreye alma, as-built dokümantasyon ve garanti." },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1600"
          alt="CKara İnşaat"
          className="absolute inset-0 w-full h-[44vh] md:h-[56vh] object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/20 pointer-events-none z-[1]" />

        <div className="relative z-[2] max-w-6xl mx-auto px-4 h-[44vh] md:h-[56vh] flex items-end pb-8 md:pb-10">
          <div className="text-white">
            <p className="uppercase tracking-widest text-[11px] md:text-sm opacity-90">Cengizhan Kara İnşaat</p>
            <h1 className="font-bold leading-tight text-[clamp(22px,5vw,48px)]">
              Geleceği Güvenle İnşa Ediyoruz
            </h1>
            <p className="mt-3 max-w-2xl opacity-90 text-sm md:text-base">
              Konut, villa ve ticari yapılarda anahtar teslim çözümler. Kalite, iş güvenliği ve zamanında teslim odaklı.
            </p>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA: Metin + Görsel Kolaj */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid md:grid-cols-2 gap-8 md:gap-10">
        <article className="prose prose-sm md:prose-base max-w-none">
          <h2>Biz Kimiz?</h2>
          <p>
            Cengizhan Kara İnşaat; planlama, mimari tasarım, uygulama ve teslim sonrası destek süreçlerinin
            tamamını tek elden yöneten bir yapım şirketidir. Şantiye yönetiminden alt yüklenici
            koordinasyonuna kadar tüm adımları şeffaf şekilde yürütürüz.
          </p>
          <ul>
            <li>Uygulama &amp; Şantiye Yönetimi</li>
            <li>Statik, Mekanik, Elektrik Koordinasyonu</li>
            <li>Keşif &amp; Metraj, Teklif ve Maliyet Yönetimi</li>
            <li>Kalite Güvence, Test &amp; Devreye Alma</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4zm-1 13l6-6-1.4-1.4L11 12.2 8.4 9.6 7 11l4 4z" />
              </svg>
              İş Güvenliği
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 13h2v-2H3v2zm4 0h14v-2H7v2zM3 7h2V5H3v2zm4 0h14V5H7v2zM3 19h2v-2H3v2zm4 0h14v-2H7v2z" />
              </svg>
              Şeffaf Süreç
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11 21h2V8h3l-4-5-4 5h3z" />
              </svg>
              Zamanında Teslim
            </span>
          </div>
        </article>

        {/* Kolaj */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-2xl overflow-hidden shadow ring-1 ring-gray-200">
            <img
              className="w-full h-48 md:h-72 object-cover"
              src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1400"
              alt="Şantiye"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow ring-1 ring-gray-200 relative">
            <img
              className="w-full h-40 md:h-56 object-cover"
              src="https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=800"
              alt="Mimari"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute bottom-3 left-3 text-xs bg-black/70 text-white px-2 py-1 rounded">
              Kalite Kontrol
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow ring-1 ring-gray-200 relative">
            <img
              className="w-full h-40 md:h-56 object-cover"
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800"
              alt="Ekip"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute bottom-3 left-3 text-xs bg-black/70 text-white px-2 py-1 rounded">
              Usta Ekip
            </span>
          </div>
        </div>
      </section>

      {/* İSTATİSTİK ŞERİDİ */}
      <section className="bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white shadow ring-1 ring-gray-200 p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-600">{s.num}</div>
              <div className="mt-1 text-gray-600 text-sm md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SÜREÇ / ZAMAN ÇİZELGESİ */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold">Nasıl Çalışıyoruz?</h2>
        <ol className="mt-6 relative border-s-2 border-gray-200 ps-6 space-y-6 md:space-y-8">
          {steps.map((st, i) => (
            <li key={st.title}>
              <span className="absolute -start-3 mt-1 w-6 h-6 rounded-full bg-emerald-600 ring-4 ring-emerald-100 flex items-center justify-center text-white text-xs md:text-sm">
                {i + 1}
              </span>
              <h3 className="font-semibold">{st.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{st.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* DEĞERLERİMİZ (Kartlar) */}
      <section className="max-w-6xl mx-auto px-4 pb-10 md:pb-12">
        <h2 className="text-xl md:text-2xl font-semibold">Değerlerimiz</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
              </svg>
            }
            title="Güvenlik"
            desc="İSG standartlarına tam uyum, sahada sıfır tolerans."
            badgeClass="bg-emerald-50 text-emerald-700"
          />
          <ValueCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 3h18v2H3V3zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            }
            title="Şeffaflık"
            desc="Keşif, metraj ve maliyetleri net, izlenebilir raporlama."
            badgeClass="bg-sky-50 text-sky-700"
          />
          <ValueCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 7l5 5H7l5-5zm0 10l-5-5h10l-5 5z" />
              </svg>
            }
            title="Kalite"
            desc="Malzeme ve işçilikte sürdürülebilir kalite standartları."
            badgeClass="bg-amber-50 text-amber-700"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-14 md:pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">Projeniz var, konuşalım mı?</h3>
            <p className="opacity-90 text-sm md:text-base">Keşif ve ön teklif için bize ulaşın.</p>
          </div>
          <Link
            to="/iletisim"
            className="w-full sm:w-auto text-center px-5 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  )
}

function ValueCard({ icon, title, desc, badgeClass }) {
  return (
    <div className="rounded-2xl bg-white shadow ring-1 ring-gray-200 p-6">
      <div className={`w-10 h-10 rounded-lg ${badgeClass} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
    </div>
  )
}
