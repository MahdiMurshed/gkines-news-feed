import { getPosts } from "@/actions/posts";
import PostsClient from "@/components/posts/PostsClient";

export default async function Home() {
  const data = await getPosts(0, 10)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white shadow-sm max-w-3xl mx-auto">
      <PostsClient initialPosts={data} />
    </main>
  );
}
