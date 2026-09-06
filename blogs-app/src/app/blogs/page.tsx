const blogs = [
  {
    id: 1,
    title: "Ostakaa makkaraa",
    author: "Sepi Kumpulainen",
    url: "www.sepi.com",
    likes: 10,
  },
  {
    id: 2,
    title: "Aina voi luovuttaa",
    author: "Reijjo",
    url: "www.reijjo.com",
    likes: 5,
  },
];

export default function Blogs() {
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
