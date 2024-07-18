import { Place } from "../place/Place";

export type Recommendation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  details: string | null;
  place?: Place | null;
};
