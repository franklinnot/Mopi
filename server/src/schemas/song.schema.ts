import { Schema } from "mongoose";
import { Status } from "../enums/Status.enums";
import sourceSchema from "./source.schema";
import { ISong } from "../interfaces/ISong";

const songSchema = new Schema<ISong>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    artist: {
      type: String,
      required: true,
      trim: true,
      maxlength: 64,
    },
    sources: {
      type: [sourceSchema],
      required: true,
      validate: {
        validator: (v: Array<any>) => v.length > 0,
        message: "Debe haber al menos una fuente",
      },
    },
    status: {
      type: String,
      required: true,
      trim: true,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

// Metodo de instancia
songSchema.methods.getFormattedTitle = function () {
  return `${this.artist} - ${this.title}`;
};

// Middleware (hook)
songSchema.pre('save', function(next) {
  console.log('Guardando canción...');
  next();
});

export default songSchema;