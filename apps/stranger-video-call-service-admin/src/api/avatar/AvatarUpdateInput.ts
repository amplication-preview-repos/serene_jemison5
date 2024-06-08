import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvatarUpdateInput = {
  imageUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
