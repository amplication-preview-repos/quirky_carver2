import { JsonValue } from "type-fest";
import { Experience } from "../experience/Experience";

export type Guide = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  availability: JsonValue;
  coverage: JsonValue;
  name: string | null;
  bio: string | null;
  experiences?: Array<Experience>;
};
