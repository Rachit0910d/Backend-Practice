import mangoose from "mangoose";

const medicalRecordSchema = new mangoose.Schema(
  {
    totalRecord: {
      type: Number,
      required: true,
    },
    patient: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctor: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  { timestamps: true },
);

export const MedicalRecord = mangoose.model(
  "MedicalRecord",
  medicalRecordSchema,
);
