-- AlterTable
ALTER TABLE `privacy_policies` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `terms_and_conditions` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `months` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `member_months_day_rogress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` INTEGER NOT NULL,
    `month_id` INTEGER NOT NULL,
    `current_progress` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `member_months_day_rogress` ADD CONSTRAINT `member_months_day_rogress_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `member_months_day_rogress` ADD CONSTRAINT `member_months_day_rogress_month_id_fkey` FOREIGN KEY (`month_id`) REFERENCES `months`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
