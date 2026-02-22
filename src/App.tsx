import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <TrustSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;