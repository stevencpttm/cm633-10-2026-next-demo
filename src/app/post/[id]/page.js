export const instant = false;

async function Post({ params }) {
  const data = await params;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + data.id,
    {
      next: { revalidate: 60 },
    },
  );
  const post = await response.json();

  return (
    <div>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}

export default Post;
