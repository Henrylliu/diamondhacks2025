import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix"); // Update to your actual DB name
    const data = await db.collection("math-questions").find({}).toArray();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("MONGODB FETCH ERROR:", err);
    return NextResponse.json({ error: "Failed to fetch progress" }, { status: 500 });
  }
}