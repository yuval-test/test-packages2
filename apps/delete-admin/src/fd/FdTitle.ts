import { Fd as TFd } from "../api/fd/Fd";

export const FD_TITLE_FIELD = "id";

export const FdTitle = (record: TFd): string => {
  return record.id?.toString() || String(record.id);
};
