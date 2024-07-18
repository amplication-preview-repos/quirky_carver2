import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchInputService } from "./searchInput.service";
import { SearchInputControllerBase } from "./base/searchInput.controller.base";

@swagger.ApiTags("searchInputs")
@common.Controller("searchInputs")
export class SearchInputController extends SearchInputControllerBase {
  constructor(protected readonly service: SearchInputService) {
    super(service);
  }
}
