import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Eye, MapPin, Shield, Users, Vote } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Nav from "@/components/Nav";
import kenyaHero from "@/assets/kenya-hero.jpg";

const Index = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden mt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${kenyaHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Eyes on the Ballot
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-light">
            Report. Watch. Vote.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Empowering Kenyan youth to monitor elections in real-time, ensuring transparency 
            and accountability for Kenya's 2027 General Elections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
              <Link to="/monitor">
                <Eye className="mr-2 h-5 w-5" />
                Start Monitoring
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
              <Link to="/register-vote">
                <Vote className="mr-2 h-5 w-5" />
                How to Register to Vote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What is PollWatch KE?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A mobile-first election monitoring platform designed to restore trust in Kenya's electoral process 
              through real-time citizen reporting and transparent data visualization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Reporting</h3>
                <p className="text-muted-foreground">
                  Anonymously report polling issues with photos, GPS tags, and real-time updates. 
                  Your voice matters in protecting democracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Heatmaps</h3>
                <p className="text-muted-foreground">
                  Visualize election issues across all 290 constituencies in real-time. 
                  Track violence, intimidation, and tech failures as they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Youth-Led Monitoring</h3>
                <p className="text-muted-foreground">
                  Join 1M+ Gen Z voters in creating the most transparent election in Kenya's history. 
                  Earn observer badges and make your mark.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Why PollWatch KE Matters</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Kenya's 2022 elections saw youth voter turnout plummet to just <span className="font-semibold text-foreground">39.8%</span>, 
                driven by widespread distrust in the electoral process. Tech glitches with KIEMS kits, allegations 
                of intimidation, and lack of real-time transparency left an entire generation disillusioned.
              </p>

              <p className="text-muted-foreground">
                PollWatch KE changes this. By putting the power of monitoring directly into the hands of citizens, 
                we're creating an unprecedented level of transparency for Kenya's 2027 General Elections. 
                Every report you submit helps prevent disputes, holds officials accountable, and proves that 
                our democracy works.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Our Impact Goals for 2027
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">1 Million Reports:</strong> Comprehensive coverage across all polling stations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">20% Turnout Increase:</strong> Restore youth confidence in elections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Zero Disputed Results:</strong> Transparent data for credible outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong className="text-foreground">Real-Time Accountability:</strong> Instant alerts to IEBC and election observers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voter Registration CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <Vote className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Registered Voter</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto opacity-95">
            You can't watch the polls if you're not on the roll. Registration is <strong>FREE</strong> and 
            takes just minutes at any IEBC registration center across Kenya's 290 constituencies.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            The next Continuous Voter Registration (CVR) period begins in Q1 2026. Don't miss your chance 
            to shape Kenya's future in the 2027 General Elections on <strong>August 10, 2027</strong>.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold mb-4">Quick Registration Checklist:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Age Requirement</p>
                  <p className="text-sm opacity-90">18 years or older by election day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Valid ID</p>
                  <p className="text-sm opacity-90">Kenyan ID or Passport (original)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Free Process</p>
                  <p className="text-sm opacity-90">No fees required - it's your right!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Find Your Center</p>
                  <p className="text-sm opacity-90">Check IEBC website for locations</p>
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            <Link to="/register-vote">
              <Vote className="mr-2 h-5 w-5" />
              Learn How to Register
            </Link>
          </Button>
          
          <p className="mt-6 text-sm opacity-80">
            Visit our comprehensive voter registration guide for step-by-step instructions, 
            FAQs, and links to IEBC resources.
          </p>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make History?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the movement to create Kenya's most transparent election. Whether you're monitoring polls, 
            registering to vote, or spreading awareness, every action counts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Link to="/register">
                Create Account
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Note: Access to monitoring features and voter registration guides requires a free account. 
            Your data is secure and anonymous reporting is always protected.
          </p>
        </div>
      </section>
      {/* Support Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help us build Kenya's most transparent election monitoring platform. Your donation supports technology development, youth training, and real-time election coverage.
          </p>

          <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Donate Now</h3>
            <div className="space-y-4 text-left">
              <div>
                <p className="font-semibold text-primary">M-Pesa</p>
                <p className="text-sm text-muted-foreground">Phone: 0707243053</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Equity Bank</p>
                <p className="text-sm text-muted-foreground">Paybill: 247247</p>
                <p className="text-sm text-muted-foreground">Account: 1040179988034</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kenya-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-bold">PollWatch KE</span>
              </div>
              <p className="text-sm text-white/70">
                Empowering citizens to monitor Kenya's elections with transparency and accountability.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/monitor" className="hover:text-white transition-colors">Monitor Polls</Link></li>
                <li><Link to="/register-vote" className="hover:text-white transition-colors">Register to Vote</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="https://www.iebc.or.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IEBC Website</a></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Email: info@pollwatch.ke</li>
                <li>Phone: +254 700 000 000</li>
                <li>Twitter: @PollWatchKE</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
            <p>&copy; 2025 PollWatch KE. Building towards Kenya's 2027 General Elections. All rights reserved.</p>
            <p className="mt-2">Contributing to SDG 16: Peace, Justice and Strong Institutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
