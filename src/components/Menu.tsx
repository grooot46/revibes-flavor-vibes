import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Pizza, Utensils, Plus } from "lucide-react";
import Cart, { CartItem } from "./Cart";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  {
    category: "Starters",
    icon: <Utensils className="h-5 w-5" />,
    items: [
      { id: "veg-momo", name: "Veg Mo:Mo", price: "रु. 120", description: "Steamed dumplings with fresh vegetables" },
      { id: "chicken-momo", name: "Chicken Mo:Mo", price: "रु. 160", description: "Juicy chicken-filled dumplings" },
      { id: "paneer-chilli", name: "Paneer Chilli", price: "रु. 240", description: "Spicy cottage cheese with peppers" },
      { id: "chicken-wings", name: "Chicken Wings", price: "रु. 280", description: "Crispy wings with special sauce" }
    ]
  },
  {
    category: "Main Course",
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { id: "special-burger", name: "Revibes Special Burger", price: "रु. 220", description: "Our signature gourmet burger" },
      { id: "chicken-sizzler", name: "Chicken Sizzler", price: "रु. 350", description: "Hot sizzling chicken with vegetables" },
      { id: "pasta-veg", name: "Pasta Alfredo (Veg)", price: "रु. 300", description: "Creamy pasta with vegetables" },
      { id: "pasta-chicken", name: "Pasta Alfredo (Chicken)", price: "रु. 350", description: "Creamy pasta with chicken" },
      { id: "thakali-veg", name: "Revibes Thakali Set (Veg)", price: "रु. 250", description: "Traditional Nepali set meal" },
      { id: "thakali-nonveg", name: "Revibes Thakali Set (Non-Veg)", price: "रु. 320", description: "Traditional Nepali set with meat" }
    ]
  },
  {
    category: "Pizza & Snacks",
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { id: "cheese-pizza", name: "Cheese Pizza (Medium)", price: "रु. 350", description: "Classic pizza with melted cheese" },
      { id: "bbq-pizza", name: "BBQ Chicken Pizza", price: "रु. 450", description: "Smoky BBQ chicken with cheese" },
      { id: "french-fries", name: "French Fries", price: "रु. 120", description: "Crispy golden fries" },
      { id: "nachos", name: "Nachos with Dip", price: "रु. 200", description: "Crunchy nachos with special dip" }
    ]
  },
  {
    category: "Drinks & Desserts",
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { id: "cold-coffee", name: "Cold Coffee", price: "रु. 150", description: "Rich and creamy iced coffee" },
      { id: "chocolate-shake", name: "Chocolate Shake", price: "रु. 170", description: "Thick and indulgent chocolate shake" },
      { id: "special-mocktail", name: "Revibes Special Mocktail", price: "रु. 180", description: "Our signature refreshing mocktail" },
      { id: "ice-cream", name: "Ice Cream Sundae", price: "रु. 140", description: "Delicious ice cream with toppings" }
    ]
  }
];

const Menu = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Menu <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All Prices in NPR – Deliciously Worth It!
              </p>
            </div>
            <div className="ml-4">
              <Cart 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
                onClearCart={clearCart}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <div key={item.id} className="border-b border-border pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-gradient-accent text-sage font-bold">
                          {item.price}
                        </Badge>
                        <Button
                          size="sm"
                          onClick={() => addToCart(item)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-hero rounded-2xl p-8 text-cream">
          <h3 className="text-2xl font-bold mb-4">Delivery Service Available!</h3>
          <p className="text-lg mb-6">
            Craving something tasty? We deliver right to your doorstep in Chundevi & nearby areas.
          </p>
          <p className="text-xl font-semibold text-gold mb-6">
            Call 9863575090 to order now!
          </p>
          <p className="text-sm opacity-80">
            Dark Vibes. Warm Hearts. Delicious Plates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;