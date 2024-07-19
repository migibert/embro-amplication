import { Collaborator as TCollaborator } from "../api/collaborator/Collaborator";

export const COLLABORATOR_TITLE_FIELD = "position";

export const CollaboratorTitle = (record: TCollaborator): string => {
  return record.position?.toString() || String(record.id);
};
