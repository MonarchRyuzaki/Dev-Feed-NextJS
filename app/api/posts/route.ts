import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return Response.json(
    { posts: data },
    {
      status: 200,
    }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Optional: Basic validation
  if (!body.title || !body.content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Simulate DB logic (replace with real DB later)
  console.log("Saving post:", body);

  return NextResponse.json({ message: "Post saved!" }, { status: 200 });
}
