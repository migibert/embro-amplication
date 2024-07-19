import { SkillLevel } from "../skillLevel/SkillLevel";

export type Collaborator = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  position: string | null;
  skillLevels?: Array<SkillLevel>;
};
