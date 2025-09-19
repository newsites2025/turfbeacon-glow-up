import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Gallery = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Burlington, NC",
      rating: 5,
      text: "TurfBeacon transformed our backyard into an absolute paradise! Their attention to detail and commitment to eco-friendly practices impressed us from day one. The team was professional, punctual, and exceeded our expectations.",
      project: "Complete Backyard Renovation"
    },
    {
      name: "Mike Chen",
      location: "Burlington, NC", 
      rating: 5,
      text: "Outstanding service! They installed a beautiful patio and fire pit area that has become the centerpiece of our outdoor entertaining. The quality of work is exceptional and the pricing was very fair.",
      project: "Hardscaping & Fire Pit Installation"
    },
    {
      name: "Emily Rodriguez",
      location: "Burlington, NC",
      rating: 5,
      text: "I love how they incorporated native plants into our landscape design. Not only does it look amazing, but it's also great for local wildlife. The maintenance has been minimal and the results speak for themselves.",
      project: "Native Plant Landscape Design"
    }
  ];

  const projectTypes = [
    {
      title: "Lawn Renovations",
      description: "Complete lawn makeovers with new sod, irrigation, and landscaping",
      beforeAfter: "Before: Patchy, brown lawn → After: Lush, green paradise"
    },
    {
      title: "Hardscape Installations", 
      description: "Custom patios, walkways, and outdoor living spaces",
      beforeAfter: "Before: Plain yard → After: Stunning outdoor entertainment area"
    },
    {
      title: "Garden Transformations",
      description: "Native plant gardens and sustainable landscaping solutions",
      beforeAfter: "Before: Overgrown space → After: Beautiful, low-maintenance garden"
    },
    {
      title: "Commercial Properties",
      description: "Professional landscaping for businesses and office complexes",
      beforeAfter: "Before: Tired landscape → After: Welcoming business entrance"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our Work & Happy Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See the transformations we've created for our clients across Burlington and 
              hear what they have to say about their experience with TurfBeacon.
            </p>
          </div>

          {/* Project Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
              Project Showcase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <Card key={index} className="service-card border-border/50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-primary">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground">
                        {project.beforeAfter}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="service-card border-border/50 relative">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4">
                      <Quote className="w-6 h-6 text-accent/30" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="border-t border-border/50 pt-4">
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      <div className="text-sm text-accent font-medium mt-1">
                        {testimonial.project}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery CTA */}
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to See Your Project Come to Life?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Contact us today to discuss your 
              landscaping vision and see how we can transform your outdoor space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-gray-100"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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

export default Gallery;