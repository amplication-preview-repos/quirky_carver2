import { SortOrder } from "../../util/SortOrder";

export type GuideOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  availability?: SortOrder;
  coverage?: SortOrder;
  name?: SortOrder;
  bio?: SortOrder;
};
