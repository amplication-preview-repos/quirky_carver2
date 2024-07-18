import { JsonValue } from "type-fest";
import { Subcategory } from "../subcategory/Subcategory";
import { SubSubcategory } from "../subSubcategory/SubSubcategory";
import { Category } from "../category/Category";
import { Recommendation } from "../recommendation/Recommendation";

export type Place = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  location: JsonValue;
  typeField?: "Option1" | null;
  subcategory?: Subcategory | null;
  subSubcategory?: SubSubcategory | null;
  category?: Category | null;
  recommendations?: Array<Recommendation>;
};
