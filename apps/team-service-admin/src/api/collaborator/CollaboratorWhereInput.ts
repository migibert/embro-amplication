import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { CollaboratorSkillListRelationFilter } from "../collaboratorSkill/CollaboratorSkillListRelationFilter";

export type CollaboratorWhereInput = {
  id?: StringFilter;
  firstname?: StringNullableFilter;
  lastname?: StringNullableFilter;
  entrydate?: DateTimeNullableFilter;
  position?: StringNullableFilter;
  birthdate?: DateTimeNullableFilter;
  team?: TeamWhereUniqueInput;
  collaboratorSkills?: CollaboratorSkillListRelationFilter;
};
