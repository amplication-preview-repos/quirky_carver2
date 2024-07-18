import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";
import { PlaceListRelationFilter } from "../place/PlaceListRelationFilter";

export type SubSubcategoryWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  subcategory?: SubcategoryWhereUniqueInput;
  places?: PlaceListRelationFilter;
};
