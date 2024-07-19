import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamSkillServiceBase } from "./base/teamSkill.service.base";

@Injectable()
export class TeamSkillService extends TeamSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
