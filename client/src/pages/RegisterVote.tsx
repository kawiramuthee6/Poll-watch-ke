import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle2, MapPin, Calendar, IdCard, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Nav from "@/components/Nav";

const RegisterVote = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Voter Registration Hub</h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to register and vote in Kenya's 2027 General Elections
              </p>
            </div>

            {/* Timeline Alert */}
            <Card className="mb-8 border-2 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Registration Timeline</h3>
                    <p className="text-muted-foreground mb-3">
                      The last Continuous Voter Registration (CVR) period ended on <strong>October 28, 2025</strong>. 
                      The next CVR window opens in <strong>Q1 2026</strong>.
                    </p>
                    <p className="text-foreground font-medium">
                      Kenya's 2027 General Elections: <strong className="text-secondary">August 10, 2027</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Check */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Am I Eligible to Register?</CardTitle>
                <CardDescription>Check if you meet the requirements under Article 83 of the Constitution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Age Requirement</p>
                      <p className="text-sm text-muted-foreground">You must be 18 years or older by August 10, 2027</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Kenyan Citizenship</p>
                      <p className="text-sm text-muted-foreground">Valid Kenyan National ID or Passport required</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Sound Mind</p>
                      <p className="text-sm text-muted-foreground">Of sound mind as per legal requirements</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">No Election Offenses</p>
                      <p className="text-sm text-muted-foreground">Not convicted of an election offense in the past 5 years</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step-by-Step Guide */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">How to Register: Step-by-Step</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Find Your Registration Center</h4>
                      <p className="text-muted-foreground mb-3">
                        Locate the nearest IEBC registration center in your constituency. There are centers across all 290 constituencies in Kenya.
                      </p>
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="https://www.iebc.or.ke/registration-centres/" target="_blank" rel="noopener noreferrer">
                          <MapPin className="h-4 w-4" />
                          Find Centers on IEBC Website
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Prepare Required Documents</h4>
                      <div className="bg-muted/50 p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2 flex items-center gap-2">
                          <IdCard className="h-5 w-5" />
                          What to Bring:
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Original Kenyan National ID or Passport (no copies accepted)</li>
                          <li>• No registration fees - the process is completely FREE</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Visit the Center During CVR Period</h4>
                      <p className="text-muted-foreground mb-2">
                        Registration centers typically operate from 8:00 AM to 5:00 PM during CVR periods. The process takes approximately 10-15 minutes.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Fill out the registration form with assistance from IEBC staff</li>
                        <li>• Provide biometric data (fingerprints, photo, iris scan)</li>
                        <li>• Receive acknowledgment slip (not required for voting, but keep for records)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Verify Your Registration</h4>
                      <p className="text-muted-foreground mb-3">
                        After registering, verify your details online and check your assigned polling station.
                      </p>
                      <Button className="gap-2" asChild>
                        <a href="https://www.iebc.or.ke/voter-verification/" target="_blank" rel="noopener noreferrer">
                          <CheckCircle2 className="h-4 w-4" />
                          Verify Registration Status
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can I register twice or at multiple centers?</AccordionTrigger>
                    <AccordionContent>
                      No. Registering twice is a criminal offense punishable by up to KSh 100,000 fine or 1 year imprisonment. 
                      The biometric system prevents duplicate registrations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What if I've lost my ID?</AccordionTrigger>
                    <AccordionContent>
                      You must obtain a new ID from Huduma Centers via eCitizen before registering. 
                      Passport holders can use their valid Kenyan passport instead.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I change my polling station?</AccordionTrigger>
                    <AccordionContent>
                      Yes. During CVR periods, you can transfer your registration to a new polling station by visiting 
                      an IEBC center with your ID. This is useful if you've moved residences.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is there a deadline to register before 2027 elections?</AccordionTrigger>
                    <AccordionContent>
                      Yes. The final CVR period will likely close in mid-2027 (exact date TBA). Register early during 
                      Q1 2026 to avoid last-minute rushes. The voter register closes months before the August 10, 2027 election.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Do I need the acknowledgment slip to vote?</AccordionTrigger>
                    <AccordionContent>
                      No. Your ID/Passport is sufficient for voting. The slip is just a receipt confirming you registered. 
                      However, keep it as proof until you verify your registration online.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Official IEBC Resources</CardTitle>
                <CardDescription>Access official election commission tools and information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://www.iebc.or.ke/registration/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    IEBC Voter Registration Portal
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://www.iebc.or.ke/registration-centres/" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Find Registration Centers
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://www.iebc.or.ke/voter-verification/" target="_blank" rel="noopener noreferrer">
                    <CheckCircle2 className="h-4 w-4" />
                    Verify Your Registration
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://www.iebc.or.ke" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    IEBC Homepage
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterVote;
