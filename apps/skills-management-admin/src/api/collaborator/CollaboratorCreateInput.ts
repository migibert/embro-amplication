import { SkillLevelCreateNestedManyWithoutCollaboratorsInput } from "./SkillLevelCreateNestedManyWithoutCollaboratorsInput";

export type CollaboratorCreateInput = {
  position?: string | null;
  skillLevels?: SkillLevelCreateNestedManyWithoutCollaboratorsInput;
};
