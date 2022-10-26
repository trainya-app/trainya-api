-- CreateTable
CREATE TABLE `member_photos_progress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` INTEGER NOT NULL,
    `month_id` INTEGER NOT NULL,
    `firstPhoto_url` VARCHAR(191) NULL,
    `secondPhoto_url` VARCHAR(191) NULL,
    `thirdPhoto_url` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `member_photos_progress` ADD CONSTRAINT `member_photos_progress_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_photos_progress` ADD CONSTRAINT `member_photos_progress_month_id_fkey` FOREIGN KEY (`month_id`) REFERENCES `months`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
