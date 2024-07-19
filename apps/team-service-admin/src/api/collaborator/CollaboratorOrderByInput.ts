import { SortOrder } from "../../util/SortOrder";

export type CollaboratorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstname?: SortOrder;
  lastname?: SortOrder;
  entrydate?: SortOrder;
  position?: SortOrder;
  birthdate?: SortOrder;
  teamId?: SortOrder;
};
