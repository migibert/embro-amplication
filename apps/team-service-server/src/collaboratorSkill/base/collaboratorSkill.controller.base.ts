/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CollaboratorSkillService } from "../collaboratorSkill.service";
import { CollaboratorSkillCreateInput } from "./CollaboratorSkillCreateInput";
import { CollaboratorSkill } from "./CollaboratorSkill";
import { CollaboratorSkillFindManyArgs } from "./CollaboratorSkillFindManyArgs";
import { CollaboratorSkillWhereUniqueInput } from "./CollaboratorSkillWhereUniqueInput";
import { CollaboratorSkillUpdateInput } from "./CollaboratorSkillUpdateInput";

export class CollaboratorSkillControllerBase {
  constructor(protected readonly service: CollaboratorSkillService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CollaboratorSkill })
  async createCollaboratorSkill(
    @common.Body() data: CollaboratorSkillCreateInput
  ): Promise<CollaboratorSkill> {
    return await this.service.createCollaboratorSkill({
      data: {
        ...data,

        collaborator: data.collaborator
          ? {
              connect: data.collaborator,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        proficiency: true,
        skill: true,

        collaborator: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CollaboratorSkill] })
  @ApiNestedQuery(CollaboratorSkillFindManyArgs)
  async collaboratorSkills(
    @common.Req() request: Request
  ): Promise<CollaboratorSkill[]> {
    const args = plainToClass(CollaboratorSkillFindManyArgs, request.query);
    return this.service.collaboratorSkills({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        proficiency: true,
        skill: true,

        collaborator: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CollaboratorSkill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async collaboratorSkill(
    @common.Param() params: CollaboratorSkillWhereUniqueInput
  ): Promise<CollaboratorSkill | null> {
    const result = await this.service.collaboratorSkill({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        proficiency: true,
        skill: true,

        collaborator: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CollaboratorSkill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCollaboratorSkill(
    @common.Param() params: CollaboratorSkillWhereUniqueInput,
    @common.Body() data: CollaboratorSkillUpdateInput
  ): Promise<CollaboratorSkill | null> {
    try {
      return await this.service.updateCollaboratorSkill({
        where: params,
        data: {
          ...data,

          collaborator: data.collaborator
            ? {
                connect: data.collaborator,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          proficiency: true,
          skill: true,

          collaborator: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CollaboratorSkill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCollaboratorSkill(
    @common.Param() params: CollaboratorSkillWhereUniqueInput
  ): Promise<CollaboratorSkill | null> {
    try {
      return await this.service.deleteCollaboratorSkill({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          proficiency: true,
          skill: true,

          collaborator: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
