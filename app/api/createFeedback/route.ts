import { NextResponse } from "next/server";
import { createFeedback } from "@/lib/action/general.action";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await createFeedback(body);
  return NextResponse.json(result);
}
