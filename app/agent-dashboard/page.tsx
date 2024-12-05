import Link from "next/link";
import { Plus, Search, Bell, User, Beaker } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Agent {
  id: string;
  name: string;
  topics: string[];
  description: string;
}

const agents: Agent[] = [
  {
    id: "1",
    name: "Data Analysis Agent",
    topics: ["Analytics", "Data Processing"],
    description:
      "Specialized in processing and analyzing large datasets to extract meaningful insights.",
  },
  {
    id: "2",
    name: "Customer Service Agent",
    topics: ["Support", "Communication"],
    description:
      "Handles customer inquiries and provides assistance with product-related questions.",
  },
  {
    id: "3",
    name: "Research Assistant",
    topics: ["Research", "Documentation"],
    description:
      "Helps gather and organize information from various sources for research projects.",
  },
];

export default function AgentsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-16 border-r bg-muted/40 flex flex-col items-center py-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Beaker className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b">
          <div className="flex h-16 items-center px-6 gap-4">
            <h1 className="text-2xl font-bold">Agent (Envoy)</h1>
            <div className="ml-auto flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search agents..." className="pl-8" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <div className="mb-6">
            <Link href="/agent-dashboard/create-new-agent">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-700">
                <Plus className="mr-2 h-4 w-4" />
                Create New Agent
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <Card key={agent.id}>
                <CardHeader>
                  <CardTitle>{agent.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {agent.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{agent.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
