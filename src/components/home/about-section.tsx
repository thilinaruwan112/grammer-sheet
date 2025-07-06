'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

export default function AboutSection() {
  return (
    <motion.section
      className="py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="https://placehold.co/150x150.png"
              alt="Teacher"
              width={150}
              height={150}
              className="rounded-full object-cover"
              data-ai-hint="teacher portrait"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline mb-4 text-foreground">
              About Your Teacher
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              10+ years of experience in teaching English for O/L and Junior Grades. Passionate about helping Sri Lankan students excel in English with personalized attention and proven methods.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
