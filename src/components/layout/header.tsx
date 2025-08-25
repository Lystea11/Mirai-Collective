"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "../icons/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/partners", label: "Partners" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Mirai Collective</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-lg font-bold transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
                <Link href="/contact">Get in Touch</Link>
            </Button>
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo className="h-8 w-8 text-primary" />
                        <span className="font-headline text-2xl font-bold">Mirai Collective</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === href ? "text-primary" : "text-foreground"
                            )}
                        >
                            {label}
                        </Link>
                        ))}
                    </nav>
                     <Button asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
