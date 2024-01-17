import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide Full Name"],
    },
    email: {
      type: String,
      required: [true, "Please provide Email Id"],
      unique: [true, "Email ID already exists, please Log In"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
