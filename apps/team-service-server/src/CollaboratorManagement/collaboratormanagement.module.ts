import { Module } from "@nestjs/common";
import { CollaboratorManagementService } from "./collaboratormanagement.service";
import { CollaboratorManagementController } from "./collaboratormanagement.controller";
import { CollaboratorManagementResolver } from "./collaboratormanagement.resolver";

@Module({
  controllers: [CollaboratorManagementController],
  providers: [CollaboratorManagementService, CollaboratorManagementResolver],
  exports: [CollaboratorManagementService],
})
export class CollaboratorManagementModule {}
