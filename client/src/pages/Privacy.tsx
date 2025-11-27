import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last Updated: January 2026</p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8 prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  PollWatch KE ("we," "our," or "us") is committed to protecting your privacy while enabling transparent 
                  election monitoring. This Privacy Policy explains how we collect, use, store, and share your personal 
                  information when you use our platform. By creating an account, you consent to the practices described herein.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>Account Information:</strong> Name, email address, phone number, password (encrypted)</li>
                  <li><strong>Profile Data:</strong> Optional profile photo, constituency preference, observer level</li>
                  <li><strong>Incident Reports:</strong> Descriptions of polling issues, photos/videos, location data (GPS coordinates), timestamps</li>
                  <li><strong>Communications:</strong> Messages sent via contact forms, support tickets, or feedback surveys</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>Device Data:</strong> IP address, browser type, operating system, device ID</li>
                  <li><strong>Usage Data:</strong> Pages viewed, time spent on platform, interactions with features</li>
                  <li><strong>Location Data:</strong> GPS coordinates when you submit reports (with your permission)</li>
                  <li><strong>Cookies:</strong> Session cookies for authentication, analytics cookies for performance monitoring</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>Election Monitoring:</strong> Publish verified incident reports on public heatmaps, send alerts to IEBC/observers</li>
                  <li><strong>Platform Operations:</strong> Authenticate users, prevent fraud, improve functionality</li>
                  <li><strong>Communication:</strong> Send account notifications, election alerts, newsletters (opt-in), support responses</li>
                  <li><strong>Research & Advocacy:</strong> Generate aggregate reports (e.g., "92% of stations had no issues") shared with media, civil society</li>
                  <li><strong>Legal Compliance:</strong> Respond to lawful government requests, protect rights/safety of users</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">4. Anonymous Reporting</h2>
                <p className="text-muted-foreground mb-4">
                  When you submit a report anonymously:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Your name and contact details are <strong>not displayed publicly</strong></li>
                  <li>Only verified election observers and IEBC officials can access reporter identities (for verification)</li>
                  <li>GPS data and timestamps are still recorded to validate reports</li>
                  <li>You can toggle anonymity on/off per report</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">5. Data Sharing & Disclosure</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Public Data</h3>
                <p className="text-muted-foreground mb-4">
                  The following data is public by design:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Incident descriptions, locations (ward/constituency level), timestamps</li>
                  <li>Photos/videos uploaded as evidence (faces blurred if anonymity is enabled)</li>
                  <li>Aggregate statistics (e.g., "2,847 reports in Nairobi County")</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Shared with Third Parties</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>IEBC & Election Observers:</strong> Urgent alerts for critical incidents (e.g., violence)</li>
                  <li><strong>Service Providers:</strong> Cloud hosting (AWS/Google Cloud), SMS/email providers (Africa's Talking), analytics tools (non-identifiable data)</li>
                  <li><strong>Legal Authorities:</strong> Only when required by Kenyan law (e.g., court orders)</li>
                  <li><strong>Partners:</strong> Amnesty Kenya, media outlets (aggregate data only, no personal info)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">5.3 We Never Sell Your Data</h3>
                <p className="text-muted-foreground mb-4">
                  PollWatch KE does not sell, rent, or trade your personal information to advertisers or third parties.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">6. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Encryption in transit (HTTPS/TLS) and at rest (AES-256)</li>
                  <li>Secure password hashing (bcrypt)</li>
                  <li>Regular security audits and vulnerability testing</li>
                  <li>Access controls: Only authorized personnel can view sensitive data</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  However, no system is 100% secure. If you suspect unauthorized access to your account, contact us immediately at security@pollwatch.ke.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">7. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>Active Accounts:</strong> Data retained as long as your account is active</li>
                  <li><strong>Deleted Accounts:</strong> Personal data erased within 30 days; anonymous reports remain (as historical election records)</li>
                  <li><strong>Inactive Accounts:</strong> If unused for 2+ years, we may anonymize or delete your data</li>
                  <li><strong>Legal Requirements:</strong> Some data (e.g., verified reports) retained indefinitely for transparency/audit purposes</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 mt-8">8. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Under Kenya's Data Protection Act (2019), you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong>Access:</strong> Request a copy of your data (Settings → Export Data)</li>
                  <li><strong>Correction:</strong> Update inaccurate information (Settings → Edit Profile)</li>
                  <li><strong>Deletion:</strong> Delete your account and personal data (Settings → Delete Account)</li>
                  <li><strong>Objection:</strong> Opt out of non-essential emails (Settings → Notifications)</li>
                  <li><strong>Portability:</strong> Download your data in machine-readable format (JSON/CSV)</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  To exercise these rights, email privacy@pollwatch.ke.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">9. Children's Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  PollWatch KE is intended for users 18+. We do not knowingly collect data from minors under 18. 
                  If you believe a child has created an account, contact us at privacy@pollwatch.ke.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">10. International Transfers</h2>
                <p className="text-muted-foreground mb-4">
                  Your data may be stored on servers outside Kenya (e.g., AWS/Google Cloud). We ensure such transfers 
                  comply with Kenyan data protection laws through Standard Contractual Clauses (SCCs).
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">11. Changes to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy to reflect new features or legal requirements. Changes will be posted 
                  on this page with an updated "Last Updated" date. Continued use of PollWatch KE after changes constitutes 
                  acceptance.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">12. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about this Privacy Policy or data practices:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">PollWatch KE</p>
                  <p className="text-sm text-muted-foreground">Email: privacy@pollwatch.ke</p>
                  <p className="text-sm text-muted-foreground">Phone: +254 700 000 000</p>
                  <p className="text-sm text-muted-foreground">Address: [Insert registered Kenya office address]</p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild>
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
