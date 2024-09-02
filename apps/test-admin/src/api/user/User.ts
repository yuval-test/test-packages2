import { JsonValue } from "type-fest";
import { Yfghj } from "../yfghj/Yfghj";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  yfghjs?: Yfghj | null;
};
