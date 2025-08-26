'use client';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Leaf, Link as LinkIcon, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';



const partners = [
    {
        name: "Reach for Uganda",
        logo: "/logos/2.png",
        description: "Empowers communities through education, healthcare, and development in Uganda. Long-term commitment to student sponsorships, teacher training, and health initiatives.",
        impactArea: "Education & Healthcare",
        website: "https://reachforuganda.org/contactus/"
    },
    {
        name: "Women's Global Education Project",
        logo: "/logos/3.png",
        description: "Empowers girls through education and supports gender equality in underserved communities in Senegal and Kenya through mentorship, scholarships, and community engagement.",
        impactArea: "Women's Education & Empowerment",
        website: "https://www.womensglobal.org/contact"
    },
    {
        name: "Give to Columbia",
        logo: "/logos/4.png",
        description: "Mobilizes resources for high-impact, sustainable projects across Colombia, partnering with trusted local organizations with high standards for transparency and accountability.",
        impactArea: "Community Development",
        website: "https://givetocolombia.org/"
    },
    {
        name: "Bridges to Learning",
        logo: "/logos/5.png",
        description: "Empowers impoverished children in Vietnam through education, health, and social development. Sponsors students and supports dormitories, school meals, supplies, and healthcare services.",
        impactArea: "Education & Child Development",
        website: "https://bridges2learning.org/"
    },
    {
        name: "Sustainable Cambodia",
        logo: "/logos/6.png",
        description: "Empowers rural Cambodian families toward self-sufficiency through clean water, agriculture, education, and long-term village development with community-driven growth.",
        impactArea: "Sustainable Development",
        website: "https://sustainablecambodia.org/"
    },
    {
        name: "Africa Classroom Connection",
        logo: "/logos/7.jpeg",
        description: "Brings education to underserved communities by building classrooms in rural KwaZulu-Natal, South Africa. Has helped over 63,000 students access safe learning environments.",
        impactArea: "Education Infrastructure",
        website: "https://www.africaclassroomconnection.org/"
    },
    {
        name: "Africa Cries Out",
        logo: "/logos/8.jpeg",
        description: "Supports health, education, and self-sustaining development in West Africa. Builds schools, provides medical services including leprosy care, and offers agricultural training.",
        impactArea: "Healthcare & Education",
        website: "https://africacriesout.net/"
    },
    {
        name: "Self Help Africa",
        logo: "/logos/9.png",
        description: "Committed to smallholder farmers and rural communities across Africa, promoting food security, climate resilience, and women's economic empowerment through sustainable development.",
        impactArea: "Agriculture & Food Security",
        website: "https://selfhelpafrica.org/us/"
    },
    {
        name: "Clean Water for Haiti",
        logo: "/logos/10.png",
        description: "Improves access to safe, clean drinking water through locally built and maintained biosand filters. Focuses on community-based solutions, job creation, and long-term sustainability.",
        impactArea: "Water & Sanitation",
        website: "https://www.cleanwaterforhaiti.org"
    }
]



export default function PartnersPage() {
    const [currentRow, setCurrentRow] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [userInteracted, setUserInteracted] = useState(false);
    
    // Group partners into rows of 3
    const partnersPerRow = 3;
    const partnerRows = [];
    for (let i = 0; i < partners.length; i += partnersPerRow) {
        partnerRows.push(partners.slice(i, i + partnersPerRow));
    }
    
    const totalRows = partnerRows.length;
    
    // Handle user interaction pause
    const handleUserInteraction = (rowIndex: number) => {
        setCurrentRow(rowIndex);
        setUserInteracted(true);
        setIsAutoPlaying(false);
        
        // Resume auto-play after 8 seconds of no interaction
        setTimeout(() => {
            setUserInteracted(false);
            setIsAutoPlaying(true);
        }, 8000);
    };
    
    useEffect(() => {
        if (!isAutoPlaying || userInteracted) return;
        
        const interval = setInterval(() => {
            setCurrentRow((prev) => (prev + 1) % totalRows);
        }, 4000);
        
        return () => clearInterval(interval);
    }, [isAutoPlaying, userInteracted, totalRows]);
    
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
                    
                    {/* Carousel Container */}
                    <div 
                        className="mt-12 relative overflow-hidden"
                        style={{ height: '400px' }} // Fixed height to show one complete row
                        onMouseEnter={() => !userInteracted && setIsAutoPlaying(false)}
                        onMouseLeave={() => !userInteracted && setIsAutoPlaying(true)}
                    >
                        <div 
                            className="flex flex-col transition-transform duration-1000 ease-out"
                            style={{ 
                                transform: `translateY(-${currentRow * 400}px)`,
                                height: `${totalRows * 400}px`
                            }}
                        >
                            {partnerRows.map((row, rowIndex) => (
                                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4" style={{ height: '400px' }}>
                                    {row.map((partner) => (
                                        <Card key={partner.name} className="flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out group">
                                            <CardHeader className="items-center text-center">
                                                <div className="w-full h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                                                    <Image 
                                                        src={partner.logo} 
                                                        alt={`${partner.name} Logo`} 
                                                        data-ai-hint="logo" 
                                                        width={120} 
                                                        height={60} 
                                                        className="max-h-16 w-auto object-contain" 
                                                    />
                                                </div>
                                                <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors duration-300">{partner.name}</CardTitle>
                                                <CardDescription className="text-primary font-medium">{partner.impactArea}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
                                            </CardContent>
                                            <CardFooter>
                                                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                    <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                                                        <LinkIcon className="mr-2 h-4 w-4" /> Visit Website
                                                    </Link>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Row Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalRows }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleUserInteraction(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentRow 
                                        ? 'bg-primary w-8' 
                                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                }`}
                                aria-label={`Go to partner row ${index + 1}`}
                            />
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
