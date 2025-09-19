import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Hammer, 
  Leaf, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Care",
      description: "Complete lawn maintenance services to keep your grass healthy and beautiful year-round.",
      features: [
        "Professional mowing & edging",
        "Fertilization programs",
        "Aeration & overseeding", 
        "Weed & pest control",
        "Seasonal cleanup"
      ],
      gradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Hammer,
      title: "Hardscaping",
      description: "Transform your outdoor space with stunning hardscape features that add value and beauty.",
      features: [
        "Custom patios & decks",
        "Walkways & driveways",
        "Retaining walls",
        "Fire pits & outdoor kitchens",
        "Water features"
      ],
      gradient: "from-stone-50 to-gray-50"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Landscaping",
      description: "Sustainable landscaping solutions that benefit both your property and the environment.",
      features: [
        "Native plant installations",
        "Rain gardens & drainage",
        "Organic lawn care",
        "Pollinator gardens",
        "Sustainable design"
      ],
      gradient: "from-emerald-50 to-green-50"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From comprehensive lawn care to stunning hardscaping and eco-friendly solutions, 
              we offer everything you need to create and maintain your perfect outdoor space.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-border/50 overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${service.gradient} p-6`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={scrollToContact}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Ready to Transform Your Outdoor Space?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your landscaping project. 
              Our experts will work with you to create the perfect outdoor oasis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-accent text-accent-foreground hover:bg-accent-light"
              >
                Get Free Estimate
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("tel:336-938-3774")}
              >
                Call (336) 938-3774
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;