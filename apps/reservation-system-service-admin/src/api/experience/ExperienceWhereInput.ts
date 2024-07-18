import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { GuideWhereUniqueInput } from "../guide/GuideWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type ExperienceWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  duration?: IntNullableFilter;
  price?: FloatNullableFilter;
  pricingRule?: JsonFilter;
  description?: StringNullableFilter;
  guide?: GuideWhereUniqueInput;
  bookings?: BookingListRelationFilter;
};
