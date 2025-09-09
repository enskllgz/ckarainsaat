import { useRef, useState } from "react"

export default function Contact() {
  // Blade değişkenlerini prop veya env'den de alabiliriz; şimdilik sabit:
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.482537202827!2d32.523384777435176!3d40.02000477150628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d32f9d8f298615%3A0xa02b86a30774e0dd!2zQ0VOR8SwWkhBTiBLQVJBIMSwTsWeQUFUIEdBWVLEsE1FTktVTA!5e0!3m2!1str!2str!4v1757250519750!5m2!1str!2str"

  const address = "Menderes, 59. Cd. No:14 D:8, 06900 Sincan / Ankara"
  const phoneDisplay = "+90 312 323 06 00"
  const phoneCall = "+903123230600"
  const email = "ckarainsaat@gmail.com"

  const formRef = useRef(null)
  const [toast, setToast] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault() // backend eklenene kadar
    setToast(true)
    formRef.current?.reset()
    setTimeout(() => setToast(false), 5000)
  }

  return (
    <>
      {/* 1) Üstte büyük harita */}
      <section className="relative">
        <iframe
          src={mapSrc}
          className="w-full h-[52vh] md:h-[64vh] border-0 block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Harita"
        />
      </section>

      {/* 2) Altta iletişim bilgileri + form */}
      <section className="max-w-6xl mx-auto px-4 relative -mt-8 md:-mt-12 pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri Kartı */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow ring-1 ring-gray-100">
            <h1 className="text-2xl font-bold">İletişim</h1>
            <p className="text-gray-600 mt-1">Sorunuz, teklif talebiniz veya iş birliği için bize ulaşın.</p>

            <div className="mt-6 space-y-4 text-[15px]">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700" aria-hidden="true">📍</span>
                <div>
                  <div className="font-semibold">Adres</div>
                  <div className="text-gray-700">{address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700" aria-hidden="true">☎️</span>
                <div>
                  <div className="font-semibold">Telefon</div>
                  <a href={`tel:${phoneCall}`} className="text-emerald-700 hover:underline">{phoneDisplay}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700" aria-hidden="true">✉️</span>
                <div>
                  <div className="font-semibold">E-posta</div>
                  <a href={`mailto:${email}`} className="text-emerald-700 hover:underline">{email}</a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2 rounded-xl border hover:bg-gray-50"
              >
                Haritada Gör
              </a>
              <a
                href={`tel:${phoneCall}`}
                className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
              >
                Ara
              </a>
            </div>
          </div>

          {/* İletişim Formu Kartı (frontend/demo) */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow ring-1 ring-gray-100">
            <h2 className="text-xl font-semibold mb-4">Bize Yazın</h2>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              {/* spam honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Ad Soyad</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-gray-300/80 px-3 py-2.5 focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-posta</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-gray-300/80 px-3 py-2.5 focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Konu</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="on"
                  className="w-full rounded-xl border border-gray-300/80 px-3 py-2.5 focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-gray-300/80 px-3 py-2.5 focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <p className="text-xs text-gray-500">Gönder butonu demo’dur; backend ekleyince gerçek gönderime bağlayacağız.</p>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Gönder
                </button>
              </div>
            </form>

            {/* Demo başarı bildirimi */}
            {toast && (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3 text-sm">
                Mesajınız alındı (demo). En kısa sürede dönüş yapacağız. ✨
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
