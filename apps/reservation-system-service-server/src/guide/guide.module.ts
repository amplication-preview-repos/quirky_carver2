import { Module } from "@nestjs/common";
import { GuideModuleBase } from "./base/guide.module.base";
import { GuideService } from "./guide.service";
import { GuideController } from "./guide.controller";
import { GuideResolver } from "./guide.resolver";

@Module({
  imports: [GuideModuleBase],
  controllers: [GuideController],
  providers: [GuideService, GuideResolver],
  exports: [GuideService],
})
export class GuideModule {}
