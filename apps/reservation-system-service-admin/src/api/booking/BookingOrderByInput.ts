import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  duration?: SortOrder;
  status?: SortOrder;
  confirmedByGuide?: SortOrder;
  user?: SortOrder;
  experienceId?: SortOrder;
};
