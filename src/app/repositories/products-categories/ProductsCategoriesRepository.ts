import { PrismaClient } from '@prisma/client';

const { productCategory } = new PrismaClient();

interface IProductCategory {
  name: string;
  image_url: string;
}

class ProductCategoryRepository {
  async create({ name, image_url }: IProductCategory) {
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
