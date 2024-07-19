import * as graphql from "@nestjs/graphql";
import { CollaboratorResolverBase } from "./base/collaborator.resolver.base";
import { Collaborator } from "./base/Collaborator";
import { CollaboratorService } from "./collaborator.service";

@graphql.Resolver(() => Collaborator)
export class CollaboratorResolver extends CollaboratorResolverBase {
  constructor(protected readonly service: CollaboratorService) {
    super(service);
  }
}
