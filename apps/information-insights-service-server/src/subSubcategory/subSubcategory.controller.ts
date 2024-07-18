import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubSubcategoryService } from "./subSubcategory.service";
import { SubSubcategoryControllerBase } from "./base/subSubcategory.controller.base";

@swagger.ApiTags("subSubcategories")
@common.Controller("subSubcategories")
export class SubSubcategoryController extends SubSubcategoryControllerBase {
  constructor(protected readonly service: SubSubcategoryService) {
    super(service);
  }
}
