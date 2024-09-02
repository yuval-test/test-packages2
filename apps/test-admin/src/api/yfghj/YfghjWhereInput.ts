import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type YfghjWhereInput = {
  ds?: StringNullableFilter;
  id?: StringFilter;
  myUser?: UserListRelationFilter;
};
