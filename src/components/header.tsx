'use client';

import Link from 'next/link';
import { Menu, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Classes' },
    { href: '#', label: 'Reviews' },
    { href: '#', label: 'News' },
    { href: '#', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full border-b",
        isHome ? "bg-transparent border-white/20" : "bg-background border-border"
    )}>
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className={cn("h-6 w-6", isHome ? "text-white" : "text-primary")} />
            <span className={cn("font-bold text-lg", isHome ? "text-white" : "text-foreground")}>Grammar Sheet</span>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  "transition-colors",
                  isHome ? "text-white hover:text-white/80" : "text-foreground hover:text-primary"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn("md:hidden", isHome && "text-white hover:bg-white/10 hover:text-white")}
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-6">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setOpen(false)}>
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Grammar Sheet</span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-lg transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
