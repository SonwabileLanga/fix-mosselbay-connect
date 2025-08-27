import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, MapPin } from "lucide-react";

const SimpleDashboard = () => {
  const recentIssues = [
    {
      id: "#156",
      title: "Pothole on Main Road",
      location: "Main Road & Church Street",
      status: "We're fixing it now",
      icon: "🕳️",
      color: "status-in-progress",
      timeAgo: "2 hours ago"
    },
    {
      id: "#155",
      title: "Water leak at Santos Beach",
      location: "Santos Beach Promenade",
      status: "We received your report",
      icon: "💧",
      color: "status-pending",
      timeAgo: "4 hours ago"
    },
    {
      id: "#154",
      title: "Broken streetlight",
      location: "Beach Road",
      status: "✅ Fixed!",
      icon: "💡",
      color: "status-resolved",
      timeAgo: "Yesterday"
    }
  ];

  const getStatusIcon = (status: string) => {
    if (status.includes("Fixed")) return <CheckCircle className="w-5 h-5 text-accent" />;
    if (status.includes("fixing")) return <Clock className="w-5 h-5 text-secondary" />;
    return <AlertCircle className="w-5 h-5 text-primary" />;
  };

  return (
    <section id="dashboard" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How We're Doing
          </h2>
          <p className="text-2xl text-muted-foreground">
            See what problems we've been fixing in Mossel Bay
          </p>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-6xl font-bold text-primary mb-4">1,247</div>
              <div className="text-2xl font-semibold text-foreground mb-2">Problems Fixed</div>
              <div className="text-lg text-muted-foreground">This year in Mossel Bay</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardContent className="pt-6">
              <div className="text-6xl font-bold text-secondary mb-4">24hrs</div>
              <div className="text-2xl font-semibold text-foreground mb-2">Average Fix Time</div>
              <div className="text-lg text-muted-foreground">We work fast!</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="text-6xl font-bold text-accent mb-4">98%</div>
              <div className="text-2xl font-semibold text-foreground mb-2">Happy Residents</div>
              <div className="text-lg text-muted-foreground">People are satisfied</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center py-8">
            <CardTitle className="text-3xl font-bold">Recent Reports</CardTitle>
            <CardDescription className="text-xl">
              See what problems residents have reported recently
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {recentIssues.map((issue, index) => (
                <div key={index} className="p-6 rounded-2xl border-2 border-border bg-card/60">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{issue.icon}</div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-lg text-muted-foreground">{issue.id}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-lg text-muted-foreground">{issue.timeAgo}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">{issue.title}</h4>
                        <p className="text-lg text-muted-foreground flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {issue.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(issue.status)}
                      <Badge className={`bg-${issue.color}/10 text-${issue.color} border-${issue.color}/20 text-base px-4 py-2`}>
                        {issue.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SimpleDashboard;