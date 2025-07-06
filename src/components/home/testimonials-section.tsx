'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonialsData = [
  {
    name: 'Amaya Perera',
    role: 'Grade 10 Student',
    review: "“Teacher's explanations are so clear and easy to understand. My English grades improved significantly.”",
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student portrait',
  },
  {
    name: 'Sunil Fernando',
    role: 'Parent',
    review: '“Excellent teaching methods. My daughter loves attending classes and her confidence has grown tremendously.”',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'parent portrait',
  },
  {
    name: 'Kavya Silva',
    role: 'Grade 9 Student',
    review: '“The classes are fun and interactive. I am no longer afraid of English exams!”',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'student happy',
  },
  {
    name: 'Mr. Bandara',
    role: 'Parent',
    review: '“A very dedicated teacher who knows how to motivate students. Highly recommended for anyone looking to improve.”',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'parent smiling',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

export default function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
    );
    
    return (
        <motion.section
            className="py-16 bg-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-12 text-foreground">
                    What Students Say
                </h2>
                <div className="max-w-4xl mx-auto">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonialsData.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 p-4">
                                    <Card className="bg-card p-8 rounded-2xl shadow-lg text-left h-full flex flex-col">
                                        <div className="flex items-center mb-4">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full object-cover"
                                                data-ai-hint={testimonial.avatarHint}
                                            />
                                            <div className="ml-4">
                                                <h3 className="font-headline text-xl font-bold">{testimonial.name}</h3>
                                                <p className="text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-secondary-foreground" fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground flex-grow">{testimonial.review}</p>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="mt-12">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                        <Link href="#">Read All Reviews</Link>
                    </Button>
                </div>
            </div>
        </motion.section>
    );
}
