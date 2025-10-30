import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Instagram, ExternalLink, ArrowRight, Sparkles, Play } from "lucide-react";

export default function Index() {
  const projects = [
    { id: 1, title: "E-Commerce Platform", tags: ["JavaScript", "React"], color: "neon-pink", size: "large" },
    { id: 2, title: "Design System", tags: ["UI/UX", "Components"], color: "neon-blue", size: "medium" },
    { id: 3, title: "Backend API", tags: ["Python", "Flask"], color: "neon-green", size: "medium" },
    { id: 4, title: "Animation Lab", tags: ["Motion", "Web"], color: "neon-red", size: "small" },
    { id: 5, title: "Data Dashboard", tags: ["Analytics", "Python"], color: "neon-yellow", size: "large" },
    { id: 6, title: "Mobile App", tags: ["React Native"], color: "neon-pink", size: "small" },
  ];

  const writings = [
    { title: "Web Tasarım Trendleri 2025", source: "Medium", date: "2025" },
    { title: "JavaScript ile Modern UI", source: "Dev.to", date: "2024" },
    { title: "Python Backend En İyi Uygulamalar", source: "Smashing Magazine", date: "2024" },
  ];

  const talks = [
    { title: "Modern Web Tasarımı", venue: "Istanbul Web Summit", date: "2025" },
    { title: "JavaScript Performans Optimizasyonu", venue: "React Conference", date: "2024" },
    { title: "Kullanıcı Deneyimi Tasarlama", venue: "UX Turkey Conference", date: "2024" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="animated-bg"></div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-glow"></div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8 animate-slide-in-right order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-neon-blue animate-spin" size={24} />
                  <span className="text-neon-green text-sm font-semibold tracking-widest">
                    PROFESYONEL TASARIM
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent animate-glow-in">
                    Doğukan
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-foreground/80 font-light">
                  Web Designer & Developer
                </p>
              </div>

              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
                Modern ve dinamik web çözümleri sunuyorum. JavaScript, Python ve profesyonel tasarım konusunda uzmanlaşmış bir geliştiriciyim. Her projede mükemmelliği hedeflerim.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-neon-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2 text-center animate-slide-up"
                >
                  İletişim Kurun
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-neon-pink text-neon-pink font-semibold rounded-lg hover:bg-neon-pink/10 hover:border-neon-green transition-all duration-300 text-center animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  Projelerime Bakın
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://instagram.com/dogukan.1967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neon-pink/20 hover:bg-neon-pink/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/30"
                >
                  <Instagram className="text-neon-pink" size={24} />
                </a>
                <a
                  href="mailto:swicenta@gmail.com"
                  className="p-3 bg-neon-blue/20 hover:bg-neon-blue/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/30"
                >
                  <Mail className="text-neon-blue" size={24} />
                </a>
              </div>
            </div>

            <div className="animate-slide-up order-1 md:order-2 flex justify-center">
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] overflow-hidden rounded-2xl border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/30 hover:shadow-neon-pink/50 transition-all duration-300 group cursor-pointer">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0a0c931be26d4aa1b1d9fb2db10a01a2%2F8c8dd5147a5f4ebdac4e117f7c22271f?format=webp&width=800"
                  alt="Doğukan - Profesyonel Web Designer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 border border-neon-blue/30 rounded-2xl group-hover:border-neon-pink/60 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
                  Hakkımda
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Profesyonel geçmişim ve uzmanlık alanlarım
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-8 bg-card/40 rounded-xl border border-neon-pink/50 hover:border-neon-blue/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/10 animate-slide-up"
                style={{ animationDelay: "0.1s" }}>
                <div className="p-3 w-fit bg-neon-blue/20 rounded-lg mb-4 group-hover:bg-neon-green/20 transition-colors">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-blue transition-colors">
                  JavaScript Development
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  React, Vue ve modern JavaScript teknolojileriyle güçlü web uygulamaları geliştiririm.
                </p>
              </div>

              <div className="group p-8 bg-card/40 rounded-xl border border-neon-green/50 hover:border-neon-pink/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/10 animate-slide-up"
                style={{ animationDelay: "0.2s" }}>
                <div className="p-3 w-fit bg-neon-pink/20 rounded-lg mb-4 group-hover:bg-neon-red/20 transition-colors">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-pink transition-colors">
                  Web Tasarım
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  Kullanıcı deneyimini ön planda tutarak estetik ve işlevsel tasarımlar yaratırım.
                </p>
              </div>

              <div className="group p-8 bg-card/40 rounded-xl border border-neon-yellow/50 hover:border-neon-green/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-yellow/10 animate-slide-up"
                style={{ animationDelay: "0.3s" }}>
                <div className="p-3 w-fit bg-neon-green/20 rounded-lg mb-4 group-hover:bg-neon-yellow/20 transition-colors">
                  <span className="text-2xl">🐍</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors">
                  Python Backend
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  Sağlam ve ölçeklenebilir backend sistemleri geliştirmek için Python'u kullanırım.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-neon-blue/10 via-neon-pink/10 to-neon-green/10 border border-neon-blue/30 p-8 sm:p-12 rounded-2xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}>
              <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
                Detaylı ve titiz çalışmalarla, istemcilerin beklentilerini aşan sonuçlar sunmaya odaklanırım. Her projede, modern web teknolojileri ve tasarım ilkelerini birleştirerek, hem işlevsel hem de görsel açıdan mükemmel çözümler ortaya koymayı hedeflerim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Mosaic Section */}
      <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent">
                  Projelerim
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Son zamanlarda tamamladığım önemli projeler ve başarılar
              </p>
            </div>

            {/* Mosaic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
              {/* Large tile */}
              <div className="sm:col-span-2 sm:row-span-2 group bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 rounded-xl border border-neon-pink/50 overflow-hidden hover:border-neon-pink hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.1s" }}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform">💻</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-neon-pink mb-2">E-Commerce Platform</h3>
                      <p className="text-sm text-foreground/80">JavaScript, React, Web Tasarım</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium tiles */}
              <div className="group bg-gradient-to-br from-neon-blue/20 to-neon-blue/5 rounded-xl border border-neon-blue/50 overflow-hidden hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.2s" }}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-5xl group-hover:scale-110 transition-transform">🎨</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-neon-blue mb-1">Design System</h3>
                      <p className="text-xs text-foreground/80">UI Components</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-neon-green/20 to-neon-green/5 rounded-xl border border-neon-green/50 overflow-hidden hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/30 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.3s" }}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-5xl group-hover:scale-110 transition-transform">⚙️</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-neon-green mb-1">Backend API</h3>
                      <p className="text-xs text-foreground/80">Python, Flask</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small tiles */}
              <div className="group bg-gradient-to-br from-neon-red/20 to-neon-red/5 rounded-xl border border-neon-red/50 overflow-hidden hover:border-neon-red hover:shadow-lg hover:shadow-neon-red/30 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.4s" }}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-4xl group-hover:scale-110 transition-transform">✨</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-neon-red mb-1">Animation</h3>
                      <p className="text-xs text-foreground/80">Motion Design</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 group bg-gradient-to-br from-neon-yellow/20 to-neon-yellow/5 rounded-xl border border-neon-yellow/50 overflow-hidden hover:border-neon-yellow hover:shadow-lg hover:shadow-neon-yellow/30 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-5xl group-hover:scale-110 transition-transform">📊</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-neon-yellow mb-2">Data Dashboard</h3>
                      <p className="text-sm text-foreground/80">Analytics, Python</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-neon-pink/20 to-neon-pink/5 rounded-xl border border-neon-pink/50 overflow-hidden hover:border-neon-pink hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: "0.6s" }}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <span className="text-4xl group-hover:scale-110 transition-transform">📱</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-neon-pink mb-1">Mobile App</h3>
                      <p className="text-xs text-foreground/80">React Native</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-neon-green to-neon-yellow bg-clip-text text-transparent">
                  Yazılarım
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Web tasarımı ve geliştirme hakkında düşüncelerim
              </p>
            </div>

            <div className="space-y-4">
              {writings.map((writing, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group p-6 sm:p-8 bg-card/40 border border-neon-green/30 rounded-xl hover:border-neon-green hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/10 flex items-center justify-between animate-slide-up"
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-neon-green transition-colors">
                      {writing.title}
                    </h3>
                    <div className="flex gap-4 mt-2 text-sm text-foreground/60">
                      <span>{writing.source}</span>
                      <span>•</span>
                      <span>{writing.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-neon-green opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-red/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-neon-red to-neon-pink bg-clip-text text-transparent">
                  Konuşmalar
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Katıldığım konferanslar ve etkinlikler
              </p>
            </div>

            <div className="space-y-4">
              {talks.map((talk, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group p-6 sm:p-8 bg-card/40 border border-neon-red/30 rounded-xl hover:border-neon-red hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-red/10 flex items-center justify-between animate-slide-up"
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-neon-red transition-colors">
                      {talk.title}
                    </h3>
                    <div className="flex gap-4 mt-2 text-sm text-foreground/60">
                      <span>{talk.venue}</span>
                      <span>•</span>
                      <span>{talk.date}</span>
                    </div>
                  </div>
                  <Play className="text-neon-red opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                  İletişim
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Projeleriniz hakkında konuşmak isterseniz, bana ulaşın
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="mailto:swicenta@gmail.com"
                className="group p-8 sm:p-10 bg-card/40 border border-neon-blue/50 rounded-xl hover:border-neon-blue hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10 flex flex-col items-center text-center gap-4 animate-slide-up"
                style={{ animationDelay: "0.1s" }}>
                <div className="p-4 bg-neon-blue/20 rounded-lg group-hover:bg-neon-blue/30 transition-colors group-hover:scale-110">
                  <Mail className="text-neon-blue" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
                    E-Mail
                  </h3>
                  <p className="text-foreground/60">
                    swicenta@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/dogukan.1967"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 sm:p-10 bg-card/40 border border-neon-pink/50 rounded-xl hover:border-neon-pink hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/10 flex flex-col items-center text-center gap-4 animate-slide-up"
                style={{ animationDelay: "0.2s" }}>
                <div className="p-4 bg-neon-pink/20 rounded-lg group-hover:bg-neon-pink/30 transition-colors group-hover:scale-110">
                  <Instagram className="text-neon-pink" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-pink transition-colors">
                    Instagram
                  </h3>
                  <p className="text-foreground/60">
                    @dogukan.1967
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-r from-neon-blue/15 via-neon-pink/15 to-neon-green/15 border border-neon-green/30 p-8 sm:p-12 rounded-2xl text-center hover:border-neon-blue/60 hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: "0.3s" }}>
              <p className="text-foreground/90 text-lg leading-relaxed">
                Sizin fikirlerinizi gerçekleştirmeye yardımcı olmaktan gurur duyarım. Hemen iletişim kuralım ve harika bir proje başlayalım!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
