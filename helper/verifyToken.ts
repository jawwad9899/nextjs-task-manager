import UserModel from "@/app/models/UserModel";
import jwt from "jsonwebtoken";

export default async function verifyToken(token: string) {
  try {
    // verify the user
    const verifiedUser: any = jwt.verify(token, process.env.JWT_SECRET!);
    // get the user
    const user = await UserModel.findById(verifiedUser.id).select(
      "-password -createdAt -updatedAt -__v"
    );
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
