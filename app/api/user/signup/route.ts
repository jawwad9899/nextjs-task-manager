import UserModel from "@/app/models/UserModel";
import connectDB from "@/helper/conn";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    // check if user already exists
    const duplicate = await UserModel.findOne({ name, email });
    if (duplicate) {
      return NextResponse.json(
        { msg: "user already exists!", success: false },
        { status: 400 }
      );
    }

    // hash the user password
    const salt = await bcryptjs.genSalt(10);
    const passHash = await bcryptjs.hash(password, salt);

    let result = new UserModel({
      name,
      email,
      password: passHash,
    });
    result = await result.save();

    return NextResponse.json({ success: true, result }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error, success: false }, { status: 500 });
  }
}
