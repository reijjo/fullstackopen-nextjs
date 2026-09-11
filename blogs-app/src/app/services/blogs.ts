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

let nextId = 3;

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 });
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};
