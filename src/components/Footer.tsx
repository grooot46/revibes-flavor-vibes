import { Coffee, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
              <Coffee className="h-5 w-5 text-sage" />
            </div>
            <div>
              <h3 className="font-bold">Revibes Cafe & Restro</h3>
              <p className="text-xs opacity-80">Where Flavor Meets Vibes</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-gold fill-current" />
            <span>in Chundevi, Kathmandu</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; 2024 Revibes Cafe & Restro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;