import { SortOrder } from "../../util/SortOrder";

export type SubcategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  categoryId?: SortOrder;
};
