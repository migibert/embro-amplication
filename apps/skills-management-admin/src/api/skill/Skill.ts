import { Category } from "../category/Category";
import { SkillLevel } from "../skillLevel/SkillLevel";

export type Skill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  category?: Category | null;
  skillLevels?: Array<SkillLevel>;
};
