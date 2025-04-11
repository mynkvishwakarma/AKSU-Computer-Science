import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { employeeId, mobileNumber, password } = await req.json();

    if (!employeeId || !mobileNumber || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update faculty details
    const updatedFaculty = await prisma.faculty.update({
      where: { employeeId },
      data: { mobileNumber, password: hashedPassword },
    });

    return NextResponse.json({
      success: true,
      message: "Details updated successfully!",
      faculty: updatedFaculty,

    });
  } catch (error) {
    console.error("🚨 ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update details.", error: error.message },
      { status: 500 }
    );
  }
}
