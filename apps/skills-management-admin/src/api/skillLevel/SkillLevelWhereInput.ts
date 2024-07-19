import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type SkillLevelWhereInput = {
  id?: StringFilter;
  level?: StringNullableFilter;
  skill?: SkillWhereUniqueInput;
  collaborator?: CollaboratorWhereUniqueInput;
};
