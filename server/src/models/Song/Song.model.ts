import { model } from "mongoose";
import { ISong } from "../../interfaces/ISong";
import songSchema from "../../schemas/song.schema";

const song = model<ISong>("song", songSchema, 'songs');
export default song;