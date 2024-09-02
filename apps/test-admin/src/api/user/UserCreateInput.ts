import { InputJsonValue } from "../../types";
import { YfghjWhereUniqueInput } from "../yfghj/YfghjWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  yfghjs?: YfghjWhereUniqueInput | null;
};
