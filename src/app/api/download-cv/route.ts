import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const cvPath = join(process.cwd(), "public", "cv.txt");
    const file = await readFile(cvPath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": 'attachment; filename="Nicolas-Godinho-CV.txt"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "CV not found" }, { status: 404 });
  }
}
