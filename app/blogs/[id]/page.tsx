import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <Link href="/" className="text-blue-600 underline">
        ← Back to home
      </Link>
    </div>
  );
}
