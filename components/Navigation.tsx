import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/green_rider_technology_logo.jpg"
                alt="GRT Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-12">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link
                href="/features"
                className="text-sm font-medium hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/integration"
                className="text-sm font-medium hover:text-primary"
              >
                Integration
              </Link>
              <Link
                href="/templates"
                className="text-sm font-medium hover:text-primary"
              >
                Templates
              </Link>
              <Link
                href="/contactus"
                className="text-sm font-medium hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <Link
            href="/agent-dashboard"
            className="text-sm font-medium hover:text-primary"
          >
            <div className="hidden md:flex items-center space-x-4">
              <Button>Login</Button>
            </div>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
