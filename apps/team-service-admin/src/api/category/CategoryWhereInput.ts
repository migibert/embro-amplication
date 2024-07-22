import { StringFilter } from "../../util/StringFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  skills?: SkillListRelationFilter;
};
