import { GuideWhereInput } from "./GuideWhereInput";
import { GuideOrderByInput } from "./GuideOrderByInput";

export type GuideFindManyArgs = {
  where?: GuideWhereInput;
  orderBy?: Array<GuideOrderByInput>;
  skip?: number;
  take?: number;
};
