'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export default function CtaSection() {
    return (
        <motion.section
            className="py-20 text-white"
            style={{ background: 'linear-gradient(to right, hsl(217, 71%, 53%), hsl(158, 41%, 49%))' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold font-headline mb-4">
                    Have Questions? Get in Touch Today!
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-200">
                    Ready to start your English learning journey? Contact us for more information.
                </p>
                <Button asChild size="lg" className="bg-white text-accent-foreground hover:bg-white/90 rounded-full font-semibold px-10 py-6 text-lg">
                    <Link href="#">Contact Us</Link>
                </Button>
            </div>
        </motion.section>
    );
}
