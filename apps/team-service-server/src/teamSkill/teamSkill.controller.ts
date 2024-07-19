import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamSkillService } from "./teamSkill.service";
import { TeamSkillControllerBase } from "./base/teamSkill.controller.base";

@swagger.ApiTags("teamSkills")
@common.Controller("teamSkills")
export class TeamSkillController extends TeamSkillControllerBase {
  constructor(protected readonly service: TeamSkillService) {
    super(service);
  }
}
