import { Button } from "@/components/ui/button";
import { Coffee, MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img 
          src="/lovable-uploads/adb960fc-dfea-44f1-b5a5-937d8afdd4a6.png" 
          alt="Revibes Logo Background" 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 text-center text-cream relative z-10">
        <div className="mb-8 animate-float">
          <img 
            src="/lovable-uploads/adb960fc-dfea-44f1-b5a5-937d8afdd4a6.png" 
            alt="Revibes Cafe Logo" 
            className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-gold">Revibes</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Where Flavor Meets Vibes in the Heart of Chundevi! ✨
        </p>
        <p className="text-lg mb-8 opacity-80">
          🍝 Mouth-Watering Dishes | Chilled Drinks | Cozy Ambience 🎧
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-gold" />
            <span>Chundevi, Kathmandu</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-gold" />
            <span>8:00 AM – 9:00 PM Daily</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" className="text-lg px-8 py-3">
            <Coffee className="mr-2 h-5 w-5" />
            View Menu
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-cream text-cream hover:bg-cream hover:text-sage">
            Call Us: 9863575090
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;