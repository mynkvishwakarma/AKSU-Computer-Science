import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { employeeId, email } = body; // Changed to employeeId

    if (!employeeId || !email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the faculty exists in the database
    const faculty = await prisma.faculty.findUnique({
      where: {
        employeeId: employeeId, // Use employeeId instead of employeeCode
        email: email,
      },
    });

    if (!faculty) {
      return NextResponse.json(
        { success: false, message: "Invalid Employee ID or Email" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Verification successful",
    });
  } catch (error) {
    console.error("🚨 SERVER ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
