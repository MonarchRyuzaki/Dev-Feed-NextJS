"use client";
import { useAuthStore } from "@/providers/auth-store-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { login, logout, checkAuth, isLoggedIn } = useAuthStore(
    (store) => store
  );
  const router = useRouter();
  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "shivam@devfeed.com",
        password: "pass123",
      }),
    });
    const data = await res.json();
    login(data.user);
    router.refresh();
  };
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <div className="font-bold text-xl">
        <Link href="/">DevFeed</Link>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
}
