import { addLikeToBlog } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6 flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <h3 className="text-xl">by {blog.author}</h3>
      <p>{blog.url}</p>
      <p>{blog.likes} likes</p>
      <form action={addLikeToBlog}>
        <input type="hidden" name="id" value={blog.id} />
        <button
          className="border rounded-sm px-2 py-1 bg-olive-200 cursor-pointer hover:bg-olive-100"
          type="submit"
        >
          Like this blog
        </button>
      </form>
    </div>
  );
}
