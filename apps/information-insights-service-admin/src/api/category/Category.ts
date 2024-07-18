import { Subcategory } from "../subcategory/Subcategory";
import { Place } from "../place/Place";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  subcategories?: Array<Subcategory>;
  places?: Array<Place>;
};
