import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("📡 API HIT");

    const client = await clientPromise;
    console.log("✅ Connected to MongoDB");

    const db = client.db("sample_mflix");
    const collection = db.collection("comments");

    const count = await collection.countDocuments();
    console.log("📊 Total docs in collection:", count);

    const data = await collection.find({}).toArray();
    console.log("📦 Fetched data:", data);

    const safeData = data.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
    }));

    return NextResponse.json(safeData);
  } catch (err: any) {
    console.error("🔥 FETCH ERROR:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}