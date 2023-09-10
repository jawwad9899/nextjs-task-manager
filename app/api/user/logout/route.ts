import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  try {
    const response = NextResponse.json(
      { success: true, msg: "logout successful!" },
      { status: 200 }
    );
    response.cookies.set("token", "", {
      expires: new Date(0),
      httpOnly: true,
      secure: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, msg: "internal server error!", error: error.message },
      {
        status: 500,
      }
    );
  }
}
