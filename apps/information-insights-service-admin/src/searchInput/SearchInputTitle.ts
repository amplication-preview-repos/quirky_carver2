import { SearchInput as TSearchInput } from "../api/searchInput/SearchInput";

export const SEARCHINPUT_TITLE_FIELD = "query";

export const SearchInputTitle = (record: TSearchInput): string => {
  return record.query?.toString() || String(record.id);
};
