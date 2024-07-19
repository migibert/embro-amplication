import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type CollaboratorSkillUpdateInput = {
  proficiency?: number | null;
  skill?: string | null;
  collaborator?: CollaboratorWhereUniqueInput | null;
};
