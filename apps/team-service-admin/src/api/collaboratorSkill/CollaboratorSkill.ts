import { Collaborator } from "../collaborator/Collaborator";

export type CollaboratorSkill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  proficiency: number | null;
  skill: string | null;
  collaborator?: Collaborator | null;
};
