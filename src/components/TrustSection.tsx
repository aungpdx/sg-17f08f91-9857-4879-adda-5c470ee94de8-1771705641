import { Shield, Globe, Heart, CheckCircle } from "lucide-react";

export function TrustSection() {
  const stats = [
    { value: "50,000+", label: "Lives Touched" },
    { value: "15+", label: "Nations Served" },
    { value: "10,000+", label: "Donors Trust Us" },
    { value: "5+", label: "Years of Impact" }
  ];

  const trustPillars = [
    {
      icon: Shield,
      title: "In Trust of Beraca",
      description: "If you can trust us with your donations, you can trust us with your charitable funds. We're certified and transparent."
    },
    {
      icon: Globe,
      title: "Islamically Guided",
      description: "All donations are approved by our Shariah Board to ensure 100% compliance with Islamic principles."
    },
    {
      icon: Heart,
      title: "Complete Transparency",
      description: "Where your money goes and how it's spent - live updates from the field so you see the impact firsthand."
    },
    {
      icon: CheckCircle,
      title: "Tax Deductible",
      description: "100% registered charity. All donations over $2 are fully tax-deductible through ACNC."
    }
  ];

  return (
    <div className="py-16 space-y-24">
      {/* Stats Bar */}
      <section className="bg-toba-cream py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-toba-green mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose The Olive Branch?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your confidence matters to us. Here's what donors tell us set us apart with their Ramadan contributions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-toba-green/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-toba-green" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}