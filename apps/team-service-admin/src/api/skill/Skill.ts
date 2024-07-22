import { Category } from "../category/Category";

export type Skill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  category?: Category | null;
};
