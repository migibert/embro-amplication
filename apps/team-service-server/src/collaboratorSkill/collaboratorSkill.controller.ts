import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollaboratorSkillService } from "./collaboratorSkill.service";
import { CollaboratorSkillControllerBase } from "./base/collaboratorSkill.controller.base";

@swagger.ApiTags("collaboratorSkills")
@common.Controller("collaboratorSkills")
export class CollaboratorSkillController extends CollaboratorSkillControllerBase {
  constructor(protected readonly service: CollaboratorSkillService) {
    super(service);
  }
}
