import UserModel from "@/app/models/UserModel";
import connectDB from "@/helper/conn";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    // check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { msg: "create an account first!", success: false },
        { status: 404 }
      );
    }

    // compare the password and hash
    const isPassword = await bcryptjs.compare(password, user.password);
    if (!isPassword) {
      return NextResponse.json(
        { msg: "invalid credentials!", success: false },
        { status: 400 }
      );
    }

    // setup cookies
    let response = NextResponse.json({ success: true }, { status: 200 });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
    });

    return response;
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { msg: "internal server error!", error: error.message, success: false },
      { status: 500 }
    );
  }
}
