import { User } from "../user/User";

export type Avatar = {
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  updatedAt: Date;
  user?: User | null;
};
