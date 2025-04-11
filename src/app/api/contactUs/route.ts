// pages/api/contactUs.js

import prisma from "@/lib/prisma";

// src/app/api/contactUs/route.ts


export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Simple validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    // Create a new contact entry in the database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!', contact }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'An error occurred. Please try again later.' }), { status: 500 });
  }
}
