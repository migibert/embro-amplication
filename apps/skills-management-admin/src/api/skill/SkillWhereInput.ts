import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  skillLevels?: SkillLevelListRelationFilter;
};
