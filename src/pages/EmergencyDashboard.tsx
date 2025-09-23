import React, { useState } from "react";
import { MapPin, Clock, Shield, Phone, AlertTriangle, Navigation, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SOSButton } from "@/components/ui/sos-button";
import { Progress } from "@/components/ui/progress";

interface VolunteerInfo {
  id: string;
  name: string;
  age: number;
  resources: string[];
  distance: number;
  eta: number;
  status: "responding" | "en_route" | "arrived";
}

export const EmergencyDashboard = () => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [volunteers, setVolunteers] = useState<VolunteerInfo[]>([]);

  const handleEmergencyTriggered = () => {
    setEmergencyActive(true);
    // Simulate volunteer response
    setTimeout(() => {
      setVolunteers([
        {
          id: "1",
          name: "Dr. Sarah Chen",
          age: 34,
          resources: ["First-Aid Kit", "Medical Supplies", "Four-Wheeler"],
          distance: 0.8,
          eta: 4,
          status: "responding"
        },
        {
          id: "2", 
          name: "Mike Rodriguez",
          age: 28,
          resources: ["Four-Wheeler", "Emergency Supplies"],
          distance: 1.2,
          eta: 6,
          status: "en_route"
        }
      ]);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "responding": return "bg-accent";
      case "en_route": return "bg-secondary";
      case "arrived": return "bg-status-active";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "responding": return "Responding";
      case "en_route": return "On the Way";
      case "arrived": return "Arrived";
      default: return "Unknown";
    }
  };

  if (!emergencyActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Emergency Dashboard</h1>
            <p className="text-muted-foreground">
              In case of emergency, press and hold the SOS button below
            </p>
          </div>

          {/* SOS Button Section */}
          <div className="flex justify-center mb-12">
            <SOSButton onEmergencyTriggered={handleEmergencyTriggered} />
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Find Nearby Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Locate hospitals, police stations, and fire departments
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Open Map
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-secondary" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Quick access to emergency services
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Contacts
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-accent" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Emergency preparedness and safety guides
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Status Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-status-active" />
                Current Status: Safe
              </CardTitle>
              <CardDescription>
                Your location is being monitored. Help is available 24/7.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Location Services: Active</span>
                <span>Network: Connected</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emergency-light to-background py-6 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Emergency Alert Header */}
        <Card className="border-primary bg-primary/5 mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-primary mr-3 animate-pulse" />
                <div>
                  <CardTitle className="text-primary">Emergency Active</CardTitle>
                  <CardDescription>Help has been requested and volunteers are responding</CardDescription>
                </div>
              </div>
              <Badge variant="destructive" className="animate-pulse">
                ACTIVE
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Request Time:</span>
                <p className="font-medium">2:34 PM</p>
              </div>
              <div>
                <span className="text-muted-foreground">Location Shared:</span>
                <p className="font-medium">Yes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responding Volunteers */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold">Volunteers Responding ({volunteers.length})</h2>
          
          {volunteers.map((volunteer) => (
            <Card key={volunteer.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{volunteer.name}</h3>
                    <p className="text-sm text-muted-foreground">Age {volunteer.age}</p>
                  </div>
                  <Badge className={getStatusColor(volunteer.status)}>
                    {getStatusText(volunteer.status)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{volunteer.distance} km away</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">ETA: {volunteer.eta} minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="h-4 w-4 mr-2 text-muted-foreground" />
                    <Button variant="outline" size="sm">
                      Track Location
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Available Resources:</p>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.resources.map((resource, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{volunteer.status === "arrived" ? "100%" : volunteer.status === "en_route" ? "60%" : "20%"}</span>
                  </div>
                  <Progress 
                    value={volunteer.status === "arrived" ? 100 : volunteer.status === "en_route" ? 60 : 20} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Actions</CardTitle>
            <CardDescription>Additional help and communication options</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="destructive" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call 911
            </Button>
            <Button variant="outline" size="sm">
              Cancel Request
            </Button>
            <Button variant="outline" size="sm">
              Share Updates
            </Button>
            <Button variant="outline" size="sm">
              View on Map
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};