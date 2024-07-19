import { TeamSkill as TTeamSkill } from "../api/teamSkill/TeamSkill";

export const TEAMSKILL_TITLE_FIELD = "skill";

export const TeamSkillTitle = (record: TTeamSkill): string => {
  return record.skill?.toString() || String(record.id);
};
