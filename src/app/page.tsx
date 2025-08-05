import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSection } from '@/components/home/hero-section';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const partners = [
  {
    name: 'WAFAA',
    logo: 'https://placehold.co/200x100.png',
    alt: 'WAFAA Logo',
  },
  {
    name: 'Reach for Uganda',
    logo: 'https://placehold.co/200x100.png',
    alt: 'Reach for Uganda Logo',
  },
  {
    name: 'Partner 3',
    logo: 'https://placehold.co/200x100.png',
    alt: 'Partner Logo 3',
  },
  {
    name: 'Partner 4',
    logo: 'https://placehold.co/200x100.png',
    alt: 'Partner Logo 4',
  },
  {
    name: 'Partner 5',
    logo: 'https://placehold.co/200x100.png',
    alt: 'Partner Logo 5',
  },
  {
    name: 'Partner 6',
    logo: 'https://placehold.co/200x100.png',
    alt: 'Partner Logo 6',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <AnimatedSection className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Connecting Global Causes with Japanese Hearts
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Mirai Collective is dedicated to breaking down cultural and logistical barriers for international nonprofits, enabling them to thrive in Japan. We believe in the power of shared purpose to create a lasting global impact.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/mission">
                Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="h-80 w-full overflow-hidden rounded-lg shadow-xl">
             <Image
              src="https://placehold.co/600x400.png"
              alt="Team working together"
              data-ai-hint="collaboration meeting"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>
      
      <div className="bg-card/50">
      <AnimatedSection className="container mx-auto px-4 py-16 sm:py-24 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How We Work</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Our structured, three-phase approach ensures a seamless and effective journey for our partners, from initial research to sustained growth.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">1. Research & Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We conduct deep-dive research to ensure perfect alignment between your mission and the Japanese cultural landscape.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">2. Partnership & Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Together, we build a strategic roadmap for market entry, fundraising, and community engagement.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">3. Growth & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We provide ongoing support to help you grow your presence and maximize your social impact in Japan.</p>
            </CardContent>
          </Card>
        </div>
         <Button asChild variant="link" className="mt-8 text-lg text-primary">
            <Link href="/how-it-works">Learn more about our process <ArrowRight className="ml-2 h-5 w-5" /></Link>
         </Button>
      </AnimatedSection>
      </div>

      <AnimatedSection className="w-full py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Trusted Partners</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are proud to collaborate with organizations making a real difference in the world.
            </p>
          </div>
          <div className="mt-12 w-full overflow-hidden">
            <Carousel
              className="w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent className="-ml-1">
                {partners.map((partner, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="p-1">
                      <div className="flex aspect-video items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={partner.logo}
                          alt={partner.alt}
                          data-ai-hint="logo"
                          width={200}
                          height={100}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="text-center mt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="/partners">
                  Become a Partner
                </Link>
              </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
