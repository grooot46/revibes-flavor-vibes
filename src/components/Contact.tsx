import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Come and experience the Revibes difference!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-gradient-hero rounded-lg text-cream">
                    <MapPin className="h-5 w-5" />
                  </div>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chundevi, Kathmandu<br />
                  Nepal
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-gradient-hero rounded-lg text-cream">
                    <Phone className="h-5 w-5" />
                  </div>
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">9863575090</p>
                <Button variant="gold" size="sm">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-gradient-hero rounded-lg text-cream">
                    <Clock className="h-5 w-5" />
                  </div>
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  8:00 AM – 9:00 PM<br />
                  Every Day
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-hero rounded-2xl p-8 text-cream text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/adb960fc-dfea-44f1-b5a5-937d8afdd4a6.png" 
                alt="Revibes Logo" 
                className="w-24 h-24 mx-auto mb-4 opacity-90"
              />
              <h3 className="text-2xl font-bold mb-2">Ready to Vibe?</h3>
              <p className="opacity-90 mb-6">
                Join us for an unforgettable dining experience where every bite tells a story 
                and every moment creates a memory.
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="gold" size="lg" className="w-full">
                🚚 Order for Delivery
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-cream text-cream hover:bg-cream hover:text-sage"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow Us @RevibesCafe
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/20">
              <p className="text-sm opacity-80">
                📸 Don't forget to tag us in your photos!
              </p>
              <p className="text-gold font-medium mt-2">
                #RevibesCafe #FlavorMeetsVibes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;