import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">TB</span>
              </div>
              <span className="text-xl font-bold">TurfBeacon</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Illuminating outdoor spaces with expert landscaping, hardscaping, 
              and eco-friendly solutions in Burlington, NC.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <span className="font-semibold">Licensed & Insured</span>
              <span className="text-primary-foreground/80">Serving Burlington & Surrounding Areas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Lawn Care & Maintenance</li>
              <li>Hardscaping & Patios</li>
              <li>Eco-Friendly Landscaping</li>
              <li>Garden Design</li>
              <li>Irrigation Systems</li>
              <li>Seasonal Cleanup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>500 S Main Street</div>
                  <div>Burlington, NC 27215</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:336-938-3774"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (336) 938-3774
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:info@turfbeacon.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@turfbeacon.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                  <div>Sat: 8:00 AM - 4:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} TurfBeacon Landscaping. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-foreground/80">
                Professional Landscaping Services in Burlington, NC
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;