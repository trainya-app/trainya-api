/*
  Warnings:

  - You are about to drop the column `roll_id` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the `rolls` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role_id` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_roll_id_fkey`;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `roll_id`,
    ADD COLUMN `role_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `rolls`;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `access_level` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
