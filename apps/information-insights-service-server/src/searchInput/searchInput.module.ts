import { Module } from "@nestjs/common";
import { SearchInputModuleBase } from "./base/searchInput.module.base";
import { SearchInputService } from "./searchInput.service";
import { SearchInputController } from "./searchInput.controller";
import { SearchInputResolver } from "./searchInput.resolver";

@Module({
  imports: [SearchInputModuleBase],
  controllers: [SearchInputController],
  providers: [SearchInputService, SearchInputResolver],
  exports: [SearchInputService],
})
export class SearchInputModule {}
