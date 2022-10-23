/*
  Warnings:

  - You are about to drop the column `video_url` on the `workouts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `exercises` ADD COLUMN `video_url` VARCHAR(256) NULL;

-- AlterTable
ALTER TABLE `workouts` DROP COLUMN `video_url`;
