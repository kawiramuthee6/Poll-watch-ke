import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
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
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about PollWatch KE
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What is PollWatch KE?</AccordionTrigger>
                <AccordionContent>
                  PollWatch KE is a citizen-powered election monitoring platform for Kenya's 2027 General Elections. 
                  It allows voters to report polling incidents (violence, tech failures, irregularities) in real-time 
                  via mobile app, creating transparent heatmaps and alerts to ensure credible elections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Is PollWatch KE affiliated with any political party?</AccordionTrigger>
                <AccordionContent>
                  No. PollWatch KE is 100% non-partisan and independent. We monitor the electoral process itself, 
                  not individual candidates or parties. Our goal is transparent elections, not political advocacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">How do I report an incident?</AccordionTrigger>
                <AccordionContent>
                  Create a free account, then visit the "Monitor Polls" page. Select the incident type (e.g., violence, 
                  bribery, tech failure), add your location, describe what you witnessed, and optionally upload photos/videos. 
                  You can submit anonymously if needed. Reports are verified before publishing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Is my identity protected when reporting?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can submit reports anonymously. Only verified election observers and IEBC officials have 
                  access to reporter details (for verification purposes). Your public profile shows only your observer 
                  badge level, not personal information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What happens after I submit a report?</AccordionTrigger>
                <AccordionContent>
                  Your report is processed by our AI verification system, then added to the public heatmap. Urgent incidents 
                  trigger instant alerts to IEBC, police, and election observers. You'll receive updates on your report's 
                  status (e.g., "Under investigation," "Resolved"). All verified reports contribute to our post-election 
                  Trust Scorecards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I use PollWatch KE if I'm not registered to vote?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can monitor elections regardless of your voter registration status. However, we strongly encourage 
                  all eligible citizens to register—visit our "Register to Vote" page for step-by-step guidance. Only 
                  registered voters can participate in the actual election.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Does PollWatch KE work without internet?</AccordionTrigger>
                <AccordionContent>
                  Partially. You can dial our USSD shortcode (*123#) to submit basic text reports via 2G networks. 
                  For full features (photo uploads, heatmaps), you'll need internet. The app is optimized for slow 
                  connections common in rural Kenya.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">How does PollWatch KE prevent fake reports?</AccordionTrigger>
                <AccordionContent>
                  We use multiple verification layers: AI sentiment analysis flags suspicious patterns, GPS data confirms 
                  location, and duplicate reports are cross-checked. Users who submit false reports repeatedly are flagged 
                  and may be suspended. IEBC and partner organizations also manually verify critical incidents.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Is PollWatch KE free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, 100% free for all citizens. We're funded by grants from organizations supporting transparent elections 
                  (e.g., EU Spotlight Initiative). We'll never charge for monitoring or voter registration guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What's an observer badge, and how do I earn one?</AccordionTrigger>
                <AccordionContent>
                  Observer badges recognize active monitors. You earn badges by submitting verified reports, with higher 
                  levels unlocking perks like priority alerts for your constituency. Levels range from "Bronze Observer" 
                  (5 reports) to "Gold Observer" (50+ reports). Badges are displayed on your profile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I report issues before election day?</AccordionTrigger>
                <AccordionContent>
                  Yes! PollWatch KE also monitors by-elections and CVR (voter registration) periods. For example, you can 
                  report long queues at registration centers or missing materials during November 2025 by-elections. 
                  This helps us stress-test the system before 2027.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">How does PollWatch KE use my data?</AccordionTrigger>
                <AccordionContent>
                  We only collect data necessary for monitoring (e.g., incident descriptions, GPS coordinates). Your personal 
                  information (name, email) is never shared publicly. Aggregate data (e.g., "92% of stations had no issues") 
                  is published in post-election reports. See our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What if I witness violence at a polling station?</AccordionTrigger>
                <AccordionContent>
                  <strong>Your safety comes first.</strong> Do not engage—leave the area and call emergency services 
                  (999 or 112). Then, submit a report via PollWatch KE from a safe location. Our system auto-escalates 
                  violence reports to police and Amnesty Kenya hotlines. Include as many details as possible (location, 
                  time, description).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I delete my account?</AccordionTrigger>
                <AccordionContent>
                  Yes. Go to Settings → Account → Delete Account. Your personal data will be erased, but your anonymous 
                  reports remain in the public database (as they're part of the historical election record). You can 
                  also export your data before deletion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Who can I contact for help?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p><strong>Technical Support:</strong> support@pollwatch.ke</p>
                    <p><strong>Media Inquiries:</strong> media@pollwatch.ke</p>
                    <p><strong>Partnership Opportunities:</strong> partnerships@pollwatch.ke</p>
                    <p><strong>Emergency Hotline (Election Day):</strong> +254 700 000 000</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      For urgent IEBC matters, contact IEBC directly: 0800 720 720
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center bg-muted/50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                We're here to help! Reach out to our support team or explore our other resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:support@pollwatch.ke">Contact Support</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
