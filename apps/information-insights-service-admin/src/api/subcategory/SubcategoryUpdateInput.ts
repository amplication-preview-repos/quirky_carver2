import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SubSubcategoryUpdateManyWithoutSubcategoriesInput } from "./SubSubcategoryUpdateManyWithoutSubcategoriesInput";
import { PlaceUpdateManyWithoutSubcategoriesInput } from "./PlaceUpdateManyWithoutSubcategoriesInput";

export type SubcategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
  subSubcategories?: SubSubcategoryUpdateManyWithoutSubcategoriesInput;
  places?: PlaceUpdateManyWithoutSubcategoriesInput;
};
