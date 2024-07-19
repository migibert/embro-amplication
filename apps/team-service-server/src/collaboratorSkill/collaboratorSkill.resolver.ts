import * as graphql from "@nestjs/graphql";
import { CollaboratorSkillResolverBase } from "./base/collaboratorSkill.resolver.base";
import { CollaboratorSkill } from "./base/CollaboratorSkill";
import { CollaboratorSkillService } from "./collaboratorSkill.service";

@graphql.Resolver(() => CollaboratorSkill)
export class CollaboratorSkillResolver extends CollaboratorSkillResolverBase {
  constructor(protected readonly service: CollaboratorSkillService) {
    super(service);
  }
}
