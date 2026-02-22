import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Heart, ChevronRight } from "lucide-react";

export function Hero() {
  const [amount, setAmount] = useState("100");
  const [isCustom, setIsCustom] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Charity Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-toba-gold animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">Ramadan Appeal 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-balance">
            Nourish Families <br />
            <span className="text-toba-gold italic">All Month Long</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            A $100 food pack sustains a family for the entire month of Ramadan — 
            rice, flour, oil, lentils, and essentials delivered to their door before the first fast begins.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-toba-pink hover:bg-toba-pink/90 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-toba-pink/20">
              <Heart className="mr-2 h-5 w-5 fill-current" />
              Send a Food Pack
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full h-14 px-8 text-lg">
              Complete Obligations
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-300 pt-8">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">10+</span> Nations Served
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">1M+</span> Meals Provided
            </div>
          </div>
        </div>

        {/* Right Donation Widget - Floating Card */}
        <div className="hidden lg:block w-full max-w-md ml-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-toba-pink">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-heading text-xl font-bold text-primary">Quick Donate</h3>
                <span className="text-xs font-semibold text-toba-pink bg-toba-pink/10 px-2 py-1 rounded">Tax Deductible</span>
              </div>

              <Tabs defaultValue="one-off" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
                  <TabsTrigger 
                    value="one-off" 
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all font-medium"
                  >
                    Give Once
                  </TabsTrigger>
                  <TabsTrigger 
                    value="monthly" 
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all font-medium"
                  >
                    Monthly
                  </TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-4">
                  <label className="text-sm font-medium text-gray-600">Iftar Meal Sponsorship</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["25", "50", "100", "200"].map((val) => (
                      <button
                        key={val}
                        onClick={() => { setAmount(val); setIsCustom(false); }}
                        className={cn(
                          "py-3 rounded-lg border-2 font-bold transition-all",
                          amount === val && !isCustom
                            ? "border-toba-pink bg-toba-pink text-white shadow-md"
                            : "border-gray-100 bg-gray-50 text-gray-600 hover:border-toba-pink/30"
                        )}
                      >
                        ${val}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <input
                      type="number"
                      placeholder="Other Amount"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-toba-pink/20 focus:border-toba-pink transition-all font-medium"
                      onFocus={() => setIsCustom(true)}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              </Tabs>

              <Button className="w-full bg-toba-pink hover:bg-toba-pink/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-toba-pink/25 text-lg group">
                Donate ${amount || "0"}
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                Secure SSL payment via Stripe. 100% Donation Policy available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}