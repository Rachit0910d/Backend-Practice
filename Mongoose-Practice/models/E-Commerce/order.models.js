import mangoose from "mangoose";

const orderItemSchema = new mangoose.Schema({
  productId: {
    type: mangoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    required: true,
  },
});

const orderSchema = new mangoose.Schema(
  {
    orderPrice: {
      type: Number,
      default: 0,
      required: true,
    },
    customer: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: {
      type: [orderItemSchema],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Canceled", "Shipped", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

export const Order = mangoose.model("Order", orderSchema);
