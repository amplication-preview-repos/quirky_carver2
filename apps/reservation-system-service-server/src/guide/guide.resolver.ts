import * as graphql from "@nestjs/graphql";
import { GuideResolverBase } from "./base/guide.resolver.base";
import { Guide } from "./base/Guide";
import { GuideService } from "./guide.service";

@graphql.Resolver(() => Guide)
export class GuideResolver extends GuideResolverBase {
  constructor(protected readonly service: GuideService) {
    super(service);
  }
}
