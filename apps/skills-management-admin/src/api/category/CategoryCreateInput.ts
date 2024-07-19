import { SkillCreateNestedManyWithoutCategoriesInput } from "./SkillCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  skills?: SkillCreateNestedManyWithoutCategoriesInput;
};
