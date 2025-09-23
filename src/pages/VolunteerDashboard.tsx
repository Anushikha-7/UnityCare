import React, { useState } from "react";
import { 
  Shield, 
  Clock, 
  MapPin, 
  Heart, 
  Settings, 
  Bell, 
  CheckCircle, 
  AlertCircle,
  Car,
  Stethoscope,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmergencyRequest {
  id: string;
  type: "medical" | "general" | "evacuation";
  distance: number;
  urgency: "high" | "medium" | "low";
  requestTime: string;
  location: string;
}

export const VolunteerDashboard = () => {
  const [isOnStandby, setIsOnStandby] = useState(false);
  const [resources, setResources] = useState<string[]>(["First-Aid Kit"]);
  const [customResource, setCustomResource] = useState("");
  const [pendingRequests, setPendingRequests] = useState<EmergencyRequest[]>([
    {
      id: "1",
      type: "medical",
      distance: 0.8,
      urgency: "high",
      requestTime: "2 min ago",
      location: "Downtown Area"
    }
  ]);

  const availableResources = [
    { value: "four-wheeler", label: "Four-Wheeler", icon: Car },
    { value: "first-aid", label: "First-Aid Kit", icon: Stethoscope },
    { value: "medical-supplies", label: "Medical Supplies", icon: Package },
  ];

  const addResource = (resource: string) => {
    if (resource && !resources.includes(resource)) {
      setResources([...resources, resource]);
    }
  };

  const removeResource = (resource: string) => {
    setResources(resources.filter(r => r !== resource));
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "medical": return Stethoscope;
      case "evacuation": return Car;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-helper-light/20 py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Volunteer Dashboard</h1>
            <p className="text-muted-foreground">Ready to help others in emergency situations</p>
          </div>
          
          {/* Status Toggle */}
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Label htmlFor="standby-mode" className="text-sm font-medium">
              Standby Mode
            </Label>
            <Switch 
              id="standby-mode"
              checked={isOnStandby}
              onCheckedChange={setIsOnStandby}
            />
            <Badge 
              variant={isOnStandby ? "default" : "secondary"}
              className={isOnStandby ? "bg-status-active" : ""}
            >
              {isOnStandby ? "Active" : "Offline"}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Resources */}
          <div className="lg:col-span-1 space-y-6">
            {/* Volunteer Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-secondary" />
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Verified Volunteer</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Missions:</span>
                    <p className="font-semibold">24</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Rating:</span>
                    <p className="font-semibold">4.9/5</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Response Time:</span>
                    <p className="font-semibold">3.2 min</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <p className="font-semibold text-status-active">Certified</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Resource Declaration */}
            <Card>
              <CardHeader>
                <CardTitle>Available Resources</CardTitle>
                <CardDescription>
                  Declare what resources you can provide during emergencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Available Resources */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Standard Resources</Label>
                  <Select onValueChange={(value) => addResource(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Add a resource" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableResources.map((resource) => (
                        <SelectItem key={resource.value} value={resource.label}>
                          <div className="flex items-center">
                            <resource.icon className="h-4 w-4 mr-2" />
                            {resource.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Resource */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Custom Resource</Label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Other resources..."
                      value={customResource}
                      onChange={(e) => setCustomResource(e.target.value)}
                    />
                    <Button 
                      size="sm" 
                      onClick={() => {
                        addResource(customResource);
                        setCustomResource("");
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>

                {/* Current Resources */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Your Resources</Label>
                  <div className="flex flex-wrap gap-2">
                    {resources.map((resource, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="cursor-pointer hover:bg-destructive hover:text-white transition-colors"
                        onClick={() => removeResource(resource)}
                      >
                        {resource} ×
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training Hub */}
            <Card>
              <CardHeader>
                <CardTitle>Training Hub</CardTitle>
                <CardDescription>Complete training modules to improve your response</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-status-active" />
                    <span className="text-sm font-medium">CPR Training</span>
                  </div>
                  <Badge variant="secondary">Completed</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-status-standby" />
                    <span className="text-sm font-medium">First Aid Basics</span>
                  </div>
                  <Button size="sm" variant="outline">Start</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-status-standby" />
                    <span className="text-sm font-medium">Emergency Response</span>
                  </div>
                  <Button size="sm" variant="outline">Start</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Requests & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pending Emergency Requests */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-accent" />
                    Emergency Requests ({pendingRequests.length})
                  </CardTitle>
                  {pendingRequests.length > 0 && (
                    <Badge variant="destructive" className="animate-pulse">
                      {pendingRequests.length} New
                    </Badge>
                  )}
                </div>
                <CardDescription>
                  {isOnStandby 
                    ? "You will receive notifications for emergencies in your area"
                    : "Turn on standby mode to receive emergency requests"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isOnStandby ? (
                  pendingRequests.length > 0 ? (
                    <div className="space-y-4">
                      {pendingRequests.map((request) => {
                        const TypeIcon = getTypeIcon(request.type);
                        return (
                          <Card key={request.id} className="border-primary/20">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                  <TypeIcon className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="font-semibold capitalize">{request.type} Emergency</p>
                                    <p className="text-sm text-muted-foreground">{request.location}</p>
                                  </div>
                                </div>
                                <Badge variant={getUrgencyColor(request.urgency)}>
                                  {request.urgency.toUpperCase()}
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{request.distance} km away</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{request.requestTime}</span>
                                </div>
                              </div>

                              <div className="flex space-x-3">
                                <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                                  Accept Mission
                                </Button>
                                <Button size="sm" variant="outline">
                                  View Details
                                </Button>
                                <Button size="sm" variant="outline">
                                  Decline
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-status-active mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">All Clear</p>
                      <p className="text-muted-foreground">No emergency requests at the moment</p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-8">
                    <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Standby Mode Disabled</p>
                    <p className="text-muted-foreground">Enable standby mode to receive emergency requests</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your volunteer mission history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-status-active" />
                      <div>
                        <p className="text-sm font-medium">Medical Emergency Response</p>
                        <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM - Completed</p>
                      </div>
                    </div>
                    <Badge variant="secondary">+5 pts</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-status-active" />
                      <div>
                        <p className="text-sm font-medium">Emergency Transport</p>
                        <p className="text-xs text-muted-foreground">3 days ago - Completed</p>
                      </div>
                    </div>
                    <Badge variant="secondary">+8 pts</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-status-active" />
                      <div>
                        <p className="text-sm font-medium">First Aid Response</p>
                        <p className="text-xs text-muted-foreground">1 week ago - Completed</p>
                      </div>
                    </div>
                    <Badge variant="secondary">+3 pts</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};