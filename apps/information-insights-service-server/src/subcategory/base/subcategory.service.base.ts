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
  Subcategory as PrismaSubcategory,
  SubSubcategory as PrismaSubSubcategory,
  Place as PrismaPlace,
  Category as PrismaCategory,
} from "@prisma/client";

export class SubcategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubcategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subcategory.count(args);
  }

  async subcategories(
    args: Prisma.SubcategoryFindManyArgs
  ): Promise<PrismaSubcategory[]> {
    return this.prisma.subcategory.findMany(args);
  }
  async subcategory(
    args: Prisma.SubcategoryFindUniqueArgs
  ): Promise<PrismaSubcategory | null> {
    return this.prisma.subcategory.findUnique(args);
  }
  async createSubcategory(
    args: Prisma.SubcategoryCreateArgs
  ): Promise<PrismaSubcategory> {
    return this.prisma.subcategory.create(args);
  }
  async updateSubcategory(
    args: Prisma.SubcategoryUpdateArgs
  ): Promise<PrismaSubcategory> {
    return this.prisma.subcategory.update(args);
  }
  async deleteSubcategory(
    args: Prisma.SubcategoryDeleteArgs
  ): Promise<PrismaSubcategory> {
    return this.prisma.subcategory.delete(args);
  }

  async findSubSubcategories(
    parentId: string,
    args: Prisma.SubSubcategoryFindManyArgs
  ): Promise<PrismaSubSubcategory[]> {
    return this.prisma.subcategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subSubcategories(args);
  }

  async findPlaces(
    parentId: string,
    args: Prisma.PlaceFindManyArgs
  ): Promise<PrismaPlace[]> {
    return this.prisma.subcategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .places(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.subcategory
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
