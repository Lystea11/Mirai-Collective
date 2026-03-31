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
  const [phase, setPhase] = React.useState<"visible" | "exiting" | "entering">("visible");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exiting");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
        setPhase("entering");
        setTimeout(() => {
          setPhase("visible");
        }, 50);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full bg-primary/10 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="container relative z-10 px-4">
        <h1 className="animate-in-up font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Bridge{" "}
          <span
            className={cn(
              "inline-block text-primary transition-all duration-400",
              phase === "exiting" && "opacity-0 -translate-y-2",
              phase === "entering" && "opacity-0 translate-y-2",
              phase === "visible" && "opacity-100 translate-y-0"
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {changingTexts[currentIndex]}
          </span>
          <br />
          to Japan
        </h1>
        <p className="animate-in-up-delay-1 mx-auto mt-8 max-w-3xl text-xl text-muted-foreground md:text-2xl lg:text-3xl">
          We empower international nonprofits to build meaningful connections and create lasting change within Japanese communities.
        </p>
        <div className="animate-in-up-delay-2 mt-10 flex flex-wrap justify-center gap-6">
          <Button asChild size="lg" className="text-lg px-8 py-4 h-auto transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
            <Link href="/contact">
              Partner With Us <ArrowRight className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-auto transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
