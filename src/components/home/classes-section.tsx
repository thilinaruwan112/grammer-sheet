'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BookOpen, Pencil, GraduationCap, FileText, Trophy, Star } from 'lucide-react';

const classesData = [
  {
    icon: BookOpen,
    grade: 'Grade 6',
    topics: ['Foundation Grammar', 'Basic Writing', 'Reading Skills'],
    color: 'green' as const,
  },
  {
    icon: Pencil,
    grade: 'Grade 7',
    topics: ['Grammar Rules', 'Essay Writing', 'Comprehension'],
    color: 'orange' as const,
  },
  {
    icon: GraduationCap,
    grade: 'Grade 8',
    topics: ['Advanced Grammar', 'Creative Writing', 'Literature'],
    color: 'green' as const,
  },
  {
    icon: FileText,
    grade: 'Grade 9',
    topics: ['O/L Preparation', 'Past Papers', 'Language Skills'],
    color: 'orange' as const,
  },
  {
    icon: Trophy,
    grade: 'Grade 10',
    topics: ['O/L Focus', 'Exam Techniques', 'Literature Analysis'],
    color: 'green' as const,
  },
  {
    icon: Star,
    grade: 'Grade 11',
    topics: ['O/L Final Prep', 'Mock Exams', 'Intensive Practice'],
    color: 'orange' as const,
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

export default function ClassesSection() {
    return (
        <motion.section
            className="py-16 bg-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-headline mb-2 text-foreground">Classes for Grades 6-11</h2>
                <p className="text-muted-foreground mb-12 max-w-lg mx-auto">Choose the perfect class for your grade level</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classesData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Card key={item.grade} className="bg-card p-8 flex flex-col items-center text-center shadow-lg rounded-2xl h-full">
                                <Icon className={cn('h-10 w-10', item.color === 'green' ? 'text-accent-foreground' : 'text-secondary-foreground')} />
                                <h3 className="font-headline text-2xl font-bold mt-4 mb-2">{item.grade}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {item.topics.join(' • ')}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    variant={item.color === 'orange' ? 'secondary' : 'default'}
                                    className={cn(
                                        'w-full rounded-full',
                                        item.color === 'green' && 'bg-accent text-accent-foreground hover:bg-accent/90'
                                    )}
                                >
                                    <Link href="#">View Class Details</Link>
                                </Button>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
