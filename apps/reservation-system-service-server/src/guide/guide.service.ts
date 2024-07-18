import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuideServiceBase } from "./base/guide.service.base";

@Injectable()
export class GuideService extends GuideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
