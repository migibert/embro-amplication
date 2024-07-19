import { CollaboratorUpdateManyWithoutTeamsInput } from "./CollaboratorUpdateManyWithoutTeamsInput";
import { TeamSkillUpdateManyWithoutTeamsInput } from "./TeamSkillUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  name?: string | null;
  collaborators?: CollaboratorUpdateManyWithoutTeamsInput;
  teamSkills?: TeamSkillUpdateManyWithoutTeamsInput;
};
