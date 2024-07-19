import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillLevelListRelationFilter } from "../skillLevel/SkillLevelListRelationFilter";

export type CollaboratorWhereInput = {
  id?: StringFilter;
  position?: StringNullableFilter;
  skillLevels?: SkillLevelListRelationFilter;
};
