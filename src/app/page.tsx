import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
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


export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full">
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
      </section>

      <section className="py-16 bg-background">
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
      </section>

      <section className="py-16 bg-background">
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
      </section>
    </>
  );
}
