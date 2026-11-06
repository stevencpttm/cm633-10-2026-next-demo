import Like from "@/components/Like";

async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await response.json();

  return (
    <div>
      <Like />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Home;
