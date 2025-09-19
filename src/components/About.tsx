import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Leaf, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Over a decade of professional landscaping experience with attention to every detail."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Our certified professionals are committed to bringing your outdoor vision to life."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Sustainable practices that benefit both your property and the environment."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and ongoing support."
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              About TurfBeacon Landscaping
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Burlington, NC, TurfBeacon Landscaping has been transforming 
              outdoor spaces with passion, creativity, and sustainability for over a decade. 
              Our experienced team combines artistic vision with practical expertise to create 
              landscapes that are both beautiful and functional.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Our Mission
              </h3>
              <p className="text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
                "To illuminate every outdoor space we touch, creating sustainable landscapes that 
                enhance both the beauty of your property and the health of our environment. We believe 
                that exceptional landscaping should be a beacon of excellence in your neighborhood."
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="service-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Info */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Why Choose TurfBeacon?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Local Expertise:</strong> Deep understanding of Burlington's climate and soil conditions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Comprehensive Services:</strong> From design to maintenance, we handle every aspect
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Sustainable Practices:</strong> Eco-friendly solutions that protect our environment
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Customer Focused:</strong> Your satisfaction is our top priority
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Proudly Serving Burlington, NC
                </h4>
                <p className="text-muted-foreground mb-6">
                  Located at 500 S Main Street, we're your local landscaping experts 
                  committed to enhancing the beauty of our community.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Licensed & Insured</p>
                  <p>Free Estimates Available</p>
                  <p>Emergency Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;