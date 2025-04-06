import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const dbs = await client.db().admin().listDatabases();
    return NextResponse.json(dbs);
  } catch (err: any) {
    console.error("TEST MONGO CONNECTION ERROR:", err);
    return NextResponse.json({ error: "MongoDB test failed" }, { status: 500 });
  }
}