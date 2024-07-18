import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExperienceListRelationFilter } from "../experience/ExperienceListRelationFilter";

export type GuideWhereInput = {
  id?: StringFilter;
  rating?: FloatNullableFilter;
  availability?: JsonFilter;
  coverage?: JsonFilter;
  name?: StringNullableFilter;
  bio?: StringNullableFilter;
  experiences?: ExperienceListRelationFilter;
};
