import { PlaceWhereUniqueInput } from "../place/PlaceWhereUniqueInput";

export type RecommendationUpdateInput = {
  title?: string | null;
  details?: string | null;
  place?: PlaceWhereUniqueInput | null;
};
