import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { apiRequest } from "../lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Camera, MapPin, AlertTriangle, Send, Users, Zap } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Nav from "@/components/Nav";

const Monitor = () => {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    incidentType: "",
    location: "",
    description: "",
    coordinates: null as { lat: number; lng: number } | null,
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  // GPS Location capture
  const captureLocation = () => {
    setIsGettingLocation(true);

    if (!navigator.geolocation) {
      toast({
        title: "GPS Not Supported",
        description: "Your browser doesn't support GPS location.",
        variant: "destructive",
      });
      setIsGettingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData(prev => ({
          ...prev,
          coordinates: { lat: latitude, lng: longitude }
        }));
        setFormData(prev => ({
          ...prev,
          location: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`
        }));
        toast({
          title: "Location Captured",
          description: "GPS coordinates have been added to your report.",
        });
        setIsGettingLocation(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        let errorMessage = "Unable to get your location.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable GPS permissions.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }
        toast({
          title: "Location Error",
          description: errorMessage,
          variant: "destructive",
        });
        setIsGettingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  // File handling
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'video/mp4', 'video/mov', 'video/avi'];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive",
        });
        return false;
      }

      if (file.size > maxSize) {
        toast({
          title: "File Too Large",
          description: `${file.name} exceeds the 10MB limit.`,
          variant: "destructive",
        });
        return false;
      }

      return true;
    });

    if (selectedFiles.length + validFiles.length > 5) {
      toast({
        title: "Too Many Files",
        description: "Maximum 5 files allowed.",
        variant: "destructive",
      });
      return;
    }

    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.incidentType || !formData.location || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (formData.description.length < 50) {
      toast({
        title: "Description Too Short",
        description: "Please provide at least 50 characters in the description.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();
      formDataToSend.append('incidentType', formData.incidentType);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('description', formData.description);

      if (formData.coordinates) {
        formDataToSend.append('coordinates', JSON.stringify(formData.coordinates));
      }

      // Add files
      selectedFiles.forEach((file, index) => {
        formDataToSend.append('evidence', file);
      });

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/incidents`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Report Submitted",
          description: "Your incident report has been submitted successfully.",
        });
        // Reset form
        setFormData({
          incidentType: "",
          location: "",
          description: "",
          coordinates: null,
        });
        setSelectedFiles([]);
      } else {
        const error = await response.json();
        toast({
          title: "Submission Failed",
          description: error.msg || "Failed to submit report. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Election Monitoring</h1>
              <p className="text-xl text-muted-foreground">
                Report incidents in real-time to ensure transparent and fair elections
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Reporting Form */}
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Submit an Incident Report</CardTitle>
                    <CardDescription>
                      Your authenticated report helps maintain election integrity. All submissions are verified before publishing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="incidentType">Incident Type *</Label>
                        <Select
                          value={formData.incidentType}
                          onValueChange={(value) => setFormData({ ...formData, incidentType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select incident category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="violence">Violence / Intimidation</SelectItem>
                            <SelectItem value="bribery">Vote Buying / Bribery</SelectItem>
                            <SelectItem value="tech-failure">KIEMS Kit / Tech Failure</SelectItem>
                            <SelectItem value="long-queues">Excessive Queues / Delays</SelectItem>
                            <SelectItem value="missing-materials">Missing Materials</SelectItem>
                            <SelectItem value="agent-issues">Party Agent Issues</SelectItem>
                            <SelectItem value="irregularities">Procedural Irregularities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <div className="flex gap-2">
                          <Input
                            id="location"
                            placeholder="Polling station name or constituency"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={captureLocation}
                            disabled={isGettingLocation}
                          >
                            <MapPin className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Click the map pin to capture GPS coordinates automatically
                        </p>
                        {formData.coordinates && (
                          <p className="text-xs text-green-600">
                            ✓ Location captured: {formData.coordinates.lat.toFixed(6)}, {formData.coordinates.lng.toFixed(6)}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Incident Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe what you witnessed. Be specific: What happened? When? Who was involved? Estimated number of people affected?"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={6}
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Minimum 50 characters. Provide factual, objective details.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Evidence (Optional)</Label>
                        <div
                          className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                          onClick={() => document.getElementById('file-input')?.click()}
                        >
                          <Camera className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                          <p className="text-sm font-medium mb-1">Upload Photos or Videos</p>
                          <p className="text-xs text-muted-foreground">
                            Click to browse or drag and drop. Max 10MB per file, up to 5 files.
                          </p>
                        </div>
                        <input
                          id="file-input"
                          type="file"
                          multiple
                          accept="image/*,video/*"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        {selectedFiles.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Selected Files:</p>
                            {selectedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                                <div className="flex items-center gap-2">
                                  {file.type.startsWith('image/') ? (
                                    <Camera className="h-4 w-4" />
                                  ) : (
                                    <Send className="h-4 w-4" />
                                  )}
                                  <span className="text-sm">{file.name}</span>
                                  <span className="text-xs text-muted-foreground">
                                    ({(file.size / 1024 / 1024).toFixed(1)}MB)
                                  </span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                  className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                                >
                                  ×
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>


                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? "Submitting..." : "Submit Report"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Your account is linked to all reports. False reports may be flagged and could result in account suspension.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Today's Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">2,847</p>
                        <p className="text-xs text-muted-foreground">Total Reports</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">15,429</p>
                        <p className="text-xs text-muted-foreground">Active Monitors</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Zap className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">92%</p>
                        <p className="text-xs text-muted-foreground">Stations Covered</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Issues Today</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">KIEMS Kit Failures</span>
                      <span className="text-sm font-semibold text-secondary">847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Long Queues</span>
                      <span className="text-sm font-semibold text-secondary">623</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Missing Materials</span>
                      <span className="text-sm font-semibold text-secondary">412</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Intimidation</span>
                      <span className="text-sm font-semibold text-secondary">189</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Emergency Contacts</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>IEBC Hotline:</strong> 0800 720 720</p>
                      <p><strong>Police Emergency:</strong> 999 / 112</p>
                      <p><strong>Amnesty Kenya:</strong> +254 700 000 000</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
