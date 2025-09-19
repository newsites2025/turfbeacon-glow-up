import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["500 S Main Street", "Burlington, NC 27215"],
      action: () => window.open("https://maps.google.com?q=500+S+Main+Street+Burlington+NC+27215")
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(336) 938-3774", "Free estimates available"],
      action: () => window.open("tel:336-938-3774")
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@turfbeacon.com", "We respond within 24 hours"],
      action: () => window.open("mailto:info@turfbeacon.com")
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM", "Sun: Closed"],
      action: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your outdoor space? Contact us today for a free estimate 
              and consultation. We're here to bring your landscaping vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-primary">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`service-card border-border/50 ${info.action ? 'cursor-pointer' : ''}`}
                  onClick={info.action || undefined}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-primary">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Service Areas */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    We proudly serve Burlington and surrounding areas:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-foreground">• Burlington</span>
                    <span className="text-foreground">• Graham</span>
                    <span className="text-foreground">• Elon</span>
                    <span className="text-foreground">• Gibsonville</span>
                    <span className="text-foreground">• Mebane</span>
                    <span className="text-foreground">• Alamance County</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-primary">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="(336) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your landscaping project..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent-light"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Find Us in Burlington
            </h3>
            <p className="text-muted-foreground mb-6">
              Located conveniently on Main Street in the heart of Burlington, NC
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open("https://maps.google.com?q=500+S+Main+Street+Burlington+NC+27215")}
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;