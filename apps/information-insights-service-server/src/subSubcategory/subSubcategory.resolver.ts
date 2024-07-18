import * as graphql from "@nestjs/graphql";
import { SubSubcategoryResolverBase } from "./base/subSubcategory.resolver.base";
import { SubSubcategory } from "./base/SubSubcategory";
import { SubSubcategoryService } from "./subSubcategory.service";

@graphql.Resolver(() => SubSubcategory)
export class SubSubcategoryResolver extends SubSubcategoryResolverBase {
  constructor(protected readonly service: SubSubcategoryService) {
    super(service);
  }
}
