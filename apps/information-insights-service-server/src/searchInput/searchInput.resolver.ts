import * as graphql from "@nestjs/graphql";
import { SearchInputResolverBase } from "./base/searchInput.resolver.base";
import { SearchInput } from "./base/SearchInput";
import { SearchInputService } from "./searchInput.service";

@graphql.Resolver(() => SearchInput)
export class SearchInputResolver extends SearchInputResolverBase {
  constructor(protected readonly service: SearchInputService) {
    super(service);
  }
}
