"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const changingTexts = [
  "Global Impact",
  "Social Innovation",
  "Shared Purpose",
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
        setIsFading(false);
      }, 500); // match CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/10 flex items-center justify-center text-center overflow-hidden">
        {/* Parallax-like background effect */}
        <div 
            className="absolute inset-0 bg-cover bg-fixed bg-center" 
            style={{backgroundImage: `url('https://placehold.co/1920x1080.png')`, opacity: 0.05}}
            data-ai-hint="abstract background"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="container relative z-10 px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Bridge{" "}
          <span
            className={cn(
              "text-primary transition-opacity duration-500",
              isFading ? "opacity-0" : "opacity-100"
            )}
          >
            {changingTexts[currentIndex]}
          </span>
          <br />
          to Japan
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          We empower international nonprofits to build meaningful connections and create lasting change within Japanese communities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
