import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What's the best way to work out Zakat?",
      answer: "Use our free Zakat Calculator with live gold/silver prices to accurately calculate your obligation. We update Nisab values daily to ensure precision."
    },
    {
      question: "Will I receive a tax receipt?",
      answer: "Yes! As an ACNC registered charity, all donations over $2 are tax-deductible. Your receipt will be emailed automatically after each donation."
    },
    {
      question: "How quickly does aid reach those in need?",
      answer: "Emergency appeals are deployed within 24-48 hours. Regular programs like food packs are distributed monthly based on Ramadan calendar timing."
    },
    {
      question: "Can I choose where my contribution goes?",
      answer: "Absolutely. You can designate your donation to specific appeals (Gaza, Yemen, etc.) or choose 'Where Most Needed' for maximum impact."
    },
    {
      question: "How does automated $40/mo giving work?",
      answer: "Set up a recurring monthly donation and we'll automatically process it on your preferred date. Cancel or adjust anytime through your donor portal."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            All the answers you need for a blessed Ramadan of giving
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}