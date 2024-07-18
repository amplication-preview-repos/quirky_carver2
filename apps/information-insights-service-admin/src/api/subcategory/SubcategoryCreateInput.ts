import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SubSubcategoryCreateNestedManyWithoutSubcategoriesInput } from "./SubSubcategoryCreateNestedManyWithoutSubcategoriesInput";
import { PlaceCreateNestedManyWithoutSubcategoriesInput } from "./PlaceCreateNestedManyWithoutSubcategoriesInput";

export type SubcategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
  subSubcategories?: SubSubcategoryCreateNestedManyWithoutSubcategoriesInput;
  places?: PlaceCreateNestedManyWithoutSubcategoriesInput;
};
