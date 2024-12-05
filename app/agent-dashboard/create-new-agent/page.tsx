"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Save, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function CreateAgentPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      if (!tags.includes(tagInput)) {
        setTags([...tags, tagInput]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Success",
      description: "New agent has been created successfully.",
    });

    setIsLoading(false);
    router.push("/agents");
  };

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Create New Agent</h1>
              <p className="text-sm text-muted-foreground">
                Configure your new AI agent
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Agent Name</Label>
                  <Input id="name" placeholder="Enter agent name" required />
                </div>

                <div>
                  <Label htmlFor="tags">Topics/Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <Input
                    id="tags"
                    placeholder="Type and press Enter to add topics/tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={addTag}
                  />
                </div>

                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    placeholder="Define the agent's role"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="goal">Goal</Label>
                  <Textarea
                    id="goal"
                    placeholder="What is the agent's primary goal?"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="instructions">Instructions</Label>
                  <Textarea
                    id="instructions"
                    placeholder="Provide detailed instructions for the agent"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Add a brief description of the agent"
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Link href="/agent-dashboard">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Link href="/agent-dashboard">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-purple-700"
                    disabled={isLoading}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? "Saving..." : "Save Agent"}
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
