import { Mail, Instagram, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/30 py-16 sm:py-20">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
              İletişim
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:swicenta@gmail.com"
                className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-all duration-300 group"
              >
                <Mail size={20} className="group-hover:scale-110" />
                <span>swicenta@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/dogukan.1967"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-all duration-300 group"
              >
                <Instagram size={20} className="group-hover:scale-110" />
                <span>@dogukan.1967</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-all duration-300 flex items-center gap-2 group"
                >
                  Hakkımda
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-accent transition-all duration-300 flex items-center gap-2 group"
                >
                  Projeler
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-all duration-300 flex items-center gap-2 group"
                >
                  İletişim
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6">
              Uzmanlık Alanları
            </h3>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Web Tasarım
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                Python
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center text-foreground/60">
          <p>
            &copy; 2025 <span className="text-accent font-semibold">Wicenta</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
