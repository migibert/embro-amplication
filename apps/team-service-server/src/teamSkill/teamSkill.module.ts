import { Module } from "@nestjs/common";
import { TeamSkillModuleBase } from "./base/teamSkill.module.base";
import { TeamSkillService } from "./teamSkill.service";
import { TeamSkillController } from "./teamSkill.controller";
import { TeamSkillResolver } from "./teamSkill.resolver";

@Module({
  imports: [TeamSkillModuleBase],
  controllers: [TeamSkillController],
  providers: [TeamSkillService, TeamSkillResolver],
  exports: [TeamSkillService],
})
export class TeamSkillModule {}
