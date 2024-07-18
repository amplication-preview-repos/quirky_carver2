import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";
import { SubSubcategoryWhereUniqueInput } from "../subSubcategory/SubSubcategoryWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type PlaceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: JsonFilter;
  typeField?: "Option1";
  subcategory?: SubcategoryWhereUniqueInput;
  subSubcategory?: SubSubcategoryWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  recommendations?: RecommendationListRelationFilter;
};
