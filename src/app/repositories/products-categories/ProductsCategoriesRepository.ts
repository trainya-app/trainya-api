import { PrismaClient } from '@prisma/client';

const { productCategory } = new PrismaClient();

class ProductCategoryRepository {
  async create({ name, image_url }) {
    const CreatedProductCategory = await productCategory.create({
      data: {
        name,
        image_url,
      },
    });

    return CreatedProductCategory;
  }
}

export default new ProductCategoryRepository();
