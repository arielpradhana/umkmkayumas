import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Kopi Kayumas Signature',
    type: 'Robusta Premium',
    description: 'Rasa earthy yang hangat, aroma penuh, dan body yang mantap untuk pagi yang penuh semangat.',
    accent: 'Aroma kayu manis, cokelat pekat, dan sentuhan caramel.',
    badge: 'Paling dicari',
  },
  {
    id: 2,
    name: 'Kopi Arjasa Glow',
    type: 'Arabika Halus',
    description: 'Cocok untuk pencinta kopi yang suka nuansa floral dan rasa bersih yang elegan.',
    accent: 'Nutrisi lokal, dipanggang perlahan untuk hasil yang konsisten.',
    badge: 'Favorit pagi',
  },
  {
    id: 3,
    name: 'Kopi Keluarga',
    type: 'Bubuk Kemasan',
    description: 'Pilihan praktis untuk dibawa pulang, cocok dipadukan dengan berbagai suasana.',
    accent: 'Tersedia dalam kemasan yang ramah, rapi, dan siap jual.',
    badge: 'Siap dibagikan',
  },
];

const highlights = [
  'Biji kopi dipilih dari petani lokal sekitar Desa Kayumas.',
  'Proses roasting dibuat sederhana namun penuh karakter.',
  'Produk disajikan dengan branding yang kuat dan modern.',
];

const stories = [
  {
    title: 'Dari ladang ke cangkir',
    text: 'Kopi dari desa ini tumbuh dari semangat warga yang ingin menampilkan hasil panen dengan nilai jual lebih tinggi.',
  },
  {
    title: 'Mengangkat ekonomi warga',
    text: 'Setiap kemasan adalah cerminan kerja sama, inovasi, dan harapan bagi keluarga yang terlibat dalam UMKM.',
  },
  {
    title: 'Menjadi identitas baru',
    text: 'Kayumas bukan sekadar desa, tetapi juga destinasi rasa yang siap dikenal luas oleh masyarakat.',
  },
];

const stats = [
  { label: 'Produk unggulan', value: '3' },
  { label: 'Nuansa lokal', value: '100%' },
  { label: 'Dukungan desa', value: '24/7' },
];

export default function App() {
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const selected = products[activeProduct];

  return (
    <div className="app-shell">
      <header className="hero" id="home">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">☕</span>
            <span>Kayumas Coffee</span>
          </div>
          <div className="nav-links">
            <a href="#potensi">Potensi</a>
            <a href="#produk">Produk</a>
            <a href="#testimoni">Cerita</a>
            <a href="#hubungi">Hubungi</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">UMKM Desa Kayumas • Arjasa • Situbondo</p>
            <h1>Rasakan kopi lokal yang punya jiwa, aroma, dan cerita.</h1>
            <p className="lead">
              Desa Kayumas punya potensi luar biasa, dan kini kopi lokalnya hadir untuk memperkenalkan
              kekayaan UMKM secara lebih dekat, hangat, dan penuh energi.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#produk">Lihat produk</a>
              <a className="btn secondary" href="#hubungi">Jelajahi UMKM</a>
            </div>
            <div className="stat-row">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow" />
            <p className="card-badge">{selected.badge}</p>
            <h3>{selected.name}</h3>
            <p className="card-type">{selected.type}</p>
            <p>{selected.description}</p>
            <div className="card-foot">
              <span>{selected.accent}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="potensi">
          <div className="section-heading">
            <p className="eyebrow">Potensi desa</p>
            <h2>Kayumas lebih dari sekadar desa, ia adalah ruang tumbuh untuk ekonomi lokal.</h2>
          </div>
          <div className="about-grid">
            <div className="panel">
              <h3>Kenapa desa ini menarik?</h3>
              <p>
                Alam yang dekat, kultur yang kuat, dan semangat warga menjadi fondasi utama bagi lahirnya
                produk-produk khas yang siap bersaing dan dikenal luas.
              </p>
            </div>
            <div className="panel highlight-list">
              {highlights.map((item) => (
                <div className="list-item" key={item}>
                  <span>✦</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="produk">
          <div className="section-heading">
            <p className="eyebrow">Produk unggulan</p>
            <h2>Setiap sajian kopi membawa nuansa cokelat, hangat, dan penuh karakter.</h2>
          </div>

          <div className="product-switcher">
            {products.map((product, index) => (
              <button
                key={product.id}
                className={index === activeProduct ? 'chip active' : 'chip'}
                onClick={() => setActiveProduct(index)}
              >
                {product.type}
              </button>
            ))}
          </div>

          <div className="product-showcase">
            <div className="product-visual">
              <div className="cup">
                <div className="cup-liquid" />
              </div>
            </div>
            <div className="product-details">
              <p className="eyebrow">Yang sedang naik daun</p>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <p className="detail-note">{selected.accent}</p>
            </div>
          </div>
        </section>

        <section className="section" id="testimoni">
          <div className="section-heading">
            <p className="eyebrow">Cerita di balik produk</p>
            <h2>Setiap cangkir adalah perpaduan semangat, kerja keras, dan rasa kebersamaan.</h2>
          </div>
          <div className="story-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.title}>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section" id="hubungi">
          <div className="cta-card">
            <p className="eyebrow">Ayo dukung UMKM Kayumas</p>
            <h2>Jadikan kopi lokal sebagai bagian dari momenmu setiap hari.</h2>
            <p>
              Dari Desa Kayumas, Kecamatan Arjasa, Kabupaten Situbondo, produk ini hadir untuk membuka
              peluang, memperluas jangkauan, dan menampilkan identitas desa yang kuat.
            </p>
            <a className="btn primary" href="mailto:umkmkayumas@example.com">Hubungi UMKM</a>
          </div>
        </section>
      </main>
    </div>
  );
}
