import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide Full Name"],
    },
    description: {
      type: String,
      required: [true, "Please provide Description"],
    },
    price: {
      type: String,
      required: [true, "Please provide price"],
    },
    orderedBy: {
      type: String,
      required: [true, "Please provide Email Id"],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
