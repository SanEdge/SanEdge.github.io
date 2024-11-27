export interface Post {
  title: string;
  content: string;
  date: string;
  tags: string[];
}



export interface PostTag {
    title: string
    excerpt: string
    date: string
    slug: string
    tags: string[]
  }
  

export interface ContentBlogProps {
  post: Post;
}
