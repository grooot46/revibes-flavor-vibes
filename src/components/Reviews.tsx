import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Sajan K.",
    review: "Best burger in town! Cozy and chill environment.",
    rating: 5
  },
  {
    name: "Anusha R.", 
    review: "Loved the mocktails and pizza. Staff is super friendly!",
    rating: 5
  },
  {
    name: "Bibek T.",
    review: "Perfect place to hang out and work. Wi-Fi and great coffee.",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🗣️ Customer <span className="text-primary">Reviews</span> ⭐⭐⭐⭐⭐
          </h2>
          <p className="text-lg text-muted-foreground">
            What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-warm transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <div className="p-2 bg-gradient-hero rounded-lg text-cream">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  {review.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            🎧 Good food, great music, better memories – only at Revibes Cafe & Restro.
          </p>
          <p className="text-sm text-muted-foreground">
            📸 Tag us at #RevibesCafe for a chance to be featured!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;