import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Brain, Umbrella } from "lucide-react";

const services = [
  {
    title: "Privacy and Security",
    description: "Protect your AI systems and data with our advanced security solutions.",
    icon: <Shield className="h-12 w-12 mb-4 text-primary" />,
    features: ["Data encryption", "Access control", "Threat detection"],
  },
  {
    title: "Custom LLM",
    description: "Tailor-made language models to suit your specific business needs.",
    icon: <Brain className="h-12 w-12 mb-4 text-primary" />,
    features: ["Domain-specific training", "Model fine-tuning", "Integration support"],
  },
  {
    title: "AI Insurance",
    description: "Comprehensive coverage for AI-related risks and liabilities.",
    icon: <Umbrella className="h-12 w-12 mb-4 text-primary" />,
    features: ["Liability protection", "Data breach coverage", "AI malfunction insurance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="text-center">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-center mb-4">{service.description}</p>
                <ul className="list-disc list-inside mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-4 mt-auto">
                <Button className="w-full">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;