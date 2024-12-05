"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const roles = [
    "CTO",
    "Technical Lead",
    "Product Manager",
    "Data Scientist",
    "ML Engineer",
    "Software Engineer",
    "Other",
  ];

  const agentTypes = [
    "Customer Churn Prediction",
    "Risk Scoring",
    "Compliance Monitoring",
    "Upsell/Cross-sell Prediction",
    "Engagement Scoring",
    "Customer Satisfaction Prediction",
    "Debt Collection",
    "Multiple Agents",
  ];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Demo request submitted!",
      description: "Our team will contact you shortly to schedule your demo.",
    });
    setIsLoading(false);
    (event.target as HTMLFormElement).reset();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Request a demo
              </h1>
              <ul className="space-y-4 text-lg mb-12">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  Learn more about our AI agent templates
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  Get your implementation questions answered
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-purple-600" />
                  See how our platform can streamline your workflows
                </li>
              </ul>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold">
                  Leading companies using our AI agents
                </h2>
                <div className="grid">
                  <Image
                    src="https://cdn.prod.website-files.com/614c82ed388d53640613982e/66bc561d889375519710d3d4_668bf78c50b42e9dac546bd2_multi-agent-llm.webp"
                    alt="AI Agents Collaboration"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  {/* Add more company logos here */}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <form onSubmit={onSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="workEmail">Work Email *</Label>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="your.name@company.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role">Role *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role.toLowerCase()}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 (555) 000-0000"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="agentType">
                    Which AI agent are you most interested in? *
                  </Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select agent type" />
                    </SelectTrigger>
                    <SelectContent>
                      {agentTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="useCase">Tell us about your use case</Label>
                  <Textarea
                    id="useCase"
                    placeholder="Describe your current challenges and what you hope to achieve with our AI agents"
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="dataVolume">
                    Expected monthly transaction volume
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Less than 10,000</SelectItem>
                      <SelectItem value="medium">10,000 - 100,000</SelectItem>
                      <SelectItem value="large">100,000 - 1,000,000</SelectItem>
                      <SelectItem value="enterprise">
                        More than 1,000,000
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing" className="text-sm leading-none">
                  Yes, I&apos;d like to receive marketing communications
                  regarding AI agent products, services, and events. I can
                  unsubscribe at any time.
                </Label>
              </div>

              <div className="text-sm text-muted-foreground">
                By clicking the submit button, you agree to allow us to store
                and process the information above for contact purposes. Please
                read our{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </div>
              <Link href="/">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
