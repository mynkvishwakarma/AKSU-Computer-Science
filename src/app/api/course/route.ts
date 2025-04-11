// pages/api/users/course.ts
import { updateUserCourse } from "@/utils/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { email, courseCategory, course } = await req.json();

    // updateUserCourse should be a function that updates the user record with course details
    const updatedUser = await updateUserCourse(email, { courseCategory, course });
    
    return NextResponse.json({
      message: "Course selection updated.",
      data: updatedUser,
    }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({
      message: "Error updating course selection.",
      error,
    }, { status: 500 });
  }
};
