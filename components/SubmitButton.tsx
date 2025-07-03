"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded"
      disabled={pending}
    >
      {pending ? "Posting..." : "Post"}
    </button>
  );
}
