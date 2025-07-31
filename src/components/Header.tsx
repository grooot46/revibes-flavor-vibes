import { Button } from "@/components/ui/button";
import { Coffee, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
            <Coffee className="h-6 w-6 text-cream" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">RE VIBES</h1>
            <p className="text-xs text-muted-foreground">CAFE AND RESTRO</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="cafe" size="sm" className="hidden md:inline-flex">
            Order Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;