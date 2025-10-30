import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Instagram, Code2, Palette, Terminal, ArrowRight, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated background */}
      <div className="animated-bg"></div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-8 animate-slide-in-right order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-accent animate-spin" size={24} />
                  <span className="text-accent text-sm font-semibold tracking-widest">
                    PROFESYONEL TASARIM
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-glow-in">
                    Doğukan
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-foreground/80 font-light">
                  Web Designer & Developer
                </p>
              </div>

              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
                Modern, dinamik ve kullanıcı odaklı web çözümleri sunuyorum. JavaScript, Python ve profesyonel tasarım konusunda uzmanlaşmış bir geliştiriciyim. Her projede mükemmelliği hedeflerim.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 text-center animate-slide-up"
                >
                  İletişim Kurun
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-accent transition-all duration-300 text-center animate-slide-up"
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
                  className="p-3 bg-primary/20 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  <Instagram className="text-accent" size={24} />
                </a>
                <a
                  href="mailto:swicenta@gmail.com"
                  className="p-3 bg-primary/20 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  <Mail className="text-accent" size={24} />
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="animate-slide-up order-1 md:order-2 flex justify-center">
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] overflow-hidden rounded-2xl border-2 border-accent/50 shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 group cursor-pointer">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0a0c931be26d4aa1b1d9fb2db10a01a2%2F8c8dd5147a5f4ebdac4e117f7c22271f?format=webp&width=800"
                  alt="Doğukan - Profesyonel Web Designer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 border border-accent/30 rounded-2xl group-hover:border-accent/60 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Hakkımda
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Profesyonel geçmişim ve uzmanlık alanlarım
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-8 bg-card/40 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
                style={{ animationDelay: "0.1s" }}>
                <div className="p-3 w-fit bg-primary/20 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                  <Code2 className="text-accent group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  JavaScript Development
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  Modern JavaScript teknolojilerini kullanarak etkili ve verimli web uygulamaları geliştiririm.
                </p>
              </div>

              <div className="group p-8 bg-card/40 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
                style={{ animationDelay: "0.2s" }}>
                <div className="p-3 w-fit bg-primary/20 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                  <Palette className="text-accent group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Web Tasarım
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  Kullanıcı deneyimini ön planda tutarak estetik ve işlevsel tasarımlar yaratırım.
                </p>
              </div>

              <div className="group p-8 bg-card/40 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-slide-up"
                style={{ animationDelay: "0.3s" }}>
                <div className="p-3 w-fit bg-primary/20 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                  <Terminal className="text-accent group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Python Backend
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  Sağlam ve ölçeklenebilir backend sistemleri geliştirmek için Python'u kullanırım.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 p-8 sm:p-12 rounded-2xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}>
              <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
                Detaylı ve titiz çalışmalarla, istemcilerin beklentilerini aşan sonuçlar sunmaya odaklanırım. 
                Her projede, modern web teknolojileri ve tasarım ilkelerini birleştirerek, 
                hem işlevsel hem de görsel açıdan mükemmel çözümler ortaya koymayı hedeflerim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Projelerim
                </span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Son zamanlarda tamamladığım önemli projeler ve başarılar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "JavaScript ve React kullanarak modern bir e-ticaret platformu tasarladım ve geliştirdim.",
                  tags: ["JavaScript", "React", "Web Tasarım"],
                  icon: Code2,
                  delay: "0.1s"
                },
                {
                  title: "Backend API Sistemi",
                  description: "Python Flask kullanarak ölçeklenebilir bir backend API sistemi inşa ettim.",
                  tags: ["Python", "Flask", "REST API"],
                  icon: Terminal,
                  delay: "0.2s"
                },
                {
                  title: "Tasarım Portföy Sitesi",
                  description: "Yaratıcı bir portföy sitesi tasarladım ve geliştirdim, modern animasyonlarla süslemeli.",
                  tags: ["UI/UX", "Animasyon", "Web Design"],
                  icon: Palette,
                  delay: "0.3s"
                },
                {
                  title: "İçerik Yönetim Sistemi",
                  description: "Python ile güçlü bir CMS geliştirdim, kullanıcı dostu yönetim paneli ile.",
                  tags: ["Python", "Database", "CMS"],
                  icon: Code2,
                  delay: "0.4s"
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-card/40 border border-border/50 rounded-xl overflow-hidden hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-slide-up cursor-pointer"
                  style={{ animationDelay: project.delay }}
                >
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-colors relative overflow-hidden">
                    <project.icon className="text-accent/50 group-hover:text-accent/70 transition-colors group-hover:scale-110" size={64} />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/30 text-accent text-xs sm:text-sm rounded-full group-hover:bg-accent/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-4 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
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
                className="group p-8 sm:p-10 bg-card/40 border border-border/50 rounded-xl hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col items-center text-center gap-4 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-accent/20 transition-colors group-hover:scale-110">
                  <Mail className="text-accent group-hover:animate-bounce" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    E-Mail
                  </h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    swicenta@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/dogukan.1967"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 sm:p-10 bg-card/40 border border-border/50 rounded-xl hover:border-accent/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col items-center text-center gap-4 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-accent/20 transition-colors group-hover:scale-110">
                  <Instagram className="text-accent group-hover:animate-bounce" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Instagram
                  </h3>
                  <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    @dogukan.1967
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-r from-accent/15 via-primary/15 to-accent/15 border border-accent/30 p-8 sm:p-12 rounded-2xl text-center hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: "0.3s" }}>
              <p className="text-foreground/90 text-lg leading-relaxed">
                Sizin fikirlerinizi gerçekleştirmeye yardımcı olmaktan gurur duyarım. 
                Hemen iletişim kuralım ve harika bir proje başlayalım!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
