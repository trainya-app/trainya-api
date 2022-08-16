/*
  Warnings:

  - You are about to alter the column `phone` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `phone` on the `legal_representatives` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `phone` on the `members` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `phone_number` on the `providers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `employees` MODIFY `phone` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `legal_representatives` MODIFY `phone` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `members` MODIFY `phone` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `providers` MODIFY `phone_number` INTEGER NOT NULL;
