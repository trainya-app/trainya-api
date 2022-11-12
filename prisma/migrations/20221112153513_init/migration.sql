/*
  Warnings:

  - You are about to drop the `gyms_stock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `providers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_gym_id_fkey`;

-- DropForeignKey
ALTER TABLE `gyms_stock` DROP FOREIGN KEY `gyms_stock_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categorie_id_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_provider_id_fkey`;

-- DropTable
DROP TABLE `gyms_stock`;

-- DropTable
DROP TABLE `products`;

-- DropTable
DROP TABLE `products_categories`;

-- DropTable
DROP TABLE `providers`;
