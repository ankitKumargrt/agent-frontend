"use client";

import { useState } from "react";
import { Plus, Search, ArrowRight, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const agentTemplates = [
  {
    id: 1,
    name: "Customer Churn Prediction",
    description:
      "Predicts which customers are most likely to leave based on historical and behavioral data.",
    tags: ["Machine Learning", "Customer Retention", "Data Analysis"],
    icon: "📊",
  },
  {
    id: 2,
    name: "Risk Scoring",
    description:
      "Assigns risk scores to customer accounts based on various factors, including transaction frequency, geolocation, and device history.",
    tags: ["Risk Management", "Fraud Detection", "Analytics"],
    icon: "🛡️",
  },
  {
    id: 3,
    name: "Compliance Monitoring",
    description:
      "Ensures transactions and interactions comply with company policies and regulatory requirements.",
    tags: ["Compliance", "Regulatory", "Monitoring"],
    icon: "📋",
  },
  {
    id: 4,
    name: "Upsell/Cross-sell Prediction",
    description:
      "Analyzes customer purchase history and behaviors to predict upsell or cross-sell opportunities.",
    tags: ["Sales", "Customer Analysis", "Recommendation"],
    icon: "📈",
  },
  {
    id: 5,
    name: "Engagement Scoring",
    description:
      "Scores customer engagement levels to identify potential brand advocates and those needing more engagement.",
    tags: ["Customer Engagement", "Marketing", "Analytics"],
    icon: "🎯",
  },
  {
    id: 6,
    name: "Customer Satisfaction Prediction",
    description:
      "Predicts customer satisfaction scores based on recent interactions and service quality.",
    tags: ["Customer Satisfaction", "Predictive Analytics", "Service Quality"],
    icon: "😊",
  },
  {
    id: 7,
    name: "Debt Collection Prioritization",
    description:
      "Prioritizes collections based on likelihood of payment and overdue status.",
    tags: ["Debt Collection", "Risk Assessment", "Prioritization"],
    icon: "💰",
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = agentTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Agent Templates
            </h1>
          </div>
        </header> */}
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Agent Templates
          </h1>
        </div>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Streamline Your Workflow with AI Agents
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our agent templates are designed to help you quickly set up and
                deploy AI-powered solutions for various business needs. Each
                template comes pre-configured with the necessary components and
                integrations, allowing you to customize and launch your AI
                agents with ease.
              </p>
              <div className="flex space-x-4">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create Custom Template
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-4xl">{template.icon}</div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-semibold"
                      >
                        AI Agent
                      </Badge>
                    </div>
                    <CardTitle className="mt-2">{template.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {template.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {template.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 dark:bg-gray-800 p-4">
                    <Button className="w-full">
                      Use Template <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <footer className="bg-white dark:bg-gray-800 shadow mt-8">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 dark:text-gray-400">
                © 2024 AI Agent Platform. All rights reserved.
              </p>
              <Button variant="outline">
                <Zap className="mr-2 h-4 w-4" /> Upgrade to Pro
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
