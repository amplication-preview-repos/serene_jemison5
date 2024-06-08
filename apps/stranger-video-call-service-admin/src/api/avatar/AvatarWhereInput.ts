import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvatarWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
