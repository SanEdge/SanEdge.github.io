import { Header } from '../../../components/header';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ImageExample from '../../../images/example.png';

const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description:
      'Learn the basics of React, including components, state, and props.',
    longDescription:
      "This comprehensive course will take you from a beginner to a confident React developer. You'll learn how to build dynamic user interfaces with React's component-based architecture, manage application state effectively, and create responsive and interactive web applications.",
    duration: '4 weeks',
    level: 'Beginner',
    image: ImageExample,
    lessons: [
      {
        title: 'Understanding JSX',
        slug: 'understanding-jsx',
        duration: '15 min',
      },
    ],
  },
];

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = courses.find((course) => course.id === parseInt(params.id));

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/courses"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{course.description}</p>
            <div className="prose max-w-none mb-8">
              <p>{course.longDescription}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
              <div className="space-y-4">
                {course.lessons.map((lesson, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <h3 className="text-lg font-medium">
                        Lesson {index + 1}: {lesson.title}
                      </h3>
                      <Badge variant="outline">{lesson.duration}</Badge>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/courses/${course.id}/lessons/${lesson.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read Lesson →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader className="p-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{course.duration}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  );
}
