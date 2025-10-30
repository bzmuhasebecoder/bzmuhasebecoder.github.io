import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    window.location.href = "https://www.google.com?ref=technomax";
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-xl font-bold text-accent">Doğukan</div>
        
        <nav className="flex items-center gap-4">
          <button
            onClick={handleProjectsClick}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-accent transition-colors duration-300 text-sm sm:text-base"
          >
            Projelerim
          </button>
        </nav>
      </div>
    </header>
  );
};
