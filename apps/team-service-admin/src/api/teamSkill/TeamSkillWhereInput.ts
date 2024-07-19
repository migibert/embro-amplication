import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TeamSkillWhereInput = {
  id?: StringFilter;
  skill?: StringNullableFilter;
  proficiency?: IntNullableFilter;
  team?: TeamWhereUniqueInput;
};
