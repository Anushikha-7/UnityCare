import React, { useState } from "react";
import { AlertTriangle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SOSButtonProps {
  onEmergencyTriggered?: () => void;
  className?: string;
}

export const SOSButton: React.FC<SOSButtonProps> = ({ 
  onEmergencyTriggered, 
  className 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handlePress = () => {
    setIsPressed(true);
    setCountdown(3);

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          if (prev === 1) {
            triggerEmergency();
          }
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    // Auto-release after 5 seconds if not manually released
    setTimeout(() => {
      setIsPressed(false);
      setCountdown(null);
      clearInterval(timer);
    }, 5000);
  };

  const handleRelease = () => {
    if (countdown !== null) {
      setIsPressed(false);
      setCountdown(null);
    }
  };

  const triggerEmergency = () => {
    setIsPressed(false);
    setCountdown(null);
    onEmergencyTriggered?.();
    
    // Here you would integrate with your emergency service API
    console.log("EMERGENCY TRIGGERED - Dispatching help...");
  };

  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      {/* Main SOS Button */}
      <div className="relative">
        <Button
          onMouseDown={handlePress}
          onMouseUp={handleRelease}
          onTouchStart={handlePress}
          onTouchEnd={handleRelease}
          size="lg"
          className={cn(
            "relative h-48 w-48 rounded-full text-3xl font-bold",
            "transition-all duration-200 transform-gpu",
            "bg-gradient-to-br from-primary to-primary/90",
            "hover:from-primary/90 hover:to-primary/80",
            "active:scale-95 focus:scale-95",
            "shadow-[0_10px_30px_-5px_hsl(var(--primary)_/_0.3)]",
            isPressed && "scale-95 shadow-[0_5px_20px_-3px_hsl(var(--primary)_/_0.6)]",
            countdown !== null && "animate-pulse"
          )}
        >
          <div className="flex flex-col items-center space-y-2">
            <AlertTriangle className="h-12 w-12" />
            <span className="text-2xl">SOS</span>
            {countdown !== null && (
              <span className="absolute -bottom-2 text-4xl font-bold">
                {countdown}
              </span>
            )}
          </div>
        </Button>

        {/* Ripple effect when pressed */}
        {isPressed && (
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
        )}
      </div>

      {/* Instructions */}
      <Card className="w-full max-w-md">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Press and hold</strong> the SOS button for 3 seconds to trigger emergency response
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Location shared</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Volunteers notified</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Actions */}
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          <Phone className="h-4 w-4 mr-2" />
          Call 911
        </Button>
        <Button variant="outline" size="sm">
          <MapPin className="h-4 w-4 mr-2" />
          Share Location
        </Button>
      </div>
    </div>
  );
};