import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Instagram, Code2, Palette, Terminal } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <div className="animate-slide-in-right order-2 md:order-1 flex justify-center">
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] overflow-hidden rounded-2xl border-2 border-accent shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0a0c931be26d4aa1b1d9fb2db10a01a2%2F8c8dd5147a5f4ebdac4e117f7c22271f?format=webp&width=800"
                  alt="Doğukan - Portfolio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30"></div>
              </div>
            </div>

            {/* Right side - Text */}
            <div className="animate-slide-up order-1 md:order-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent leading-tight">
                    Doğukan
                  </h1>
                  <p className="text-xl sm:text-2xl text-primary font-semibold">
                    Web Tasarımcı & Developer
                  </p>
                </div>

                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-lg">
                  Modern, dinamik ve kullanıcı odaklı web çözümleri sunuyorum. JavaScript, Python ve profesyonel tasarım konusunda uzmanlaşmış bir geliştiriciyim.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-primary transition-colors duration-300 text-center"
                  >
                    İletişim Kurun
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-center"
                  >
                    Projelerime Bakın
                  </a>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://instagram.com/dogukan.1967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary/20 hover:bg-accent/20 rounded-lg transition-colors"
                  >
                    <Instagram className="text-accent" size={24} />
                  </a>
                  <a
                    href="mailto:swicenta@gmail.com"
                    className="p-2 bg-primary/20 hover:bg-accent/20 rounded-lg transition-colors"
                  >
                    <Mail className="text-accent" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
                Hakkımda
              </h2>
              <p className="text-foreground/70 text-lg">
                Profesyonel geçmişim ve uzmanlık alanlarım
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors duration-300 hover:shadow-lg">
                <Code2 className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  JavaScript Development
                </h3>
                <p className="text-foreground/70">
                  Modern JavaScript teknolojilerini kullanarak etkili ve verimli web uygulamaları geliştiririm.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors duration-300 hover:shadow-lg">
                <Palette className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Web Tasarım
                </h3>
                <p className="text-foreground/70">
                  Kullanıcı deneyimini ön planda tutarak estetik ve işlevsel tasarımlar yaratırım.
                </p>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors duration-300 hover:shadow-lg">
                <Terminal className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Python Backend
                </h3>
                <p className="text-foreground/70">
                  Sağlam ve ölçeklenebilir backend sistemleri geliştirmek için Python'u kullanırım.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary p-6 sm:p-8 rounded-xl">
              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                Detaylı ve titiz çalışmalarla, istemcilerin beklentilerini aşan sonuçlar sunmaya odaklanırım. 
                Her projede, modern web teknolojileri ve tasarım ilkelerini birleştirerek, 
                hem işlevsel hem de görsel açıdan mükemmel çözümler ortaya koymayı hedeflerim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
                Projelerim
              </h2>
              <p className="text-foreground/70 text-lg">
                Son zamanlarda tamamladığım önemli projeler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Code2 className="text-accent/50" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    JavaScript ve React kullanarak modern bir e-ticaret platformu tasarladım ve geliştirdim.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Web Tasarım
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Terminal className="text-accent/50" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Backend API Sistemi
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Python Flask kullanarak ölçeklenebilir bir backend API sistemi inşa ettim.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Flask
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      REST API
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Palette className="text-accent/50" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Tasarım Portföy Sitesi
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Yaratıcı bir portföy sitesi tasarladım ve geliştirdim, modern animasyonlarla süslemeli.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      UI/UX
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Animasyon
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Web Design
                    </span>
                  </div>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Code2 className="text-accent/50" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    İçerik Yönetim Sistemi
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Python ile güçlü bir CMS geliştirdim, kullanıcı dostu yönetim paneli ile.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      Database
                    </span>
                    <span className="px-3 py-1 bg-primary/30 text-accent text-sm rounded-full">
                      CMS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
                İletişim
              </h2>
              <p className="text-foreground/70 text-lg">
                Projeleriniz hakkında konuşmak isterseniz, bana ulaşın
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:swicenta@gmail.com"
                className="p-8 bg-card border border-border rounded-xl hover:border-accent hover:bg-primary/10 transition-all duration-300 flex flex-col items-center text-center gap-4 group"
              >
                <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    E-Mail
                  </h3>
                  <p className="text-foreground/70">swicenta@gmail.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/dogukan.1967"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-card border border-border rounded-xl hover:border-accent hover:bg-primary/10 transition-all duration-300 flex flex-col items-center text-center gap-4 group"
              >
                <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Instagram className="text-accent" size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Instagram
                  </h3>
                  <p className="text-foreground/70">@dogukan.1967</p>
                </div>
              </a>
            </div>

            <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-accent/30 p-8 rounded-xl text-center">
              <p className="text-foreground text-lg">
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
