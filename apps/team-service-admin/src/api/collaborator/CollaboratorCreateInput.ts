import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { CollaboratorSkillCreateNestedManyWithoutCollaboratorsInput } from "./CollaboratorSkillCreateNestedManyWithoutCollaboratorsInput";

export type CollaboratorCreateInput = {
  firstname?: string | null;
  lastname?: string | null;
  entrydate?: Date | null;
  position?: string | null;
  birthdate?: Date | null;
  team?: TeamWhereUniqueInput | null;
  collaboratorSkills?: CollaboratorSkillCreateNestedManyWithoutCollaboratorsInput;
};
