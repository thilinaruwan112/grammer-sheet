'use client';

import Link from 'next/link';
import { Menu, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/lessons', label: 'Lessons' },
  { href: '/practice', label: 'Practice' },
  { href: '/sheets', label: 'Sheets' },
  { href: '/checker', label: 'Checker' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">GrammarSheet</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-accent"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/practice">Get Started</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-6">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setOpen(false)}>
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">GrammarSheet</span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-lg transition-colors hover:text-accent"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/practice" onClick={() => setOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
