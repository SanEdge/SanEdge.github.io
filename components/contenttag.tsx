"use client"
import React from "react";
import { BlogPost } from './blog-post';
import { PostTag } from "../interfaces/Posts";

interface ContentTagProps {
  post: PostTag[];
  tag: string;
}

export default function ContentTag({ post, tag }: ContentTagProps) {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Posts tagged with {tag}</h1>
      <div className="space-y-12">
        {post.map((postItem) => (
          <BlogPost
            key={postItem.slug}
            title={postItem.title}
            excerpt={postItem.excerpt}
            date={postItem.date}
            slug={postItem.slug}
            tags={postItem.tags}
          />
        ))}
      </div>
      {post.length === 0 && (
        <p className="text-gray-600">No posts found for this tag.</p>
      )}
    </main>
  );
}