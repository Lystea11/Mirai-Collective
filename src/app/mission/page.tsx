import { AnimatedSection } from '@/components/shared/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Handshake, Heart, Users } from 'lucide-react';
import Image from 'next/image';

const values = [
    {
        icon: Heart,
        title: "Purposeful Impact",
        description: "We are committed to helping our partners create meaningful and measurable social impact. Our success is defined by the positive change they bring to communities across Japan."
    },
    {
        icon: Handshake,
        title: "Cultural Bridge-Building",
        description: "We believe authentic connection is the foundation of all successful partnerships. We specialize in fostering mutual understanding and respect between global and local cultures."
    },
    {
        icon: Globe,
        title: "Global Collaboration",
        description: "We champion the idea that the world's biggest challenges require a united front. We facilitate collaboration that transcends borders to achieve shared goals."
    },
    {
        icon: Users,
        title: "Ethical Leadership",
        description: "As the next generation of leaders, we operate with unwavering integrity, transparency, and a deep sense of responsibility to our partners and the communities we serve."
    }
]


export default function MissionPage() {
    return (
        <div>
            <AnimatedSection className="bg-primary/10 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Mission & Values</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">To connect international nonprofits with Japanese communities, fostering a culture of global collaboration and shared purpose.</p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Our Purpose</h2>
                            <p className="mt-4 text-muted-foreground">
                                In an increasingly interconnected world, the potential for global good is limitless. Yet, many impactful international nonprofits struggle to cross the final barrier into one of the world's most unique and generous societies: Japan.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                               Mirai Collective exists to eliminate that barrier. We serve as the vital link, providing the strategic, cultural, and operational support necessary for these organizations to not only establish a presence, but to build deep, lasting relationships with Japanese communities. By doing so, we aim to unlock new avenues for fundraising, volunteerism, and social innovation, creating a future where global compassion knows no borders.
                            </p>
                        </div>
                        <div className="h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            <Image 
                                src="/3.png"
                                alt="Bridge connecting two lands"
                                data-ai-hint="bridge connection"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="bg-card/50 py-16 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Our Core Values</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        These principles guide every decision we make and every partnership we forge.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                             <Card key={value.title} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline pt-4">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
