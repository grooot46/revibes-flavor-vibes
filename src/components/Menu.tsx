import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Pizza, Utensils } from "lucide-react";

const menuItems = [
  {
    category: "Momos",
    icon: <Utensils className="h-5 w-5" />,
    items: [
      { name: "Veg Mo:Mo", price: "रु. 120", description: "Steamed dumplings with fresh vegetables" },
      { name: "Chicken Mo:Mo", price: "रु. 160", description: "Juicy chicken-filled dumplings" }
    ]
  },
  {
    category: "Main Dishes",
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { name: "Fried Rice", price: "रु. 180", description: "Wok-tossed rice with vegetables" },
      { name: "Revibes Special Burger", price: "रु. 220", description: "Our signature gourmet burger" },
      { name: "Cheese Pizza (Medium)", price: "रु. 350", description: "Wood-fired pizza with melted cheese" }
    ]
  },
  {
    category: "Beverages",
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { name: "Cold Coffee", price: "रु. 150", description: "Rich and creamy iced coffee" },
      { name: "Chocolate Shake", price: "रु. 170", description: "Thick and indulgent chocolate shake" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            💸 Affordable Prices – Deliciously Worth It!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <Card key={category.category} className="bg-card border-border hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-card-foreground">
                  <div className="p-2 bg-gradient-hero rounded-lg text-cream">
                    {category.icon}
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="border-b border-border pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                      <Badge variant="secondary" className="bg-gradient-accent text-sage font-bold">
                        {item.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            🎉 Perfect for friends, families, dates, and chill solo time!
          </p>
          <p className="text-sm text-muted-foreground">
            📸 Don't forget to tag us when you visit! #RevibesCafe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;