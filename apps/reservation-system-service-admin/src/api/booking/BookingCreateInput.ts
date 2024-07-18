import { ExperienceWhereUniqueInput } from "../experience/ExperienceWhereUniqueInput";

export type BookingCreateInput = {
  date?: Date | null;
  duration?: number | null;
  status?: "Option1" | null;
  confirmedByGuide?: boolean | null;
  user?: string | null;
  experience?: ExperienceWhereUniqueInput | null;
};
