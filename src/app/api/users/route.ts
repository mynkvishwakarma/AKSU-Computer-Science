import { createUserWithAccount, getUserByEmail } from "@/utils/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const POST = async (req: Request) => {
    try {
        const { name, email, mobileNumber, password } = await req.json();
        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return NextResponse.json({
                message: 'Email is already in use.'
            }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUserWithAccount({
            name,
            email,
            mobileNumber, // New Field
            password: hashedPassword
        });

        return NextResponse.json({
            message: "User Created.",
            data: { ...newUser }
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            message: "Error",
            error
        }, { status: 500 });
    }
}
