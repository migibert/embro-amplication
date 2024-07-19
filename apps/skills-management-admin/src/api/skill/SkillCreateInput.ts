import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SkillCreateInput = {
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
