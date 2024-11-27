import Link from 'next/link'
import { PostTag } from "../interfaces/Posts"


export function BlogPost({ title, excerpt, date, slug, tags }: PostTag) {
  return (
    <article className="mb-12">
      <Link href={`/blog/${slug}`} className="block">
        <h2 className="text-2xl font-semibold mb-2 hover:text-gray-600 transition-colors">
          {title}
        </h2>
      </Link>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        <time className="text-sm text-gray-500">{date}</time>
        <div className="flex space-x-2">
          {tags.map((tag) => (
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
    </article>
  )
}

