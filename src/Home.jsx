import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum dolor...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party",
      body: "Lorem ipsum dolor...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum dolor...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2 className="blog-title">{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
