import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Our Causes",
      links: [
        "Emergency Appeals",
        "Zakat",
        "Clean Water",
        "Orphan Care",
        "Food Security",
        "Qurban"
      ]
    },
    {
      title: "Information",
      links: [
        "About Us",
        "Impact",
        "100% Donation",
        "Legal",
        "Terms & Conditions",
        "Privacy"
      ]
    },
    {
      title: "Connect Us",
      links: [
        "Contact",
        "Volunteer",
        "Corporate Partners",
        "FAQ"
      ]
    }
  ];

  return (
    <footer className="bg-toba-green text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/the-olive-branch-australia-logo.svg" 
                alt="The Olive Branch" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed max-w-md">
              THE OLIVE BRANCH AUSTRALIA Inc. ABN 51 146 324 955
              Serving humanity with dignity and compassion. ACNC registered charity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-toba-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-toba-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:salam@toba.charity" className="hover:text-toba-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-heading font-semibold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 The Olive Branch Australia. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Secure Payments:</span>
              <div className="flex gap-3">
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-semibold">VISA</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-semibold">MASTERCARD</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-semibold">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}