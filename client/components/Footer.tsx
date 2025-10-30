import { Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-accent mb-4">İletişim</h3>
            <div className="space-y-3">
              <a
                href="mailto:swicenta@gmail.com"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} />
                <span>swicenta@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/dogukan.1967"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
                <span>@dogukan.1967</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-foreground">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-accent mb-4">Uzmanlık Alanları</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li>✓ JavaScript</li>
              <li>✓ Web Tasarım</li>
              <li>✓ Python</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Doğukan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};
