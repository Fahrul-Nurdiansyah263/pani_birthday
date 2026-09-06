export const navLinks = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'solutions', label: 'Solusi', href: '#solutions' },
  { id: 'services', label: 'Layanan', href: '#services' },
  { id: 'workflow', label: 'Cara Kerja', href: '#workflow' },
  { id: 'templates', label: 'Template', href: '#templates' },
  { id: 'pricing', label: 'Harga', href: '#pricing' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

export const heroDemos = {
  umkm: {
    title: "Boutique & Modest Chic",
    slug: "faeva.com/boutique-mode",
    categoryBadge: "Katalog UMKM & Fashion",
    badgeColor: "bg-zinc-100 text-zinc-800",
    headline: "Koleksi Busana Muslimah Modern 2026",
    description: "Didesain dengan material premium ramah lingkungan. Dapatkan kemudahan pemesanan via chat WhatsApp.",
    actionText: "Pesan via WhatsApp",
    priceTag: "Mulai Rp149.000",
    notification: "Pesanan Baru: Dress Silk #402 via WhatsApp",
    features: ["Katalog Produk Instan", "Direct WhatsApp Chat", "Google Maps Lokasi Toko"]
  },
  portfolio: {
    title: "Orbit Digital Studio",
    slug: "faeva.com/orbit-portfolio",
    categoryBadge: "Portofolio & Agensi",
    badgeColor: "bg-zinc-100 text-zinc-800",
    headline: "Digital Product Designer & Creative Consultant",
    description: "Membantu 50+ brand membangun identitas visual dan produk digital berkualitas internasional.",
    actionText: "Mulai Konsultasi Projek",
    priceTag: "Open for Projects",
    notification: "Prospek Klien: Brief Baru Desain Web Diterima",
    features: ["Showcase Galeri Karya", "Daftar Paket Layanan", "Formulir Kontak Klien"]
  },
  wedding: {
    title: "L'Amour Wedding Invitation",
    slug: "faeva.com/sarah-dimas-wedding",
    categoryBadge: "Undangan Pernikahan Digital",
    badgeColor: "bg-zinc-100 text-zinc-800",
    headline: "The Wedding Celebration of Sarah & Dimas",
    description: "Sabtu, 24 Oktober 2026 • Grand Ballroom Jakarta. Merupakan suatu kehormatan atas kehadiran Anda.",
    actionText: "Konfirmasi Kehadiran RSVP",
    priceTag: "Akad & Resepsi",
    notification: "RSVP Baru: 2 Tamu Mengonfirmasi Hadir",
    features: ["Personalisasi Nama Tamu", "Buku Tamu Digital", "Musik Latar Romantis"]
  },
  pasangan: {
    title: "Dear Couple & Secret Letters",
    slug: "faeva.com/our-love-story",
    categoryBadge: "Kisah Romansa Pasangan",
    badgeColor: "bg-zinc-100 text-zinc-800",
    headline: "365 Hari Bersama & Kisah Tak Terlupakan",
    description: "Merayakan 1 tahun perjalanan cinta kami. Kumpulan kenangan manis dan surat rahasia berdua.",
    actionText: "Buka Surat Rahasia (PIN)",
    priceTag: "Anniversary Edition",
    notification: "Anniversary Milestone: 1 Tahun Bersama",
    features: ["Linimasa Love Story", "Galeri Kenangan Berdua", "Surat Privat Kunci PIN"]
  }
};

export const solutions = [
  {
    id: 'umkm',
    iconKey: 'shoppingBag',
    title: "Bisnis & UMKM Lokal",
    badge: "Bisnis & Komersial",
    desc: "Solusi etalase digital untuk kuliner, kafe, butik fesyen, spa kecantikan, laundry, dan retail mandiri. Hadirkan katalog produk estetik dengan tombol pemesanan langsung ke chat WhatsApp dan checkout marketplace.",
    features: [
      "Katalog produk visual & daftar harga",
      "Integrasi WhatsApp floating order otomatis",
      "Tautan toko Shopee, Tokopedia, TikTok Shop",
      "Peta Google Maps interaktif lokasi gerai"
    ]
  },
  {
    id: 'portfolio',
    iconKey: 'globe',
    title: "Portofolio & Agensi Kreatif",
    badge: "Personal & Kreator",
    desc: "Pamerkan karya terbaik Anda dengan tata letak editorial modern berstandar internasional. Sangat cocok bagi desainer grafis, fotografer, konsultan digital, copywriter, arsitek, dan agensi kreatif.",
    features: [
      "Galeri showcase visual grid presisi",
      "Biografi profil & linimasa pengalaman",
      "Daftar layanan jasa & paket konsultasi",
      "Formulir kontak & tautan media sosial"
    ]
  },
  {
    id: 'wedding',
    iconKey: 'heart',
    title: "Undangan Pernikahan Digital",
    badge: "Event & Momen Spesial",
    desc: "Bagikan kabar bahagia dengan undangan pernikahan online yang anggun, interaktif, dan berkesan. Lengkap dengan personalisasi nama tamu undangan pada tautan URL, musik latar, serta RSVP digital.",
    features: [
      "Personalisasi nama tamu otomatis dari link URL",
      "Konfirmasi kehadiran RSVP & Buku Tamu interaktif",
      "Pemutar musik pengiring romantis otomatis",
      "Peta navigasi akad/resepsi & hitung mundur"
    ]
  },
  {
    id: 'pasangan',
    iconKey: 'award',
    title: "Buku Cerita Romansa Pasangan",
    badge: "Romansa & Kenangan",
    desc: "Abadikan perjalanan cinta, linimasa kisah pertemuan, foto kenangan, dan surat cinta privat yang aman terkunci dengan PIN khusus berdua untuk merayakan momen anniversary yang tak terlupakan.",
    features: [
      "Linimasa cerita perjalanan cinta (Love Timeline)",
      "Galeri kenangan foto & momen berharga",
      "Surat cinta rahasia dengan proteksi PIN",
      "Hitung durasi hari jadian (Anniversary Counter)"
    ]
  }
];

export const services = [
  {
    iconKey: 'layout',
    title: "Pembuatan Website UMKM & Katalog Produk",
    desc: "Etalase digital siap pakai dengan sistem kategorisasi produk, deskripsi detail, serta tombol checkout langsung ke WhatsApp dan e-commerce."
  },
  {
    iconKey: 'globe',
    title: "Portofolio Digital & Agency Showcase",
    desc: "Desain layout editorial presisi tinggi untuk menampilkan portofolio karya visual, studi kasus projek, pengalaman kerja, dan daftar layanan."
  },
  {
    iconKey: 'heart',
    title: "Undangan Pernikahan Digital & RSVP Interaktif",
    desc: "Undangan online elegan dengan sistem personalisasi nama tamu dari URL, konfirmasi kehadiran instan, musik latar, dan integrasi maps acara."
  },
  {
    iconKey: 'lock',
    title: "Buku Cerita Romansa & Surat Ber-PIN",
    desc: "Platform privat untuk mengabadikan linimasa perjalanan cinta, galeri foto resolusi tinggi, dan surat rahasia berproteksi kunci keamanan PIN."
  },
  {
    iconKey: 'zap',
    title: "Integrasi Add-on & Pemasaran Cerdas",
    desc: "Dukungan penuh add-on seperti SEO Booster, Schema.org JSON-LD, generator QR Code promosi cetak, dan floating CTA button multi-channel."
  },
  {
    iconKey: 'server',
    title: "Infrastruktur Cloud & Custom Domain Terkelola",
    desc: "Hosting super cepat dengan SSL terenkripsi otomatis serta kemudahan menghubungkan domain kustom (.com / .id) tanpa pusing kelola server."
  }
];

export const templates = [
  { name: 'Boutique', category: 'umkm', desc: 'Luxury modest fashion & boutique collection', style: 'Elegance & Chic', badge: 'Terpopuler' },
  { name: 'Zyro', category: 'portfolio', desc: 'Minimalist creative agency & portfolio showcase', style: 'Modern Editorial', badge: 'Trending' },
  { name: 'The Daily Grind', category: 'umkm', desc: 'Warm artisanal coffee shop & cafe menu', style: 'Warm & Earthy', badge: 'Favorit' },
  { name: 'Orbit', category: 'portfolio', desc: 'High-end portfolio for digital strategist & director', style: 'Swiss Minimalist', badge: 'Baru' },
  { name: 'Mono', category: 'portfolio', desc: 'Swiss Brutalist & Monochromatic developer portfolio', style: 'Swiss Brutalist', badge: 'Baru' },
  { name: 'Celestia', category: 'wedding', desc: 'Ethereal & royal digital wedding invitation', style: 'Luxury Gold & Ivory', badge: 'Terlaris' },
  { name: 'Dear Couple', category: 'pasangan', desc: 'Romantic anniversary book with PIN-locked letter', style: 'Intimate Story', badge: 'Spesial' }
];

export const workflowSteps = [
  {
    step: "01",
    title: "Pilih Template Kategori",
    desc: "Telusuri katalog template siap pakai kami yang dirancang khusus untuk bisnis, portofolio, pernikahan, maupun kisah pasangan."
  },
  {
    step: "02",
    title: "Kustomisasi Konten Visual",
    desc: "Gunakan Live Visual Editor untuk mengganti foto, deskripsi produk, skema palet warna, dan font tipografi secara instan tanpa coding."
  },
  {
    step: "03",
    title: "Publikasikan & Sebarkan Tautan",
    desc: "Dapatkan alamat URL unik Anda seketika (faeva.com/nama-website) atau hubungkan domain kustom pribadi Anda beserta QR Code promosi."
  }
];

export const fallbackTestimonials = [
  {
    name: "Rian Pratama",
    role: "Owner",
    company: "Kopi Artisan Seduh",
    category: "Bisnis UMKM",
    content: "Dengan Faeva, kedai kopi kami memiliki katalog menu online yang sangat rapi dalam waktu kurang dari 10 menit. Pesanan via chat WhatsApp melonjak signifikan sejak link kami sematkan di bio Instagram.",
    rating: 5
  },
  {
    name: "Sarah & Dimas",
    role: "Mempelai Pernikahan",
    company: "Wedding Oct 2026",
    category: "Undangan Digital",
    content: "Template Celestia membuat undangan digital kami dipuji semua keluarga dan kerabat. Fitur RSVP dan personalisasi nama tamu sangat praktis serta memudahkan kami merekap kehadiran pesta.",
    rating: 5
  },
  {
    name: "Nadia Utami",
    role: "Digital Marketing Consultant",
    company: "Freelance Strategist",
    category: "Portofolio Kreatif",
    content: "Sebagai freelancer, portofolio profesional adalah kunci kepercayaan klien. Template Zyro memberikan tata letak editorial modern berstandar internasional tanpa harus pusing sewa server sendiri.",
    rating: 5
  },
  {
    name: "Hendra Wijaya",
    role: "Founder & Designer",
    company: "Modest Boutique Batik",
    category: "Bisnis UMKM",
    content: "Integrasi tombol Shopee dan Tokopedia pada halaman toko kami memudahkan pelanggan memilih produk sebelum checkout. Setup visualnya sangat mudah dan tampilan di HP sangat elegan.",
    rating: 5
  }
];

export const faqs = [
  {
    q: "Apa itu Faeva dan untuk siapa platform ini dibuat?",
    a: "Faeva adalah platform no-code website builder dan generator landing page instan. Platform ini dirancang untuk 4 kebutuhan utama: pelaku bisnis UMKM yang ingin go-digital, profesional/freelancer yang membutuhkan portofolio, calon pengantin yang ingin membuat undangan pernikahan digital, serta pasangan yang ingin mengabadikan kenangan romansa."
  },
  {
    q: "Apakah saya benar-benar tidak memerlukan keahlian coding?",
    a: "Sama sekali tidak memerlukan coding. Seluruh proses pemilihan template, pengisian teks, penggantian foto, pemilihan palet warna, dan konfigurasi tombol dilakukan melalui Visual Live Editor yang sangat mudah digunakan di layar HP maupun laptop."
  },
  {
    q: "Bagaimana cara kerja integrasi pemesanan WhatsApp?",
    a: "Setiap produk atau tombol Call-to-Action dapat dihubungkan ke nomor WhatsApp Anda dengan format pesan template otomatis (contoh: 'Halo, saya ingin memesan menu Paket A'). Begitu pengunjung mengklik tombol, obrolan WhatsApp akan langsung terbuka."
  },
  {
    q: "Apakah saya bisa menggunakan nama domain saya sendiri (Custom Domain)?",
    a: "Ya! Pada paket Pro, Anda dapat menghubungkan domain pribadi Anda (misalnya: www.tokoanda.com atau www.namaanda.id). Kami menyediakan panduan pengaturan DNS sederhana agar domain Anda langsung aktif."
  },
  {
    q: "Apakah website yang saya buat memiliki batasan masa aktif?",
    a: "Pada paket Free, website Anda aktif selamanya tanpa biaya bulanan hosting. Pada paket Premium dan Pro, Anda mendapatkan akses fitur eksklusif (seperti tanpa watermark Faeva, custom domain, dan add-on lengkap)."
  },
  {
    q: "Apakah tampilan website dijamin responsif di smartphone?",
    a: "Ya, 100% template Faeva dibangun dengan standar mobile-first. Website Anda akan dimuat dengan cepat dan tampil proporsional di iPhone, Android, iPad, tablet, hingga layar desktop monitor lebar."
  }
];

export const stats = [
  { count: '13+', label: 'Preset Template Siap Pakai' },
  { count: '4', label: 'Kategori Solusi Digital' },
  { count: '< 5 Menit', label: 'Rata-rata Waktu Setup' },
  { count: '99.9%', label: 'Uptime Server Terjamin' }
];

export const marqueeKeywords = [
  "NO-CODE BUILDER",
  "INSTANT LANDING PAGE",
  "RESPONSIVE MOBILE FIRST",
  "WHATSAPP FLOATING ORDER",
  "CUSTOM DOMAIN READY",
  "DIGITAL WEDDING RSVP",
  "PIN-LOCKED SECRET LETTERS",
  "QR CODE GENERATOR",
  "13+ PREMIUM TEMPLATES"
];
