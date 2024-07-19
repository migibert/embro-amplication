import * as graphql from "@nestjs/graphql";
import { TeamSkillResolverBase } from "./base/teamSkill.resolver.base";
import { TeamSkill } from "./base/TeamSkill";
import { TeamSkillService } from "./teamSkill.service";

@graphql.Resolver(() => TeamSkill)
export class TeamSkillResolver extends TeamSkillResolverBase {
  constructor(protected readonly service: TeamSkillService) {
    super(service);
  }
}
