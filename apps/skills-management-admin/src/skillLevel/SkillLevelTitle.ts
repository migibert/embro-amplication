import { SkillLevel as TSkillLevel } from "../api/skillLevel/SkillLevel";

export const SKILLLEVEL_TITLE_FIELD = "level";

export const SkillLevelTitle = (record: TSkillLevel): string => {
  return record.level?.toString() || String(record.id);
};
