import * as graphql from "@nestjs/graphql";
import { SkillLevelResolverBase } from "./base/skillLevel.resolver.base";
import { SkillLevel } from "./base/SkillLevel";
import { SkillLevelService } from "./skillLevel.service";

@graphql.Resolver(() => SkillLevel)
export class SkillLevelResolver extends SkillLevelResolverBase {
  constructor(protected readonly service: SkillLevelService) {
    super(service);
  }
}
