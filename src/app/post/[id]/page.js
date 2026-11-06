export const instant = false;

async function Post({ params }) {
  const data = await params;

  return <h1>Post detail page ({data.id})</h1>;
}

export default Post;
