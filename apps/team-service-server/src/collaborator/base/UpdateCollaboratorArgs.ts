/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CollaboratorWhereUniqueInput } from "./CollaboratorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CollaboratorUpdateInput } from "./CollaboratorUpdateInput";

@ArgsType()
class UpdateCollaboratorArgs {
  @ApiProperty({
    required: true,
    type: () => CollaboratorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CollaboratorWhereUniqueInput)
  @Field(() => CollaboratorWhereUniqueInput, { nullable: false })
  where!: CollaboratorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CollaboratorUpdateInput,
  })
  @ValidateNested()
  @Type(() => CollaboratorUpdateInput)
  @Field(() => CollaboratorUpdateInput, { nullable: false })
  data!: CollaboratorUpdateInput;
}

export { UpdateCollaboratorArgs as UpdateCollaboratorArgs };
