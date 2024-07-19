import { Team } from "../team/Team";
import { CollaboratorSkill } from "../collaboratorSkill/CollaboratorSkill";

export type Collaborator = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstname: string | null;
  lastname: string | null;
  entrydate: Date | null;
  position: string | null;
  birthdate: Date | null;
  team?: Team | null;
  collaboratorSkills?: Array<CollaboratorSkill>;
};
