import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type SkillLevelCreateInput = {
  level?: string | null;
  skill?: SkillWhereUniqueInput | null;
  collaborator?: CollaboratorWhereUniqueInput | null;
};
