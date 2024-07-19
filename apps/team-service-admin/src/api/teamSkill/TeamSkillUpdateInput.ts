import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamSkillUpdateInput = {
  skill?: string | null;
  proficiency?: number | null;
  team?: TeamWhereUniqueInput | null;
};
