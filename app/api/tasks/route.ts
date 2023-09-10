import UserModel from "@/app/models/UserModel";
import verifyToken from "@/helper/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    // verify the user
    const verifiedUser: any = await verifyToken(token);
    // save the task to the corresponding user's array
    let user = await UserModel.findById(verifiedUser?._id);

    return NextResponse.json(
      { success: true, tasks: user.tasks },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, msg: "internal server error!", error: error.message },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const task = await request.json();
    const token = request.cookies.get("token")?.value || "";
    // console.log(task);
    // verify the user
    const verifiedUser: any = await verifyToken(token);
    // save the task to the corresponding user's array
    let user = await UserModel.findById(verifiedUser?._id);
    // push the tasks into corresponding user's array
    user.tasks.push(task);
    // save the user
    user = await user.save();

    return NextResponse.json(
      { success: true, msg: "Task++ 😊" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, msg: "internal server error!", error: error.message },
      { status: 500 }
    );
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const _id = request.nextUrl.searchParams.get("rq_id");
    // console.log(txt);
    // verify the user
    const verifiedUser: any = await verifyToken(token);
    await UserModel.updateOne(
      { _id: verifiedUser._id },
      { $pull: { tasks: { _id } } }
    );

    return NextResponse.json(
      { success: true, msg: "deleted!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, msg: "internal server error!", error: error.message },
      { status: 500 }
    );
  }
}
