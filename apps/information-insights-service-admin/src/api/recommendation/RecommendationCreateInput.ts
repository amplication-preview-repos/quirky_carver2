import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type RecommendationCreateInput = {
  title?: string | null;
  details?: string | null;
  place?: PlaceWhereUniqueInput | null;
};
