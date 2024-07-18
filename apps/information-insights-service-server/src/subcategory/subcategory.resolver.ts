import * as graphql from "@nestjs/graphql";
import { SubcategoryResolverBase } from "./base/subcategory.resolver.base";
import { Subcategory } from "./base/Subcategory";
import { SubcategoryService } from "./subcategory.service";

@graphql.Resolver(() => Subcategory)
export class SubcategoryResolver extends SubcategoryResolverBase {
  constructor(protected readonly service: SubcategoryService) {
    super(service);
  }
}
