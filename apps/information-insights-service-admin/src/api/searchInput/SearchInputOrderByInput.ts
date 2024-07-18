import { SortOrder } from "../../util/SortOrder";

export type SearchInputOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  filters?: SortOrder;
  query?: SortOrder;
};
