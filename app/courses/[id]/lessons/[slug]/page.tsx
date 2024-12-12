import { Header } from '../../../../../components/header';
import { notFound } from 'next/navigation';

import ContentLesson from '@/components/contentlesson';

// This is sample data. In a real application, you'd fetch this from an API or database.
const courses = [
  {
    id: 1,
    title: 'Introduction to React',
    lessons: [
      {
        title: 'Understanding JSX',
        slug: 'understanding-jsx',
        duration: '15 min',
        content: `
# Understanding JSX

JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It's not required for writing React applications, but it makes the code more readable and writing it more efficient.

## Why JSX?

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called "components" that contain both.

## JSX Syntax

Here's a basic example of JSX:

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`

This funny tag syntax is neither a string nor HTML. It's called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like.

## JSX Represents Objects

Babel compiles JSX down to \`React.createElement()\` calls.

These two examples are identical:

\`\`\`jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
\`\`\`

\`\`\`jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
\`\`\`

\`React.createElement()\` performs a few checks to help you write bug-free code but essentially it creates an object like this:

\`\`\`jsx
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
\`\`\`

These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

## Conclusion

JSX is a powerful feature in React that allows you to write HTML-like syntax directly in your JavaScript code. It makes your React code more readable and easier to understand at a glance. As you continue to learn React, you'll see how JSX becomes an indispensable tool in your development process.
        `,
      },
    ],
  },
];

export async function generateStaticParams() {
  const paths = courses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      id: course.id.toString(),
      slug: lesson.slug,
    }))
  );
  return paths;
}

export default function LessonDetail({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const course = courses.find((course) => course.id === parseInt(params.id));
  const lesson = course?.lessons.find((lesson) => lesson.slug === params.slug);

  if (!course || !lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContentLesson course={course} lesson={lesson} />
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  );
}
