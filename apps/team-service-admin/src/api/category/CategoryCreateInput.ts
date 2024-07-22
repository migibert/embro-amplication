import { SkillCreateNestedManyWithoutCategoriesInput } from "./SkillCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  skills?: SkillCreateNestedManyWithoutCategoriesInput;
};
