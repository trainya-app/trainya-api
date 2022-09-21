-- AlterTable
ALTER TABLE `terms` MODIFY `content` TEXT NOT NULL;

-- CreateIndex
CREATE FULLTEXT INDEX `terms_content_idx` ON `terms`(`content`);
