"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Multi-Agent Orchestration",
      description:
        "Coordinate multiple AI agents to work together seamlessly on complex tasks.",
      benefits: [
        "Automated task distribution",
        "Inter-agent communication",
        "Dynamic role assignment",
        "Parallel processing capabilities",
      ],
      image:
        "https://onomatic.com/wp-content/uploads/2024/05/Blog-Images-15-1600x1218.png",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Workflow Automation",
      description:
        "Build and deploy automated workflows using any LLM and cloud platform.",
      benefits: [
        "Visual workflow builder",
        "Custom agent creation",
        "Flexible deployment options",
        "Real-time monitoring",
      ],
      image:
        "https://notifyme.tech/wp-content/uploads/2023/04/workflow-automation-definition.jpg",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Collaboration",
      description:
        "Enable AI agents to collaborate in real-time for enhanced problem-solving.",
      benefits: [
        "Synchronized agent actions",
        "Real-time status updates",
        "Collaborative decision making",
        "Event-driven coordination",
      ],
      image:
        "https://simplea.com/getmedia/d13d6154-e506-4cf6-a619-49728dcc2323/2_3_62_Simplea_com_blog_article_Is_Real_Time_Collaboration_a_real_thing_cover_800x400.jpg.aspx",
    },
  ];

  const useCases = [
    {
      title: "Data Analysis",
      description:
        "Automate complex data analysis workflows with multiple specialized agents.",
      image:
        "https://cdn.prod.website-files.com/605c9e03d6553a5d82976ce2/661d7f89ca4074cb868c6542_Screenshot%202024-04-16%20at%2012.54.52%20AM.png",
    },
    {
      title: "Customer Service",
      description:
        "Deploy AI agents that work together to provide comprehensive customer support.",
      image:
        "https://simplycontact.com/wp-content/uploads/2023/03/Customer-Support-Outsourcing-Department.png.webp",
    },
    {
      title: "Research & Development",
      description:
        "Accelerate R&D with collaborative AI agents that can research, analyze, and synthesize information.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgu07BMGCWHC2B5_cF_knqg8-0NLkNFzheQ&s",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Features that Power
                <span className="text-primary block">AI Agent Workflows</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Discover how Agent's powerful features can transform your
                organization workflow automation and AI capabilities.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how organizations are leveraging AgentAI's features to
                transform their operations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <Button variant="link" className="p-0">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore the technical features that make AgentAI the leading
                multi-agent platform.
              </p>
            </div>
            <Tabs defaultValue="code" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="code">Code Example</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
                <TabsTrigger value="sdk">SDK Features</TabsTrigger>
              </TabsList>
              <TabsContent value="code" className="mt-6">
                <div className="bg-gray-900 rounded-xl p-6 shadow-xl">
                  <pre className="text-gray-300 overflow-x-auto">
                    <code>{`from Agentai import Agent, Task, team

# Define your AI agents
researcher = Agent(
    role='Researcher',
    goal='Conduct comprehensive market research',
    backstory='Expert in market analysis'
)

analyst = Agent(
    role='Analyst',
    goal='Analyze research findings',
    backstory='Senior data analyst'
)

# Create tasks for your agents
research_task = Task(
    description='Gather market data',
    agent=researcher
)

analysis_task = Task(
    description='Analyze findings',
    agent=analyst
)

# Assemble your team
team = Team(
    agents=[researcher, analyst],
    tasks=[research_task, analysis_task]
)

# Execute the workflow
result = Agent.kickoff()`}</code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="api" className="mt-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="text-xl font-bold mb-4">
                    RESTful API Endpoints
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">
                        /api/v1/agents
                      </h4>
                      <p className="text-gray-600">
                        Create and manage AI agents
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        /api/v1/tasks
                      </h4>
                      <p className="text-gray-600">
                        Define and assign tasks to agents
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        /api/v1/teams
                      </h4>
                      <p className="text-gray-600">
                        Orchestrate multi-agent workflows
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sdk" className="mt-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="text-xl font-bold mb-4">SDK Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Custom Agent Creation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Task Management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Workflow Orchestration</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Real-time Monitoring</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your workflow with AgentAI's powerful features and start
              building your AI agent team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/requestdemo">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Request Demo
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
