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
  Place as PrismaPlace,
  Recommendation as PrismaRecommendation,
  Subcategory as PrismaSubcategory,
  SubSubcategory as PrismaSubSubcategory,
  Category as PrismaCategory,
} from "@prisma/client";

export class PlaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PlaceCountArgs, "select">): Promise<number> {
    return this.prisma.place.count(args);
  }

  async places(args: Prisma.PlaceFindManyArgs): Promise<PrismaPlace[]> {
    return this.prisma.place.findMany(args);
  }
  async place(args: Prisma.PlaceFindUniqueArgs): Promise<PrismaPlace | null> {
    return this.prisma.place.findUnique(args);
  }
  async createPlace(args: Prisma.PlaceCreateArgs): Promise<PrismaPlace> {
    return this.prisma.place.create(args);
  }
  async updatePlace(args: Prisma.PlaceUpdateArgs): Promise<PrismaPlace> {
    return this.prisma.place.update(args);
  }
  async deletePlace(args: Prisma.PlaceDeleteArgs): Promise<PrismaPlace> {
    return this.prisma.place.delete(args);
  }

  async findRecommendations(
    parentId: string,
    args: Prisma.RecommendationFindManyArgs
  ): Promise<PrismaRecommendation[]> {
    return this.prisma.place
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .recommendations(args);
  }

  async getSubcategory(parentId: string): Promise<PrismaSubcategory | null> {
    return this.prisma.place
      .findUnique({
        where: { id: parentId },
      })
      .subcategory();
  }

  async getSubSubcategory(
    parentId: string
  ): Promise<PrismaSubSubcategory | null> {
    return this.prisma.place
      .findUnique({
        where: { id: parentId },
      })
      .subSubcategory();
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.place
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
