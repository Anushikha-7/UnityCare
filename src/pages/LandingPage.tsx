import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Users, Zap, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-emergency.jpg";

export const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Instant Response",
      description: "Get help within minutes through our real-time volunteer network"
    },
    {
      icon: Shield,
      title: "Verified Volunteers",
      description: "Background-checked and trained emergency responders"
    },
    {
      icon: MapPin,
      title: "Location-Based Matching",
      description: "Connects you with the nearest available volunteers"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Powered by neighbors helping neighbors in crisis"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Verified Volunteers" },
    { value: "50,000+", label: "Lives Helped" },
    { value: "2.8 min", label: "Average Response Time" },
    { value: "99.7%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">RescueConnect</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/select-user-type')}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Emergency Response Platform
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Help is
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    {" "}Always{" "}
                  </span>
                  Near
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect instantly with verified volunteers in your area during emergencies. 
                  Real-time location sharing, AI-powered matching, and immediate response when you need it most.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 shadow-lg"
                  onClick={() => navigate('/emergency-dashboard')}
                >
                  Emergency SOS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  onClick={() => navigate('/volunteer-dashboard')}
                >
                  Become a Volunteer
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
              <img 
                src={heroImage}
                alt="Emergency response volunteers helping people"
                className="relative z-10 rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform connects people in crisis with trained volunteers through intelligent matching and real-time coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Make a Difference?
              </CardTitle>
              <CardDescription className="text-lg">
                Join thousands of volunteers making their communities safer, or get the help you need when emergencies strike.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/select-user-type')}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">RescueConnect</span>
              </div>
              <p className="text-muted-foreground">
                Connecting communities through emergency response volunteering.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">How it Works</a></li>
                <li><a href="#" className="hover:text-foreground">Safety</a></li>
                <li><a href="#" className="hover:text-foreground">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emergency</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Call 911</a></li>
                <li><a href="#" className="hover:text-foreground">Crisis Resources</a></li>
                <li><a href="#" className="hover:text-foreground">Safety Tips</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RescueConnect. All rights reserved. Built for emergency response and community safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};