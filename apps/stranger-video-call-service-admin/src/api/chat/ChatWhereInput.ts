import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
