import Link from "next/link";
import { filterBlogByTitle, getBlogs } from "../services/blogs";

type BlogsProps = {
  searchParams: Promise<{ filter?: string }>;
};

export default async function Blogs({ searchParams }: BlogsProps) {
  const { filter } = await searchParams;

  const allBlogs = await getBlogs();
  const mostLikesOnTop = allBlogs.sort((a, b) => b.likes - a.likes);

  const blogs = filterBlogByTitle(mostLikesOnTop, filter);

  return (
    <main>
      <h2>Blogs</h2>
      <form>
        <input type="text" placeholder="Search a blog" name="filter" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            <p>
              by {blog.author} - {blog.likes} likes
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
