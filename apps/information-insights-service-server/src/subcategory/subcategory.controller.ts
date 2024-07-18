import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubcategoryService } from "./subcategory.service";
import { SubcategoryControllerBase } from "./base/subcategory.controller.base";

@swagger.ApiTags("subcategories")
@common.Controller("subcategories")
export class SubcategoryController extends SubcategoryControllerBase {
  constructor(protected readonly service: SubcategoryService) {
    super(service);
  }
}
