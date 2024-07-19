import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollaboratorWhereUniqueInput } from "../collaborator/CollaboratorWhereUniqueInput";

export type CollaboratorSkillWhereInput = {
  id?: StringFilter;
  proficiency?: IntNullableFilter;
  skill?: StringNullableFilter;
  collaborator?: CollaboratorWhereUniqueInput;
};
