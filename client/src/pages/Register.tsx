import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Eye, EyeOff, CheckCircle2, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { user, register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength validation
  const validatePasswordStrength = (password: string) => {
    const requirements = {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };

    const isStrong = Object.values(requirements).every(Boolean);
    return { requirements, isStrong };
  };

  // Redirect if already signed in
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim()) return setError("Name is required.");
    if (!formData.email.trim()) return setError("Email is required.");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return setError("Please enter a valid email.");

    const { isStrong } = validatePasswordStrength(formData.password);
    if (!isStrong)
      return setError("Password must be at least 8 characters with uppercase, lowercase, number, and special character.");

    if (formData.password !== formData.confirmPassword)
      return setError("Passwords do not match.");

    setIsLoading(true);
    setError("");

    try {
      await register(formData.name, formData.email, formData.password);
      navigate("/");
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show loading while checking auth state
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Shield className="h-10 w-10 text-primary" />
          <span className="text-3xl font-bold">PollWatch KE</span>
        </Link>

        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Join PollWatch KE</CardTitle>
            <CardDescription>
              Create your account to start monitoring Kenya's elections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Kamau"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`flex items-center gap-1 ${validatePasswordStrength(formData.password).requirements.minLength ? 'text-green-600' : 'text-red-500'}`}>
                        {validatePasswordStrength(formData.password).requirements.minLength ? <CheckCircle2 className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        At least 8 characters
                      </div>
                      <div className={`flex items-center gap-1 ${validatePasswordStrength(formData.password).requirements.hasUpperCase ? 'text-green-600' : 'text-red-500'}`}>
                        {validatePasswordStrength(formData.password).requirements.hasUpperCase ? <CheckCircle2 className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        One uppercase letter
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`flex items-center gap-1 ${validatePasswordStrength(formData.password).requirements.hasNumber ? 'text-green-600' : 'text-red-500'}`}>
                        {validatePasswordStrength(formData.password).requirements.hasNumber ? <CheckCircle2 className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        One number
                      </div>
                      <div className={`flex items-center gap-1 ${validatePasswordStrength(formData.password).requirements.hasSpecialChar ? 'text-green-600' : 'text-red-500'}`}>
                        {validatePasswordStrength(formData.password).requirements.hasSpecialChar ? <CheckCircle2 className="h-3 w-3" /> : <X className="h-3 w-3" />}
                        One special character
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  By registering, you can:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                  <li>• Report polling incidents anonymously</li>
                  <li>• Track election transparency in real-time</li>
                  <li>• Earn observer badges for verified reports</li>
                  <li>• Access voter registration guides</li>
                </ul>
              </div>

              {error && (
                <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md p-3">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;