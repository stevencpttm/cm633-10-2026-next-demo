import Like from "@/components/Like";
import Link from "next/link";

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
          return (
            <li key={post.id}>
              <Link
                href={`/post/${post.id}`}
                className="underline text-blue-500"
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
