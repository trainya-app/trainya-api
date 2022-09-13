/*
  Warnings:

  - You are about to drop the column `capacity` on the `gyms` table. All the data in the column will be lost.
  - Added the required column `current_capacity` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_capacity` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gyms` DROP COLUMN `capacity`,
    ADD COLUMN `current_capacity` INTEGER NOT NULL,
    ADD COLUMN `max_capacity` INTEGER NOT NULL;
