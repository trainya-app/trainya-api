/*
  Warnings:

  - You are about to drop the `terms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `terms`;

-- CreateTable
CREATE TABLE `terms_and_conditions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'Termos e Condições',
    `content` TEXT NOT NULL,

    FULLTEXT INDEX `terms_and_conditions_content_idx`(`content`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `privacy_policies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'Políticas de Privacidade',
    `content` TEXT NOT NULL,

    FULLTEXT INDEX `privacy_policies_content_idx`(`content`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
