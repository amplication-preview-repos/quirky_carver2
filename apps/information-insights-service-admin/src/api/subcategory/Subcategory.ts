import { Category } from "../category/Category";
import { SubSubcategory } from "../subSubcategory/SubSubcategory";
import { Place } from "../place/Place";

export type Subcategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  category?: Category | null;
  subSubcategories?: Array<SubSubcategory>;
  places?: Array<Place>;
};
