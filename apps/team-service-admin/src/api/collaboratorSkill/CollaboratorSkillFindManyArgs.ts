import { CollaboratorSkillWhereInput } from "./CollaboratorSkillWhereInput";
import { CollaboratorSkillOrderByInput } from "./CollaboratorSkillOrderByInput";

export type CollaboratorSkillFindManyArgs = {
  where?: CollaboratorSkillWhereInput;
  orderBy?: Array<CollaboratorSkillOrderByInput>;
  skip?: number;
  take?: number;
};
