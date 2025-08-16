import { AnimatedSection } from '@/components/shared/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Microscope } from 'lucide-react';

const methodology = [
    {
        phase: 1,
        title: "Research & Compatibility",
        duration: "2-4 Weeks",
        description: "Our initial phase is a deep dive into your organization's mission and the Japanese market. We identify key alignment points, potential challenges, and cultural nuances to create a data-driven foundation for success.",
        icon: Microscope
    },
    {
        phase: 2,
        title: "Partnership & Planning",
        duration: "3-6 Weeks",
        description: "We work hand-in-hand with your team to develop a comprehensive, tailored strategy. This includes brand messaging, fundraising roadmaps, digital presence, and initial community outreach plans.",
        icon: Users
    },
    {
        phase: 3,
        title: "Growth & Impact",
        duration: "Ongoing",
        description: "This is where the plan comes to life. We provide continuous support in executing the strategy, monitoring progress, and adapting to new opportunities to ensure sustainable growth and maximize your social impact.",
        icon: TrendingUp
    }
]

const successMetrics = [
    { value: '95%', label: 'Partnership Success Rate', description: 'in achieving initial strategic goals within the first year.' },
    { value: '250%', label: 'Average Fundraising Growth', description: 'for partners within their first 18 months in Japan.' },
    { value: '10k+', label: 'Community Members Engaged', description: 'across all partner initiatives and campaigns.' },
];

export default function HowItWorksPage() {
    return (
        <div>
            <AnimatedSection className="bg-primary/10 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Methodology</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A proven, transparent process for turning global vision into local impact.</p>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-border hidden md:block"></div>

                        {methodology.map((step, index) => (
                            <div key={step.phase} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
                                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary text-primary font-bold z-10">
                                    {step.phase}
                                </div>
                                <Card className="w-full md:w-[calc(50%-3rem)]">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                                            <span className="text-sm font-semibold text-primary">{step.duration}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-card/50 py-16 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Proven Success</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our process delivers tangible results. We measure our success by the impact our partners create.</p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {successMetrics.map(metric => (
                            <Card key={metric.label} className="text-center">
                                <CardContent className="pt-6">
                                    <p className="font-headline text-5xl font-bold text-primary">{metric.value}</p>
                                    <h3 className="mt-2 text-xl font-semibold">{metric.label}</h3>
                                    <p className="mt-1 text-muted-foreground">{metric.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
