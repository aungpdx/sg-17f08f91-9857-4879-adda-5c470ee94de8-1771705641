import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export function ProductGrid() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const products: Product[] = [
    {
      id: "1",
      title: "Star Meal Sponsorship",
      description: "Light the night with a soul-nourishing meal for a fasting family",
      price: 25,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      category: "ramadan"
    },
    {
      id: "2",
      title: "Ramadan Food Pack",
      description: "Supplies for a family of 6 to break their fast for the entire month",
      price: 100,
      image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&h=300&fit=crop",
      category: "ramadan"
    },
    {
      id: "3",
      title: "Community Iftar Kit",
      description: "A large-scale serving opportunity for your community mosque",
      price: 500,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      category: "ramadan"
    },
    {
      id: "4",
      title: "Zakat Al-Fitr",
      description: "Purifies your fast from idle talk and provides small meals for the needy",
      price: 15,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      category: "obligations"
    }
  ];

  const ramadanProducts = products.filter(p => p.category === "ramadan");
  const obligationProducts = products.filter(p => p.category === "obligations");

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-heading font-semibold text-lg text-primary">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-3">
        <Button 
          size="sm"
          className="bg-toba-green hover:bg-toba-green/90 text-white font-semibold flex-1"
        >
          ${product.price}
        </Button>
        <div className="flex items-center gap-2 border rounded-md">
          <button
            onClick={() => updateQuantity(product.id, -1)}
            className="p-2 hover:bg-gray-100 transition-colors"
            disabled={!quantities[product.id]}
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="text-sm font-medium w-6 text-center">
            {quantities[product.id] || 0}
          </span>
          <button
            onClick={() => updateQuantity(product.id, 1)}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <div className="py-16 space-y-24">
      {/* Ramadan Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Brighten Someone's Ramadan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation counts. Choose from our Ramadan packages and light up a family's blessed month.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ramadanProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Obligations Section */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Complete Your Fasting Obligations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ramadan fasting nurtures the soul. Ensure yours is fulfilled and performed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {obligationProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}