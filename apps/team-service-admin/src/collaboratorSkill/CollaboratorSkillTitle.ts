import { CollaboratorSkill as TCollaboratorSkill } from "../api/collaboratorSkill/CollaboratorSkill";

export const COLLABORATORSKILL_TITLE_FIELD = "skill";

export const CollaboratorSkillTitle = (record: TCollaboratorSkill): string => {
  return record.skill?.toString() || String(record.id);
};
