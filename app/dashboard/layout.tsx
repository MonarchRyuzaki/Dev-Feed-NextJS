import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <aside className="w-48 p-4 bg-gray-100 rounded h-fit sticky top-4">
        <nav className="space-y-2 text-sm">
          <Link href="/dashboard" className="block hover:underline">
            Overview
          </Link>
          <Link href="/dashboard/posts" className="block hover:underline">
            My Posts
          </Link>
          <Link href="/dashboard/create" className="block hover:underline">
            Create Post
          </Link>
        </nav>
      </aside>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
