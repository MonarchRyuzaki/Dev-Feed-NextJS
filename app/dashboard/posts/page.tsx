import BlogCard from "@/components/BlogCard";

export default async function MyPosts() {
  const res = await fetch("https://dummyjson.com/posts/user/1");
  const { posts } = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
