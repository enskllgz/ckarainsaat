import { Link } from "react-router-dom"
import { projects } from "../data/mockData"

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs md:text-sm tracking-wide text-gray-500 uppercase">
            C.Kara İnşaat
          </p>
          <h1 className="font-extrabold text-gray-900 leading-tight text-[clamp(24px,4.5vw,36px)]">
            Projeler
          </h1>
          <p className="mt-1 text-gray-600 text-sm md:text-base">
            Devam eden, tamamlanan ve planlanan çalışmalarımız.
          </p>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
          Bu filtrede proje bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projeler/${p.slug}`}
              className="relative group rounded-2xl overflow-hidden bg-white ring-1 ring-gray-200 hover:ring-emerald-200 shadow-sm hover:shadow-lg transition"
            >
              {/* Görsel */}
              <img
                src={p.cover}
                alt={p.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-[1.03] transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Durum Rozeti */}
              {p.status && (
                <span
                  className={`absolute top-3 left-3 text-[10px] md:text-xs text-white px-2 py-1 rounded-md shadow ${
                    p.status === "ongoing"
                      ? "bg-amber-500"
                      : p.status === "completed"
                      ? "bg-emerald-600"
                      : "bg-sky-600"
                  }`}
                >
                  {p.status === "ongoing"
                    ? "Devam Eden"
                    : p.status === "completed"
                    ? "Tamamlanan"
                    : "Gelecek"}
                </span>
              )}

              {/* Alt Yazı Bloğu */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                {(p.category || p.location) && (
                  <div className="text-[11px] tracking-wide opacity-90 mb-1">
                    {p.category}
                    {p.location ? ` • ${p.location}` : ""}
                  </div>
                )}
                <h3 className="font-semibold text-[17px] md:text-lg leading-tight">
                  {p.title}
                </h3>
                {p.short && (
                  <p className="text-[13px] md:text-sm opacity-90">
                    {p.short}
                  </p>
                )}
              </div>

              {/* Hover alt çubuk */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 origin-left transition"></div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
