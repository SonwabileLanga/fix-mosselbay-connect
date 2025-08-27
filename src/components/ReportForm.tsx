import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Upload, Send, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const issueTypes = [
  { value: "pothole", label: "Potholes", icon: "🕳️", color: "urgent" },
  { value: "water-leak", label: "Water Leaks", icon: "💧", color: "primary" },
  { value: "streetlight", label: "Broken Streetlights", icon: "💡", color: "secondary" },
  { value: "illegal-dumping", label: "Illegal Dumping", icon: "🗑️", color: "destructive" },
  { value: "power-outage", label: "Power Outages", icon: "⚡", color: "accent" },
  { value: "traffic-signal", label: "Traffic Signals", icon: "🚦", color: "primary" },
  { value: "other", label: "Other", icon: "📝", color: "muted" },
];

const ReportForm = () => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    urgency: "medium",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Issue Reported Successfully!",
      description: "Your report has been submitted. You'll receive updates via notifications.",
    });
    
    // Reset form
    setFormData({ title: "", description: "", location: "", urgency: "medium" });
    setSelectedIssue("");
    setPhotos([]);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  return (
    <section id="report" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Report an Issue
            </h2>
            <p className="text-xl text-muted-foreground">
              Help us improve Mossel Bay by reporting municipal service issues
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Issue Type Selection */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-secondary" />
                  Issue Type
                </CardTitle>
                <CardDescription>
                  Select the type of municipal issue you want to report
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {issueTypes.map((type) => (
                  <div
                    key={type.value}
                    className={`p-3 rounded-lg cursor-pointer border-2 transition-all ${
                      selectedIssue === type.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedIssue(type.value)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{type.icon}</span>
                      <span className="font-medium text-foreground">{type.label}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Report Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Issue Details</CardTitle>
                <CardDescription>
                  Provide details about the issue to help our municipal team respond effectively
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Issue Title</Label>
                      <Input
                        id="title"
                        placeholder="Brief description of the issue"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                              Low Priority
                            </div>
                          </SelectItem>
                          <SelectItem value="medium">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                              Medium Priority
                            </div>
                          </SelectItem>
                          <SelectItem value="high">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-status-urgent rounded-full mr-2"></div>
                              High Priority
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="location"
                        placeholder="Street address or landmark"
                        className="pl-10"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        required
                      />
                    </div>
                    <Button variant="outline" size="sm" type="button">
                      <MapPin className="w-4 h-4 mr-2" />
                      Pin on Map
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide detailed information about the issue, including any safety concerns"
                      className="min-h-[100px]"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground mb-2">Upload photos to help us understand the issue</p>
                      <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        id="photo-upload"
                      />
                      <Label htmlFor="photo-upload" className="cursor-pointer">
                        <Button variant="outline" type="button" asChild>
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Choose Photos
                          </span>
                        </Button>
                      </Label>
                    </div>
                    {photos.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {photos.map((photo, index) => (
                          <Badge key={index} variant="secondary">
                            {photo.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button type="submit" variant="municipal" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;