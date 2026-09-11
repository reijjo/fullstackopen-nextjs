import Link from "next/link";
import { getBlogs } from "../services/blogs";

export default function Blogs() {
  const blogs = getBlogs();

  return (
    <main>
      <h2>Blogs</h2>
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
