"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function IntegrationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const integrations = [
    {
      name: "IBM Watson",
      category: "AI & ML",
      description:
        "Leverage IBM Watson's advanced AI capabilities with AgentAI.",
      logo: "https://eduemailshop.com/wp-content/uploads/2023/02/How-to-get-IBM-Watson-Studio-Desktop-Free-Student-Edition-Edu-Email-Shop.webp",
      features: [
        "Natural Language Processing",
        "Machine Learning Models",
        "Custom AI Solutions",
      ],
    },
    {
      name: "Google Cloud",
      category: "Cloud Infrastructure",
      description: "Deploy and scale your AI agents on Google Cloud Platform.",
      logo: "data:image/png;base64,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",
      features: ["Cloud Deployment", "Scalable Infrastructure", "Global Reach"],
    },
    {
      name: "AWS",
      category: "Cloud Infrastructure",
      description:
        "Seamlessly integrate with AWS services for robust deployment.",
      logo: "https://partner.zoom.us/wp-content/uploads/2022/12/2022_Zoom-AWS_Lockup_RGB-1-e1672857797889-1024x760.png",
      features: [
        "AWS Lambda Integration",
        "S3 Storage",
        "CloudWatch Monitoring",
      ],
    },
    {
      name: "Azure",
      category: "Cloud Infrastructure",
      description: "Utilize Microsoft Azure's powerful cloud services.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      features: ["Azure Functions", "Cognitive Services", "Cloud Storage"],
    },
    {
      name: "Salesforce",
      category: "CRM",
      description:
        "Connect AgentAI with Salesforce for enhanced customer insights.",
      logo: "https://mitto.ch/wp-content/uploads/2023/01/salesforce-marketing-cloud.png",
      features: [
        "Customer Data Integration",
        "Automated Workflows",
        "Custom Objects",
      ],
    },
    {
      name: "SAP",
      category: "Enterprise",
      description: "Integrate with SAP systems for enterprise-wide automation.",
      logo: "https://yt3.googleusercontent.com/pPoJZ6oZijeISmb0N8NimYAMgPpUju1KuwyMVc3o6AAMl9R40utWSgZJw8TMqBILfaUTVp_H4u8=s160-c-k-c0x00ffffff-no-rj",
      features: [
        "ERP Integration",
        "Business Process Automation",
        "Data Synchronization",
      ],
    },
  ];

  const categories = ["All", ...new Set(integrations.map((i) => i.category))];

  const filteredIntegrations = integrations.filter(
    (integration) =>
      (selectedCategory === "all" ||
        integration.category.toLowerCase() ===
          selectedCategory.toLowerCase()) &&
      integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                Connect with Your
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block text-primary relative"
              >
                Favorite Tools
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 7C20 5 40 3 50 3C60 3 80 5 100 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </svg>
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8"
            >
              Seamlessly integrate AgentAI with your existing tech stack and
              enhance your workflow automation capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Integration Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="relative w-full md:w-64 mb-4 md:mb-0">
              <Input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    key={category.toLowerCase()}
                    value={category.toLowerCase()}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{integration.name}</h3>
                      <span className="text-sm text-gray-500">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {integration.description}
                  </p>
                  <div className="space-y-2">
                    {integration.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Don't see what you need?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking to expand our integration offerings. Let us
              know what you'd like to see!
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input
                  type="text"
                  placeholder="Requested Integration"
                  required
                />
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us more about how this integration would help you"
                  rows={4}
                  required
                ></textarea>
                <Button type="submit" className="w-full">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Supercharge Your Workflow?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start integrating AgentAI with your favorite tools and experience
            the power of AI-driven automation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
