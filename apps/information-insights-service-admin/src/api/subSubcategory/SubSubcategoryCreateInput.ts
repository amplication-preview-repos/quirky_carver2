import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";
import { PlaceCreateNestedManyWithoutSubSubcategoriesInput } from "./PlaceCreateNestedManyWithoutSubSubcategoriesInput";

export type SubSubcategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  subcategory?: SubcategoryWhereUniqueInput | null;
  places?: PlaceCreateNestedManyWithoutSubSubcategoriesInput;
};
