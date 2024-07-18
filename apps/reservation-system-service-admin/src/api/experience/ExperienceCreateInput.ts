import { InputJsonValue } from "../../types";
import { GuideWhereUniqueInput } from "../guide/GuideWhereUniqueInput";
import { BookingCreateNestedManyWithoutExperiencesInput } from "./BookingCreateNestedManyWithoutExperiencesInput";

export type ExperienceCreateInput = {
  title?: string | null;
  duration?: number | null;
  price?: number | null;
  pricingRule?: InputJsonValue;
  description?: string | null;
  guide?: GuideWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutExperiencesInput;
};
