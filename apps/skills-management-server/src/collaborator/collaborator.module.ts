import { Module } from "@nestjs/common";
import { CollaboratorModuleBase } from "./base/collaborator.module.base";
import { CollaboratorService } from "./collaborator.service";
import { CollaboratorController } from "./collaborator.controller";
import { CollaboratorResolver } from "./collaborator.resolver";

@Module({
  imports: [CollaboratorModuleBase],
  controllers: [CollaboratorController],
  providers: [CollaboratorService, CollaboratorResolver],
  exports: [CollaboratorService],
})
export class CollaboratorModule {}
