import * as graphql from "@nestjs/graphql";
import { PlaceResolverBase } from "./base/place.resolver.base";
import { Place } from "./base/Place";
import { PlaceService } from "./place.service";

@graphql.Resolver(() => Place)
export class PlaceResolver extends PlaceResolverBase {
  constructor(protected readonly service: PlaceService) {
    super(service);
  }
}
