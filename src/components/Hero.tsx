import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Camera, Bell, BarChart3, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:col-span-2 text-center lg:text-left">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-lg font-medium">
                <MapPin className="w-5 h-5" />
                <span>Mossel Bay Municipal Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Got a Problem?
                <span className="block text-primary">Report It Fast!</span>
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                See a pothole? Broken streetlight? Water leak? 
                <br />
                <strong className="text-foreground">Tell us in 2 minutes and we'll fix it!</strong>
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="municipal" size="lg" className="text-2xl px-12 py-8 h-auto">
                <MapPin className="w-8 h-8 mr-3" />
                Report Problem Now
              </Button>
              <p className="text-lg text-muted-foreground">
                📱 Takes 2 minutes • 📍 We find the exact location • 🔔 Get updates
              </p>
            </div>

            {/* Simple Statistics */}
            <div className="bg-card/60 rounded-2xl p-8 mt-12">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1,247</div>
                  <div className="text-lg text-muted-foreground">Problems Fixed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">24hrs</div>
                  <div className="text-lg text-muted-foreground">Average Fix Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-lg text-muted-foreground">Happy Residents</div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Feature Cards - moved to single column */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Pin the Spot</h3>
                  <p className="text-lg text-muted-foreground">
                    Show us exactly where the problem is on the map
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Take a Photo</h3>
                  <p className="text-lg text-muted-foreground">
                    One picture helps us understand the problem better
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🔔</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Get Updates</h3>
                  <p className="text-lg text-muted-foreground">
                    We'll tell you when we start fixing and when it's done
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;