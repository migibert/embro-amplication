import { Collaborator } from "../collaborator/Collaborator";
import { TeamSkill } from "../teamSkill/TeamSkill";

export type Team = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  collaborators?: Array<Collaborator>;
  teamSkills?: Array<TeamSkill>;
};
