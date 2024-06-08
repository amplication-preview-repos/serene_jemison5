import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvatarCreateInput = {
  imageUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
