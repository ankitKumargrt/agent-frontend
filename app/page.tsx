"use client";
import { motion } from "framer-motion";
import { ArrowRight, Menu, Bot, Workflow, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  // const [showBanner, setShowBanner] = useState(true)

  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Multi-Agent Orchestration",
      description:
        "Coordinate multiple AI agents to work together seamlessly on complex tasks.",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Workflow Automation",
      description:
        "Build and deploy automated workflows using any LLM and cloud platform.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Collaboration",
      description:
        "Enable AI agents to collaborate in real-time for enhanced problem-solving.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Enterprise Ready",
      description:
        "Built for scale with enterprise-grade security and compliance features.",
    },
  ];

  const integrationLogos = [
    {
      name: "IBM",
      image:
        "https://i.pinimg.com/564x/1a/68/e2/1a68e21c776065c70542e56ea014cfa5.jpg",
    },
    {
      name: "SAP",
      image:
        "https://i.pinimg.com/564x/78/1f/b9/781fb9f6710f1f615890ce02a30cecb6.jpg",
    },
    {
      name: "AWS",
      image:
        "https://i.pinimg.com/564x/72/7d/63/727d63e90b75b343b97a899f80c0c030.jpg",
    },
    {
      name: "Google Cloud",
      image:
        "https://i.pinimg.com/564x/a7/c1/5f/a7c15f8f41cb0cdc66177828e4653020.jpg",
    },
    {
      name: "Azure",
      image:
        "https://i.pinimg.com/564x/60/d4/b9/60d4b9db4e0accc6533623b60211b435.jpg",
    },
    {
      name: "Salesforce",
      image:
        "https://i.pinimg.com/564x/53/7a/3e/537a3edcce96df757b51ea1255f3da62.jpg",
    },
  ];

  const enterpriseLogos = [
    {
      name: "Deloitte",
      image:
        "https://i.pinimg.com/564x/a4/90/79/a490795ee21746ab18485b2fedb87b80.jpg",
    },
    {
      name: "KPMG",
      image:
        "https://i.pinimg.com/564x/fc/78/eb/fc78eb150f9c3c9e599de827bd30f764.jpg",
    },
    {
      name: "PWC",
      image:
        "https://i.pinimg.com/564x/67/06/d2/6706d25f170dcd854221f916431b4618.jpg",
    },
    {
      name: "Accenture",
      image:
        "https://i.pinimg.com/564x/53/84/b9/5384b9fe6a675df0151c2857270d93fe.jpg",
    },
    {
      name: "Oracle",
      image:
        "https://i.pinimg.com/564x/21/67/d3/2167d38b655669c3b6753ae936b4735e.jpg",
    },
  ];

  const extaImages = [
    {
      name: "AI Agents Collaboration",
      image:
        "https://cdn.prod.website-files.com/614c82ed388d53640613982e/66bc561d889375519710d3d4_668bf78c50b42e9dac546bd2_multi-agent-llm.webp",
    },
    {
      name: "Enterprise-Grade AI Automation",
      image:
        "https://markovate.com/wp-content/uploads/2024/05/How-Enterprise-AI-Agents-Are-Redefining-Business-Processes-1280x960.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                The Premier Platform for{" "}
                <span className="text-primary relative">
                  Multi-Agent
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 7C20 5 40 3 50 3C60 3 80 5 100 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>{" "}
                Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                Optimize workflows across various industries with advanced
                AI-driven agents. Design and launch automated workflows
                compatible with any large language model and cloud service.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/requestdemo">
                  <Button size="lg" variant="outline">
                    Request Demo
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="relative">
              <Image
                src={extaImages[0].image}
                alt="AI Agents Collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="text-2xl font-bold text-primary">10M+</p>
                <p className="text-sm text-gray-600">
                  Multi-Agent Teams run using AgentAI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-center mb-8 text-gray-600">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {integrationLogos.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for AI-Driven Workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build, deploy, and scale AI agent workflows with enterprise-grade
              tools and capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade AI Automation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Deploy secure, scalable AI agent workflows that integrate
                seamlessly with your existing infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {enterpriseLogos.slice(0, 4).map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={extaImages[1].image}
                alt="Enterprise Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-8  max-w-2xl mx-auto">
            Join leading companies using AgentAI to automate and enhance their
            operations with AI agents.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="hover:text-gray-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:text-gray-300">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-gray-300">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="hover:text-gray-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-gray-300">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-300">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-gray-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-gray-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-gray-300">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <Image
                  src="/green_rider_technology_logo.jpg"
                  alt="GRT Logo"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
                <p className="ml-4">
                  &copy; {new Date().getFullYear()} GRTAI. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
