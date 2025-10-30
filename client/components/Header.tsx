import { Mail, Instagram, ExternalLink } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/40 backdrop-blur-xl border-b border-neon-blue/20 z-50">
      <div className="container h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left side - Wicenta branding */}
        <div className="flex items-center gap-2">
          <div className="text-2xl sm:text-3xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent">
              Wicenta
            </span>
          </div>
        </div>

        {/* Right side - Navigation */}
        <nav className="flex items-center gap-3 sm:gap-4">
          <a
            href="mailto:swicenta@gmail.com"
            className="p-2 rounded-lg bg-neon-blue/20 hover:bg-neon-blue/40 transition-all duration-300 text-neon-blue hover:text-neon-blue/80"
            title="Email"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://instagram.com/dogukan.1967"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neon-pink/20 hover:bg-neon-pink/40 transition-all duration-300 text-neon-pink hover:text-neon-pink/80"
            title="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.google.com?ref=technomax"
            className="px-4 py-2 rounded-lg bg-neon-green text-black font-semibold hover:bg-neon-yellow hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
          >
            Projelerim
            <ExternalLink size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};
