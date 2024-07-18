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
  IsEnum,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumPlaceTypeField } from "./EnumPlaceTypeField";
import { SubcategoryWhereUniqueInput } from "../../subcategory/base/SubcategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { SubSubcategoryWhereUniqueInput } from "../../subSubcategory/base/SubSubcategoryWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { RecommendationUpdateManyWithoutPlacesInput } from "./RecommendationUpdateManyWithoutPlacesInput";

@InputType()
class PlaceUpdateInput {
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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  location?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumPlaceTypeField,
  })
  @IsEnum(EnumPlaceTypeField)
  @IsOptional()
  @Field(() => EnumPlaceTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => SubcategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubcategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => SubcategoryWhereUniqueInput, {
    nullable: true,
  })
  subcategory?: SubcategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SubSubcategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubSubcategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => SubSubcategoryWhereUniqueInput, {
    nullable: true,
  })
  subSubcategory?: SubSubcategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RecommendationUpdateManyWithoutPlacesInput,
  })
  @ValidateNested()
  @Type(() => RecommendationUpdateManyWithoutPlacesInput)
  @IsOptional()
  @Field(() => RecommendationUpdateManyWithoutPlacesInput, {
    nullable: true,
  })
  recommendations?: RecommendationUpdateManyWithoutPlacesInput;
}

export { PlaceUpdateInput as PlaceUpdateInput };
