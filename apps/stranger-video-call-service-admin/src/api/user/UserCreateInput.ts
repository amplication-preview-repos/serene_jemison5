import { AvatarCreateNestedManyWithoutUsersInput } from "./AvatarCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  avatars?: AvatarCreateNestedManyWithoutUsersInput;
  email?: string | null;
  fingerprint?: string | null;
  firstName?: string | null;
  ipAddress?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
