import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollaboratorListRelationFilter } from "../collaborator/CollaboratorListRelationFilter";
import { TeamSkillListRelationFilter } from "../teamSkill/TeamSkillListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  collaborators?: CollaboratorListRelationFilter;
  teamSkills?: TeamSkillListRelationFilter;
};
