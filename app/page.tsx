import BlogCard from "@/components/BlogCard";

const HomePage = async () => {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();
  const posts = data.posts;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post: any) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default HomePage;
