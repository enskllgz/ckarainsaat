export default function MissionVision() {
    const values = [
      { title: "Güven", desc: "Sözümüzü tutar, şeffaf süreçlerle ilerleriz.", color: "emerald" },
      { title: "Kalite", desc: "Standartları dokümante eder, sürekli iyileştiririz.", color: "sky" },
      { title: "Zamanında Teslim", desc: "Gerçekçi planlama ve yakın takip.", color: "amber" },
      { title: "İş Güvenliği", desc: "Önce güvenlik: eğitim, ekipman, denetim.", color: "rose" },
      { title: "Sürdürülebilirlik", desc: "Enerji verimi, doğru malzeme, atık yönetimi.", color: "lime" },
      { title: "Yenilikçilik", desc: "Yeni yöntem ve teknolojilere açık kültür.", color: "indigo" },
    ]
  
    const chipMap = {
      emerald: "bg-emerald-50 text-emerald-700",
      sky: "bg-sky-50 text-sky-700",
      amber: "bg-amber-50 text-amber-700",
      rose: "bg-rose-50 text-rose-700",
      lime: "bg-lime-50 text-lime-700",
      indigo: "bg-indigo-50 text-indigo-700",
    }
  
    return (
      <>
        {/* HERO */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1920"
            alt="Misyon & Vizyon"
            className="absolute inset-0 w-full h-[48vh] md:h-[56vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none z-[1]" />
  
          <div className="relative z-[2] max-w-6xl mx-auto px-4 h-[48vh] md:h-[56vh] flex items-end pb-12 md:pb-16">
            <div className="text-white">
              <p className="uppercase tracking-widest text-[11px] md:text-sm opacity-90">Kurumsal</p>
              <h1 className="font-extrabold leading-tight text-[clamp(22px,5vw,40px)]">Misyon &amp; Vizyonumuz</h1>
              <p className="opacity-90 max-w-2xl text-sm md:text-base">
                Güven veren yapılar, sürdürülebilir yöntemler ve şeffaf süreçlerle; planladığımızı tam zamanında teslim
                etmek.
              </p>
            </div>
          </div>
        </section>
  
        {/* MİSYON & VİZYON KARTLARI */}
        <section className="relative z-10 -mt-10 md:-mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Misyon */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 p-6 md:p-8">
                <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l7 7 11-11-2-2-9 9-5-5-2 2z"/></svg>
                  Misyonumuz
                </span>
                <h2 className="text-lg md:text-2xl font-semibold mt-3">“Kaliteyi, güvenliği ve şeffaflığı her projede standarda dönüştürmek.”</h2>
                <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 12l2 2 6-6 2 2-8 8-4-4 2-2z"/></svg>
                    Anahtar teslim yönetim: tasarımdan teslim sonrasına tek elden koordinasyon.
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 7h7l-5.5 4 2 7L12 17l-7.5 3 2-7L1 9h7z"/></svg>
                    İş güvenliği ve kalite güvencesinde tavizsiz yaklaşım.
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6zm0 5h12v2H3v-2zm0 5h18v2H3v-2z"/></svg>
                    Zamanında teslim ve şeffaf raporlama kültürü.
                  </li>
                </ul>
              </div>
  
              {/* Vizyon */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 p-6 md:p-8">
                <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full bg-sky-50 text-sky-700">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5a7 7 0 00-7 7c2 4 5 6 7 6s5-2 7-6a7 7 0 00-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z"/></svg>
                  Vizyonumuz
                </span>
                <h2 className="text-lg md:text-2xl font-semibold mt-3">“Bölgesinde güven ve yenilik denince akla gelen ilk inşaat markası olmak.”</h2>
                <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-sky-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9 4-3 14-6 3-6-3L3 6l9-4z"/></svg>
                    Sürdürülebilir ve enerji verimli çözümleri standart hale getirmek.
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-sky-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>
                    Dijitalleşme: saha & ofis süreçlerinde ölçülebilir verimlilik.
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-sky-600 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12l5 5L20 7l-1.5-1.5L10 13 6.5 9.5 5 12z"/></svg>
                    Paydaş memnuniyetinde sektör ortalamasının üstünde kalmak.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* DEĞERLERİMİZ */}
        <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <h3 className="text-lg md:text-2xl font-bold">Değerlerimiz</h3>
          <p className="text-slate-600 mt-1 text-sm md:text-base">Günlük kararlarımızı yöneten pusula.</p>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-5 hover:shadow-md transition"
              >
                <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs ${chipMap[v.color]}`}>
                  {v.title}
                </div>
                <p className="mt-3 text-slate-600 text-sm md:text-[15px]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* RAKAMLAR */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 md:p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold">10+ Yıl</div>
                <p className="text-white/80 text-sm md:text-base">Saha deneyimi</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold">120+</div>
                <p className="text-white/80 text-sm md:text-base">Teslim edilen bağımsız bölüm</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold">0 Kaza</div>
                <p className="text-white/80 text-sm md:text-base">Son büyük projelerde</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold">%99</div>
                <p className="text-white/80 text-sm md:text-base">Müşteri memnuniyeti</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  