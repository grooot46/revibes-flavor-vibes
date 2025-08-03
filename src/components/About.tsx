import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Music, MapPin } from "lucide-react";

const features = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Good Food, Great Mood",
    description: "Every dish is crafted with love and the finest ingredients to create unforgettable flavors."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Perfect for Everyone",
    description: "Whether you're with friends, family, on a date, or enjoying solo time - we've got the perfect vibe."
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "Cozy Ambience",
    description: "Relax in our warm, welcoming atmosphere with great music and comfortable seating."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Prime Location",
    description: "Located in the heart of Chundevi, Kathmandu - easily accessible and perfectly positioned."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Revibes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step in for Good Food, Great Mood, and Unforgettable Vibes. At Revibes Cafe & Restro, 
            we believe that great food and amazing atmosphere go hand in hand. Our mission is to create 
            a space where every moment becomes a cherished memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-hero rounded-full text-cream">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-cream">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            From sizzling plates to aromatic coffee
          </h3>
          <p className="text-lg opacity-90 mb-6">
            We've got the perfect vibe for every craving. Join us and experience the magic of great food 
            in an atmosphere that feels like home.
          </p>
          <div className="text-gold text-sm font-medium">
            Where Flavor Meets Vibes
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;