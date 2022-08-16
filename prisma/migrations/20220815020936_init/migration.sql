/*
  Warnings:

  - Added the required column `payment_date` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_img` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wage` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employees` ADD COLUMN `payment_date` DATETIME(3) NOT NULL,
    ADD COLUMN `profile_img` VARCHAR(191) NOT NULL,
    ADD COLUMN `wage` INTEGER NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `legal_representatives` MODIFY `phone` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `members` MODIFY `phone` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `providers` MODIFY `phone_number` VARCHAR(191) NOT NULL;
