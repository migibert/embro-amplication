import { Skill } from "../skill/Skill";
import { Collaborator } from "../collaborator/Collaborator";

export type SkillLevel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  level: string | null;
  skill?: Skill | null;
  collaborator?: Collaborator | null;
};
