import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, employeeId, department, designation } = await req.json();

    if (!name || !email || !employeeId || !department || !designation) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    const faculty = await prisma.faculty.create({
      data: {
        name,
        email,
        employeeId,
        department,
        designation,
      },
    });

    return new Response(JSON.stringify({ message: 'Faculty added successfully!', faculty }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'An error occurred. Please try again later.' }), { status: 500 });
  }
}


export async function GET() {
  try {
    const faculty = await prisma.faculty.findMany();
    return new Response(JSON.stringify(faculty), { status: 200 });
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return new Response(JSON.stringify({ error: "Failed to retrieve faculty data" }), { status: 500 });
  }
}



