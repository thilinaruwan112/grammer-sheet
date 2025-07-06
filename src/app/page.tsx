import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, PenSquare, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    title: 'Comprehensive Lessons',
    description: 'Explore easy-to-understand grammar topics, from tenses to punctuation.',
    link: '/lessons',
    linkText: 'Browse Lessons',
  },
  {
    icon: <PenSquare className="h-8 w-8 text-accent" />,
    title: 'Interactive Practice',
    description: 'Test your knowledge with quizzes and exercises that provide instant feedback.',
    link: '/practice',
    linkText: 'Start Practicing',
  },
  {
    icon: <Download className="h-8 w-8 text-accent" />,
    title: 'Downloadable Sheets',
    description: 'Get handy PDF grammar guides for quick reference and offline study.',
    link: '/sheets',
    linkText: 'Get Sheets',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'AI Grammar Checker',
    description: 'Improve your writing by getting instant feedback on grammar and style.',
    link: '/checker',
    linkText: 'Check Grammar',
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Master English Grammar with Confidence
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your go-to resource for clear lessons, interactive exercises, and helpful grammar sheets.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/lessons">Explore Lessons</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/practice">Try Exercises</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                 <BookOpen className="w-64 h-64 text-primary opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                Everything You Need to Succeed
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                GrammarSheet provides a complete set of tools to help you improve your English grammar skills effectively.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
            {features.map((feature) => (
              <Card key={feature.title} className="text-left h-full flex flex-col">
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 text-accent hover:text-accent/90 font-semibold">
                    <Link href={feature.link}>{feature.linkText} &rarr;</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
