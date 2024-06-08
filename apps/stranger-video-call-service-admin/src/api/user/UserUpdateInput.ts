import { AvatarUpdateManyWithoutUsersInput } from "./AvatarUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  avatars?: AvatarUpdateManyWithoutUsersInput;
  email?: string | null;
  fingerprint?: string | null;
  firstName?: string | null;
  ipAddress?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
