import { Header } from '../../../../components/header';
import { notFound } from 'next/navigation';

import ContentTopicSlug from '@/components/content_topicslug';

const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    description:
      'Learn the basics of React, including components, state, and props.',
    duration: '4 weeks',
    level: 'Beginner',
    image: '/placeholder.svg?height=400&width=600',
    topics: [
      {
        title: 'React Fundamentals',
        slug: 'react-fundamentals',
        description:
          'Master the core concepts of React to build a strong foundation.',
        lessons: [
          {
            title: 'Understanding JSX',
            duration: '15 min',
            content:
              'JSX is a syntax extension for JavaScript that looks similar to XML...',
          },
          {
            title: 'Components and Props',
            duration: '20 min',
            content:
              'React components are the building blocks of React applications...',
          },
          {
            title: 'State and Lifecycle',
            duration: '25 min',
            content:
              "State is a JavaScript object that stores a component's dynamic data...",
          },
          {
            title: 'Handling Events',
            duration: '20 min',
            content:
              'Handling events with React elements is very similar to handling events on DOM elements...',
          },
        ],
      },
      {
        title: 'Advanced React Concepts',
        slug: 'advanced-react-concepts',
        description: "Dive deeper into React's powerful features and patterns.",
        lessons: [
          {
            title: 'Hooks',
            duration: '30 min',
            content:
              'Hooks are functions that let you `hook into` React state and lifecycle features from function components...',
          },
          {
            title: 'Context API',
            duration: '25 min',
            content:
              'Context provides a way to pass data through the component tree without having to pass props down manually at every level...',
          },
          {
            title: 'Higher-Order Components',
            duration: '30 min',
            content:
              'A higher-order component is a function that takes a component and returns a new component...',
          },
          {
            title: 'Render Props',
            duration: '25 min',
            content:
              'The term `render prop` refers to a technique for sharing code between React components using a prop whose value is a function...',
          },
        ],
      },
    ],
  },
];

export async function generateStaticParams() {
  const paths = courses.flatMap((course) =>
    course.topics.map((topic) => ({
      id: course.id.toString(),
      topicSlug: topic.slug,
    }))
  );

  return paths;
}

export default function TopicDetail({
  params,
}: {
  params: { id: string; topicSlug: string };
}) {
  const course = courses.find((course) => course.id === parseInt(params.id));
  const topic = course?.topics.find((topic) => topic.slug === params.topicSlug);

  if (!course || !topic) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContentTopicSlug course={course} topic={topic} />
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  );
}
