import { SortOrder } from "../../util/SortOrder";

export type CollaboratorSkillOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  proficiency?: SortOrder;
  skill?: SortOrder;
  collaboratorId?: SortOrder;
};
