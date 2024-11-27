'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Header } from '../../../components/header'
import { ArrowLeft } from 'lucide-react'

// This is sample data. In a real application, you'd fetch this from an API or database.
const posts = [
  {
    title: "Getting Started with Golang",
    content: `
# Getting Started with Golang

Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. It's a statically typed, compiled language in the tradition of C, with memory safety, garbage collection, structural typing, and CSP-style concurrency.

## Key Features of Go

1. **Simplicity**: Go is designed to be easy to learn and understand.
2. **Fast compilation**: Go compiles quickly to machine code.
3. **Garbage collection**: Go manages memory allocation and deallocation automatically.
4. **Built-in concurrency**: Go has built-in support for concurrent programming.
5. **Standard library**: Go comes with a rich standard library.

## Getting Started

To get started with Go, you'll need to:

1. Install Go on your machine
2. Set up your Go workspace
3. Write your first Go program
4. Compile and run your program

Here's a simple 'Hello, World!' program in Go:

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

This program will print 'Hello, World!' to the console when run.

Go is an excellent language for building web servers, network programming, and developing large-scale distributed systems. Its simplicity and efficiency make it a popular choice for both beginners and experienced developers.
    `,
    date: "2023-05-15",
    slug: "getting-started-with-golang",
    tags: ["golang", "programming"]
  },
  {
    title: "Building RESTful APIs with Golang",
    content: "This is a placeholder for the full content of the 'Building RESTful APIs with Golang' post.",
    date: "2023-05-22",
    slug: "building-restful-apis-with-golang",
    tags: ["golang", "api", "backend"]
  },
  {
    title: "JavaScript ES6 Features",
    content: "This is a placeholder for the full content of the 'JavaScript ES6 Features' post.",
    date: "2023-05-29",
    slug: "javascript-es6-features",
    tags: ["javascript", "frontend"]
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between mb-6">
            <time className="text-gray-600">{post.date}</time>
            <div className="flex space-x-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="prose prose-gray max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  )
}

