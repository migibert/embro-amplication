/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CollaboratorCreateNestedManyWithoutTeamsInput } from "./CollaboratorCreateNestedManyWithoutTeamsInput";
import { Type } from "class-transformer";
import { TeamSkillCreateNestedManyWithoutTeamsInput } from "./TeamSkillCreateNestedManyWithoutTeamsInput";

@InputType()
class TeamCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => CollaboratorCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => CollaboratorCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => CollaboratorCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  collaborators?: CollaboratorCreateNestedManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TeamSkillCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => TeamSkillCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => TeamSkillCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  teamSkills?: TeamSkillCreateNestedManyWithoutTeamsInput;
}

export { TeamCreateInput as TeamCreateInput };
