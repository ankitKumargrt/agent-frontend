"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  CreditCard,
  Settings,
  KeyRound,
  Upload,
  Plus,
  Download,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  {
    title: "User Settings",
    href: "/settings/user",
    icon: User,
  },
  {
    title: "Billing",
    href: "/settings/billing",
    icon: CreditCard,
  },
  {
    title: "Environment Variables",
    href: "/settings/environment",
    icon: KeyRound,
  },
];

export default function SettingsLayout() {
  // const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(navigation[0].title);
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [vars, setVars] = useState<
    Array<{ key: string; value: string; isSecret: boolean; provider: string }>
  >([]);
  const [newVar, setNewVar] = useState({
    key: "",
    value: "",
    isSecret: false,
    provider: "openai",
  });

  const invoices = [
    {
      id: "INV001",
      name: "January 2024",
      date: "Jan 1, 2024",
      amount: "$29.99",
    },
    {
      id: "INV002",
      name: "February 2024",
      date: "Feb 1, 2024",
      amount: "$29.99",
    },
    { id: "INV003", name: "March 2024", date: "Mar 1, 2024", amount: "$29.99" },
  ];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Settings updated",
      description: "Your settings have been updated successfully.",
    });
    setIsLoading(false);
  }

  const addVariable = () => {
    if (newVar.key && newVar.value) {
      setVars([...vars, newVar]);
      setNewVar({ key: "", value: "", isSecret: false, provider: "openai" });
    }
  };

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Settings className="h-6 w-6" />
              <span>Settings</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              {navigation.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(item.title)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary",
                    activeTab === item.title && "bg-muted text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[60px] items-center border-b bg-background px-6 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Settings className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <SheetHeader className="p-6">
                <SheetTitle>Settings</SheetTitle>
              </SheetHeader>
              <nav className="grid items-start px-4 text-sm font-medium">
                {navigation.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      setActiveTab(item.title);
                    }}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary",
                      activeTab === item.title && "bg-muted text-primary"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 font-semibold">
            <Settings className="h-6 w-6" />
            <span>Settings</span>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="space-y-6 p-6 lg:p-10">
            {activeTab === "User Settings" && (
              <div>
                <h3 className="text-lg font-medium">User Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
                <form onSubmit={onSubmit} className="space-y-8 mt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-muted" />
                      <Button type="button" variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role Type</Label>
                      <Select>
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button type="reset" variant="outline">
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
            {activeTab === "Billing" && (
              <div>
                <h3 className="text-lg font-medium">Billing Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your billing information and view your invoices.
                </p>
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>
                      You are currently on the Pro plan. For plan changes,
                      please contact support.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">$29.99/month</p>
                        <p className="text-sm text-muted-foreground">
                          Pro Plan
                        </p>
                      </div>
                      <Button>Contact Support</Button>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-6 space-y-4">
                  <h4 className="text-sm font-medium">Invoices</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice ID</TableHead>
                        <TableHead>Invoice Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell>{invoice.id}</TableCell>
                          <TableCell>{invoice.name}</TableCell>
                          <TableCell>{invoice.date}</TableCell>
                          <TableCell>{invoice.amount}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download invoice</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
            {activeTab === "Environment Variables" && (
              <div>
                <h3 className="text-lg font-medium">Environment Variables</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your API keys and environment variables.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="grid gap-4 md:grid-cols-4">
                    <div>
                      <Label htmlFor="key">Key</Label>
                      <Input
                        id="key"
                        value={newVar.key}
                        onChange={(e) =>
                          setNewVar({ ...newVar, key: e.target.value })
                        }
                        placeholder="OPENAI_API_KEY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="value">Value</Label>
                      <Input
                        id="value"
                        type={newVar.isSecret ? "password" : "text"}
                        value={newVar.value}
                        onChange={(e) =>
                          setNewVar({ ...newVar, value: e.target.value })
                        }
                        placeholder="Enter value"
                      />
                    </div>
                    <div>
                      <Label htmlFor="provider">Provider</Label>
                      <Select
                        value={newVar.provider}
                        onValueChange={(value) =>
                          setNewVar({ ...newVar, provider: value })
                        }
                      >
                        <SelectTrigger id="provider">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="openai">OpenAI</SelectItem>
                          <SelectItem value="anthropic">Anthropic</SelectItem>
                          <SelectItem value="google">Google AI</SelectItem>
                          <SelectItem value="azure">Azure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Button onClick={addVariable} className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Variable
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="secret"
                      checked={newVar.isSecret}
                      onCheckedChange={(checked) =>
                        setNewVar({ ...newVar, isSecret: checked })
                      }
                    />
                    <Label htmlFor="secret">Treat as secret</Label>
                  </div>
                </div>
                <Table className="mt-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Key</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Secret</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vars.map((v, i) => (
                      <TableRow key={i}>
                        <TableCell>{v.key}</TableCell>
                        <TableCell>
                          {v.isSecret ? "••••••••" : v.value}
                        </TableCell>
                        <TableCell>{v.provider}</TableCell>
                        <TableCell>{v.isSecret ? "Yes" : "No"}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setVars(vars.filter((_, index) => index !== i))
                            }
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
