// Tek kaynak: projeler, referanslar, testimonials, kategoriler ve sayımlar

export const projects = [
    {
      slug: "konut-1",
      title: "Yıldız Konutları",
      cover: "https://picsum.photos/seed/proje1/800/500",
      short: "Modern yaşam için tasarlanan lüks konut projesi.",
      status: "ongoing",            // ongoing | completed | upcoming
      category: "Konut",
      location: "Ankara",
      body: "<p>Yıldız Konutları projesi, modern mimari ve yüksek güvenlik standartlarıyla öne çıkar.</p>",
      gallery: [
        "https://picsum.photos/seed/p1g1/800/600",
        "https://picsum.photos/seed/p1g2/800/600",
      ],
    },
    {
      slug: "ticari-1",
      title: "Kent AVM Renovasyon",
      cover: "https://picsum.photos/seed/proje2/800/500",
      short: "Kent AVM’nin baştan sona yenileme çalışması.",
      status: "completed",
      category: "Ticari",
      location: "İstanbul",
      body: "<p>Enerji verimliliği ve modern tasarım ile baştan sona yenilendi.</p>",
      gallery: [
        "https://picsum.photos/seed/p2g1/800/600",
        "https://picsum.photos/seed/p2g2/800/600",
        "https://picsum.photos/seed/p2g3/800/600",
      ],
    },
    {
      slug: "kamu-1",
      title: "Belediye Hizmet Binası",
      cover: "https://picsum.photos/seed/proje3/800/500",
      short: "Yeni belediye binası yapımı.",
      status: "upcoming",
      category: "Kamu",
      location: "Sincan",
      body: "<p>Halkın ihtiyaçlarını verimli şekilde karşılayacak modern bir yapı.</p>",
      gallery: [],
    },
  ]
  
  export const references = [
    {
      name: "Acar Yapı",
      subtitle: "Kent AVM Renovasyon",
      cover: "https://picsum.photos/seed/ref1/900/600",
      year: 2023,
      category: "ticari",
    },
    {
      name: "Mavi Kent Sitesi",
      subtitle: "Site Yenileme",
      cover: "https://picsum.photos/seed/ref2/900/600",
      year: 2022,
      category: "konut",
    },
    {
      name: "Belediye",
      subtitle: "Hizmet Binası Güçlendirme",
      cover: "https://picsum.photos/seed/ref3/900/600",
      year: 2021,
      category: "kamu",
    },
  ]
  
  export const testimonials = [
    {
      name: "Ahmet Yıldız",
      role: "Yönetim Kurulu Üyesi, Acar Yapı",
      avatar: "https://i.pravatar.cc/100?img=12",
      quote: "Zaman planına sadık kaldılar ve şantiyedeki koordinasyonları mükemmeldi.",
      project: "Kent AVM Renovasyon",
      rating: 5,
    },
    {
      name: "Selin Kaya",
      role: "Site Yöneticisi, Mavi Kent",
      avatar: "https://i.pravatar.cc/100?img=32",
      quote: "Teslimden sonra dahi teknik destekleri devam etti, memnun kaldık.",
      project: "Mavi Kent Sitesi",
      rating: 5,
    },
    {
      name: "Mustafa Demir",
      role: "Proje Müdürü, Belediye",
      avatar: "https://i.pravatar.cc/100?img=5",
      quote: "Kamu prosedürlerine hâkimler; raporlama ve şeffaflık üst düzeydi.",
      project: "Hizmet Binası Güçlendirme",
      rating: 4,
    },
  ]
  
  // Referans kategorileri (tek yerden)
  export const cats = { konut: "Konut", ticari: "Ticari", kamu: "Kamu" }
  
  // Sayaçlar (tek yerden)
  export const counts = {
    all: references.length,
    konut: references.filter((r) => r.category === "konut").length,
    ticari: references.filter((r) => r.category === "ticari").length,
    kamu: references.filter((r) => r.category === "kamu").length,
  }
  