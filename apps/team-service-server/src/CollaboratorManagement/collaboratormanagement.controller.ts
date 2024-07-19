import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CollaboratorManagementService } from "./collaboratormanagement.service";

@swagger.ApiTags("collaboratorManagements")
@common.Controller("collaboratorManagements")
export class CollaboratorManagementController {
  constructor(protected readonly service: CollaboratorManagementService) {}
}
