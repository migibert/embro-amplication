import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SkillUpdateInput = {
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
