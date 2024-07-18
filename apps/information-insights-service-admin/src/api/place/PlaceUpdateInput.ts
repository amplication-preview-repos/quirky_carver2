import { InputJsonValue } from "../../types";
import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";
import { SubSubcategoryWhereUniqueInput } from "../subSubcategory/SubSubcategoryWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { RecommendationUpdateManyWithoutPlacesInput } from "./RecommendationUpdateManyWithoutPlacesInput";

export type PlaceUpdateInput = {
  name?: string | null;
  description?: string | null;
  location?: InputJsonValue;
  typeField?: "Option1" | null;
  subcategory?: SubcategoryWhereUniqueInput | null;
  subSubcategory?: SubSubcategoryWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  recommendations?: RecommendationUpdateManyWithoutPlacesInput;
};
