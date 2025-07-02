"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <div className="font-bold text-xl">
        <Link href="/">DevFeed</Link>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile/johndoe">Profile</Link>
      </div>
    </nav>
  );
}
