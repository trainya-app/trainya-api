-- AlterTable
ALTER TABLE `members` ADD COLUMN `avatar_url` VARCHAR(191) NULL,
    ADD COLUMN `birth_date` VARCHAR(191) NOT NULL DEFAULT '';
