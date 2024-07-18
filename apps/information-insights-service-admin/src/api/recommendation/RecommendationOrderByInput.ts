import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  details?: SortOrder;
  placeId?: SortOrder;
};
