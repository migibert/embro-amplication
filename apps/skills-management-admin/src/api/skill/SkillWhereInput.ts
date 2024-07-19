import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
};
