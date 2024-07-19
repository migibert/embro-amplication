import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollaboratorService } from "./collaborator.service";
import { CollaboratorControllerBase } from "./base/collaborator.controller.base";

@swagger.ApiTags("collaborators")
@common.Controller("collaborators")
export class CollaboratorController extends CollaboratorControllerBase {
  constructor(protected readonly service: CollaboratorService) {
    super(service);
  }
}
