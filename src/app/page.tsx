'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BookOpen, Pencil, GraduationCap, FileText, Trophy, Star, Users, LineChart, Heart, Laptop } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';

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

const newsData = [
  {
    title: 'New Batch Starting February 2024',
    description: 'Registration now open for Grades 6-11. Limited seats available.',
    date: 'Jan 15, 2024',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'classroom notice board',
  },
  {
    title: 'O/L Exam Tips Released',
    description: 'Essential preparation strategies for the upcoming O/L examination.',
    date: 'Jan 10, 2024',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'exam preparation student',
  },
  {
    title: 'Online Classes Now Available',
    description: 'Join from anywhere in Sri Lanka with our new online platform.',
    date: 'Jan 5, 2024',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'online class student',
  },
];


export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

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

  return (
    <>
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

      <motion.section
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-12 text-foreground">
            Latest News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {newsData.map((news, index) => (
              <Card key={index} className="bg-card rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    data-ai-hint={news.imageHint}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{news.description}</p>
                  <p className="text-sm text-secondary-foreground font-medium">{news.date}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#">View All News</Link>
            </Button>
          </div>
        </div>
      </motion.section>

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
    </>
  );
}
