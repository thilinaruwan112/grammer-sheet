import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
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
  );
}
