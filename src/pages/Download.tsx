import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download as DownloadIcon, Apple, Check, Monitor } from "lucide-react";

const Download = () => {
  const handleDownload = () => {
    // Here you would implement the actual download logic
    // For now, we'll simulate it
    console.log("Download started for macOS application");
    
    // Create a temporary download link (replace with actual app download)
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual download URL
    link.download = 'CompanyApp-macOS.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    "Native macOS performance",
    "Seamless integration with macOS features",
    "Automatic updates",
    "Enhanced security",
    "Offline capabilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
            <Apple className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to the Team!</h1>
          <p className="text-muted-foreground">Download our macOS application to get started</p>
        </div>

        <Card className="shadow-medium border-0">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              macOS Application
            </CardTitle>
            <CardDescription>
              Our native macOS app is optimized for the best experience on your Mac
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              <h3 className="font-semibold text-foreground mb-2">What's included:</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium text-foreground">System Requirements</p>
                  <p className="text-sm text-muted-foreground">macOS 11.0 or later</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">Version 2.1.0</p>
                  <p className="text-sm text-muted-foreground">Latest release</p>
                </div>
              </div>
              
              <Button 
                onClick={handleDownload}
                className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download for macOS
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                By downloading, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Download;