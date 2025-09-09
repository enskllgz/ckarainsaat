import { useParams, Link } from "react-router-dom"

// Örnek veri kaynağı (backend'den geleceğini varsayıyoruz)
const sampleProjects = [
  {
    slug: "kent-avm",
    title: "Kent AVM Renovasyon",
    cover: "https://picsum.photos/seed/project1/1600/900",
    status: "completed",
    category: "Ticari",
    location: "Ankara",
    body: "<p>Kent AVM yenileme projesi hakkında detaylı açıklama.</p>",
    gallery: [
      "https://picsum.photos/seed/g1/800/600",
      "https://picsum.photos/seed/g2/800/600",
      "https://picsum.photos/seed/g3/800/600",
    ],
  },
]

export default function ProjectDetail({ more = [] }) {
  const { slug } = useParams()
  const project =
    sampleProjects.find((p) => p.slug === slug) || sampleProjects[0]

  const {
    title = "Proje",
    cover = "https://picsum.photos/seed/project/1600/900",
    status,
    category,
    location,
    body = "<p>Proje detay metni eklenecek.</p>",
    gallery = [],
  } = project || {}

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <img
          src={cover}
          alt={title}
          className="absolute inset-0 w-full h-[40vh] md:h-[56vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 pointer-events-none z-[1]" />

        <div className="relative z-[2] max-w-6xl mx-auto px-4 h-[40vh] md:h-[56vh] flex items-end pb-8">
          <div className="text-white">
            {(category || location) && (
              <div className="text-[11px] md:text-xs mb-2 opacity-90">
                {category || "Proje"}
                {location ? ` • ${location}` : ""}
              </div>
            )}
            <h1 className="font-bold leading-tight text-[clamp(22px,5vw,48px)]">
              {title}
            </h1>
            {status && (
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 rounded bg-white/90 text-gray-800 text-xs capitalize">
                  {status}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-10 grid gap-8 md:gap-10 lg:grid-cols-5">
        {/* Sol taraf */}
        <div className="lg:col-span-3">
          <article
            className="prose prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {gallery.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((g, i) => (
                <img
                  key={i}
                  src={g}
                  alt={`gallery-${i}`}
                  className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-xl shadow"
                />
              ))}
            </div>
          )}
        </div>

        {/* Sağ özet */}
        <aside className="lg:col-span-2">
          <div className="rounded-2xl bg-white shadow ring-1 ring-gray-200 p-5 md:p-6 lg:sticky lg:top-6">
            <h3 className="font-semibold text-lg">Proje Özeti</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {category && (
                <li>
                  <span className="font-medium">Kategori:</span> {category}
                </li>
              )}
              {location && (
                <li>
                  <span className="font-medium">Lokasyon:</span> {location}
                </li>
              )}
              {status && (
                <li>
                  <span className="font-medium">Durum:</span>{" "}
                  <span className="capitalize">{status}</span>
                </li>
              )}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/projeler"
                className="px-4 py-2 rounded-lg border border-gray-300 text-center"
              >
                Diğer Projeler
              </Link>
              <Link
                to="/iletisim"
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-center"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* Benzer Projeler */}
      {more.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-lg md:text-xl font-semibold mb-4">
            Benzer Projeler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {more.map((p, i) => (
              <Link
                key={i}
                to={`/projeler/${p.slug}`}
                className="relative group rounded-xl overflow-hidden shadow ring-1 ring-gray-200 hover:shadow-lg transition"
              >
                <img
                  src={p.cover || "https://picsum.photos/seed/alt/800/500"}
                  alt={p.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
