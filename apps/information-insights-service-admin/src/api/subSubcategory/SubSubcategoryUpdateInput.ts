import { SubcategoryWhereUniqueInput } from "../subcategory/SubcategoryWhereUniqueInput";
import { PlaceUpdateManyWithoutSubSubcategoriesInput } from "./PlaceUpdateManyWithoutSubSubcategoriesInput";

export type SubSubcategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  subcategory?: SubcategoryWhereUniqueInput | null;
  places?: PlaceUpdateManyWithoutSubSubcategoriesInput;
};
