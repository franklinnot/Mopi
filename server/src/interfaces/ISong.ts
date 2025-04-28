import { ISource } from "./ISource";
import { Status } from "../enums/Status.enums";

export interface ISong {
  title: string;
  artist: string;
  sources: ISource[];
  status: Status;
  createdAt?: Date;
  updatedAt?: Date;
}
