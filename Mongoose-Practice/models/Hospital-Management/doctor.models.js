import mangoose from "mangoose";

const doctorSchema = new mangoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    worksInHospitals: [
      {
        type: mangoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export const Doctor = mangoose.model("Doctor", doctorSchema);
