import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Layers, Eye } from "lucide-react";

// Mock data for demonstration
const mockIssues = [
  {
    id: 1,
    type: "pothole",
    title: "Large pothole on Main Road",
    location: "Main Road & Church Street",
    status: "in-progress",
    priority: "high",
    reportedAt: "2024-01-15",
    coordinates: { lat: -34.183, lng: 22.146 }
  },
  {
    id: 2,
    type: "water-leak",
    title: "Water pipe burst",
    location: "Santos Road",
    status: "pending",
    priority: "high",
    reportedAt: "2024-01-16",
    coordinates: { lat: -34.181, lng: 22.144 }
  },
  {
    id: 3,
    type: "streetlight",
    title: "Broken streetlight",
    location: "Beach Road",
    status: "resolved",
    priority: "medium",
    reportedAt: "2024-01-10",
    coordinates: { lat: -34.185, lng: 22.148 }
  },
];

const ServiceMap = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [mapboxToken, setMapboxToken] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "status-pending";
      case "in-progress": return "status-in-progress";
      case "resolved": return "status-resolved";
      default: return "muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pothole": return "🕳️";
      case "water-leak": return "💧";
      case "streetlight": return "💡";
      case "illegal-dumping": return "🗑️";
      case "power-outage": return "⚡";
      default: return "📝";
    }
  };

  return (
    <section id="map" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Map
          </h2>
          <p className="text-xl text-muted-foreground">
            View reported issues across Mossel Bay and track resolution progress
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters and Issue List */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Status</h4>
                  <div className="space-y-2">
                    {["all", "pending", "in-progress", "resolved"].map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedFilter(status)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedFilter === status
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="capitalize">{status.replace("-", " ")}</span>
                          <Badge variant="secondary">
                            {status === "all" ? mockIssues.length : mockIssues.filter(i => i.status === status).length}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Priority</h4>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-status-urgent border-status-urgent">High</Badge>
                    <Badge variant="outline" className="text-secondary border-secondary">Medium</Badge>
                    <Badge variant="outline" className="text-accent border-accent">Low</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockIssues.map((issue) => (
                  <div key={issue.id} className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-lg">{getTypeIcon(issue.type)}</span>
                      <Badge className={`bg-${getStatusColor(issue.status)} text-white`}>
                        {issue.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1">{issue.title}</h4>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {issue.location}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Reported: {new Date(issue.reportedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Layers className="w-5 h-5 mr-2" />
                    Interactive Map
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Toggle Heatmap
                  </Button>
                </div>
                <CardDescription>
                  Click on markers to view issue details and status updates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {/* Map Integration Notice */}
                <div className="h-full bg-muted/20 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center space-y-4 max-w-md">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      This area will display an interactive map of Mossel Bay with all reported issues, 
                      color-coded by status and priority. Municipal staff can track progress and 
                      residents can see nearby issues.
                    </p>
                    {!mapboxToken && (
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          To enable the interactive map, please enter your Mapbox token:
                        </p>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Mapbox public token"
                            value={mapboxToken}
                            onChange={(e) => setMapboxToken(e.target.value)}
                            className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
                          />
                          <Button size="sm" variant="outline">
                            Connect
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;