import { AnimatedSection } from '@/components/shared/animated-section';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';

export default function ContactPage() {
    return (
        <div>
            <AnimatedSection className="bg-primary/10 py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Get in Touch</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">We'd love to hear from you. Whether you're a potential partner, a volunteer, or just curious, let's connect.</p>
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
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <a href="mailto:hello@miraiconnect.org" className="text-muted-foreground hover:text-primary transition-colors">hello@miraiconnect.org</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                    <span className="text-muted-foreground">+81 3 1234 5678</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="h-6 w-6 text-primary" />
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
