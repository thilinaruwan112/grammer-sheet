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

export default function HeroSection() {
  return (
    <motion.section 
      className="relative h-screen w-full"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Sri Lankan students studying"
        fill
        className="object-cover"
        data-ai-hint="students classroom"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center text-white">
        <p className="text-lg font-medium md:text-xl">From Grade 6 to O/L</p>
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
          Master English with Confidence
        </h1>
        <p className="max-w-2xl text-lg text-neutral-200 md:text-xl">
          Trusted English classes tailored for Sri Lankan students.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#">Join a Class</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#">See Class Schedule</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
