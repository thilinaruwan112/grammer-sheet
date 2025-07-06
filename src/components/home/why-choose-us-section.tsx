'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Users, LineChart, Heart, Laptop } from 'lucide-react';

const whyChooseUsData = [
  {
    icon: Users,
    title: 'Personalized Attention',
    description: 'Small class sizes ensure individual focus.',
    color: 'green',
  },
  {
    icon: LineChart,
    title: 'Proven Results',
    description: '95% of students improve their grades.',
    color: 'orange',
  },
  {
    icon: Heart,
    title: 'Friendly Teaching',
    description: 'Warm, encouraging learning environment.',
    color: 'muted',
    isFilled: true,
  },
  {
    icon: Laptop,
    title: 'Flexible Classes',
    description: 'Both online and physical classes available.',
    color: 'green',
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

export default function WhyChooseUsSection() {
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
                    Why Choose Grammar Sheet?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsData.map((item, index) => (
                        <Card key={index} className="p-8 text-center flex flex-col items-center shadow-lg rounded-2xl">
                            <div className={cn(
                                "mb-4 flex h-16 w-16 items-center justify-center rounded-full",
                                item.color === 'green' && 'bg-accent',
                                item.color === 'orange' && 'bg-secondary',
                                item.color === 'muted' && 'bg-muted'
                            )}>
                                <item.icon
                                    className={cn(
                                        "h-8 w-8",
                                        item.color === 'green' && 'text-accent-foreground',
                                        item.color === 'orange' && 'text-secondary-foreground',
                                        item.color === 'muted' && 'text-primary'
                                    )}
                                    {...(item.isFilled && { fill: 'currentColor' })}
                                />
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
