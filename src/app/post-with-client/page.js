"use client";

import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    setPosts(data);
  };

  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}

export default Home;
