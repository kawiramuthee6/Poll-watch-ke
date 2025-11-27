import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">PollWatch KE</span>
          </Link>
          
          <Button variant="outline" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About PollWatch KE</h1>
              <p className="text-xl text-muted-foreground">
                Empowering citizens to build Kenya's most transparent election
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To restore trust in Kenya's electoral process by providing citizens with tools to monitor, 
                    report, and verify election integrity in real-time, ensuring every vote counts and every 
                    voice is heard.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                  <p className="text-muted-foreground">
                    A Kenya where elections are transparent, disputes are prevented through real-time monitoring, 
                    and youth participation drives democratic accountability—making the 2027 General Elections 
                    the most credible in our nation's history.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* The Problem */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Why PollWatch KE Exists</h2>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Kenya's 2022 General Elections exposed critical flaws in our electoral system. Youth voter 
                      turnout collapsed to just <strong className="text-foreground">39.8%</strong>, driven by widespread 
                      distrust in the process. KIEMS kit failures, allegations of intimidation, and lack of 
                      real-time transparency left millions disillusioned.
                    </p>
                    <p>
                      Traditional election monitoring relied on limited official observers who couldn't cover all 
                      46,229 polling stations. By the time issues were reported, it was too late to intervene. 
                      Disputes escalated because there was no unified, citizen-verified record of what actually 
                      happened on the ground.
                    </p>
                    <p className="text-foreground font-medium">
                      PollWatch KE changes this by turning every Kenyan citizen into an election monitor, 
                      creating unprecedented transparency through crowdsourced, real-time reporting.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">How PollWatch KE Works</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Citizen Reporting</h3>
                      <p className="text-muted-foreground">
                        Voters at polling stations report incidents (violence, tech failures, bribery) via our 
                        mobile app with photos, GPS tags, and descriptions. Reports can be anonymous to protect 
                        whistleblowers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">AI-Powered Verification</h3>
                      <p className="text-muted-foreground">
                        Our AI bot cross-checks reports for consistency, flags duplicates, and prioritizes urgent 
                        incidents. Sentiment analysis detects potential hotspots before violence escalates.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Live Heatmaps & Alerts</h3>
                      <p className="text-muted-foreground">
                        Public-facing heatmaps show incident clusters by ward and constituency. IEBC, police, and 
                        election observers receive instant alerts to respond before issues worsen.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Post-Election Accountability</h3>
                      <p className="text-muted-foreground">
                        After polls close, we generate "Trust Scorecards" showing which constituencies had the most 
                        issues. These PDF reports are shared with media, IEBC, and civil society to pressure reforms.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                    <p className="text-sm text-muted-foreground">
                      All data is public, verifiable, and accessible to every Kenyan
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                    <p className="text-sm text-muted-foreground">
                      Built for Gen Z with Swahili/Sheng support and USSD for 2G networks
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Non-Partisan</h3>
                    <p className="text-sm text-muted-foreground">
                      We monitor elections, not politicians—serving all Kenyans equally
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Impact Goals */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">2027 Impact Goals</h2>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg">1 Million Reports</p>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive coverage across all 46,229 polling stations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg">20% Turnout Increase</p>
                        <p className="text-sm text-muted-foreground">
                          Lift youth voter participation from 39.8% to 60%+
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg">Zero Disputed Results</p>
                        <p className="text-sm text-muted-foreground">
                          Transparent data prevents post-election violence
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg">Real-Time Accountability</p>
                        <p className="text-sm text-muted-foreground">
                          IEBC responds to 90%+ of critical alerts within 1 hour
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* SDG Alignment */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">UN Sustainable Development Goals</h2>
              <Card className="border-2">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">
                    PollWatch KE directly contributes to Kenya's progress on global development goals:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                        16
                      </div>
                      <div>
                        <p className="font-semibold">Peace, Justice & Strong Institutions</p>
                        <p className="text-sm text-muted-foreground">
                          Targets 16.6 (transparent institutions) and 16.7 (inclusive decision-making)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                        11
                      </div>
                      <div>
                        <p className="font-semibold">Sustainable Cities & Communities</p>
                        <p className="text-sm text-muted-foreground">
                          Target 11.7 (safe, inclusive public spaces) by preventing election violence
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Be Part of the Movement</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of Kenyans building a transparent democracy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/register">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/monitor">Start Monitoring</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
