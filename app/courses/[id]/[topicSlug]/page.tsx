'use client'

import { useState } from 'react'
import { Header } from '../../../../components/header'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// This is sample data. In a real application, you'd fetch this from an API or database.
const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React, including components, state, and props.",
    duration: "4 weeks",
    level: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    topics: [
      {
        title: "React Fundamentals",
        slug: "react-fundamentals",
        description: "Master the core concepts of React to build a strong foundation.",
        lessons: [
          { title: "Understanding JSX", duration: "15 min", content: "JSX is a syntax extension for JavaScript that looks similar to XML..." },
          { title: "Components and Props", duration: "20 min", content: "React components are the building blocks of React applications..." },
          { title: "State and Lifecycle", duration: "25 min", content: "State is a JavaScript object that stores a component's dynamic data..." },
          { title: "Handling Events", duration: "20 min", content: "Handling events with React elements is very similar to handling events on DOM elements..." }
        ]
      },
      {
        title: "Advanced React Concepts",
        slug: "advanced-react-concepts",
        description: "Dive deeper into React's powerful features and patterns.",
        lessons: [
          { title: "Hooks", duration: "30 min", content: "Hooks are functions that let you "hook into" React state and lifecycle features from function components..." },
          { title: "Context API", duration: "25 min", content: "Context provides a way to pass data through the component tree without having to pass props down manually at every level..." },
          { title: "Higher-Order Components", duration: "30 min", content: "A higher-order component is a function that takes a component and returns a new component..." },
          { title: "Render Props", duration: "25 min", content: "The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function..." }
        ]
      },
      // ... other topics
    ]
  },
  // ... other courses
]

export default function TopicDetail({ params }: { params: { id: string; topicSlug: string } }) {
  const course = courses.find(course => course.id === parseInt(params.id))
  const topic = course?.topics.find(topic => topic.slug === params.topicSlug)

  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  if (!course || !topic) {
    notFound()
  }

  const toggleLessonCompletion = (lessonTitle: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonTitle) 
        ? prev.filter(title => title !== lessonTitle)
        : [...prev, lessonTitle]
    )
  }

  const progress = (completedLessons.length / topic.lessons.length) * 100

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href={`/courses/${course.id}`} className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
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
            <p className="mt-2 text-sm text-gray-600">{completedLessons.length} of {topic.lessons.length} lessons completed</p>
          </CardContent>
        </Card>
        <div className="space-y-6">
          {topic.lessons.map((lesson, index) => (
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
                  {completedLessons.includes(lesson.title) ? 'Completed' : 'Mark as Complete'}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  )
}

