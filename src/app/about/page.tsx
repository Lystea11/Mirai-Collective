import { AnimatedSection } from '@/components/shared/animated-section';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Globe, Handshake, Heart, Leaf, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
    { name: 'Jackson Bomoncgag', role: 'Co-Founder & CEO', initials: 'JB' },
    { name: 'Lysandre Stone-Bourgeois', role: 'Co-Founder & COO', initials: 'LSB' },
    { name: 'Akira Kanematsu', role: 'Chief Financial Officer', initials: 'AK'},
    { name: 'Lincoln Nguyen-Moreira', role: 'Chief Information Officer', initials: 'LNM'},
    { name: 'Joshua Neely', role: 'Communications Officer', initials: 'JN' },
    { name: 'Ray Takizawa', role: 'Business Analyst', initials: 'RT'}
]

const differentiators = [
    { icon: Globe, title: 'Global Perspective', description: 'Our international team offers unparalleled insights into global nonprofit strategies.' },
    { icon: Handshake, title: 'Cultural Bridge-Building', description: 'We specialize in navigating the nuances of Japanese culture to build authentic connections.' },
    { icon: Lightbulb, title: 'Youth-Led Innovation', description: 'As students, we bring fresh, dynamic, and innovative solutions to complex challenges.' },
    { icon: Heart, title: 'Purpose-Driven', description: 'Our nonprofit status means we are 100% focused on creating impact, not profit.' },
    { icon: Leaf, title: 'Sustainable Growth', description: 'We focus on building long-term, sustainable models for fundraising and community engagement.' },
    { icon: Eye, title: 'Tailored Strategies', description: 'We understand that one size doesn’t fit all. Our solutions are customized to each partner’s unique needs.' },
]

export default function AboutPage() {
    return (
        <div>
            <AnimatedSection className="bg-primary/10 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Mirai Collective</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We are a passionate team of students building bridges between the world's causes and Japan's communities.</p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
                            <p className="mt-4 text-muted-foreground">
                                Mirai Collective was born from a shared observation by its two student founders: a noticeable gap in Japan's engagement with international nonprofit organizations. While studying international relations and social entrepreneurship, we saw countless global initiatives struggling to gain a foothold in Japan due to cultural, linguistic, and structural barriers.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Driven by a desire to change this, we launched Mirai Collective as a nonprofit consultancy. Our mission is to serve as the dedicated bridge, providing the strategic guidance, cultural translation, and community-building expertise that international nonprofits need to not just enter, but truly connect with and thrive in Japan.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 h-80 w-full overflow-hidden rounded-lg shadow-xl">
                             <Image 
                                src="/2.jpg"
                                alt="Founders planning"
                                data-ai-hint="students planning"
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
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Meet the Team</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We are a diverse group of students united by a common goal: to facilitate global good.
                    </p>
                    {/* CEO and COO - Leadership Row */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.slice(0, 2).map(member => (
                             <Card key={member.name} className="text-center border-2 border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group">
                                 <CardContent className="pt-8 pb-8">
                                     <Avatar className="w-32 h-32 mx-auto mb-6 transition-transform duration-300 ease-out group-hover:scale-110">
                                         <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">{member.initials}</AvatarFallback>
                                     </Avatar>
                                     <h3 className="text-2xl font-bold font-headline mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                                     <p className="text-primary text-lg font-semibold">{member.role}</p>
                                 </CardContent>
                             </Card>
                        ))}
                    </div>
                    
                    {/* Other Team Members */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.slice(2).map(member => (
                             <Card key={member.name} className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group">
                                 <CardContent className="pt-6">
                                     <Avatar className="w-20 h-20 mx-auto mb-4 transition-transform duration-300 ease-out group-hover:scale-105">
                                         <AvatarFallback className="text-lg group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">{member.initials}</AvatarFallback>
                                     </Avatar>
                                     <h3 className="text-lg font-bold font-headline group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                                     <p className="text-primary text-sm">{member.role}</p>
                                 </CardContent>
                             </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-16 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">What Makes Us Different</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Our unique position as a student-led nonprofit gives us an edge in driving impactful change.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {differentiators.map(item => (
                            <Card key={item.title}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

        </div>
    )
}
