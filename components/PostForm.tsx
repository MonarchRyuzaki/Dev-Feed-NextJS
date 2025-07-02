"use client";
import { useState } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form className="max-w-xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded h-40"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
