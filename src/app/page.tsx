import PostCard from "@/components/posts/PostCard";
import Posts from "@/components/posts/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white shadow-sm max-w-3xl mx-auto">
      <Posts />
    </main>
  );
}
