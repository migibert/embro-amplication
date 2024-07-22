import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SkillCreateInput = {
  category?: CategoryWhereUniqueInput | null;
};
