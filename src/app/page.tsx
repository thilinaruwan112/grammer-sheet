import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
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
        <p className="text-lg font-medium md:text-xl">From Grade 6 to</p>
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#">See Class Schedule</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
