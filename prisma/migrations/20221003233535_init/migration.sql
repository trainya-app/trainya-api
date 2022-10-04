/*
  Warnings:

  - You are about to drop the `member_months_day_rogress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `member_months_day_rogress` DROP FOREIGN KEY `member_months_day_rogress_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `member_months_day_rogress` DROP FOREIGN KEY `member_months_day_rogress_month_id_fkey`;

-- AlterTable
ALTER TABLE `privacy_policies` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `terms_and_conditions` ALTER COLUMN `updated_at` DROP DEFAULT;

-- DropTable
DROP TABLE `member_months_day_rogress`;

-- CreateTable
CREATE TABLE `member_months_day_progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` INTEGER NOT NULL,
    `month_id` INTEGER NOT NULL,
    `current_progress` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `member_months_day_progress` ADD CONSTRAINT `member_months_day_progress_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_months_day_progress` ADD CONSTRAINT `member_months_day_progress_month_id_fkey` FOREIGN KEY (`month_id`) REFERENCES `months`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
