import { Yfghj as TYfghj } from "../api/yfghj/Yfghj";

export const YFGHJ_TITLE_FIELD = "ds";

export const YfghjTitle = (record: TYfghj): string => {
  return record.ds?.toString() || String(record.id);
};
