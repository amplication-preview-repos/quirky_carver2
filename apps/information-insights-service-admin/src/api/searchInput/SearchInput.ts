import { JsonValue } from "type-fest";

export type SearchInput = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  filters: JsonValue;
  query: string | null;
};
