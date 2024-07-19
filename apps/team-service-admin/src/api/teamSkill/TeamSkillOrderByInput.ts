import { SortOrder } from "../../util/SortOrder";

export type TeamSkillOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  skill?: SortOrder;
  proficiency?: SortOrder;
  teamId?: SortOrder;
};
