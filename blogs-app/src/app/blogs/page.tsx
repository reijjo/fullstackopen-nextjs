import Link from "next/link";
import { getBlogs } from "../services/blogs";

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;

  const allBlogs = getBlogs();
  const mostLikesOnTop = allBlogs.sort((a, b) => b.likes - a.likes);

  const filterBlogByTitle = (filter?: string) => {
    if (!filter) return mostLikesOnTop;

    return mostLikesOnTop.filter((blog) => blog.title.includes(filter));
  };

  const blogs = filterBlogByTitle(filter);

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
