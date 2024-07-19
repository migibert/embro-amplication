import * as graphql from "@nestjs/graphql";
import { CollaboratorManagementService } from "./collaboratormanagement.service";

export class CollaboratorManagementResolver {
  constructor(protected readonly service: CollaboratorManagementService) {}
}
