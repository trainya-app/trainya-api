/*
  Warnings:

  - You are about to drop the `responsibles_documents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `responsibles_documents` DROP FOREIGN KEY `responsibles_documents_documents_id_fkey`;

-- DropForeignKey
ALTER TABLE `responsibles_documents` DROP FOREIGN KEY `responsibles_documents_legal_representatives_id_fkey`;

-- DropTable
DROP TABLE `responsibles_documents`;

-- CreateTable
CREATE TABLE `legal_representatives_documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `legal_representatives_id` INTEGER NOT NULL,
    `documents_id` INTEGER NOT NULL,
    `value` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `legal_representatives_documents` ADD CONSTRAINT `legal_representatives_documents_legal_representatives_id_fkey` FOREIGN KEY (`legal_representatives_id`) REFERENCES `legal_representatives`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `legal_representatives_documents` ADD CONSTRAINT `legal_representatives_documents_documents_id_fkey` FOREIGN KEY (`documents_id`) REFERENCES `documents`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
