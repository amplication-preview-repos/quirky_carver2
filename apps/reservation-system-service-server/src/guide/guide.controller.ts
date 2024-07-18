import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GuideService } from "./guide.service";
import { GuideControllerBase } from "./base/guide.controller.base";

@swagger.ApiTags("guides")
@common.Controller("guides")
export class GuideController extends GuideControllerBase {
  constructor(protected readonly service: GuideService) {
    super(service);
  }
}
