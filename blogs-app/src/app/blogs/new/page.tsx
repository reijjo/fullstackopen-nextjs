import { createBlog } from "@/app/actions/blogs";

export default function NewBlog() {
  return (
    <div>
      <h2>Create new blog</h2>
      <form action={createBlog}>
        <div>
          <label>
            Title
            <input type="text" name="title" required />
          </label>
        </div>
        <div>
          <label>
            Author
            <input type="text" name="author" required />
          </label>
        </div>
        <div>
          <label>
            Url
            <input type="text" name="url" required />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
