import { Header } from '../../../../components/header';
import ContentTag from '../../../../components/contenttag';

const posts = [
  {
    title: 'Getting Started with Golang',
    excerpt:
      'Learn the basics of Go programming language and its key features.',
    date: '2023-05-15',
    slug: 'getting-started-with-golang',
    tags: ['golang', 'programming'],
  },
  {
    title: 'Building RESTful APIs with Golang',
    excerpt:
      'Explore how to create efficient and scalable RESTful APIs using Go.',
    date: '2023-05-22',
    slug: 'building-restful-apis-with-golang',
    tags: ['golang', 'api', 'backend'],
  },
  {
    title: 'JavaScript ES6 Features',
    excerpt: 'Discover the powerful features introduced in ECMAScript 6.',
    date: '2023-05-29',
    slug: 'javascript-es6-features',
    tags: ['javascript', 'frontend'],
  },
];

export async function generateStaticParams() {
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).map((tag) => ({
    tag,
  }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;
  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <ContentTag post={filteredPosts} tag={tag} />

      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2024 Sanedge Blog. All rights reserved.
      </footer>
    </div>
  );
}
