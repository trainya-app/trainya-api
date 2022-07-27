/*
  Warnings:

  - You are about to drop the column `methods_id` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the `methods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `method_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_methods_id_fkey`;

-- AlterTable
ALTER TABLE `members_payments` DROP COLUMN `methods_id`,
    ADD COLUMN `method_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `methods`;

-- CreateTable
CREATE TABLE `payment_methods` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_method_id_fkey` FOREIGN KEY (`method_id`) REFERENCES `payment_methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
