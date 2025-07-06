import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-white">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Students learning"
          fill
          className="object-cover"
          data-ai-hint="students learning"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center space-y-6 text-center px-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline text-white">
            Master English with Confidence
          </h1>
          <div className="max-w-2xl text-lg md:text-xl text-neutral-200 space-y-2">
              <p>From Grade 6 to 11</p>
              <p>Trusted English classes tailored for Sri Lankan students.</p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="#">Join a Class</Link>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#">See Class Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted">
        <div className="container">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="https://placehold.co/200x200"
                alt="Teacher"
                width={200}
                height={200}
                className="rounded-full object-cover w-40 h-40 md:w-48 md:h-48"
                data-ai-hint="teacher portrait"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold font-headline mb-4">About Your Teacher</h2>
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
    </>
  );
}
