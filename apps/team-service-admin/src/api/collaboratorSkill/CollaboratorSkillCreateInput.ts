import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type CollaboratorSkillCreateInput = {
  proficiency?: number | null;
  skill?: string | null;
  collaborator?: CollaboratorWhereUniqueInput | null;
};
