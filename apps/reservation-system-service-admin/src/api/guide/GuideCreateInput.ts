import { InputJsonValue } from "../../types";
import { ExperienceCreateNestedManyWithoutGuidesInput } from "./ExperienceCreateNestedManyWithoutGuidesInput";

export type GuideCreateInput = {
  rating?: number | null;
  availability?: InputJsonValue;
  coverage?: InputJsonValue;
  name?: string | null;
  bio?: string | null;
  experiences?: ExperienceCreateNestedManyWithoutGuidesInput;
};
