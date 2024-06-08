import { Avatar } from "../avatar/Avatar";
import { JsonValue } from "type-fest";

export type User = {
  avatars?: Array<Avatar>;
  createdAt: Date;
  email: string | null;
  fingerprint: string | null;
  firstName: string | null;
  id: string;
  ipAddress: string | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
