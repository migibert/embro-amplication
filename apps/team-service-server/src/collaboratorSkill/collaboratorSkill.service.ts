import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaboratorSkillServiceBase } from "./base/collaboratorSkill.service.base";

@Injectable()
export class CollaboratorSkillService extends CollaboratorSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
