import mangoose from "mangoose";

const patientSchema = new mangoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnoseWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    addmitedIn: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true,
    },
  },
  { timestamps: true },
);

export const Patient = mangoose.model("Patient", patientSchema);
