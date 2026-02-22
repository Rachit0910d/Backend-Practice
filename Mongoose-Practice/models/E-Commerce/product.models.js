import mangoose from "mangoose";

const productSchema = new mangoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price:{
      type: Number,
      default: 0,
      required: true,
    },
    stock:{
      type: Number,
      default: 0,
      required: true,
    },
    category:{
      type: mangoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner:{
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  {
    timestamps: true,
  },
);

export const Product = mangoose.model("product", productSchema);
