/*
  Warnings:

  - Added the required column `adress_number` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gyms` ADD COLUMN `adress_number` INTEGER NOT NULL;
