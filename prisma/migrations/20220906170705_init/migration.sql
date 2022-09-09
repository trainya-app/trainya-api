/*
  Warnings:

  - Added the required column `at_gym` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `members` ADD COLUMN `at_gym` BOOLEAN NOT NULL;
