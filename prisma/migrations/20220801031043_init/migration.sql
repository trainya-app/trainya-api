/*
  Warnings:

  - You are about to drop the column `method_id` on the `members_payments` table. All the data in the column will be lost.
  - You are about to drop the column `responsibles_id` on the `responsibles_documents` table. All the data in the column will be lost.
  - You are about to drop the `payment_methods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `responsibles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `methods_id` to the `members_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `legal_representatives_id` to the `responsibles_documents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `members_payments` DROP FOREIGN KEY `members_payments_method_id_fkey`;

-- DropForeignKey
ALTER TABLE `responsibles` DROP FOREIGN KEY `responsibles_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `responsibles_documents` DROP FOREIGN KEY `responsibles_documents_responsibles_id_fkey`;

-- AlterTable
ALTER TABLE `members_payments` DROP COLUMN `method_id`,
    ADD COLUMN `methods_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `responsibles_documents` DROP COLUMN `responsibles_id`,
    ADD COLUMN `legal_representatives_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `payment_methods`;

-- DropTable
DROP TABLE `responsibles`;

-- CreateTable
CREATE TABLE `methods` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `legal_representatives` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` INTEGER NOT NULL,
    `name` VARCHAR(256) NOT NULL,
    `phone` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `members_payments` ADD CONSTRAINT `members_payments_methods_id_fkey` FOREIGN KEY (`methods_id`) REFERENCES `methods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `legal_representatives` ADD CONSTRAINT `legal_representatives_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `responsibles_documents` ADD CONSTRAINT `responsibles_documents_legal_representatives_id_fkey` FOREIGN KEY (`legal_representatives_id`) REFERENCES `legal_representatives`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
