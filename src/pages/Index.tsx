import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, UserPlus, Download, Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Employee Onboarding Portal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your employee onboarding process with our simple three-step workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-medium border-0 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Send Invitations</CardTitle>
              <CardDescription>
                Send email invitations to new employees to join your company
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/invite">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Send Invite
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Employee Signup</CardTitle>
              <CardDescription>
                New employees can create their accounts and join the team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/signup">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Sign Up
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Download App</CardTitle>
              <CardDescription>
                Download the native macOS application to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/download">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Download macOS App
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
