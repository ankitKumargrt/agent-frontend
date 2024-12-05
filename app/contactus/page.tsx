"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsLoading(false);
    (event.target as HTMLFormElement).reset();
  }
  const extaImages = [
    {
      name: "AI Agents Collaboration",
      image:
        "https://cdn.prod.website-files.com/614c82ed388d53640613982e/66bc561d889375519710d3d4_668bf78c50b42e9dac546bd2_multi-agent-llm.webp",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-4xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                  Contact us
                </h1>
                <p className="text-muted-foreground mt-2">
                  Have questions about our AI agents? We&apos;d love to hear
                  from you. Send us a message and we&apos;ll respond as soon as
                  possible.
                </p>
              </div>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      required
                      type="email"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      required
                      className="min-h-[150px] resize-none pl-10"
                    />
                  </div>
                </div>
                <Button className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            <div className="relative hidden md:block bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <Image
                  src={extaImages[0].image}
                  alt="Contact illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 dark:to-black/20" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Need immediate assistance? Check out our</p>
          <div className="mt-2 flex justify-center gap-4">
            <Button variant="link" className="h-auto p-0">
              Help Center
            </Button>
            <Button variant="link" className="h-auto p-0">
              Documentation
            </Button>
            <Button variant="link" className="h-auto p-0">
              API Reference
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
