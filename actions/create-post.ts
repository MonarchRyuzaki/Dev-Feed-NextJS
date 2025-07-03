"use server";

export async function createPost(
  state: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const content = formData.get("content");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  if (!title || !content) {
    return { message: "All fields are required" };
  }

  // Replace this with real DB logic
  console.log("Creating post on server:", { title, content });

  return { message: "Post Creation Successful" };
}
