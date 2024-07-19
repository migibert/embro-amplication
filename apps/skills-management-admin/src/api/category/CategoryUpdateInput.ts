import { SkillUpdateManyWithoutCategoriesInput } from "./SkillUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  skills?: SkillUpdateManyWithoutCategoriesInput;
};
