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
import { TeamSkillWhereInput } from "./TeamSkillWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TeamSkillOrderByInput } from "./TeamSkillOrderByInput";

@ArgsType()
class TeamSkillFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TeamSkillWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TeamSkillWhereInput, { nullable: true })
  @Type(() => TeamSkillWhereInput)
  where?: TeamSkillWhereInput;

  @ApiProperty({
    required: false,
    type: [TeamSkillOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TeamSkillOrderByInput], { nullable: true })
  @Type(() => TeamSkillOrderByInput)
  orderBy?: Array<TeamSkillOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TeamSkillFindManyArgs as TeamSkillFindManyArgs };
