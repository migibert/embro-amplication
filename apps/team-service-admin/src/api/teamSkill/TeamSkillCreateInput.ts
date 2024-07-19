import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamSkillCreateInput = {
  skill?: string | null;
  proficiency?: number | null;
  team?: TeamWhereUniqueInput | null;
};
