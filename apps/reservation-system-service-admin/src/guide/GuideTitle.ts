import { Guide as TGuide } from "../api/guide/Guide";

export const GUIDE_TITLE_FIELD = "name";

export const GuideTitle = (record: TGuide): string => {
  return record.name?.toString() || String(record.id);
};
