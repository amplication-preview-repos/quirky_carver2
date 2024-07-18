import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExperienceWhereUniqueInput } from "../experience/ExperienceWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
  status?: "Option1";
  confirmedByGuide?: BooleanNullableFilter;
  user?: StringNullableFilter;
  experience?: ExperienceWhereUniqueInput;
};
