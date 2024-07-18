import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SubSubcategoryListRelationFilter } from "../subSubcategory/SubSubcategoryListRelationFilter";
import { PlaceListRelationFilter } from "../place/PlaceListRelationFilter";

export type SubcategoryWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  subSubcategories?: SubSubcategoryListRelationFilter;
  places?: PlaceListRelationFilter;
};
