/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  CollaboratorSkill as PrismaCollaboratorSkill,
  Collaborator as PrismaCollaborator,
} from "@prisma/client";

export class CollaboratorSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CollaboratorSkillCountArgs, "select">
  ): Promise<number> {
    return this.prisma.collaboratorSkill.count(args);
  }

  async collaboratorSkills(
    args: Prisma.CollaboratorSkillFindManyArgs
  ): Promise<PrismaCollaboratorSkill[]> {
    return this.prisma.collaboratorSkill.findMany(args);
  }
  async collaboratorSkill(
    args: Prisma.CollaboratorSkillFindUniqueArgs
  ): Promise<PrismaCollaboratorSkill | null> {
    return this.prisma.collaboratorSkill.findUnique(args);
  }
  async createCollaboratorSkill(
    args: Prisma.CollaboratorSkillCreateArgs
  ): Promise<PrismaCollaboratorSkill> {
    return this.prisma.collaboratorSkill.create(args);
  }
  async updateCollaboratorSkill(
    args: Prisma.CollaboratorSkillUpdateArgs
  ): Promise<PrismaCollaboratorSkill> {
    return this.prisma.collaboratorSkill.update(args);
  }
  async deleteCollaboratorSkill(
    args: Prisma.CollaboratorSkillDeleteArgs
  ): Promise<PrismaCollaboratorSkill> {
    return this.prisma.collaboratorSkill.delete(args);
  }

  async getCollaborator(parentId: string): Promise<PrismaCollaborator | null> {
    return this.prisma.collaboratorSkill
      .findUnique({
        where: { id: parentId },
      })
      .collaborator();
  }
}
