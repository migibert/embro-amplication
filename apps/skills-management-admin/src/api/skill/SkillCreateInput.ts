import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SkillLevelCreateNestedManyWithoutSkillsInput } from "./SkillLevelCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
  skillLevels?: SkillLevelCreateNestedManyWithoutSkillsInput;
};
