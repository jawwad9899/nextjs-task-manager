import connectDB from "@/helper/conn";
import { NextRequest, NextResponse } from "next/server";
import verifyToken from "@/helper/verifyToken";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const token: any = request.cookies.get("token")?.value || "";
    if (token) {
      // grab the user from token
      const user = await verifyToken(token);

      return NextResponse.json({ success: true, user }, { status: 200 });
    }
    return NextResponse.json(
      { success: false, msg: "jwt token must be provided!" },
      { status: 400 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { msg: "internal server error!", error: error.message, success: false },
      { status: 500 }
    );
  }
}
