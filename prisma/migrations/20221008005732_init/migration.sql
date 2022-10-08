/*
  Warnings:

  - Added the required column `hour` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_members` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_members` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `classes` ADD COLUMN `hour` INTEGER NOT NULL,
    ADD COLUMN `max_members` INTEGER NOT NULL,
    ADD COLUMN `min_members` INTEGER NOT NULL;
