import samplePic from "@/public/sample.avif";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: any }) {
  return (
    <div className="border p-4 rounded hover:shadow transition">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
      <Image
        src={samplePic}
        alt="Sample Picture"
        width={500}
        height={300}
        placeholder="blur"
      />
      <Link
        href={`/blogs/${post.id}`}
        className="text-blue-500 text-sm mt-2 inline-block"
      >
        Read More →
      </Link>
    </div>
  );
}
