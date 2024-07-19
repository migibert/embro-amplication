import { SkillLevelUpdateManyWithoutCollaboratorsInput } from "./SkillLevelUpdateManyWithoutCollaboratorsInput";

export type CollaboratorUpdateInput = {
  position?: string | null;
  skillLevels?: SkillLevelUpdateManyWithoutCollaboratorsInput;
};
