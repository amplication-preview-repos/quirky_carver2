import { Module } from "@nestjs/common";
import { SubSubcategoryModuleBase } from "./base/subSubcategory.module.base";
import { SubSubcategoryService } from "./subSubcategory.service";
import { SubSubcategoryController } from "./subSubcategory.controller";
import { SubSubcategoryResolver } from "./subSubcategory.resolver";

@Module({
  imports: [SubSubcategoryModuleBase],
  controllers: [SubSubcategoryController],
  providers: [SubSubcategoryService, SubSubcategoryResolver],
  exports: [SubSubcategoryService],
})
export class SubSubcategoryModule {}
