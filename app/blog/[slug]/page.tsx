import { notFound } from 'next/navigation'
import { Header } from '../../../components/header'
import ContentBlog from "../../../components/contentblog";

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

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContentBlog post={post} />
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2023 Minimalist Blog. All rights reserved.
      </footer>
    </div>
  )
}

