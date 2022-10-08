/*
  Warnings:

  - You are about to alter the column `hour` on the `classes` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `classes` MODIFY `hour` DOUBLE NOT NULL;
