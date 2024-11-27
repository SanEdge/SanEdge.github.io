'use client'

import { useState } from 'react'
import { Header } from '../../components/header'
import { BlogPost } from '../../components/blog-post'

// This is sample data. In a real application, you'd fetch this from an API or database.
const posts = [
  {
    title: "Getting Started with Golang",
    excerpt: "Learn the basics of Go programming language and its key features.",
    date: "2023-05-15",
    slug: "getting-started-with-golang",
    tags: ["golang", "programming"]
  },
  {
    title: "Building RESTful APIs with Golang",
    excerpt: "Explore how to create efficient and scalable RESTful APIs using Go.",
    date: "2023-05-22",
    slug: "building-restful-apis-with-golang",
    tags: ["golang", "api", "backend"]
  },
  {
    title: "JavaScript ES6 Features",
    excerpt: "Discover the powerful features introduced in ECMAScript 6.",
    date: "2023-05-29",
    slug: "javascript-es6-features",
    tags: ["javascript", "frontend"]
  }
]

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by tag:</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1 rounded ${
                  tag === selectedTag
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          {filteredPosts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-gray-600">No posts found for the selected tag.</p>
        )}
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  )
}

