import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SearchInputWhereInput = {
  id?: StringFilter;
  filters?: JsonFilter;
  query?: StringNullableFilter;
};
