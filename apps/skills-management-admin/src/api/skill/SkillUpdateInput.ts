import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SkillLevelUpdateManyWithoutSkillsInput } from "./SkillLevelUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
  skillLevels?: SkillLevelUpdateManyWithoutSkillsInput;
};
