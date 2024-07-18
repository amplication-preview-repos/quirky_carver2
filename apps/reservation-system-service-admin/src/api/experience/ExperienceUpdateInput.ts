import { InputJsonValue } from "../../types";
import { GuideWhereUniqueInput } from "../guide/GuideWhereUniqueInput";
import { BookingUpdateManyWithoutExperiencesInput } from "./BookingUpdateManyWithoutExperiencesInput";

export type ExperienceUpdateInput = {
  title?: string | null;
  duration?: number | null;
  price?: number | null;
  pricingRule?: InputJsonValue;
  description?: string | null;
  guide?: GuideWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutExperiencesInput;
};
