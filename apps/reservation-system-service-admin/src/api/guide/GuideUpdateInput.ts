import { InputJsonValue } from "../../types";
import { ExperienceUpdateManyWithoutGuidesInput } from "./ExperienceUpdateManyWithoutGuidesInput";

export type GuideUpdateInput = {
  rating?: number | null;
  availability?: InputJsonValue;
  coverage?: InputJsonValue;
  name?: string | null;
  bio?: string | null;
  experiences?: ExperienceUpdateManyWithoutGuidesInput;
};
