import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubcategoryListRelationFilter } from "../subcategory/SubcategoryListRelationFilter";
import { PlaceListRelationFilter } from "../place/PlaceListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  subcategories?: SubcategoryListRelationFilter;
  places?: PlaceListRelationFilter;
};
