import { FdWhereInput } from "./FdWhereInput";
import { FdOrderByInput } from "./FdOrderByInput";

export type FdFindManyArgs = {
  where?: FdWhereInput;
  orderBy?: Array<FdOrderByInput>;
  skip?: number;
  take?: number;
};
