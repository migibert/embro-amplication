import { Module } from "@nestjs/common";
import { CollaboratorSkillModuleBase } from "./base/collaboratorSkill.module.base";
import { CollaboratorSkillService } from "./collaboratorSkill.service";
import { CollaboratorSkillController } from "./collaboratorSkill.controller";
import { CollaboratorSkillResolver } from "./collaboratorSkill.resolver";

@Module({
  imports: [CollaboratorSkillModuleBase],
  controllers: [CollaboratorSkillController],
  providers: [CollaboratorSkillService, CollaboratorSkillResolver],
  exports: [CollaboratorSkillService],
})
export class CollaboratorSkillModule {}
