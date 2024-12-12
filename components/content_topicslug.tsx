'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

export default function ContentTopicSlug({
  course,
  topic,
}: {
  course: any;
  topic: any;
}) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const toggleLessonCompletion = (lessonTitle: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonTitle)
        ? prev.filter((title) => title !== lessonTitle)
        : [...prev, lessonTitle]
    );
  };

  const progress = (completedLessons.length / topic.lessons.length) * 100;

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href={`/courses/${course.id}`}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Course
      </Link>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{topic.description}</p>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">{course.duration}</Badge>
          <Badge variant="outline">{course.level}</Badge>
        </div>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
          <p className="mt-2 text-sm text-gray-600">
            {completedLessons.length} of {topic.lessons.length} lessons
            completed
          </p>
        </CardContent>
      </Card>
      <div className="space-y-6">
        {topic.lessons.map((lesson: any, index: any) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Lesson {index + 1}: {lesson.title}
              </CardTitle>
              <Badge variant="outline">{lesson.duration}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{lesson.content}</p>
              <button
                onClick={() => toggleLessonCompletion(lesson.title)}
                className={`px-4 py-2 rounded text-sm font-medium ${
                  completedLessons.includes(lesson.title)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                {completedLessons.includes(lesson.title)
                  ? 'Completed'
                  : 'Mark as Complete'}
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
