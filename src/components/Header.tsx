import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">FixMosselBay</h1>
              <p className="text-sm text-muted-foreground">Report & Track Issues</p>
            </div>
          </div>

          {/* Simple Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="lg" className="hidden sm:flex">
              <Phone className="w-5 h-5 mr-2" />
              Call Municipality
            </Button>
            <Button variant="municipal" size="lg" className="text-lg px-8">
              Report Problem
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;