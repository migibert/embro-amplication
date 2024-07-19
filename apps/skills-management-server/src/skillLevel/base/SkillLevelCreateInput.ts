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
import { SkillWhereUniqueInput } from "../../skill/base/SkillWhereUniqueInput";
import { Type } from "class-transformer";
import { CollaboratorWhereUniqueInput } from "../../collaborator/base/CollaboratorWhereUniqueInput";

@InputType()
class SkillLevelCreateInput {
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
  level?: string | null;

  @ApiProperty({
    required: false,
    type: () => SkillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillWhereUniqueInput)
  @IsOptional()
  @Field(() => SkillWhereUniqueInput, {
    nullable: true,
  })
  skill?: SkillWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CollaboratorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CollaboratorWhereUniqueInput)
  @IsOptional()
  @Field(() => CollaboratorWhereUniqueInput, {
    nullable: true,
  })
  collaborator?: CollaboratorWhereUniqueInput | null;
}

export { SkillLevelCreateInput as SkillLevelCreateInput };
