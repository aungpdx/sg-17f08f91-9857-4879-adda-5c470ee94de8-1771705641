import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="The Olive Branch Australia - Nourish Families This Ramadan"
        description="Support families in need this Ramadan. Provide food packs, fulfill Zakat obligations, and make a lasting impact."
        image="/og-image.png"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ProductGrid />
          <TrustSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}