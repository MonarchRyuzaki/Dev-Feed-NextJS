import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await res.json();
  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
      url: `https://yourdomain.com/blogs/${id}`,
      images: [
        {
          url: `https://dummyjson.com/posts/${id}/image`, // Replace with actual image URL if available
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body,
      images: [`https://dummyjson.com/posts/${id}/image`], // Replace with actual image URL if available
    }
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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
