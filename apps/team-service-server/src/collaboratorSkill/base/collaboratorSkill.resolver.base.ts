/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CollaboratorSkill } from "./CollaboratorSkill";
import { CollaboratorSkillCountArgs } from "./CollaboratorSkillCountArgs";
import { CollaboratorSkillFindManyArgs } from "./CollaboratorSkillFindManyArgs";
import { CollaboratorSkillFindUniqueArgs } from "./CollaboratorSkillFindUniqueArgs";
import { CreateCollaboratorSkillArgs } from "./CreateCollaboratorSkillArgs";
import { UpdateCollaboratorSkillArgs } from "./UpdateCollaboratorSkillArgs";
import { DeleteCollaboratorSkillArgs } from "./DeleteCollaboratorSkillArgs";
import { Collaborator } from "../../collaborator/base/Collaborator";
import { CollaboratorSkillService } from "../collaboratorSkill.service";
@graphql.Resolver(() => CollaboratorSkill)
export class CollaboratorSkillResolverBase {
  constructor(protected readonly service: CollaboratorSkillService) {}

  async _collaboratorSkillsMeta(
    @graphql.Args() args: CollaboratorSkillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CollaboratorSkill])
  async collaboratorSkills(
    @graphql.Args() args: CollaboratorSkillFindManyArgs
  ): Promise<CollaboratorSkill[]> {
    return this.service.collaboratorSkills(args);
  }

  @graphql.Query(() => CollaboratorSkill, { nullable: true })
  async collaboratorSkill(
    @graphql.Args() args: CollaboratorSkillFindUniqueArgs
  ): Promise<CollaboratorSkill | null> {
    const result = await this.service.collaboratorSkill(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CollaboratorSkill)
  async createCollaboratorSkill(
    @graphql.Args() args: CreateCollaboratorSkillArgs
  ): Promise<CollaboratorSkill> {
    return await this.service.createCollaboratorSkill({
      ...args,
      data: {
        ...args.data,

        collaborator: args.data.collaborator
          ? {
              connect: args.data.collaborator,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CollaboratorSkill)
  async updateCollaboratorSkill(
    @graphql.Args() args: UpdateCollaboratorSkillArgs
  ): Promise<CollaboratorSkill | null> {
    try {
      return await this.service.updateCollaboratorSkill({
        ...args,
        data: {
          ...args.data,

          collaborator: args.data.collaborator
            ? {
                connect: args.data.collaborator,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CollaboratorSkill)
  async deleteCollaboratorSkill(
    @graphql.Args() args: DeleteCollaboratorSkillArgs
  ): Promise<CollaboratorSkill | null> {
    try {
      return await this.service.deleteCollaboratorSkill(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Collaborator, {
    nullable: true,
    name: "collaborator",
  })
  async getCollaborator(
    @graphql.Parent() parent: CollaboratorSkill
  ): Promise<Collaborator | null> {
    const result = await this.service.getCollaborator(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}