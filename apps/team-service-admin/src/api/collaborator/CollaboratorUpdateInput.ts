import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { CollaboratorSkillUpdateManyWithoutCollaboratorsInput } from "./CollaboratorSkillUpdateManyWithoutCollaboratorsInput";

export type CollaboratorUpdateInput = {
  firstname?: string | null;
  lastname?: string | null;
  entrydate?: Date | null;
  position?: string | null;
  birthdate?: Date | null;
  team?: TeamWhereUniqueInput | null;
  collaboratorSkills?: CollaboratorSkillUpdateManyWithoutCollaboratorsInput;
};
