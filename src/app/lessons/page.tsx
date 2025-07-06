import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const lessonTopics = [
  { title: 'Nouns', description: 'Learn about common, proper, collective, and abstract nouns.' },
  { title: 'Pronouns', description: 'Understand personal, possessive, reflexive, and relative pronouns.' },
  { title: 'Verbs', description: 'Master action verbs, linking verbs, and helping verbs.' },
  { title: 'Adjectives', description: 'Discover how to use descriptive words effectively.' },
  { title: 'Adverbs', description: 'Learn to modify verbs, adjectives, and other adverbs.' },
  { title: 'Punctuation', description: 'Commas, periods, semicolons, and more, made simple.' },
  { title: 'Sentence Structure', description: 'Build simple, compound, complex, and compound-complex sentences.' },
  { title: 'Tenses', description: 'Grasp the past, present, and future tenses of verbs.' },
];

export default function LessonsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">Grammar Lessons</h1>
        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          Dive into our collection of grammar topics. Each lesson is designed to be clear, concise, and easy to follow.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {lessonTopics.map((topic) => (
          <Card key={topic.title} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="font-headline">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{topic.description}</p>
              <Link href="#" className="text-accent hover:text-accent/90 font-semibold mt-4 inline-block">Read More &rarr;</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
