'use client'
import { createPost } from "@/actions/create-post";
import { SubmitButton } from "@/components/SubmitButton";
import { useFormState } from "react-dom";

export default function NewPostPage() {
  const initialState = { message: "" };
  const [state, formAction] = useFormState(createPost, initialState);
  return (
    <form action={formAction} className="space-y-4 max-w-md mx-auto mt-8">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border p-2 rounded w-full"
      />
      <textarea
        name="content"
        placeholder="Content"
        className="border p-2 rounded w-full"
      />
      {state.message && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}
      <SubmitButton />
    </form>
  );
}
