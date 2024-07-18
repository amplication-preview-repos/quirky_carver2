import { SubcategoryUpdateManyWithoutCategoriesInput } from "./SubcategoryUpdateManyWithoutCategoriesInput";
import { PlaceUpdateManyWithoutCategoriesInput } from "./PlaceUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  subcategories?: SubcategoryUpdateManyWithoutCategoriesInput;
  places?: PlaceUpdateManyWithoutCategoriesInput;
};
