import { SubcategoryCreateNestedManyWithoutCategoriesInput } from "./SubcategoryCreateNestedManyWithoutCategoriesInput";
import { PlaceCreateNestedManyWithoutCategoriesInput } from "./PlaceCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  subcategories?: SubcategoryCreateNestedManyWithoutCategoriesInput;
  places?: PlaceCreateNestedManyWithoutCategoriesInput;
};
