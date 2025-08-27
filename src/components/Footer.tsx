import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">FixMosselBay</h3>
                <p className="text-sm text-background/70">Municipal Services</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering residents to report municipal issues and helping our 
              beautiful coastal municipality deliver better services for everyone.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#report" className="text-background/70 hover:text-background transition-colors">
                  Report Issue
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-background/70 hover:text-background transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#map" className="text-background/70 hover:text-background transition-colors">
                  Service Map
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  User Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Issue Types */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Report Types</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/70">🕳️ Potholes</li>
              <li className="text-background/70">💧 Water Leaks</li>
              <li className="text-background/70">💡 Streetlights</li>
              <li className="text-background/70">🗑️ Illegal Dumping</li>
              <li className="text-background/70">⚡ Power Outages</li>
              <li className="text-background/70">🚦 Traffic Signals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Municipality</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <div className="text-background/70">
                  <p>Mossel Bay Municipality</p>
                  <p>Civic Centre, Church Street</p>
                  <p>Mossel Bay, 6500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-background/70">044 606 5000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-background/70">info@mosselbay.gov.za</span>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full">
              Visit Official Website
            </Button>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © 2024 FixMosselBay. Serving our community with transparency and efficiency.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;