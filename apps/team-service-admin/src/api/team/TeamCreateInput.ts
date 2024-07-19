import { CollaboratorCreateNestedManyWithoutTeamsInput } from "./CollaboratorCreateNestedManyWithoutTeamsInput";
import { TeamSkillCreateNestedManyWithoutTeamsInput } from "./TeamSkillCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  name?: string | null;
  collaborators?: CollaboratorCreateNestedManyWithoutTeamsInput;
  teamSkills?: TeamSkillCreateNestedManyWithoutTeamsInput;
};
