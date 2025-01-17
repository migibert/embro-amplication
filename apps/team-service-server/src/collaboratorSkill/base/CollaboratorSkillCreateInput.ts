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
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { CollaboratorWhereUniqueInput } from "../../collaborator/base/CollaboratorWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CollaboratorSkillCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  proficiency?: number | null;

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
  skill?: string | null;

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

export { CollaboratorSkillCreateInput as CollaboratorSkillCreateInput };
