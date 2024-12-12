export interface Lesson {
  slug: string;
  title: string;
  duration: string;
  content: string;
}

export interface Course {
  id: number;
  title: string;
  lessons: Lesson[];
}
