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
      gradient: "from-accent/10 to-primary/5"
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
      gradient: "from-muted to-secondary"
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
      gradient: "from-primary/10 to-accent/5"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log('Services component is rendering');

  return (
    <section id="services" className="py-20 bg-red-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Services - TEST
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              This is a test to see if the Services section is visible at all.
            </p>
          </div>
          
          <div className="bg-blue-500 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Test Content</h3>
            <p>If you can see this blue box, the Services section is rendering.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;