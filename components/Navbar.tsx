"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();
        setIsLoggedIn(data?.loggedIn ?? false);
      } catch (err) {
        console.error("Failed to check login status", err);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);
  const login = async () => {
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
    if (res.ok) location.reload();
  };
  const logout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    location.reload();
  };
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <div className="font-bold text-xl">
        <Link href="/">DevFeed</Link>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
}
