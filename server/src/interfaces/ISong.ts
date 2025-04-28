
import { Status } from "../enums/Status.enums";

export interface ISong {
  title: string;
  artist: string;
  sources: String[];
  status: Status;
  createdAt?: Date;
  updatedAt?: Date;
}
