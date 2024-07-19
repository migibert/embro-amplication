import { Team } from "../team/Team";

export type TeamSkill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  skill: string | null;
  proficiency: number | null;
  team?: Team | null;
};
