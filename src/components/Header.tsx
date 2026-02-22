import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ramadan", href: "#" },
    { name: "Zakat", href: "#" },
    { name: "Automate Giving", href: "#" },
    { name: "Appeals", href: "#" },
    { name: "Projects", href: "#" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4 text-white"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Using text for now if SVG issues arise, but img tag is better if file exists */}
          <img 
            src="/the-olive-branch-australia-logo.svg" 
            alt="The Olive Branch" 
            className="h-12 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerText = 'TOBA';
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-toba-gold transition-colors",
                isScrolled ? "text-primary" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className={cn("p-2 hover:text-toba-gold transition-colors", isScrolled ? "text-primary" : "text-white")}>
            <Search className="h-5 w-5" />
          </button>
          <button className={cn("p-2 hover:text-toba-gold transition-colors", isScrolled ? "text-primary" : "text-white")}>
            <User className="h-5 w-5" />
          </button>
          <button className={cn("p-2 hover:text-toba-gold transition-colors relative", isScrolled ? "text-primary" : "text-white")}>
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-toba-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
          
          <Button 
            className="bg-toba-green hover:bg-toba-green/90 text-white font-semibold px-6 rounded-full"
          >
            DONATE
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-current"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-accordion-down">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary font-medium text-lg py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 justify-center">
               <Button className="w-full bg-toba-green hover:bg-toba-green/90 text-white">
                DONATE
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}