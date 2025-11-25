"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  const portfolioImages = [
    { src: "/portfolio/Enscape_2025-09-09-16-10-30.png", title: "Modern Villa", category: "Residential" },
    { src: "/portfolio/Enscape_2025-08-14-09-41-00.jpg", title: "Contemporary House", category: "Residential" },
    { src: "/portfolio/1000235420.jpg", title: "Urban Design", category: "Commercial" },
    { src: "/portfolio/Enscape_2025-07-29-13-03-54.png", title: "Luxury Home", category: "Residential" },
    { src: "/portfolio/Enscape_2025-08-14-09-54-17.jpg", title: "Minimalist Living", category: "Residential" },
    { src: "/portfolio/Enscape_2025-08-20-15-29-12.jpg", title: "Modern Architecture", category: "Residential" },
  ];

  // Auto-slide background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % portfolioImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
            <Image
              src="/images/logo2.png"
              alt="Banaahaa"
              fill
              className="object-contain object-left"
              priority
            />
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center gap-2 group"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-8 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
            <span className="text-xs uppercase tracking-wider">{menuOpen ? 'Tutup' : 'Menu'}</span>
          </button>
        </div>
      </header>

      {/* Hamburger Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-center min-h-screen p-8">
          <nav className="text-center">
            <ul className="space-y-8">
              <li>
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="block text-4xl md:text-6xl font-light text-white hover:text-[#E6B800] transition-colors"
                >
                  BERANDA
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-4xl md:text-6xl font-light text-white hover:text-[#E6B800] transition-colors"
                >
                  TENTANG KAMI
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="block text-4xl md:text-6xl font-light text-white hover:text-[#E6B800] transition-colors"
                >
                  LAYANAN
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="block text-4xl md:text-6xl font-light text-white hover:text-[#E6B800] transition-colors"
                >
                  PROJECT
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-4xl md:text-6xl font-light text-white hover:text-[#E6B800] transition-colors"
                >
                  KONTAK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Section with Auto-Sliding Background */}
      <section id="home" className="relative h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {portfolioImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentBg ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto text-center w-full">
          <div className="mb-4 md:mb-6">
            <span className="text-xs md:text-sm text-[#E6B800] uppercase tracking-[0.3em] font-light">
              Banaahaa Arsitektur
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[100px] font-bold leading-[1.1] mb-6 md:mb-10">
            Mengubah <span className="text-[#E6B800]">Ruang</span><br />
            Menjadi <span className="text-[#E6B800]">Cerita</span><br />
            Yang Hidup
          </h1>
          <p className="text-sm md:text-lg lg:text-xl xl:text-[24px] text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-6 px-4">
            Kami merancang <span className="text-[#E6B800]">arsitektur dan interior</span> yang lahir dari dialog antara fungsi, emosi, dan karakter manusia.
          </p>
          <p className="text-xs md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 px-4">
            Setiap proyek kami bukan sekadar bangunan — melainkan <span className="text-[#E6B800]">pengalaman yang menggambarkan siapa Anda</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <a
              href="#portfolio"
              className="bg-[#E6B800] hover:bg-[#F5D76E] text-black px-8 md:px-12 py-3 md:py-5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-3"
            >
              Lihat Karya Kami
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 md:px-12 py-3 md:py-5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {portfolioImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBg(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBg ? 'bg-[#E6B800] w-8' : 'bg-white/40'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-[#E6B800] uppercase tracking-[0.3em]">Tentang Kami</span>
            <h2 className="text-5xl md:text-6xl font-light mt-6 leading-tight">
              Arsitektur Adalah<br />Perjalanan Menuju Keseimbangan
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Kami percaya, arsitektur adalah perjalanan menuju <span className="text-[#E6B800]">keseimbangan antara keindahan dan makna</span>.
            </p>
            <p>
              Banaahaa Arsitektur berdiri dengan visi menghadirkan karya yang berpadu antara logika ruang dan kepekaan estetika. Dengan pendekatan kontekstual dan desain yang personal, kami menciptakan ruang yang tidak hanya indah untuk dilihat, tetapi juga <span className="text-[#E6B800]">nyaman untuk dijalani</span>.
            </p>
            <p>
              Kami berkomitmen untuk memberikan solusi desain yang <span className="text-[#E6B800]">jujur, relevan, dan bertanggung jawab</span> terhadap lingkungan.
            </p>
          </div>

          {/* Design Philosophy */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-light text-center mb-12">Filosofi Desain</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Manusia sebagai pusat desain",
                  desc: "Kami memulai setiap ide dari kebutuhan, kebiasaan, dan impian penghuni."
                },
                {
                  title: "Konteks sebagai inspirasi",
                  desc: "Setiap lokasi memiliki cerita; kami mendesain untuk menonjolkan keunikan itu."
                },
                {
                  title: "Simplicity with soul",
                  desc: "Kesederhanaan adalah bentuk keindahan yang paling tulus — dan kami menerjemahkannya melalui detail, material, dan cahaya."
                }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300">
                  <div className="text-5xl font-light text-[#E6B800] mb-4">0{i + 1}</div>
                  <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm text-[#E6B800] uppercase tracking-[0.3em]">Layanan</span>
            <h2 className="text-5xl md:text-7xl font-light mt-6">Apa Yang Kami Tawarkan</h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Setiap proyek dirancang dengan pendekatan kolaboratif antara arsitek, klien, dan lingkungan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Desain Arsitektur Hunian & Komersial",
                desc: "Menciptakan bangunan yang fungsional, estetis, dan sesuai dengan kebutuhan Anda — dari rumah tinggal hingga ruang komersial modern.",
              },
              {
                title: "Desain Interior Personal & Tematik",
                desc: "Mendesain interior yang mencerminkan kepribadian dan gaya hidup Anda dengan sentuhan detail yang personal.",
              },
              {
                title: "Visualisasi 3D Realistis",
                desc: "Memberikan gambaran nyata dari desain Anda sebelum dibangun melalui visualisasi 3D yang detail dan realistis.",
              },
              {
                title: "Konsultasi Konsep & Tata Ruang",
                desc: "Membantu Anda menemukan konsep terbaik dan mengoptimalkan tata ruang untuk kenyamanan maksimal.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-[#0a0a0a] hover:bg-[#1a1a1a] p-12 transition-all duration-500 overflow-hidden border border-white/5"
              >
                <div className="relative z-10">
                  <div className="text-6xl font-light text-[#E6B800]/20 mb-4">0{i + 1}</div>
                  <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#E6B800] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{service.desc}</p>
                  <div className="flex items-center gap-3 text-[#E6B800] font-semibold uppercase text-sm">
                    <span>Selengkapnya</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#E6B800]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4 md:px-8">
            <span className="text-xs md:text-sm text-[#E6B800] uppercase tracking-[0.3em]">Karya Kami</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mt-4 md:mt-6">Project Terpilih</h2>
            <p className="text-gray-500 text-sm mt-4 md:hidden">← Geser untuk melihat lebih banyak →</p>
          </div>

          <div className="relative">
            {/* Fade overlay untuk hint scroll - hanya di mobile */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none md:hidden"></div>

            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-4 md:gap-8 min-w-max pl-4 pr-8 md:px-4">
                {portfolioImages.map((item, index) => (
                  <div
                    key={index}
                    className="group relative w-[80vw] md:w-[500px] lg:w-[600px] h-[50vh] md:h-[350px] lg:h-[400px] bg-[#1a1a1a] overflow-hidden flex-shrink-0"
                  >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 500px, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                        <p className="text-gray-400 uppercase text-xs md:text-sm tracking-wider">{item.category}</p>
                      </div>
                      <div className="text-[#E6B800] text-base md:text-lg font-light">0{index + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            Setiap <span className="text-[#E6B800]">Ruang</span> Bercerita
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 mb-6">
            Dan kami menulisnya melalui <span className="text-[#E6B800]">arsitektur</span>
          </p>
          <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
            Mari ciptakan ruang impian Anda bersama Banaahaa Arsitektur
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#E6B800] hover:bg-[#F5D76E] text-black px-16 py-6 text-base font-semibold uppercase tracking-wider transition-all"
          >
            Mulai Proyek Anda
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm text-[#E6B800] uppercase tracking-[0.3em]">Kontak</span>
            <h2 className="text-5xl md:text-7xl font-light mt-6 mb-8 leading-tight">
              Mari Berdiskusi<br />
              <span className="text-[#E6B800]">Tentang Proyek Anda</span>
            </h2>
            <p className="text-gray-400 text-xl">
              Hubungi kami untuk konsultasi dan wujudkan desain impian Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
                <div className="space-y-4 text-gray-400">
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E6B800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@banaahaadesign.com
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E6B800]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    +62 821 2001 9086
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Media Sosial</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.instagram.com/banaahaa.arsitektur/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#E6B800] hover:text-black px-6 py-3 transition-all">
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/@BaNaaHaaArchitecture" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#E6B800] hover:text-black px-6 py-3 transition-all">
                    <span>YouTube</span>
                  </a>
                  <a href="https://www.tiktok.com/@banaahaa.studioarsitek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#E6B800] hover:text-black px-6 py-3 transition-all">
                    <span>TikTok</span>
                  </a>
                  <a href="https://web.facebook.com/banaahaa.architectural" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#E6B800] hover:text-black px-6 py-3 transition-all">
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-6">
              <a
                href="https://wa.me/6282120019086"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-200 text-black px-12 py-6 text-base font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat WhatsApp
              </a>
              <a
                href="mailto:info@banaahaadesign.com"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-12 py-6 text-base font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-8 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="relative w-[100px] h-[100px] mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Banaahaa"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-4">
                Banaahaa Arsitektur - Studio desain arsitektur dan interior yang menghadirkan solusi inovatif dan personal.
              </p>
              <p className="text-sm text-gray-500">
                banaahaadesign.com
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-6">
              <div className="text-gray-400">
                <p className="font-semibold mb-2">Kontak</p>
                <p>info@banaahaadesign.com</p>
                <p>+62 821 2001 9086</p>
              </div>
              <div className="text-gray-400">
                <p className="font-semibold mb-2">Ikuti Kami</p>
                <p>@banaahaa.arsitektur</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center md:text-left text-gray-500 text-sm">
            <p>&copy; 2025 Banaahaa Arsitektur. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
