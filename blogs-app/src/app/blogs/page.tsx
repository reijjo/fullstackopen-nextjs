import { getBlogs } from "../services/blogs";

export default function Blogs() {
  const blogs = getBlogs();

  return (
    <main>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} by {blog.author} - {blog.likes} likes
          </li>
        ))}
      </ul>
    </main>
  );
}
