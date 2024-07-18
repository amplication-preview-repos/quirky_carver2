import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  duration?: SortOrder;
  price?: SortOrder;
  pricingRule?: SortOrder;
  description?: SortOrder;
  guideId?: SortOrder;
};
