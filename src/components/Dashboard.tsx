import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, Clock, CheckCircle, AlertCircle, MapPin } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Reports",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
      color: "primary"
    },
    {
      title: "Resolved Issues",
      value: "1,158",
      change: "+8%",
      trend: "up",
      icon: CheckCircle,
      color: "accent"
    },
    {
      title: "Avg Response Time",
      value: "18h",
      change: "-15%",
      trend: "down",
      icon: Clock,
      color: "secondary"
    },
    {
      title: "Active Users",
      value: "3,421",
      change: "+23%",
      trend: "up",
      icon: Users,
      color: "primary"
    }
  ];

  const recentIssues = [
    {
      id: "#MB-2024-156",
      title: "Pothole on Main Road",
      location: "Main Road & Church Street",
      status: "in-progress",
      priority: "high",
      assignedTo: "Municipal Works Dept",
      reportedAt: "2 hours ago"
    },
    {
      id: "#MB-2024-155",
      title: "Water leak at Santos Beach",
      location: "Santos Beach Promenade",
      status: "pending",
      priority: "high",
      assignedTo: "Water & Sanitation",
      reportedAt: "4 hours ago"
    },
    {
      id: "#MB-2024-154",
      title: "Broken streetlight",
      location: "Beach Road",
      status: "resolved",
      priority: "medium",
      assignedTo: "Electrical Services",
      reportedAt: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-status-pending bg-status-pending/10";
      case "in-progress": return "text-status-in-progress bg-status-in-progress/10";
      case "resolved": return "text-status-resolved bg-status-resolved/10";
      default: return "text-muted-foreground bg-muted/10";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-status-urgent bg-status-urgent/10";
      case "medium": return "text-secondary bg-secondary/10";
      case "low": return "text-accent bg-accent/10";
      default: return "text-muted-foreground bg-muted/10";
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Municipal Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time insights into municipal service delivery and community engagement
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className={`w-4 h-4 ${stat.trend === 'up' ? 'text-accent' : 'text-status-urgent'}`} />
                        <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-accent' : 'text-status-urgent'}`}>
                          {stat.change}
                        </span>
                        <span className="text-muted-foreground text-sm">vs last month</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 bg-${stat.color}/10 rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Issues */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-secondary" />
                Recent Issues
              </CardTitle>
              <CardDescription>
                Latest municipal service requests and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentIssues.map((issue, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-sm text-muted-foreground">{issue.id}</span>
                          <Badge className={getPriorityColor(issue.priority)}>
                            {issue.priority}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-foreground">{issue.title}</h4>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {issue.location}
                        </p>
                      </div>
                      <Badge className={getStatusColor(issue.status)}>
                        {issue.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Assigned to: <span className="text-foreground font-medium">{issue.assignedTo}</span>
                      </span>
                      <span className="text-muted-foreground">{issue.reportedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  View All Issues
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resolution Progress</CardTitle>
                <CardDescription>Current month performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Potholes</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Water Issues</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Streetlights</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Waste Management</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Department Performance</CardTitle>
                <CardDescription>Average response times</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Municipal Works</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">16h</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Water & Sanitation</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">12h</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Electrical Services</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">24h</span>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Waste Management</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">8h</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
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

export default Dashboard;