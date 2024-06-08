import { AvatarListRelationFilter } from "../avatar/AvatarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  avatars?: AvatarListRelationFilter;
  email?: StringNullableFilter;
  fingerprint?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
