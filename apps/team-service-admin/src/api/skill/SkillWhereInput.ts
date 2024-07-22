import { StringFilter } from "../../util/StringFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SkillWhereInput = {
  id?: StringFilter;
  category?: CategoryWhereUniqueInput;
};
