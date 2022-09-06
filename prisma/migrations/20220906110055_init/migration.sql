/*
  Warnings:

  - Added the required column `capacity` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gyms` ADD COLUMN `capacity` INTEGER NOT NULL;
