import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, Settings, Bell, Search } from "lucide-react";

export default function Component() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Bell className="h-5 w-5 text-muted-foreground" />
          <Settings className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Team Name Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm">
              Development
            </Button>
            <Button variant="secondary" size="sm">
              Design
            </Button>
            <Button variant="secondary" size="sm">
              Marketing
            </Button>
          </div>
        </Card>

        <Link href="/team/create-new-team">
          <Card className="flex h-full cursor-pointer items-center justify-center p-6 hover:bg-muted/50">
            <div className="flex flex-col items-center gap-2 text-center">
              <PlusCircle className="h-10 w-10 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Create New Team</h2>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
