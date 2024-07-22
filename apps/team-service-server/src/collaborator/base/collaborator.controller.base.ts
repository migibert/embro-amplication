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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CollaboratorService } from "../collaborator.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CollaboratorCreateInput } from "./CollaboratorCreateInput";
import { Collaborator } from "./Collaborator";
import { CollaboratorFindManyArgs } from "./CollaboratorFindManyArgs";
import { CollaboratorWhereUniqueInput } from "./CollaboratorWhereUniqueInput";
import { CollaboratorUpdateInput } from "./CollaboratorUpdateInput";
import { CollaboratorSkillFindManyArgs } from "../../collaboratorSkill/base/CollaboratorSkillFindManyArgs";
import { CollaboratorSkill } from "../../collaboratorSkill/base/CollaboratorSkill";
import { CollaboratorSkillWhereUniqueInput } from "../../collaboratorSkill/base/CollaboratorSkillWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CollaboratorControllerBase {
  constructor(
    protected readonly service: CollaboratorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Collaborator })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCollaborator(
    @common.Body() data: CollaboratorCreateInput
  ): Promise<Collaborator> {
    return await this.service.createCollaborator({
      data: {
        ...data,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstname: true,
        lastname: true,
        entrydate: true,
        position: true,
        birthdate: true,

        team: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Collaborator] })
  @ApiNestedQuery(CollaboratorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async collaborators(@common.Req() request: Request): Promise<Collaborator[]> {
    const args = plainToClass(CollaboratorFindManyArgs, request.query);
    return this.service.collaborators({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstname: true,
        lastname: true,
        entrydate: true,
        position: true,
        birthdate: true,

        team: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Collaborator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async collaborator(
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<Collaborator | null> {
    const result = await this.service.collaborator({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstname: true,
        lastname: true,
        entrydate: true,
        position: true,
        birthdate: true,

        team: {
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Collaborator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCollaborator(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() data: CollaboratorUpdateInput
  ): Promise<Collaborator | null> {
    try {
      return await this.service.updateCollaborator({
        where: params,
        data: {
          ...data,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstname: true,
          lastname: true,
          entrydate: true,
          position: true,
          birthdate: true,

          team: {
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
  @swagger.ApiOkResponse({ type: Collaborator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCollaborator(
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<Collaborator | null> {
    try {
      return await this.service.deleteCollaborator({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstname: true,
          lastname: true,
          entrydate: true,
          position: true,
          birthdate: true,

          team: {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/collaboratorSkills")
  @ApiNestedQuery(CollaboratorSkillFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CollaboratorSkill",
    action: "read",
    possession: "any",
  })
  async findCollaboratorSkills(
    @common.Req() request: Request,
    @common.Param() params: CollaboratorWhereUniqueInput
  ): Promise<CollaboratorSkill[]> {
    const query = plainToClass(CollaboratorSkillFindManyArgs, request.query);
    const results = await this.service.findCollaboratorSkills(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/collaboratorSkills")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async connectCollaboratorSkills(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: CollaboratorSkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      collaboratorSkills: {
        connect: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/collaboratorSkills")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async updateCollaboratorSkills(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: CollaboratorSkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      collaboratorSkills: {
        set: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/collaboratorSkills")
  @nestAccessControl.UseRoles({
    resource: "Collaborator",
    action: "update",
    possession: "any",
  })
  async disconnectCollaboratorSkills(
    @common.Param() params: CollaboratorWhereUniqueInput,
    @common.Body() body: CollaboratorSkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      collaboratorSkills: {
        disconnect: body,
      },
    };
    await this.service.updateCollaborator({
      where: params,
      data,
      select: { id: true },
    });
  }
}
