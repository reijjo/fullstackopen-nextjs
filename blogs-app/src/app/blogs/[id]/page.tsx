import { addLikeToBlog } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <h3>by {blog.author}</h3>
      <p>{blog.url}</p>
      <p>{blog.likes} likes</p>
      <form action={addLikeToBlog}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">Like this blog</button>
      </form>
    </div>
  );
}
