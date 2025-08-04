import { AnimatedSection } from '@/components/shared/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Leaf, Link as LinkIcon, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
    {
        name: "WAFAA (Women and Families Ascending Association)",
        logo: "https://placehold.co/200x100.png",
        description: "A nonprofit dedicated to empowering women and families through education, vocational training, and community support programs in North Africa.",
        impactArea: "Women's Empowerment"
    },
    {
        name: "Reach for Uganda",
        logo: "https://placehold.co/200x100.png",
        description: "Focused on providing quality education and healthcare to children in rural Ugandan communities, aiming to break the cycle of poverty.",
        impactArea: "Education & Healthcare"
    }
]

export default function PartnersPage() {
    return (
        <div>
            <AnimatedSection className="bg-primary/10 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Partners</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We are honored to work alongside organizations that are making a significant impact on a global scale.</p>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground text-center">Current Partnerships</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partners.map((partner) => (
                            <Card key={partner.name} className="flex flex-col">
                                <CardHeader className="items-center text-center">
                                    <Image src={partner.logo} alt={`${partner.name} Logo`} data-ai-hint="logo" width={150} height={75} className="mb-4" />
                                    <CardTitle className="font-headline">{partner.name}</CardTitle>
                                    <CardDescription>{partner.impactArea}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{partner.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full">
                                        <LinkIcon className="mr-2 h-4 w-4" /> Visit Website
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-card/50 py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Our Comprehensive Partnership Process</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                            We believe in building strong foundations for success. Our process is designed to be thorough, collaborative, and tailored to your unique mission.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                             <div className="bg-primary/20 p-4 rounded-full w-fit mb-4">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-headline text-xl font-bold">1. Alignment & Vetting</h3>
                            <p className="text-muted-foreground mt-2">We start by deeply understanding your mission, vision, and goals to ensure a strong strategic and cultural fit.</p>
                        </div>
                        <div className="flex flex-col items-center">
                             <div className="bg-primary/20 p-4 rounded-full w-fit mb-4">
                                <Leaf className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-headline text-xl font-bold">2. Strategy & Growth Plan</h3>
                            <p className="text-muted-foreground mt-2">We co-create a customized plan for Japan, covering everything from fundraising to community outreach and branding.</p>
                        </div>
                        <div className="flex flex-col items-center">
                             <div className="bg-primary/20 p-4 rounded-full w-fit mb-4">
                                <CheckCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-headline text-xl font-bold">3. Launch & Ongoing Support</h3>
                            <p className="text-muted-foreground mt-2">We help you launch your initiatives and provide continuous support to ensure long-term impact and sustainability.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16 sm:py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Partner With Us</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Ready to bring your mission to Japan? We're looking for passionate, impactful organizations to join our collective.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/contact">Become a Partner</Link>
                    </Button>
                </div>
            </AnimatedSection>
        </div>
    )
}
