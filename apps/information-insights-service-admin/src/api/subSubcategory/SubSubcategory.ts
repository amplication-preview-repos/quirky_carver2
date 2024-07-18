import { Subcategory } from "../subcategory/Subcategory";
import { Place } from "../place/Place";

export type SubSubcategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  subcategory?: Subcategory | null;
  places?: Array<Place>;
};
