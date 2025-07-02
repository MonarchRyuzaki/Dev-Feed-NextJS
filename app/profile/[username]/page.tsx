import BlogCard from "@/components/BlogCard";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const userRes = await fetch("https://dummyjson.com/users/1");
  const user = await userRes.json();
  const postsRes = await fetch("https://dummyjson.com/posts/user/1");
  const { posts } = await postsRes.json();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600 mb-6">@{username}</p>

      <h2 className="text-xl font-semibold mb-2">Posts by {user.firstName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
