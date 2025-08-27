import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Camera, Bell, BarChart3, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>Smart Municipal Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Report Municipal Issues
                <span className="block text-primary">Fast & Simple</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Help improve Mossel Bay by reporting potholes, water leaks, broken streetlights, 
                and other municipal issues. Get real-time updates on resolution progress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="municipal" size="lg" className="text-lg px-8">
                <MapPin className="w-5 h-5 mr-2" />
                Report Issue Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24h</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/60 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Precise Location</h3>
                <p className="text-muted-foreground">
                  Pin exact locations on the map for faster municipal response times.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/60 backdrop-blur border-secondary/10 hover:border-secondary/20 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Photo Evidence</h3>
                <p className="text-muted-foreground">
                  Upload photos to help staff understand the issue clearly.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/60 backdrop-blur border-accent/10 hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Bell className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Live Updates</h3>
                <p className="text-muted-foreground">
                  Get notified when your issue is reviewed, in progress, or resolved.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/60 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Community Driven</h3>
                <p className="text-muted-foreground">
                  Work together to improve our beautiful coastal municipality.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;