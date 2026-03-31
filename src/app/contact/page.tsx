import { AnimatedSection } from '@/components/shared/animated-section';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';

export default function ContactPage() {
    return (
        <div>
            <AnimatedSection className="bg-primary/10 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Get in Touch</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We&apos;d love to hear from you. Whether you&apos;re a potential partner, a volunteer, or just curious, let&apos;s connect.</p>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Contact Us</h2>
                            <p className="mt-4 text-muted-foreground">
                                Please use the form to send us a message. We aim to respond to all inquiries within 2-3 business days. For more direct communication, you can reach us through the channels below.
                            </p>
                             <div className="mt-8 space-y-4">
                                <a href="mailto:lysandrestonebourgeois@gmail.com" className="flex items-center gap-4 group">
                                    <div className="bg-primary/10 p-2.5 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110" style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">lysandrestonebourgeois@gmail.com</span>
                                </a>
                                <a href="mailto:jackbomongcag@gmail.com" className="flex items-center gap-4 group">
                                    <div className="bg-primary/10 p-2.5 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110" style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">jackbomongcag@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-2.5 rounded-full">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">+81 80-7028-1109</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-2.5 rounded-full">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">Tokyo, Japan</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
