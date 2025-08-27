import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Camera, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const issueTypes = [
  { value: "pothole", label: "Pothole", icon: "🕳️", description: "Holes in the road" },
  { value: "water-leak", label: "Water Leak", icon: "💧", description: "Burst pipes or leaks" },
  { value: "streetlight", label: "Broken Light", icon: "💡", description: "Street lights not working" },
  { value: "dumping", label: "Illegal Dumping", icon: "🗑️", description: "Trash dumped illegally" },
  { value: "power", label: "Power Problem", icon: "⚡", description: "Electricity issues" },
  { value: "other", label: "Something Else", icon: "📝", description: "Other problems" },
];

const SimpleReportForm = () => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedIssue || !location || !description) {
      toast({
        title: "Please fill in all fields",
        description: "We need to know what the problem is, where it is, and some details.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Problem Reported! ✅",
      description: "Thank you! We'll look at your report and get back to you soon.",
    });
    
    // Reset form
    setSelectedIssue("");
    setLocation("");
    setDescription("");
    setPhotos([]);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  return (
    <section id="report" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Report a Problem
            </h2>
            <p className="text-2xl text-muted-foreground">
              Tell us what's wrong and we'll fix it! It's that simple.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 text-center py-8">
              <CardTitle className="text-3xl font-bold">3 Easy Steps</CardTitle>
              <p className="text-xl text-muted-foreground mt-2">
                ① Pick the problem → ② Tell us where → ③ Add details
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Step 1: What's the Problem? */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">① What's the Problem?</h3>
                    <p className="text-lg text-muted-foreground">Click on the type of problem you found</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {issueTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        className={`p-6 rounded-2xl border-2 transition-all text-center ${
                          selectedIssue === type.value
                            ? "border-primary bg-primary/10 shadow-lg scale-105"
                            : "border-border hover:border-primary/50 hover:shadow-md"
                        }`}
                        onClick={() => setSelectedIssue(type.value)}
                      >
                        <div className="text-4xl mb-3">{type.icon}</div>
                        <div className="font-semibold text-lg text-foreground mb-1">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Where is it? */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">② Where is the Problem?</h3>
                    <p className="text-lg text-muted-foreground">Type the street name or nearby landmark</p>
                  </div>
                  
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-6 h-6 text-primary" />
                      <Input
                        placeholder="Example: Main Road near Pick n Pay, or 123 Church Street"
                        className="pl-14 text-lg py-6 text-center"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" type="button" className="text-lg px-8 py-3">
                        <MapPin className="w-5 h-5 mr-2" />
                        Or Pin on Map
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step 3: Tell us more */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">③ Tell Us More</h3>
                    <p className="text-lg text-muted-foreground">Describe what you see (and add a photo if you can)</p>
                  </div>
                  
                  <div className="max-w-2xl mx-auto space-y-6">
                    <Textarea
                      placeholder="Example: There's a big pothole that's dangerous for cars. It's about 1 meter wide and quite deep."
                      className="min-h-[120px] text-lg p-6"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />

                    {/* Photo Upload */}
                    <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center bg-primary/5">
                      <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-foreground mb-2">Add a Photo (Optional)</h4>
                      <p className="text-muted-foreground mb-4">A picture helps us understand the problem better</p>
                      <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photo-upload"
                      />
                      <Label htmlFor="photo-upload" className="cursor-pointer">
                        <Button variant="secondary" type="button" size="lg" className="text-lg px-8" asChild>
                          <span>
                            <Camera className="w-5 h-5 mr-2" />
                            Take or Choose Photos
                          </span>
                        </Button>
                      </Label>
                      {photos.length > 0 && (
                        <div className="mt-4 text-accent font-medium">
                          ✓ {photos.length} photo{photos.length > 1 ? 's' : ''} selected
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button 
                    type="submit" 
                    variant="municipal" 
                    size="lg" 
                    className="text-2xl px-16 py-8 h-auto"
                    disabled={!selectedIssue || !location || !description}
                  >
                    <Send className="w-6 h-6 mr-3" />
                    Send Report to Municipality
                  </Button>
                  <p className="text-lg text-muted-foreground mt-4">
                    We'll send you updates on your phone 📱
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SimpleReportForm;