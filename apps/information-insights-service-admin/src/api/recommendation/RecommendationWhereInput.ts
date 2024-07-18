import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type RecommendationWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  details?: StringNullableFilter;
  place?: PlaceWhereUniqueInput;
};
