import { verifyJwt } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const user = token ? await verifyJwt(token) : null;

  if (!user) return NextResponse.json({ loggedIn: false });

  return NextResponse.json({ loggedIn: true, user });
}
