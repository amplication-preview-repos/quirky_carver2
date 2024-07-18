import { SearchInputWhereInput } from "./SearchInputWhereInput";
import { SearchInputOrderByInput } from "./SearchInputOrderByInput";

export type SearchInputFindManyArgs = {
  where?: SearchInputWhereInput;
  orderBy?: Array<SearchInputOrderByInput>;
  skip?: number;
  take?: number;
};
