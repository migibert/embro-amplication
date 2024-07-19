import { Collaborator as TCollaborator } from "../api/collaborator/Collaborator";

export const COLLABORATOR_TITLE_FIELD = "firstname";

export const CollaboratorTitle = (record: TCollaborator): string => {
  return record.firstname?.toString() || String(record.id);
};
