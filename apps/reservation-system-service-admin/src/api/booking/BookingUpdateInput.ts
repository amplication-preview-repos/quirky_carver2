import { ExperienceWhereUniqueInput } from "../experience/ExperienceWhereUniqueInput";

export type BookingUpdateInput = {
  date?: Date | null;
  duration?: number | null;
  status?: "Option1" | null;
  confirmedByGuide?: boolean | null;
  user?: string | null;
  experience?: ExperienceWhereUniqueInput | null;
};
