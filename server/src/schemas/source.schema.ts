import { Schema } from "mongoose";

const sourceSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
      match: [
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        "URL inválida",
      ],
    },
  },
  {
    _id: false,
  }
);

export default sourceSchema;
