import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchInputServiceBase } from "./base/searchInput.service.base";

@Injectable()
export class SearchInputService extends SearchInputServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
