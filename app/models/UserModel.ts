import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required!"],
    },
    email: {
      type: String,
      required: [true, "Email Is Required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password Is Required!"],
    },
    tasks: [
      {
        taskName: {
          type: String,
          unique: true,
        },
        taskDescription: {
          type: String,
          unique: true,
        },
        img: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.users || mongoose.model("users", UserSchema);
