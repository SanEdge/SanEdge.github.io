import { Header } from '../../components/header';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ImageExample from '../../images/example.png';

const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description:
      'Learn the basics of React, including components, state, and props.',
    duration: '4 weeks',
    level: 'Beginner',
    image: ImageExample,
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative pt-[56.25%]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <Badge variant="secondary">{course.duration}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6">
                <Link
                  href={`/courses/${course.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  );
}
