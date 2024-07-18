/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Guide as PrismaGuide,
  Experience as PrismaExperience,
} from "@prisma/client";

export class GuideServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GuideCountArgs, "select">): Promise<number> {
    return this.prisma.guide.count(args);
  }

  async guides(args: Prisma.GuideFindManyArgs): Promise<PrismaGuide[]> {
    return this.prisma.guide.findMany(args);
  }
  async guide(args: Prisma.GuideFindUniqueArgs): Promise<PrismaGuide | null> {
    return this.prisma.guide.findUnique(args);
  }
  async createGuide(args: Prisma.GuideCreateArgs): Promise<PrismaGuide> {
    return this.prisma.guide.create(args);
  }
  async updateGuide(args: Prisma.GuideUpdateArgs): Promise<PrismaGuide> {
    return this.prisma.guide.update(args);
  }
  async deleteGuide(args: Prisma.GuideDeleteArgs): Promise<PrismaGuide> {
    return this.prisma.guide.delete(args);
  }

  async findExperiences(
    parentId: string,
    args: Prisma.ExperienceFindManyArgs
  ): Promise<PrismaExperience[]> {
    return this.prisma.guide
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .experiences(args);
  }
}
