import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const UserTypeSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Emergency Response Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect instantly with verified volunteers in your area during emergencies.
            Choose your role to get started.
          </p>
        </div>

        {/* User Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Emergency User Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-br from-emergency-light to-transparent opacity-50" />
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Need Help
                </span>
              </div>
              <CardTitle className="text-2xl mb-2">Emergency User</CardTitle>
              <CardDescription className="text-base">
                Get immediate assistance from verified volunteers in your area during emergencies.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  One-tap SOS emergency alert
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Real-time volunteer matching
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Live location sharing with helpers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Emergency preparedness resources
                </li>
              </ul>
              <Button 
                className="w-full mt-6 group-hover:shadow-md transition-all"
                onClick={() => navigate('/emergency-signup')}
              >
                Get Emergency Help
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Volunteer Helper Card */}
          <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-br from-helper-light to-transparent opacity-50" />
            <CardHeader className="relative z-10 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  Be a Hero
                </span>
              </div>
              <CardTitle className="text-2xl mb-2">Volunteer Helper</CardTitle>
              <CardDescription className="text-base">
                Join our network of verified volunteers ready to help others in emergency situations.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Background verification process
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Emergency response training
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Flexible volunteer scheduling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Community impact tracking
                </li>
              </ul>
              <Button 
                variant="secondary"
                className="w-full mt-6 group-hover:shadow-md transition-all"
                onClick={() => navigate('/volunteer-signup')}
              >
                Become a Volunteer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access for Existing Users */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Already have an account?</p>
          <Button variant="outline" onClick={() => navigate('/login')}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};