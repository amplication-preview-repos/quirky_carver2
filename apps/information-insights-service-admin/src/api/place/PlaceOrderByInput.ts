import { SortOrder } from "../../util/SortOrder";

export type PlaceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  typeField?: SortOrder;
  subcategoryId?: SortOrder;
  subSubcategoryId?: SortOrder;
  categoryId?: SortOrder;
};
