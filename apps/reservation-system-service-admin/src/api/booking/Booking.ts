import { Experience } from "../experience/Experience";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  duration: number | null;
  status?: "Option1" | null;
  confirmedByGuide: boolean | null;
  user: string | null;
  experience?: Experience | null;
};
