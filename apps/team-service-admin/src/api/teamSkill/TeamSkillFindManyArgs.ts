import { TeamSkillWhereInput } from "./TeamSkillWhereInput";
import { TeamSkillOrderByInput } from "./TeamSkillOrderByInput";

export type TeamSkillFindManyArgs = {
  where?: TeamSkillWhereInput;
  orderBy?: Array<TeamSkillOrderByInput>;
  skip?: number;
  take?: number;
};
